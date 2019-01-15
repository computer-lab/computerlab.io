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

This README should help you start to understand the organization, goals,
processes, and tools of Computer Lab. It's a non-comprehensive, living
document.

## What is Computer Lab?

Computer Lab is a software consultancy and research group. We're very
flexible, anti-fragile, and extremely online.

## Organization and Roles

There are currently two roles in the Computer Lab organization: **Partner**, and
**Contractor**.

A **Partner** owns a part of the Cloister Products LLC, the Limited Liability
Company that backs Computer Lab.  A Partner can make deals on behalf of the
company, and recruit Contractors to work on projects as necessary. Computer
Lab's profits are distributed annually to partners based on an "Eat What You
Kill" formula that includes the business generated and managed by each partner,
each partner's personal billable work, and other contributions as agreed on by
the partners. 

A **Contractor** has access to the Computer Lab resources within the scope of a
certain project, whether the project is client work or research. Contractors are
independent contractors, with their own software or design practice, and are
paid as such. Computer Lab maintains an index of good contractors, and reaches
out to them when good projects arise. Sometimes Computer Lab will just pass
projects on to them, if there isn't a Partner able and willing to manage the
project. 

## Communication

### Internal Communication
- We use Slack and face-to-face for most project discussion.
- We use text and phone calls only for urgent issues.

### Client Communication
- Each project has a single designated point of contact who is a Computer Lab
  partner (member of the LLC). All important communications (money issues, team
  issues, scope issues, contract issues, bugs) should ideally go through this
  point of contact.
- That person should respond to the client promptly (ideally within 24 hours),
  even if the response is simply providing a time that they can render a full
  response.
- If desired by the client, we like to set up a project-specific Slack channel
  so the client, point of contact, and other involved parties can discuss the
  project. 

## Technical Procedures

### Linting 

We ensure a common code style and eliminate bugs by using linters. The linters
are set to run during development to problems can be addressed while writing
code.

### Testing

Testing allows us to refactor and confidently deliver code to clients. We test
all important production components.

### Environments

For each project, we create and maintain appropriate development, QA, and
production environments. 

### Documentation

We create documentation on GitHub for important things (like this), and expose it via GitHub pages if appropriate.

## Tools

### Slack

Our work Slack is located at
[computer-lab-paid.slack.com](https://computer-lab-paid.slack.com). Slack is use
service useful for discussing projects in detail, and setting up feeds from
integrations. The "work" Slack requires 2FA so it is a relatively safe place for
sharing keys and secrets.

Each full-member user costs $8/month. These users can access all channels. Some
users who are working on a specific project might just be invited to the
relevant channel.

We also have a more social "free" Slack at
[computer-lab.slack.com](https://computer-lab.slack.com).

### Campaign Monitor

Our email newsletter is managed at [Campaign Monitor](https://computerlab.createsend.com).
We use send emails to the newsletter list to inform potential subcontractors /
partners of projects in the pipeline. It should be a very low-noise mailing
list.

### Bonsai

Contract creation, time tracking, and invoicing is done using
[Bonsai](https://app.hellobonsai.com/). Bonsai makes it easy to create/e-sign
contract and send invoices with automated reminders.

Subcontractors on projects can also use Bonsai for time tracking and invoicing
Computer Lab.

Bonsai also hosts our [contact form](https://app.hellobonsai.com/) and a list of
subcontractors (our "talent network").

### GitHub

Our GitHub organization is located at [github.com/computer-lab](https://github.com/computer-lab).

GitHub stores source code and documentation, we don't have any private repositories.

### Trello

Our Trello boards are located at [trello.com/computer_lab](https://trello.com/computer_lab).

Trello is for project managment and keeping track of general operations.

### Google

Email, identity and documents are provided by Google Apps. It's also the place where we
store shared files and documents.  Google Apps accounts are $5/month.

We also have a GCP organization named `computerlab.io`.

### Banking

We have a Capital One Spark Business checking account with debit cards.  We use
checks, online Bill Pay and the debit card to pay expenses (you can send paper
checks for free using Bill Pay), and use the Capital One mobile app to deposit
checks from clients.

### Xero

We use Xero accounting software to maintain good records of income, expenses,
and distribution of funds.

The Xero account costs $9/month currently.

### AWS

Our AWS account alias is `computerlab`, so if someone has created an IAM account
for you, you should be able to sign in
[here](https://computerlab.signin.aws.amazon.com/console/). This website is
hosted on AWS with s3, cloudfront, and CI/CD using TravisCI.
