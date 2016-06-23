---
layout: post
title: What I Learned From Live-Tweeting My Google Searches
date: 2016-06-22
category: Notes
lede: From May 2015 to June 2016, a Python script tweeted my Google search queries in real time.  Here's what I learned.
author: Patrick Steadman
published: true
---

Last May, I wrote a script that would log into my Google history page, find my
most recent search queries, and tweet them from my public [Twitter
account](https://twitter.com/ptsteadman).  It tweeted searches from anywhere
I was logged in with Google, including my phone, in real time.

I kept the script running continuously for over a year, generating about 17k
tweets.  A few nights ago, for various reasons, I decided to turn it off, and
commented out the cron job that ran the script.

__Frankly, I miss it.__

The feed changed my habits and relationships in ways that I'm only starting to
appreciate now that the code isn't running, isn't a part of me anymore.  I think
it was an interesting experiment, and I'm going to try to summarize some of my
conclusions.  My friend [Theo Thimo](https://twitter.com/theoooeooo), who
originally had the idea for this project, still has [his
feed](https://twitter.com/theo_search) running, if you'd like to check it out in
action.

### How It Was Useful

The main reason I miss my Google search feed bot is that it was actually quite
useful.  __It worked something like a Slack integration!__  My friends and
coworkers were ambiently aware of the research I was doing, the questions I had,
in real time.  This helped us sync up and discuss important things.  Now I have
to remember to explicitly tell them what I'm working on. 

Another plus: one of the well-known problems with Google is that it doesn't do a
good job of addressing your "unknown unknowns".  Quite a few times, I'd be
Googling myself into a dead end, and someone on Twitter would point out a Better
Way.

Finally, the bot also helped me make new connections.  Google searches are
essentially keywords, and this meant that my Twitter feed became a stream of
keywords relevant to me.  Unsurprisingly, this helped people (actually mostly
bots) find me.  I have effortlessly made a number of good friends and
acquaintances over the past year thanks to this script.

<center>
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">make rails console shut the fuck up</p>&mdash; Patrick Steadman (@ptsteadman) <a href="https://twitter.com/ptsteadman/status/694337783565922304">February 2, 2016</a></blockquote>
</center>

### What I Hid

Did I have a way to hide certain queries?  Absolutely.  If I used an incognito
tab, I could search without it showing up in my history page and therefore also
my Twitter feed.

In practice, I didn't do this very much.  When I did "incognito tab" something,
it was usually for one of three reasons:

- It was related to my family.  There's something deeply weird about Googling
  one's mom or dad, even weirder than Googling oneself. 
  
- It was related to a person or organization that I was in a competitive or
  vulnerable relationship with.  For example, a few weeks after the script
  started running, I graduated from college and started to half-heartedly look
  for a job.  When researching companies, I often "incognito tabbed", due to
  something between embarrassment and self-interest.  

- Irrelevant, repeated queries.  Over the course of the experiment I gained
  about 600 followers, many who don't care about programming.  Occasionally I
  took mercy on these people by opening up an incognito tab when debugging a
  `webpack.config.js`.  I didn't want to clog the feed.

I think these three categories point to three important use-cases of privacy: 1)
__a way to care for the emotions of others__, 2) __a tool in competition__, 3)
__a filter of irrelevant information__.

<center>
  <blockquote class="twitter-tweet" data-lang="en"><p lang="ht" dir="ltr">mimi
  steadman</p>&mdash; Patrick Steadman (@ptsteadman) <a
  href="https://twitter.com/ptsteadman/status/601572021328216064">May 22,
  2015</a></blockquote>
</center>

### How It Affected Me, And Why I Turned It Off

I gained a lot of interesting reflexes over the past year.  For example, even
though the script isn't running anymore, I've instinctively opened up an
incognito tab for a worrisome query.  When I watch someone else Googling, I
often feel a bit anxious for them if they're searching someone's name.  I think
this suggests that I've sort of adapted to a low-privacy environment.

I think I also got accustomed to a constant stream of fav's and re-tweets on
Twitter, thanks to my "seamless content".  I was rewarded for searching about
relevant topics, or going to relevant places.  According to Twitter Analytics,
my most popular tweet in December 2015 was simply the address of a party I was
heading to:

<center>
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">488 Jefferson St, Brooklyn, NY 11237</p>&mdash; Patrick Steadman (@ptsteadman) <a href="https://twitter.com/ptsteadman/status/675804340498464769">December 12, 2015</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

__Ultimately, it was concerns about _laziness_ that made me turn off the bot.__
The bot was rewarding me for keywords, rather than coherent thoughts.  Looking
back on my tweets from the last year is sort of bleak: all it really tells you
is that I went places in Brooklyn, wrote software using Ruby, C#, and
JavaScript, and made shallow inquiries into a few other subjects.  I know that
more was going in my head and heart during that time, and I want Twitter to
force me to put that stuff into a concise form.

### Technical Thoughts

My friend [Theo Thimo](https://twitter.com/theoooeooo) came to me with the idea:
he thought of it as "seamless content", an effortless form of writing.  He asked
if I could build it, and of course I said yes.  "I'm sure I can just hit some
Google API!" I thought.  I told him I'd do it for $20.  (He's a friend.)

Building
[google-search-twitter](https://github.com/ptsteadman/google-search-history)
ended up being a `learning experience`, because Google doesn't provide an API
for search history data, despite the fact that they've been quite busy with the
`history.google.com` page, adding location data and voice queries.

Some of the `fun` technical challenges I faced in getting the script to work:

- Installing an [X window server on a t2.micro
  instance](https://www.youtube.com/watch?v=ZNTJWs0U-1s) in order to get around
  Google's well-meaning security measures.  Unsurprisingly Google locked down my
  account the first time I tried to log into it via browser automation from an
  ec2 instance in Oregon.  By manually going through a two-factor authentication
  process on the box, I was able to get Google to accept the state of affairs.
  I later automated this.

- About three weeks after I finished my initial implementation, Google switched
  the history page to an Angular single page app.  It was originally a
  server-side generated page controlled by query string parameters, the type
  of easily-scrapable [webpage that is essentially its own API](https://xkcd.com/1481/). 
  I ended up writing a god-awful regex to parse the search queries out 
  protocol buffers bootstrapped into the page.  I'm sure there's a
  better solution.  This was a teachable moment about the dangers of relying on
  "unofficial APIs" and the benefits of server-side templating.

- Occasionally Google would add new stuff to the history page, and my Twitter
  feed would start spewing it out.  For example, at one point Google added app
  usage to the history page, and my Twitter feed became mostly "Used One App:
  Facebook", "Used Three Apps: Twitter, Harvest, Strava".  The same thing later
  happened with voice queries.  These things were all opt-out-able.  It was good
  to be conscious of these things, in my opinion.
