---
layout: post
title: How to Browse the Web from an NYC Wifi Link Kiosk
date: 2016-09-23
category: Notes
lede: Supposedly, web browsing functionality was removed from NYC's Wifi Link kiosks.  Here's how to get back online.
author: Patrick Steadman and Robert Jensen
published: true
---

__Supposedly, web browsing functionality was removed from NYC's
Wifi Link kiosks.  Here's how to get back online.__

<br>

__Step 1: Get A Web Browser__

The web browsing app was totally removed from the kiosks after
aggressive filtering failed to stop people from enjoying the Internet.

But, you can get an embedded web browser in the Google Maps application.  (One
of the four remaining applications on the kiosks.)  How to do this?

In maps, search for "Google".  On the Maps entry for Google, there's a link to
their corporate page.  At the bottom left of the corporate page, there's a link
to the main Google landing page, from which you can access much of the Internet,
even if you can't directly enter in URLs.

But, there seems to be some filtering applied at the client level, blocking some
pages.  A lot of websites don't show up in the search results.  The integration
of the content filtering and the Google search engine is not very surprising,
given the fact that the kiosks are operated by a Alphabet-owned company,
CityLabs.

Wouldn't it be nice if we could enter arbitrary URLs, and visit any site we
would like?

<br>

__Step 2: Get an iframe__

An iframe is a webpage embedded in another webpage.

You can set the url (or `src`) of the iframe to whatever you want, dynamically,
using JavaScript.  Here's an iframe and an input that controls the url for the
iframe, effectively creating a little web browser inside the locked-down
embedded browser.

<br>


<script>
document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementById('browse').addEventListener('click', function (e) {
    document.getElementById('iframe').src = document.getElementById('url').value;
  });
});
</script>


<input id="url" type="text" value="https://computerlab.io" />
<input type="submit" id="browse" />
<iframe id="iframe" src="https://computerlab.io" width="100%" height="600"></iframe>

<br>

You can use this to browse the web.  Note that some sites (for example, google,
facebook, and twitter) prevent themselves from being loaded in iframes.  But
plenty of other sites work.
