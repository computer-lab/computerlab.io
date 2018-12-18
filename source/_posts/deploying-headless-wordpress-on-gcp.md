---
layout: post
title: Deploying Headless WordPress + React Starter Kit on Google Cloud Platform
date: 2018-12-17
category: Notes
lede: Most people like WordPress. Most developers like JSON APIs and React. Here's how to robustly deploy the best of both worlds to the cloud.
author: Patrick Steadman and Mark Neuberger
published: true
---

> "Just because you have the right to do something, doesn't mean it's the right
> thing to do."

*- Mr. Crane, Casey Middle School Computer Lab Monitor*

### Background

WordPress, especially WordPress admin, is the result of over a decade of
experimentation ... to 

You can read about its features here.
https://postlight.com/about/news/introducing-postlights-wordpress-react-starter-kit

### Step 0: Get headless-wp-starter working locally

Clone: https://github.com/postlight/headless-wp-starter



### Step 1: Set up your Google Cloud toolchain

If you don't have a Google Cloud Platform (GCP) account, you can sign up
[here](https://console.cloud.google.com/freetrial/signup) for a $300 credit free
trial. Note that you probably probably want your GCP project to be managed under
your GSuite organization, so be cognizant of your currently selected Google
while signing up. 

You should then create a project (new users will be prompted). If we're making a
website at meredith-monk-website, we could call the project "meredith-monk-website".

Then [install the gcloud
toolchain](https://cloud.google.com/sdk/docs/quickstarts) on your development
machine and log in with `gcloud init`, selecting the project you just created.


### Step 2: Set up a SQL Database 

When using Advanced Custom Fields and Custom Post Types, a lot of the site's
structure and content is stored in the SQL database. So, it makes a lot of sense
to use a managed SQL service like Cloud SQL.

You can use the `gcloud` cli to create the database instance by following the following
steps:


1. Create a new Cloud SQL instance with the following command:
```sh
$ gcloud sql instances create wordpress \
    --activation-policy=ALWAYS \
    --tier=db-n1-standard-1
```

2. Next, create the database you want your WordPress site to use:
```sh
$ gcloud sql databases create wordpress --instance wordpress
```

3. Finally, change the root password for your instance:
```sh
$ gcloud sql users set-password root \
    --host=% \
    --instance wordpress \
    --password=YOUR_INSTANCE_ROOT_PASSWORD # Don't use this password!
```

Or, you can also do this using the console UI by following these steps:

1. Open the left side hamburger menu and select "SQL".
2. Click "Create Instance".
3. Select MySQL, Second Generation.
4. Enter an instance id, generate a root password, and make a note of both of
  those values.
5. Wait a bit for the instance to be created.
6. Create a database by clicking on the Databases tab, and clicking 'Create
   Database', setting the name as wordpress.

Following these steps, you should now have a Cloud SQL instance named
`wordpress` with a database `wordpress`.


### Step 3: Set up WordPress on Google App Engine

Google has a [neat little
tool](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/php72/wordpress)
to add Google App Engine (GAE) config files to our existing wordpress project. 

First set up the tool as described in its
[documentation](https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/php72/wordpress#setup).
()


```sh
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

Before deploying, add the line `service: wordpress` to `headless-wp-starter/wordpress/app.yaml`.
We do this so that WordPress will deployed with the service name `wordpress` and
not `default`, and be accessible at the url
`https://wordpress-dot-myproject.appsot.com` rather than
`myproject.appspot.com` (the default service where the frontend belongs).

You can now deploy WordPress to GAE standard using the command `gcloud app
deploy wordpress/app.yaml`.

### Step 4: Set up Next.js Frontend on Google App Engine

[These
instructions](https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service)
on how to set up an express server on GAE can be easily adapted for the
eadless-wp-starter Next.js server.

Add a simple app.yaml specifying the node rumtime:

```yaml
runtime: nodejs8
```



Change `frontend/server.js` from listening on hardcoded port 3000 to use the
port provided by GAE via an ENV variable:

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
    ? 'https://wordpress-dot-meredith-monk-website.appspot.com'
    : 'http://localhost:8080'
}
```

In order to build the Next.js static assets on deploy, add:

```js"
  "gcp-build": "NODE_ENV=production npm run build",
```

to the 'scripts' section in `frontend/package.json`.

When `gcloud beta app deploy --no-cache frontend/app.yaml` is executed,
the `gcp-build` script will be executed on deploy. The addition of `beta` and
'--no-cache` are currently necessary to make this work properly.


### Step 5: Move Around the Database

In WordPress development that uses Advanced Custom Fields and Custom Post Types,
a lot of important data, core to the structure of the website, lives in the SQL
database. This makes developers uncomfortable, because developers like to
version control stuff like that. Thankfully, db-migrate-pro allows developers to
efficiently pull, push, backup and transform WordPress databases. For example, a
developer could "pull" down a copy of the prod database to work with locally,
and then push back his changes, making a backup of the current prod database's
state. All of this occurs on top of Googple's scheduled backups, which can help
recovery from real big mess ups.

The only real downside of the various composabile tools around wp-migrate-pro is
that they require a license key. I personallhy think this is fine, I think it's
good to have one person beigng paid to make these databadse sysnc stuff work
safely and well . db-mograte-pro has been building cli tools, which could make
things even better.

### Step 6: Set up Google Cloud Storage media uploads

- In Google Cloud console, navigate to Storage > Browser

- Create a bucket and give it a name (e.g. meredithmonk-media)

Give public read access by granting allUsers the Storage Object Viewer

```
role:p-config.php after ABSPATH is defined (near the end)
if (!$onGae) {
	putenv('GOOGLE_APPLICATION_CREDENTIALS=' . ABSPATH . /gcs-service-account.json');
}
Do not commit or deploy the service account JSON key. It is/should be excluded from git with .gitignore and from deployments with .gcloudignore.
Adding custom post types (e.g. repertory works on MM)
In Wordpress admin area, enable Google Cloud Storage plugin
Navigate to GCS settings and enter the name of the bucket you created above
Enabling media uploads to GCS from local machine
Visit Cloud Console, go to IAM & Admin -> Service accounts and create a service account with Storage Admin privileges. If there is already a service account with this role, you do not need to create another one. NOTE: The GCS Plugin instructions say Storage Object Admin privileges are sufficient but in practice this doesn’t seem to be enough.
Download the json key file, name it gcs-service-account.json and place it in the wordpress/ directory
Add the following line to your w
Read: https://github.com/postlight/headless-wp-starter/issues/98

### Step 7: Enable Media Uploads From Local Machine

### Reservations?

Why no real CI/CD triggered by code pushes? Or is that actauly the best way?


### Our implementation


https://github.com/computer-lab/meredithmonk.org/
