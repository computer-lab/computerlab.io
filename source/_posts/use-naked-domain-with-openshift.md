---
layout: post
title: How To Use a Naked Domain (http://example.com) With OpenShift
date: 2015-01-16
category: Notes
tags: 
- OpenShift
- DNS
thumbnail: http://www.roadtocool.com/wp-content/uploads/2015/12/black-and-white-home-office-interior-design-with-black-table-and-three-swivel-chairs-also-long-sofa-and-cushions-and-window-and-plant-also-photo-frames-and-wooden-floor.jpg
lede: "RedHat's OpenShift doesn't support static IPs, which makes it difficult to set up a 'naked' A Record.  This trick will solve your problem."
---

[WWWizer](http://wwwizer.com/naked-domain-redirect) offers a free service that
redirects `example.com` to `www.example.com`.  You just create an A Record
pointing to `174.129.25.170` (WWWizer's IP), and it works.  

So, to enable 'naked' access to your OpenShift application, set up a `www` cName
record with your DNS provider (as shown
[here](https://developers.openshift.com/en/managing-domains-ssl.html), and then
use the WWWizer hack above.  It's better than a root level CName, which makes it
impossible to use mail exchange servers, etc, and very simple.


