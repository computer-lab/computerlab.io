---
layout: post
title: Ansible + Flask 
date: 2016-04-18
category: Notes
tags: 
- Ansible
- Python
thumbnail: http://40.media.tumblr.com/ad96456d0ea22f4c01b697e36ea3023e/tumblr_ngstajDXdR1sgmdh5o1_1280.jpg
lede: "How to use Ansible to deploy a Flask application to AWS."
author: Max Fowler
---

My new favorite tool is an Ansible template to quickly deploy a new Flask app to
Amazon Web Services.  It logs error messages to slack, has database
connectivity, and is fully idempotent — no need to remember server state.

You can find the code
[here](https://github.com/mhfowler/ansible_flask_template).

I find this very useful for getting small applications up and running quickly.
It is also useful for starting a new project to know from the onset that
deployment is already taken care of so I can focus on the actual project.

In the past, without Ansible, I would sometimes end up creating monolithic apps
which share infrastructure to perform multiple functions &mdash; I used to do
this because "solving deployment again" was an intimidating task and so I would
tack more functionality onto existing infrastructure to save time.  Because this
template allows me to quickly start projects with deployment already taken care
of, it encourages me to make new projects completely independent with their own
GitHub repository and deployment server, leading to fully independent micro
services that are more robust.

In a sense this template is like my own Heroku, but in addition to the
convenience of quickly bringing up new machines I can extend and customize it,
as well as save money by bringing up AWS micro instances for free.
