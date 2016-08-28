---
layout: post
title: The Computer Lab README
date: 2016-01-11
category: READMEs
tags: 
- Procedure 
lede: "Computer Lab operating procedures, development playbook, and business tools."
author: Lab
---

This is the README file for Computer Lab.  README files are typically included
with a piece of software so that people can quickly figure what the software
does, how to use it, and who to contact if there's a problem.  This README
aggregates key facts about Computer Lab so that important procedures, systems,
and standards are clear to all.  It's not comprehensive, but provides a good
starting point that eliminates fear, uncertainty, and doubt.

### Our Communication Procedures:

#### Internal Communication
- We use Slack and face-to-face for most internal project discussion. 
- We use text and phone calls only for urgent issues. 

#### Client Communication
- Each project has a single designated point of contact. All client
  communication should ideally go through this person.
- That person should respond to the client promptly (ideally within 24 hours),
  even if the response is simply giving a time that they can render a full
  response.

### Our Default Stack:
- The Sass CSS preprocessor for writing DRY CSS.
- ReactJS with ES6 idioms for building browser and native UIs.
- The Redux implementation of the Flux model for handling client-side state.
- Webpack for transpiling to browser-friendly code, and running our linters,
  reloaders, and other developer tools.
- Django-Rest-Framework for serializing data over the wire, and
  Django-Oauth-Toolkit for authentication.
- Django as our backend framework.
- Postgres as our persistence layer, or SQLite for simpler projects. 
- Ansible to configure AWS servers.  

### Our Technical Procedures:
- Linting: we ensure a common code style and eliminate bugs by using linters for
  Python and JavaScript.  We also lint React, specifically.  The linters are set
  to run during development to problems can be addressed while writing code.
- Testing: testing is especially important because it allows us to refactor and
  confidently deliver code to clients.  We test both our JavaScript and Python
  codes, and use Test-Driven Development for all important components.
- For each project, we create and maintain appropriate development, QA, and
  production environments.  We make sure that this process is automated using
  Ansible.
- We create documentation on GitHub for important things (like this), and expose
  it via GitHub pages if appropriate.

### Our Canonical Terms:

#### Hierarchy of Usernames
- `computerlab`
- `computer-lab`
- `computer_lab`

#### Individual Member Usernames
- For member usernames, the member should use their first name (`name@computerlab`
  or `name`)

### Our Tools:

Here's a list of our software tools with information about how to access them.

#### Slack

Our Slack is located at
[computer-lab.slack.com](https://computer-lab.slack.com).  Slack is a chat
service useful for discussing projects in detail, socializing, and setting up
feeds from integrations.

Each general user costs $8/month.  General users can access all channels.

We can add people to a single channel for free, though.  This is useful for
clients or people who want to chat.  We can add up to 5 single-channel guests
per paid member.

#### Harvest

Our Harvest subdomain is [computerlab.harvestapp.com](https://computerlab.harvestapp.com).

Harvest is a time tracking service that can also be used to generate invoices
and estimates.

With the current plan, each additional user costs $10/month and we can create
unlimited clients/projects.

Perhaps we should use a more flexible time-tracking system, and move invoicing
into our accounting software.

#### GitHub

Our GitHub organization is located at [github.com/computer-lab](https://github.com/computer-lab).

GitHub stores source code and documentation.

We don't have any private repositories. 

#### TravisCI

Travis is a continuous integration server that builds and deploys repositories.
This websites is deployed via Travis.  If you are a collaborator on a
repository, you will be able to log in with your GitHub account
[here](https://travis-ci.org/) and see the status of builds.  This website is
deployed via Travis.  It's free for public repositories.

#### Trello

Our Trello boards are located at [trello.com/computer_lab](https://trello.com/computer_lab).

Trello is for project managment.  We also keep our operations todo and 'sales
funnel' here.

We're on the free plan so far.

#### Google Apps

Email and documents are provided by Google Apps.  It's also the place where we
store shared files and documents.  Google Apps accounts are $5/month.

#### Banking

We have a Capital One Spark Business checking account with debit cards.  We use
checks and the debit card to pay expenses, and use the Capital One mobile app to
deposit checks from clients.

#### Xero

We use Xero accounting software to maintain good records of income, expenses,
and distribution of funds. 

The Xero account costs $15/month currently.

#### Analytics

We use [Google Analytics](https://analytics.google.com/analytics/web/) for monitoring site traffic and [Crazy Egg](https://www.crazyegg.com) to learn more about how users interact with our site and projects.

