---
layout: post
title: How to Start Tracking the Security Firehose in Five Minutes
date: 2017-05-02
category: Notes
lede: Learn how to monitor security feeds to stay ahead of the ongoing threats to your infrastructure.
author: Robert C Jensen
published: true
---

> There ain't no bugs on me
> There ain't no bugs on me
> There may be bugs on some of you mugs
> But there ain't no bugs on me

*Traditional folk song*

### Background

How do you become aware of security bugs in your software systems? Is it when
a machine prompts you to install updates? Is it when you read about it on
Hacker News? Is it when you get owned?

Creating an automated patch management system is a great way to stay secure.
However, depending on your threat model, you might need to do even better than
that. It may not be acceptable to wait for your patch management system to apply
an update on a schedule or to wait for a patch in a library to propogate upstream.

By keeping track of security vulnerabilities on your own, you can catch potential
vulnerabilities as soon as they are made public. Software vendors and special
interest groups have created a number of security feeds that makes it easy to stay
abreast of the latest security bugs. In this article, we present a directory of
the feeds that I follow at Computer Lab when managing critical systems.

### General Vulnerabilities

These comprehensive feeds report vulnerabilities in software across operating systems.
Monitoring these lists can help you catch bugs in your stack and, in some cases,
provide a platform for the general discussion of software security.

#### [Common Vulnerabilities and Exposures (CVE)](https://cve.mitre.org/cve/)

Message Frequency: Daily
Formats: Raw Data, Twitter, Web

The CVE standard defines a universal format for describing vulnerabilities in
software and systems. They also have contributed to standards for
[scoring](https://www.first.org/cvss) and [reporting](http://www.icasi.org/cvrf)
vulnerabilities. With NIST, they provide a convenient interface for searching
and visualizing CVEs at the [National Vulnerability Database](https://nvd.nist.gov/).

#### [United States Computer Emergency Readiness Team (US-CERT)](https://www.us-cert.gov/mailing-lists-and-feeds)

Message Frequency: Varies
Formats: Mailing List, RSS

US-CERT has a variety of feeds for both high and low frequency security bulletins.
They also publish advisories that are not specific to a particular piece
of software but rather describe best practices and current trends in the threat
landscape.

#### [Bugtraq](http://www.securityfocus.com/archive/1/description#0.3.1)

Message Frequency: Daily
Formats: Mailing List

Despite being one of the oldest security mailing lists, you can still find
advisories posted on Bugtraq today. Bugtraq is not just an announce list - you
can engage in conversation with other security professionals.

#### [OSS Security](http://www.openwall.com/lists/oss-security/)

Message Frequency: Daily
Format: Mailing List

OSS Security is a common place for new vulnerabilities to be posted, often
cross posted to Bugtraq and / or Full Disclosure. Like Bugtraq, there will
occasionally be more general discussion of security practices. Until recently,
CVEs were assigned here.

#### [Full Disclosure](https://nmap.org/mailman/listinfo/fulldisclosure)

Message Frequency: Daily
Format: Mailing List

Another old-school mailing list, named for the security reporting principle of
[Full Disclosure](https://en.wikipedia.org/wiki/Full_disclosure_(computer_security)).
Nowadays the list has much less activity than OSS Security or Bugtraq but it can
still be a valuable source of vulnerability announcements.

### Linux Vulnerabilities

Most Linux distributions have a public security mailing list where security
updates are announced. I have only included the more popular server distributions
here but it should be easy to find a similar list for any distribution.

#### [Red Hat Security Announce](https://www.redhat.com/mailman/listinfo/rhsa-announce)

Message Frequency: Varies
Format: Mailing List

Security announcements for all Red Hat products and services.

#### [Ubuntu Security Announce](https://lists.ubuntu.com/mailman/listinfo/ubuntu-security-announce)

Message Frequency: Varies
Format: Mailing List

Security updates for all flavors of Ubuntu.

### Windows Vulnerabilities

Despite Microsoft's low reputation within the security community, they do offer
many valuable resources for security professionals.

#### [Microsoft Security Notification Service](https://technet.microsoft.com/en-us/security/dd252948.aspx)

Message Frequency: Monthly
Format: Mailing List

These notifications provide a low-frequency, high-level overview of patched vulnerabilities
in Microsoft products.

#### [Microsoft Security Advisories](https://technet.microsoft.com/en-us/security/dd252948.aspx)

Message Frequency: Varies
Format: RSS

Advisories that report low-impact vulnerabilities or security-related updates
are sent here.

#### [Microsoft Security Updates](https://technet.microsoft.com/en-us/security/bulletins.aspx)

Message Frequency: Monthly
Format: Web

On [Patch Tuesday](https://en.wikipedia.org/wiki/Patch_Tuesday), Microsoft releases
information about patched vulnerabilities on its website. The bulletins are quite
detailed, indicating the affected versions of any relevant software, mitigating
factors, workarounds & occasionally attribution to the original reporter.

### Bonus: Amazon Web Services

I imagine that most readers are using AWS for some, if not all, of their infrastructure.
Here are some resources to help you stay on top of vulnerabilities in the cloud.

#### [Amazon Linux AMI Security](https://alas.aws.amazon.com/)

Message Frequency: Varies
Format: RSS, Web

Notifications of vulnerabilities in Amazon's flavor of Red Hat (Amazon Linux).

#### [Amazon Security Bulletins](https://aws.amazon.com/security/security-bulletins/)

Message Frequency: Varies
Format: RSS, Web

Security bulletins for vulnerabilities in Amazon services (e.g: RDS) and
internal software (e.g: Xen). Also includes general security notices for critical
vulnerabilities a la CERT.

### Did we miss anything?

If you use any other vulnerability notification services we would love to know
about them! Join the conversation on [Hacker News]().
