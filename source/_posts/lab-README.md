---
layout: post
title: The Computer Lab README
date: 2019-01-15
category: Notes
lede: "Computer Lab operating procedures, development playbook, goals, and tools."
author: Lab
published: true
---

> "The key to the UCI boathouse was always on the sill above the back door. Just
> let yourself in - lower your single from the rafters - do your workout - wash your
> boat and put it away - lock up when you leave - put the key on the sill above
> the back door.
>
> No fuss, no muss. No dues, no hassles, no insurance, no security codes, no
> liability issues, no nothing. Nothing. Nothingness is enlightenment.
> Enlightenment is extremely rare."
>
> *Lido for Time: 14:39 - Brad Alan Lewis*


This README should help you understand the organization, goals, processes, and
tools of Computer Lab. It's a non-comprehensive, living document.

## What is Computer Lab?

Computer Lab is a software consultancy and research group. We're flexible,
anti-fragile, lightweight, and extremely online. We deliver great engineering
paired with domain expertise in healthcare, biotech, finance, and the arts.

## Organization and Roles

There are currently two roles in the Computer Lab organization: **Partner** and
**Consultant**.

A **Partner** owns a part of the Cloister Products LLC, the Limited Liability
Company that backs Computer Lab.  A Partner can make deals on behalf of the
company and recruit Consultants to work on projects as necessary. Computer
Lab's profits are distributed annually to partners based on an "Eat What You
Kill" formula that includes the business generated and managed by each partner,
each partner's personal billable work, and other contributions as agreed on by
the partners. 

A **Consultant** has access to Computer Lab resources within the scope of a
certain project, whether the project is client work or research. Consultants are
independent contractors, with their own software or design practice, and are
paid as such. Computer Lab maintains an index of good contractors, and reaches
out to them when good projects arise (sometimes using our [mailing
list](https://confirmsubscription.com/h/j/53E8DEBA95C07A35)). Sometimes Computer
Lab will just pass projects on to them, if there isn't a Partner willing and
able to manage the project. 

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

## Technical Best Practices

### Linting 

We ensure a common code style and eliminate bugs by using linters. Linters
are set to run during development so problems can be addressed while writing
code.

### Testing

Testing allows us to refactor and confidently deliver code to clients. We test
all important production components.

### Environments

For each project, we create and maintain appropriate development, QA, and
production environments. 

### Documentation

We create documentation on GitHub for important things, and expose it publically
if appropriate. This documentation is key to successfully handing off code to
clients who are in the process building their own engineering team, or for
successfully maintaining our own work in the future.

## Tools

### Slack

Our work Slack is located at
[computer-lab-paid.slack.com](https://computer-lab-paid.slack.com). Slack is
used for discussing projects in detail, and setting up feeds from integrations.
The "work" Slack requires 2FA so it is a relatively safe place for sharing keys
and secrets.

Each full-member user costs $8/month. These users can access all channels. Some
users who are working on a specific project might just be invited to the
relevant channel.

We also have a more social "free" Slack at
[computer-lab.slack.com](https://computer-lab.slack.com).

### Campaign Monitor

Our email newsletter is managed at [Campaign
Monitor](https://computerlab.createsend.com). We use send emails to the
newsletter list to inform potential subcontractors / partners of projects in the
pipeline. It is a very low-noise mailing list, you can sign up
[here](https://confirmsubscription.com/h/j/53E8DEBA95C07A35).

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

We have a Capital One Spark Business checking account with credit and debit
cards.  We use Bill Pay and the credit card to pay expenses (you
can send paper checks for free using Bill Pay), and use the Capital One mobile
app to deposit checks from clients.

### Xero

We use Xero accounting software to maintain good records of income, expenses,
and distribution of funds.

The Xero account costs $9/month currently.

Our accountant is [Scott Hunzinger](http://www.hunzingerpc.com/).

### AWS

Our AWS account alias is `computerlab`, so if someone has created an IAM account
for you, you should be able to sign in
[here](https://computerlab.signin.aws.amazon.com/console/). This website is
hosted on AWS with s3, cloudfront, and CI/CD using TravisCI.


*Last Updated: January 15th, 2019*
