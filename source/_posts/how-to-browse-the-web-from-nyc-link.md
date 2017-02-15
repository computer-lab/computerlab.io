---
layout: post
title: How to Browse the Web from a NYC Wifi Link Kiosk
date: 2016-09-23
category: Notes
lede: Supposedly, web browsing functionality was removed from NYC's Wifi Link kiosks.  Here's how to get back online.
author: Patrick Steadman and Robert Jensen
published: true
---

__Supposedly, LinkNYC removed web browsing functionality from its Wifi kiosks.
Here's how to get back online.__

<br>

### Step I: Get A Web Browser

Earlier this month, LinkNYC totally removed the web browsing app from its Wifi
kiosks after aggressive filtering failed to stop people from enjoying the
Internet.

But, even though only four apps remain usable on the kiosks, there's a
workaround.  Using the embedded web browser in the Google Maps, users can browse
as they did before the removal.

In Google Maps, you can search for the offices of the websites you'd like to
visit, and the map entries typically include a link to those websites.  We can
use this to get to the Google search page.

In maps, search for "Google".  On the Maps entry for Google, there's a link to
their corporate page.  At the bottom left of the corporate page, there's a link
to the main Google landing page, from which you can access much of the Internet,
even if you can't directly enter in URLs.

![Using the embedded browser in Google Maps.](/images/kiosk-trick.png)

### Step II: Browse the Web Freely

But, there seems to be some filtering applied at the client level, blocking some
pages.  A lot of websites don't show up in the search results.

The tight integration of Google and the content filtering is not surprising,
given the fact that the kiosks are operated by a Alphabet-owned company,
CityLabs.

Wouldn't it be nice if we could enter arbitrary URLs, and visit any site we
would like?

Here's a little bit of JavaScript and HTML that lets you visit arbitrary URLs:

<br>

<script>
document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementById('url').addEventListener('input', function (e) {
    document.getElementById('link').href = document.getElementById('url').value;
    document.getElementById('link').innerHTML = document.getElementById('url').value;
  });
});
</script>


<input id="url" type="text" value="https://kproxy.com" />
<br>
Link: <a id="link" href="https://kproxy.com">https://kproxy.com</a>

<br>

We can use this to visit a proxy site that Google has not yet blocked.  The
proxy site will provide us with a URL entry bar that we can use to visit any
site, even if it is blocked.  Beware that proxies are a "man in the middle" and
can collect information about your browsing session, so it's recommended you
[set up your own](http://www.makeuseof.com/tag/create-online-proxy-server-minutes/).
