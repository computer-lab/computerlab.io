---
layout: post
title: What I Learned From Live Tweeting My Search Queries
date: 2016-06-01
category: Notes
lede: From May 2015 to June 2016, a python script tweeted my Google searches in real time.  Here's what I learned.
author: Patrick Steadman
published: true
---

Last May, I wrote a script that would log into my Google history page, find my
most recent search queries, and tweet them from my public Twitter account.  I
set up a cron job to run this script every five minutes, and deployed it to the
cloud.  It tweeted searches made on my phone, browsers where I was signed into
Google, and included Google Maps searches.

My friend [Theo Thimo](https://twitter.com/theoooeooo) came to me with this
idea: he thought of it as "seamless content", writing produced effortlessly by
recording one's path through the digital world.  He asked if I could build it,
and of course I said yes.  "I'm sure I can just hit some Google API!" I thought.
I told him I'd do it for $20.  (He's a friend.)

Building
[google-search-twitter](https://github.com/ptsteadman/google-search-history)
ended up being quite a `learning experience`.  Google doesn't provide an API for
search history data, despite the fact that they've been quite busy with the
`history.google.com` page, adding location data and voice queries.  More on that
below.

A few nights ago, I commented out the cron job, turning off the near-realtime
feed of my searches.  Frankly, I miss it.  Over the past year, the feed has
changed my habits and relationships in subtle ways that I'm just now starting to
appreciate, now that the software is off.  I think it was an interesting
experiment, and I'm going to try to summarize some personal conclusions.  Theo
and a few of my other friends are still using the script, and I'm sure they have
their own thoughts.

### Technical Insights
Every six minutes during the last year, a script of a cloud server would log
into my Google history page, find my most recent searches, and tweet my them
from my public twitter account.   I think the script had a pretty big impact
on my life, because two days ago, when I commented out the cron job that would
run it, I quickly started t. 

Did I have a way to hide certain queries?  Absolutely.  If I used an incognito
tab, I could make searches without them showing up in my history page.

### Technical Details
Some of the `fun` technical
challenges:

- installing an [X window server on a t2.micro instance]( in order to get around
  Google's well-meaning security measures
