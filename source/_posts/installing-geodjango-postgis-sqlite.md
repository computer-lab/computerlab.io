---
layout: post
title: How to Install GeoDjango with Postgis and Spatialite
date: 2017-08-14
category: Notes
lede: A guide to navigating the dependency hell created by GeoDjango.
author: Patrick Steadman and Robert Jensen
published: true
---

__A guide to navigating the dependency hell created by GeoDjango.__

Installing GeoDjango itself is a non-issue: it's included as module of Django. Enabling it is as
easy as changing a few things in your `settings.py`. But GeoDjango itself has a few library
dependencies, and installing the correct spatial databases (with the correct versions and
extensions) can be a challenge. Finally, figuring out installation methods for different local and
production environments creates an added challenge. But, if you need to partition queries
geographically, here's how you can get things set up in a sane way.

### Settings File Changes

We want to use Postgres with the Postgis extension installed in production, and use Sqlite for our
local dev setup and CI testing. Assuming you have your settings files [broken up into local and
production configs](add link here):

``` settings/local.py
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.spatialite',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

SPATIALITE_LIBRARY_PATH = 'mod_spatialite' # not needed for some spatialite versions??
```

``` settings/production.py
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        ...
    }
}
```

Reference:

### Local Spatialite: Ubuntu or other Debian-Based

Installation differs on 16 and 14 (right?)

How to check sqlite/spatialite version?

Install packages: https://docs.djangoproject.com/en/1.11/ref/contrib/gis/install/spatialite/

### Local Spatialite: OSX

foo

### Production Postgis

foo

<br>

__Contact us if you encounter an issue with guide!__
