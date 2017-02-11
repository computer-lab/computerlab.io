---
layout: post
title: How To Send An Invoice Well
date: 2017-01-03
category: README
lede: How to send an invoice, account for it properly, and make sure it gets paid.
author: Lab
published: true
---

1. Scheduling

Always invoice regularly. Set up some sort of reminder (you can do this in
Slack), so that you don't forget to send an invoice, or avoid invoicing because
you feel like there are too few or too many hours. In either case, the problem
will just get worse if you wait.

The Computer Lab week starts on Monday. So, if you invoice bi-weekly, you can
send out invoices on Monday morning for the last two week's work.

If a project starts in the middle of a week, include the previous days of the
week in that bi-weekly billing period. Stated another way, billing periods
always start on a Monday, and end on Sunday, inclusive.

2. Creating and Sending the Invoice

Create the invoice in Harvest. Prefer to use the "Summary By People Hours"
option, because it makes it easy to figure the amount different people who
worked on the project are owed.

Toggling back and forth between "Summary By People Hours" and "Detailed Line
Items" can help you ensure that there wasn't any time tracked erroneously, or
easily sum up the hours that different people worked.

If you use the "Detailed Line Items" option because a client is interested in
seeing a detailed report of work performed, and more than one person worked on
the project, in the "Notes" section include the total hours each individual
worked.

For the subject of the invoice, use this format:

`$PROJECT_NAME: MM/DD/YY - MM/DD/YY`

Make sure you set the due date correctly. "Net 15" means the invoice is due in
fifteen days, "Net 30" means the invoice is due in thirty days. Prefer Net 15 or
less payment terms.

When you send the invoice (the email contact for the client should already be
set up), the invoice will be automatically copied into Xero, our accounting
software.

3. Creating Bills for Subcontractors

If the work for the invoice required use of a subcontractor, you need to create
a bill in Xero so that we know to pay that subcontractor.

If the subcontractor has not been entered as a Contact, add their contact
information by clicking the "+" menu item, and then clicking Contact.

Then, click "+" -> "Bill" to create a bill for that subcontractor. For the item
type, choose "Consulting", and in the description, include the type of worked
performed, the project, and the billing period. Ex: `Programming for Foo
project: MM/DD/YY - MM/DD/YY`. If the work was performed at an hourly rate, use
the total number of hours and multiply it by the subcontractors rate to give the
total. For the Account field, use "Subcontractors - COS" because this
subcontracting was a cost incurred while providing services to a client. Set the
due date to the date that the subcontractor expects to be paid, as specified in
the contract.

4. Reconciliation

As soon as we recieve a check in the mail, mark the invoice as paid in Harvest.
This will prevent the automated reminder emails from being sent to the client.
These emails are sent once the invoice is three days late, and every seven days
thereafter.

When we receive payment to our bank account by depositing a check, it will show
up in the Xero bank feed, where we can automatically match it with the invoice.
Similarly, when a subcontractor deposits a check from us, it'll show up in the
bank feed and be matched with the bill. This process of reconciliation ensures
that we know when we've received and provided payment.

5. Improving This System

Right now, the physical checks are a big probably, because they create leakage
points in the system. We should use something like Bill.com to get and send
electronic ACH payments electronically. These payments have a very low flat fee
and clear in less than three days.


