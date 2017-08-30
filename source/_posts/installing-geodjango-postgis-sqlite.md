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

#### GEOS version parsing
Due to changes in how GEOS reports version strings, Django's GEOS module can fail to parse a version string on newer versions of GEOS and crash.
This problem is indicated by an exception similar to:

```python
GEOSException('Could not parse version info string "%s"' % ver) django.contrib.gis.geos.error.GEOSException: Could not parse version info string "3.6.2-CAPI-1.10.2 4d2925d6"
```

You can avoid this issue by using a version of GEOS prior to `3.6.2`, where the version string format change occured (the trailing hash seen above was added),
such as by running `brew switch geos 3.6.1` with Homebrew.
However, this version is not currently served in the Homebrew package repositories, so you may need to compile and install GEOS yourself.
You should download the GEOS sources from their [Gitlab repo](https://git.osgeo.org/gogs/geos/geos/releases) or [Github mirror](https://github.com/OSGeo/geos/releases) if possible,
because the project site's [official download page](http://download.osgeo.org/geos/) is not secured with HTTPS.

Installation can be achieved using standard `./configure`, `make`, and `make install` commands, as described in the GEOS source's `INSTALL` file. 
You may need to install the gcc toolchain.

It is likely this issue will be fixed in a near-future Django release. More information can be found on the relevant [issue](https://code.djangoproject.com/ticket/28441).

#### SQLite extension support
Some prebuilt Python 3 packages for OSX, such as those available from Python.org, are compiled without SQLite extension support.
This causes Spatialite to fail when using a SQLite database with GeoDjango.
The packages available on Homebrew ARE compiled with extension support, and do not have this issue.
This problem is indicated by an error message similar to the one below:

```
'The pysqlite library does not support C extension loading. '
django.core.exceptions.ImproperlyConfigured: The pysqlite library does not support C extension loading. Both SQLite and pysqlite must be configured to allow the loading of extensions to use SpatiaLite.
```

You can verify whether or not your Python installation has SQLite extension support in the Python REPL:
```python
Williams-MacBook-Air:computerlab.io wgoldie$ python
Python 3.6.2 (default, Jul 17 2017, 16:44:45)
[GCC 4.2.1 Compatible Apple LLVM 8.1.0 (clang-802.0.42)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sqlite3
>>> hasattr(sqlite3.Connection, 'enable_load_extension')
True
```

If the `hasattr` call returns `False`, then Python does not have SQLite extension support.
As a workaround, you can remove your current Python3 installation and use the Homebrew version instead: `brew install python3`.
If you continue to encounter the same problem, and you have verified that your previous python installation was fully removed,
it is possible that the Python packages being distributed by Homebrew no longer are compiled with SQLite extenion support,
and you will need to compile Python from source with the `--enable-loadable-sqlite-extensions` flag enabled.

### Production Postgis

foo

<br>

__Contact us if you encounter an issue with guide!__
