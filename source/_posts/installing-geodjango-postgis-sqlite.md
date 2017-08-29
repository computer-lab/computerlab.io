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

foo

### Local Spatialite: Ubuntu

foo

### Local Spatialite: OSX

foo

### Production Postgis

foo

<br>

__Contact us if you encounter an issue with guide!__
