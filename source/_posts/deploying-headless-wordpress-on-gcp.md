---
layout: post
title: Deploying Headless WordPress + React Starter Kit on Google Cloud Platform
date: 2018-12-17
category: Notes
lede: Writers and product people like WordPress. Developers like JSON APIs and React. Here's how to rrobustly deploy the best of both worlds to the cloud.
author: Patrick Steadman and Mark Neuberger
published: true
---

> "I should talk now about Phaedrus’ knife. It’ll help you understand some of the
> things we talked about. The application of this knife, the division of the
> world into parts and the building of this structure, is something everybody
> does."

*Zen and the Art of Motorcycle Maintenance - Robert M Pirsig*

### Background

WordPress, especially WordPress admin, is the result of over a decade of
experimentation ... to 


### Step 0: Get headless-wp-starter working locally

Clone: https://github.com/postlight/headless-wp-starter

- Note at time of writing (12/14/18) the docker setup on the master branch
  doesn't work properly, but there's a PR that fixes it, and allows you to
  simply run `docker-compose up`. Everything runs inside the docker
  containers...

### Step 1: Set up your Google Cloud toolchain

### Step 2: Set up a SQL Database 

### Step 3: Set up WordPress on Google App Engine

Use Google's tool:
https://github.com/GoogleCloudPlatform/php-docs-samples/tree/master/appengine/php72/wordpress#create-or-update-a-wordpress-project-for-app-engine

### Step 4: Set up Next.js Frontend on Google App Engine

### Step 5: Set up Google Cloud Storage media uploads

### Step 6: Enable Media Uploads From Local Machine

### Step 7: Move Around the Database

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
