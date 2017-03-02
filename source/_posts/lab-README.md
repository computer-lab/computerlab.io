---
layout: post
title: The Computer Lab README
date: 2016-01-11
category: Notes
tags:
- Procedure
lede: "Computer Lab operating procedures, development playbook, and business tools."
author: Lab
---

This README should help you understand the organization, goals,
processes, and tools of Computer Lab.  It's not comprehensive, but provides a
good starting point.

<!--

### What is Computer Lab?

Computer Lab is an independent software development team.  Our goal is to be
better than most corporate/startup teams while building a sustainable software
development practice that makes us feel alive.

### Organization and Roles

There are three primary roles in the Computer Lab organization: **Partner**,
**Member**, and **Guest**.

A **Partner** owns a part of the Cloister Products LLC, the Limited Liability
Company that backs Computer Lab.  A Partner can make deals on behalf of the
company, and recruit Lab members to work on these projects.  Computer Lab's
profits are periodically distributed to partners based on an "Eat What You Kill"
formula that includes the business generated and managed by each partner, each
partner's personal billable work, and other contributions as agreed on by the
partners.  The partners are expected to create a satisfactory arrangement among
themselves.

A **Member** has full access to the Computer Lab Slack, GitHub, and other
platforms where projects are discussed and executed.  They can choose to work on
projects managed by the Partners.  If they do so, a transparent "cut" of the
value of their work is retained by the company.  Currently the benchmark for
this cut is 25%, assuming that the Member is an independent contractor.  The
network and tools provided by Computer Lab should help the Member make a living
as a software development contractor/consultant.

A **Guest** is someone that the company is working with, either as a client,
contractor, or employee, who is given some access to Computer Lab systems in
order to facilitate a project or goal.  An example of this is someone who is
added to the Slack as a single-channel guest for the duration of a project.

**Partners**, **Members** or **Guests** may all receive salary and benefits from
the LLC as necessary or desired.

-->


## Communication

### Internal Communication
- We use Slack and face-to-face for most internal project discussion.
- We use text and phone calls only for urgent issues.

### Client Communication
- Each project has a single designated point of contact. All client
  communication should ideally go through this person.
- That person should respond to the client promptly (ideally within 24 hours),
  even if the response is simply giving a time that they can render a full
  response.
- If desired by the client, we like to set up a project-specific Slack channel so the client and point of contact can discuss the project. 

## Tech Stack

### Web Development
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


## Technical Procedures

### Linting 
We ensure a common code style and eliminate bugs by using linters for Python and JavaScript. 
We also lint React, specifically. The linters are set to run during development to problems can be addressed while writing code.

### Testing
Testing allows us to refactor and confidently deliver code to clients. We test both our JavaScript and Python code, and use Test-Driven Development for all important components.

### Environments
For each project, we create and maintain appropriate development, QA, and production environments. 
We make sure that this process is automated using Ansible.

### Documentation
We create documentation on GitHub for important things (like this), and expose it via GitHub pages if appropriate.


## Tools

### Slack

Our Slack is located at
[computer-lab.slack.com](https://computer-lab.slack.com).  Slack is a chat
service useful for discussing projects in detail, socializing, and setting up
feeds from integrations.

Each full-member user costs $8/month. These users can access all channels.

We can add people to a single channel for free, though. This is useful for
clients or people who want to chat. We can add up to 5 single-channel guests
per paid member.

### Harvest

Our Harvest subdomain is [computerlab.harvestapp.com](https://computerlab.harvestapp.com).

Harvest is a time tracking service that can also be used to generate invoices
and estimates.

With the current plan, each additional user costs $10/month and we can create
unlimited clients/projects.

### GitHub

Our GitHub organization is located at [github.com/computer-lab](https://github.com/computer-lab).

GitHub stores source code and documentation, we don't have any private repositories.

### TravisCI

Travis is a continuous integration server that builds and deploys repositories.
This websites is deployed via Travis.  If you are a collaborator on a
repository, you will be able to log in with your GitHub account
[here](https://travis-ci.org/) and see the status of builds.  This website is
deployed via Travis.  It's free for public repositories.

### Trello

Our Trello boards are located at [trello.com/computer_lab](https://trello.com/computer_lab).

Trello is for project managment and keeping track of general operations.

### Google Apps

Email and documents are provided by Google Apps.  It's also the place where we
store shared files and documents.  Google Apps accounts are $5/month.

### Banking

We have a Capital One Spark Business checking account with debit cards.  We use
checks, online Bill Pay and the debit card to pay expenses, and use the Capital One mobile app to
deposit checks from clients.

### Xero

We use Xero accounting software to maintain good records of income, expenses,
and distribution of funds.

The Xero account costs $15/month currently.

