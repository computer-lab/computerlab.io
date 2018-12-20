---
layout: post
title: Deploying Headless WordPress + React Starter Kit on Google Cloud Platform
date: 2018-12-20
category: Notes
lede: Most content editors know and like WordPress. Most developers know and like React. Here's how to deploy the best of both worlds to the cloud.
author: Patrick Steadman and Mark Neuburger
published: true
---

_Most content editors know and like WordPress. Most developers know and like 
React. Here's how to deploy the best of both worlds to the cloud._

### Background

If you think headless WordPress + React might be a good fit for your project,
check out Gina Trapani's [post introducing the starter
kit](https://postlight.com/about/news/introducing-postlights-wordpress-react-starter-kit).
Gina and the team at Postlight (which includes Paul ["What Is Code"](
https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/) Ford) seem to
have a really deep understanding of how developers and content editors work
together to build and maintain a content-driven site. The Postlight starter kit
seems to address many of the common problems that arise for teams using
current-gen static site, static site + headless CMS, and vanilla WordPress
architectures.

This guide is focused on how to set up the starter kit on Google Cloud Platform
App Engine standard environement.  This setup has these nice features:

- PaaS simplicity that makes sense for WordPress, but also scalability,
  robustness, and a straightforward migration path to Kubernetes
- StackDriver logging nicely aggregates errors
- Many orgs are already using GSuite for identity, analytics, ads, etc
- Google Cloud Storage WordPress Plugin
- Automated SQL backups / Cloud SQL Proxy
- Google Domains / DNS
- Cheap

### Step 0: Local Dockerized Setup

You can clone the repository
[here](https://github.com/postlight/headless-wp-starter) and follow the README
to get a local, dockerized setup working using `docker-compose`.

Dockerizing MySQL in dev mitigates a lot of the database-related annoyances that
made WordPress a pain for developers: no need to manually configure MySQL
locally, and you can just recreate the [docker containers and
volumes](https://medium.com/the-code-review/clean-out-your-docker-images-containers-and-volumes-with-single-commands-b8e38253c271)
if things get really messed up.

### Step 1: Set up your Google Cloud project and toolchain

If you don't have a Google Cloud Platform (GCP) account, you can sign up
[here](https://console.cloud.google.com/freetrial/signup). Note that you
probably probably want your GCP project to be managed under your GSuite
organization, so be cognizant of your currently selected Google Account while signing
up. 

You should then create a project (`myproject` in this guide) which will group
together the SQL database, wordpress app engine service, frontend app engine
service, and storage buckets.

Then [install the gcloud
toolchain](https://cloud.google.com/sdk/docs/quickstarts) on your development
machine and log in with `gcloud init`, selecting the project you just created.

### Step 2: Set up a SQL Database 

When using Advanced Custom Fields and Custom Post Types, much of the your site's
content *and* structure is stored in your SQL database. So, it makes a lot of sense
to use a managed SQL service like Cloud SQL where you can easily make, schedule,
and restore database backups.

You can use the gcloud CLI to create the database instance:

1. Create a new Cloud SQL instance with the following command:
```sh
gcloud sql instances create wordpress \
    --activation-policy=ALWAYS \
    --tier=db-n1-standard-1
```

2. Next, create the database you want your WordPress site to use:
```sh
gcloud sql databases create wordpress --instance wordpress
```

3. Finally, change the root password for your instance:
```text
gcloud sql users set-password root \
    --host=% \
    --instance wordpress \
    --password=YOUR_INSTANCE_ROOT_PASSWORD # Don't use this password!
```

Or, you can create the database using the [console UI](https://console.cloud.google.com/sql):

1. Open the left side hamburger menu and select "SQL".
2. Click "Create Instance".
3. Select MySQL, Second Generation.
4. Enter an instance id `wordpress`, generate a root password, and make a note of both of
  those values.
5. Wait a bit for the instance to be created.
6. Create a database by clicking on the Databases tab, and clicking 'Create
   Database', setting the name as `wordpress`.

Following these steps, you should now have a Cloud SQL instance named
`wordpress` with a database `wordpress`.

### Step 3: Set up WordPress on Google App Engine

Google has a [neat little
tool](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/php72/wordpress)
to add Google App Engine (GAE) standard environment config files to our existing
wordpress project. Once these files are added, we can deploy our service using
the gcloud CLI.

First, set up the tool as described in its
[documentation](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/php72/wordpress#setup):

```text
git clone https://github.com/GoogleCloudPlatform/php-docs-samples.git
cd php-docs-samples/appengine/php72/wordpress
composer install
```

(You need to [install
composer](https://getcomposer.org/doc/00-intro.md) so that composer can install this tool's dependencies.
If you receive an error about extensions, install phar and zip PHP
extensions and retry.)

Then we run the tool, pointing it at the WordPress directory in our project:

```
php wordpress.php update headless-wp-starter/wordpress
```

This will create a bunch of new files that tell GAE how to run our app.

Before deploying, do two more things: 

1. Add the line `service: wordpress` to
   `headless-wp-starter/wordpress/app.yaml`, so that WordPress will
   deployed with the service name `wordpress` and not `default`,
   accessible at the url `https://wordpress-dot-myproject.appsot.com` rather
   than `myproject.appspot.com` where we want the frontend.

2. Modify `wordpress/wp-config.php` to include your database creds created
   earlier. `wp-config.php` is .gitignored, you can
   treat it as a secret that you share securely with team members.

You can now deploy WordPress to GAE standard using the command `gcloud app
deploy wordpress/app.yaml`.

### Step 4: Set up Next.js Frontend on Google App Engine

[These
instructions](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service)
on how to set up an express server on GAE can be easily adapted for the
headless-wp-starter Next.js server.

Add a simple app.yaml specifying the node rumtime:

```yaml
runtime: nodejs8
```

Change `frontend/server.js` from listening on hardcoded port 3000 to use the
port provided by GAE via the `PORT` env variable:

```js
// Listen to the App Engine-specified port, or 3000 otherwise
const port = process.env.PORT || 3000;

server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
});
```

Next modify `frontend/config.js` to set apiUrl as the `wordpress` service url in
production, and `localhost:8080` in dev:

```js
export const Config = {
  apiUrl: process.env.NODE_ENV == 'production'
    ? 'https://wordpress-dot-myproject.appspot.com'
    : 'http://localhost:8080'
}
```

In order to build the Next.js static assets on deploy, add a [gcp-build
script](https://cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step):

```js
  "gcp-build": "NODE_ENV=production npm run build",
```

to the 'scripts' section in `frontend/package.json`.

To deploy, execute `gcloud beta app deploy --no-cache frontend/app.yaml`. The
addition of `beta` and '--no-cache` are currently necessary to make this work
properly.

### Step 5: Push Your Local Database to the Cloud

After setting up pages, custom fields, or post types in the course of
development, how do you push these (database) changes to staging and then prod?

The [db-migrate-pro](https://deliciousbrains.com/wp-migrate-db-pro/) allows
developers to efficiently push, pull, backup and transform WordPress databases.
For example, a developer could pull down a copy of the prod database to work
with locally, and then push back their changes, after making a backup of the
current production database state. It's available via the "Tools" sidebar in
WordPress admin and as a CLI tool.

![Pushing and pulling the database.](/images/headless-wp-push-pull.png)

The only real downside to db-migrate-pro is that it requires a license key.

### Step 6: Set up Google Cloud Storage Media Uploads

A common vulnerability for web apps is the ability to introduce malicious files
through an upload script. By moving media uploads to Google Cloud Storage, we
can remove this possible attack vector. In fact, we don't enable any write
permissions on Wordpress's upload directory at all.

1. In Google Cloud console, navigate to Storage > Browser
2. Create a bucket and give it a name (e.g. `myproject-media`)
3. Give public read access by granting allUsers the Storage Object Viewer
4. In Wordpress admin area, enable Google Cloud Storage plugin
5. Navigate to GCS settings and enter the name of the bucket you created above.

### Step 7: Enable Media Uploads From Local Machine (Optional)

1. Visit Cloud Console, go to IAM & Admin -> Service accounts and create a service account with Storage Admin privileges. If there is already a service account with this role, you do not need to create another one.

*Note:* The GCS Plugin instructions say Storage Object Admin privileges are sufficient but in practice this doesn’t seem to be enough.

2. Download the json key file, name it `gcs-service-account.json` and place it
   in the `wordpress/` directory. Do not commit or deploy the service account JSON
   key. It is (and should be) excluded from git with .gitignore and from deployments
   with .gcloudignore.

3. Edit your `wp-config.php` where `ABSPATH` is defined (near the end):

```php
if (!$onGae) {
	putenv('GOOGLE_APPLICATION_CREDENTIALS=' . ABSPATH . /gcs-service-account.json');
}
```
  
### Summary and Possible Improvements

To deploy database changes (including ACF / CPT stuff):

```
Use the db-migrate-pro UI or CLI
```

To deploy code changes made in `frontend/`:

```
gcloud beta app deploy --no-cache frontend/app.yaml
```

To deploy changes made to WordPress / PHP code (rare?):

```
gcloud app deploy wordpress/app.yaml
```

It would be cool to set up continuous integration / continuous deployment to
perform these steps automatically upon code pushes, perhaps to different staging
and prod environments specified by `app-production.yaml` and `app-staging.yaml`
files.

### Our Implementation

You can see the source of a real project using this setup [here](https://github.com/computer-lab/meredithmonk.org/).
