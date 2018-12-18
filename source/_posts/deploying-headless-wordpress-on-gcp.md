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
You need to have [install
composer](https://getcomposer.org/doc/00-intro.md) so that composer can install this tool's dependencies.


```sh
git clone https://github.com/GoogleCloudPlatform/php-docs-samples.git
cd php-docs-samples/appengine/php72/wordpress
composer install
```

(_Note_ If you receive an error about extensions, install phar and zip PHP
extensions and retry.)

Then we run the tool, pointing it at the WordPress directory in our project:

```
php wordpress.php update headless-wp-starter/wordpress
```

This will create a bunch of new files that tell GAE how to run our app.

There's just one change to make in `headless-wp-starter/wordpress/app.yaml`









- `php wordpress.php update ~/projects/meredithmonk.org/wordpress/`

Becasue the wordpress is headless (doesn't face the end user) we should give it
the name `wordpress` by adding `service: wordpress` to `app.yaml`.

You can now deploy WordPress to GAE standard using the command `gcloud app
deploy`.

### Step 4: Set up Next.js Frontend on Google App Engine


Roughly follow instructions here: https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
Modify server.js to use the port specified by GAE
Modify config.js to use process.env.WORDPRESS_URL || localhost:8080
Add "gcp-build": "npm run build" to package.json to build the next project
Add app.yaml runtime: nodejs8 service: frontend + ENV_VAR
gcloud beta app deploy --no-cache

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

### Reservatoins?

Why no real CI/CD triggered by code pushes? Or is that actauly the best way?



### Designing your API

Let's say your boss - a gorilla named Ishmael - has given you the following
specification for an API:

> There are three types of users: **Takers**, **Leavers** and **Gods**. There is
> one resource: **Land**. The resource is read-only. Each piece of land has a
> *name* and a flag representing its *arability*. **Takers** can only see
> *arable* land. **Leavers** can only see *non-arable* land. **Gods**, being
> gods, can see everything. Further, **Takers** and **Leavers** should not be
> aware that the land has been divided amongst them by arability. That is, they
> should not be able to see the *arability* flag.

You set off to work on your API. Since you have been fully indoctrinated in the
[Cult of the Design
Recipe](http://www.ccs.neu.edu/course/csg107/design-recipe.html) you begin by
designing a data structure for a **Land** and a **User** in something
not-quite-like-but-close-enough-to JSON Schema:

```javascript
    Land = {
        "name": "string",
        "arable": "boolean"
    }
    User = {
        "user_type": "string"
    }
```

Now you begin to consider the structure of your REST API. Your first instinct is
that the *structure of user roles drives the behavior of the API*. You draw out
a spec for your resources that looks like this:

```javascript
    Resources = {
        "land-for-takers": "/api/takers/land",
        "land-for-leavers": "/api/leavers/land",
        "land-for-gods": "/api/gods/land"
    }

```

Suddenly you feel very anxious. **Takers**, **Leavers** and **Gods** are not
*resources*. They are just *resource metadata* about a **User**. The **Land** is
the resource in question, not the **User** who access the resource. You rewrite
the API in earnest:

```javascript
    Resources = {
        "land": "/api/land",
    }
```

Much better. You begin to write your API with [Django REST
Framework](http://www.django-rest-framework.org/) - your preferred python API
framework. You make a ViewSet for **Land** like this:

```python
    class LandViewSet(ReadOnlyViewSet):
        # ...

        def get_queryset(self):
            if is_taker_user(self.request.user):
                return Land.objects.filter(arable=True)
            elif is_leaver_user(self.request.user):
                return Land.objects.filter(arable=False)
            elif is_god_user(self.request.user):
                return Land.objects.all()

        def get_serializer_class(self):
            if is_taker_user(self.request.user) or is_leaver_user(self.request.user):
                return LandSerializerHidingArability
            elif is_god_user(self.request.user):
                return LandSerializerWithAllFields

        # ...
```

You sit back - satisfied but still feeling a little anxious. Your code will meet
Ishmael's requirements, but you feel uneasy about the *future* of the code.

* If another type of **User** is added you will have to change a lot of code.
  You will have to add a `is_new_type_of_user()` predicate and update all of the
  corresponding methods with the new user.
* These methods will become harder to read as you add more parameterization
  (e.g: over the HTTP verb)
* It is dull to repeatedly type out the same parameterization over **User**.

### Adding Roles to Django REST Framework

We had this exact problem at [Computer Lab](http://computerlab.io). We found
that we could leverage two simple techniques to ease the pain of multiple user
types:

* Use Django's **Groups** to organize your **Users** into roles.
* Automatically dispatch REST calls to *role-specific methods* based on the
  current **User** and their **Group** membership.

When we package these techniques into a mixin, the code above becomes:

```python
    class LandViewSet(RoleViewSetMixin, ReadOnlyViewSet):
        # ...

        def get_queryset_for_takers(self):
            return Land.objects.filter(arable=True)

        def get_queryset_for_leavers(self):
            return Land.objects.filter(arable=False)

        def get_queryset_for_gods(self):
            return Land.objects.all()

        def get_serializer_class_for_takers(self):
            return LandSerializerHidingArability

        def get_serializer_class_for_leavers(self):
            return LandSerializerHidingArability

        def get_serializer_class_for_gods(self):
            return LandSerializerWithAllFields

        # ...
```

It might not seem like much of a change, but we have accomplished a lot:

* We can think in terms of the **business logic** on the *inside* of our API
  while still delivering **resources** on the *outside*.
* Our methods are well-scoped and easy to read.
* We don't have to manage predicates for each type of **User**.

### Our implementation

We made
[django-rest-framework-roles](https://github.com/computer-lab/django-rest-framework-roles)
to re-use this technique in our client work. It includes more features beyond
those described in this post, including fallback-defaults for unimplemented
role-scoped methods and a configurable whitelist of methods to parameterize. Let
us know if you find it useful in your work (or play)!
