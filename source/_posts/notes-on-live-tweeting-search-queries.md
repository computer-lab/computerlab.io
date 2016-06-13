---
layout: post
title: What I Learned From Live Tweeting My Search Queries
date: 2016-06-01
category: Notes
lede: From May 2015 to June 2016, a python script tweeted my Google searches in real time.  Here's what I learned.
author: Patrick Steadman
published: false
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

A few nights ago, I commented out the cron job, turning off the near-real-time
feed of my searches. 

__Frankly, I miss it.__

Over the past year, the feed has changed my habits and relationships in subtle
ways that I'm just now starting to appreciate, now that the software is off.  I
think it was an interesting experiment, and I'm going to try to summarize some
personal conclusions.  Theo and a few of my other friends are still using the
script, and I'm sure they have their own thoughts.

### What I Hid

Did I have a way to hide certain queries?  Absolutely.  If I used an incognito
tab, I could make searches without them showing up in my history page.

In practice, I didn't do this very much.  When I did "incognito tab" something,
it was usually for one of three reasons:

- It related to my family.  There's something deeply weird about Googling one's
  mom or dad, much weirder than Googling oneself. 
  
- It related to a person or organization that I was in a competitive or
  vulnerable relationship with.  For example, a few weeks after the script
  started running, I graduated from college and half-heartedly looked for a job.
  When I researched the companies I was interviewing with I often "incognito
  tabbed", out of something between embarassment and self-interest.  

- Irrelevant, repeated queries.  Over the course of the experiment I gained
  about 600 followers, many who don't care about programming, and occassionally
  I took mercy on these people by opening up an incognito tab when debugging
  a `webpack.config.js`.  I didn't want to clog the feed.

I think these three categories point to three important use-cases of privacy: 1)
__care for the emotions of others__, 2) __tool in competition__, 3) __filter of
irrelevant information__.

### How It Was Useful

It works like a Slack integration!  Very useful paradigm of feed communication.

### How It Affected Me

Concern when I see someone Googling something.

### Why I Turned It Off

Narcissism?  Intellectual laziness?  Lack of coherent, conclusive thought.
Overall good tho.


### Greatest Hits

<br>

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">488 Jefferson St, Brooklyn, NY 11237</p>&mdash; Patrick Steadman (@ptsteadman) <a href="https://twitter.com/ptsteadman/status/675804340498464769">December 12, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

</center>
### Technical Thoughts

Some of the `fun` technical challenges I faced in getting it to work:

- installing an [X window server on a t2.micro
  instance](https://www.youtube.com/watch?v=ZNTJWs0U-1s) in order to get around
  Google's well-meaning security measures


