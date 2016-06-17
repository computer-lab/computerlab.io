---
layout: post
title: What I Learned From Live Tweeting My Google Search Queries
date: 2016-06-01
category: Notes
lede: From May 2015 to June 2016, a python script tweeted my Google searches in real time.  Here's what I learned.
author: Patrick Steadman
published: false
---

Last May, I wrote a script that would log into my Google history page, find my
most recent search queries, and tweet them from my public [Twitter
account](https://twitter.com/ptsteadman).  I set up a cron job to run this
script every five minutes in the cloud.  It tweeted searches from any device
where I was signed in with Google, including Google Maps searches.

My friend [Theo Thimo](https://twitter.com/theoooeooo) came to me with this
idea: he thought of it as "seamless content", an effortless form of writing.  He
asked if I could build it, and of course I said yes.  "I'm sure I can just hit
some Google API!" I thought.  I told him I'd do it for $20.  (He's a friend.)

Building
[google-search-twitter](https://github.com/ptsteadman/google-search-history)
ended up being quite a `learning experience`.  Google doesn't provide an API for
search history data, despite the fact that they've been quite busy with the
`history.google.com` page, adding location data and voice queries.  More on that
later.

I kept the script running continuously for over a year.  A few nights ago, I
decided to comment out the cron job, turning off the near-real-time feed of my
searches. 

__Frankly, I miss it.__

I think that the feed has changed my habits and relationships in subtle ways
that I'm only starting to appreciate now that the software is off.  I think it
was an interesting experiment, and I'm going to try to summarize some of my
conclusions.  Theo and a few of my other friends are still using the script, and
I'm sure they have their own thoughts.

### What I Hid

Did I have a way to hide certain queries?  Absolutely.  If I used an incognito
tab, I could make searches without them showing up in my history page and
therefore also my Twitter feed.

In practice, I didn't do this very much.  When I did "incognito tab" something,
it was usually for one of three reasons:

- It related to my family.  There's something deeply weird about Googling one's
  mom or dad, much weirder than Googling oneself. 
  
- It related to a person or organization that I was in a competitive or
  vulnerable relationship with.  For example, a few weeks after the script
  started running, I graduated from college and started to half-heartedly look
  for a job.  When I researched the companies I was interviewing with I often
  "incognito tabbed" out of something between embarassment and self-interest.  

- Irrelevant, repeated queries.  Over the course of the experiment I gained
  about 600 followers, many who don't care about programming, and occassionally
  I took mercy on these people by opening up an incognito tab when debugging
  a `webpack.config.js`.  I didn't want to clog the feed.

I think these three categories point to three important use-cases of privacy: 1)
__a way to care for the emotions of others__, 2) __a tool in competition__, 3)
__a filter of irrelevant information__.

### How It Was Useful

The main reason I miss my Google search feed bot is that it was actually quite
useful.  It worked something like a Slack integration!  My friends and coworkers
were ambiently aware of the research I was doing, the questions I had, in real
time.  This helped us sync up and discuss important things.  Now I have to
remember to explicitly tell them what I'm working on. 

Another plus: one of the well-known problems with Google is that it doesn't do a
good job of addressing your "unknown unknowns".  Quite a few times, I'd be
Googling myself into a dead end, and someone on Twitter would point out a Better
Way.

Finally, the bot also helped me effortlessly make new connections.  Google
searches are essentially keywords, and this meant that my Twitter feed became a
set of keywords relevant to me.  Unsurprisingly, this helped people (actually
mostly bots) find me.  I have made a number of good friends and acquaintances
over the past year thanks to this script.


### How It Affected Me

I gained a lot of interesting reflexes over the past year.  For example, even
though the script still isn't running, I've instinctively opened up an incognito
tab for a worrisome query.  When I watch someone else Googling, I often feel
a bit anxious for them if they're Googling someone's name.  I think this
suggests that I've sort of adapted to a low-privacy environment, and think it's
normal now.

I think I also got used to constant stream of fav's and retweets on Twitter,
thanks to my "seamless content".  I was rewarded for searching about relevant
topics, or going to relevant places.  According to Twitter Analytics, my most
popular tweet in December 2015 was simply the address of a party I was heading
to:

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">488 Jefferson St, Brooklyn, NY 11237</p>&mdash; Patrick Steadman (@ptsteadman) <a href="https://twitter.com/ptsteadman/status/675804340498464769">December 12, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

</center>


### Why I Turned It Off

Narcissism?  Intellectual laziness?  Lack of coherent, conclusive thought.
Overall good tho.


<br>

### Technical Thoughts

Some of the `fun` technical challenges I faced in getting it to work:

- installing an [X window server on a t2.micro
  instance](https://www.youtube.com/watch?v=ZNTJWs0U-1s) in order to get around
  Google's well-meaning security measures


