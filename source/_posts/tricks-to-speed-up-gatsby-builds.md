---
layout: post
title: Two Weird Tricks to Speed Up Gatsby Builds 
date: 2018-06-04
category: Notes
lede: Gatsby v2  
author: Patrick Steadman
published: true
---

If you're using Netlify or another CI/CD tool with a hard build timeout, slow
builds can be more than an annoyance, they can turn your website into a
timebomb. That's what happened to one of our Gatsby+Netlify sites. Builds
suddenly started failing, meaning that the site wouldn't update when users
edited content in the CMS. Looking at the build logs revealed that as users
added more and more content, builds were taking longer and longer, until they
exceeded the fifteen minute build window. This wasn't our first time coming up
against Netlify's build timeout: earlier, we moved the site's images from the
git repository to Cloudinary because moving around images during the build
process was taking too long. 

Would require some sort of enterprise plan with prohibitively high minimums.

### Use the Latest Node Version

The first naive thing I tried, which worked, was bumping the version of Node I
was using from v8.x.x to v10.3 by editing the node version in .nvmrc. This led
to a modest but significant speed increase, from around.

### Increase Node's Memory Limit

If you're working with a large site, you might already be doing this to prevent
out of memory or heap stack size exceptions. But even if you're not getting
errors, it seems that running node with a larger memory cap can lead to a
significant build speedup. 

To increase the memory limit for a gatsby build, simply call gatsby like this:

`node --max_old_space_size=6000 ./node_modules/.bin/gatsby build`.

Anecdotally I read that Netlify build workers have 7 gigabytes of memory, so
setting the `max_old_space_size` flag to 6000 (megabytes) seemed like a safe
bet.

### Next Steps

Neither of these steps are silver bullets, but in conjunction they were able to
decrease Gatsby build times from around 18 minutes to about 4.5 minutes. Other
things to play with are: using the [Netlify cache
directory](https://github.com/gatsbyjs/gatsby/pull/5662) and trying out
different minor Gatsby versions.  Hopefully this will buy time until Gatsby v2
is released (technically you could try to upgrade to the alpha now, but the
upgrade path is unclear), or Netlify makes the build timeout configureable as it
is in tools like AWS CodeBuild.

