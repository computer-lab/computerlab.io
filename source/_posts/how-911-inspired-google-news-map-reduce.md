---
layout: post
title: How 9/11 Inspired Google News (and MapReduce)
date: 2017-09-10
category: Notes
lede: "In the information age, violence still serves as an accelerant for technological change."
author: Patrick Steadman
published: true
image: "http://computerlab.io/images/google-911.png"
---

__In the information age, violence still serves as an accelerant for technological change.__

On the morning of September 11th, 2001, Amit Singhal, director of search quality
at Google, was at a text retrieval and indexing conference in New Orleans. As
the public searched for news about the attacks on the Twin Towers, Amit and his
colleagues quickly realized that Google was [dramatically failing to meet the
nation's information needs](https://youtu.be/mTBShTwCnD4?t=2m). Searches for
"World Trade Center" led to pages about the architecture of the now-destroyed
towers, or the menu at the Windows on the World restaurant.

In 2001, Google was only able to re-index the web about once a month. As a
result, the index used to fulfill searches did not reflect the current,
dramatically different state of the world.

Over a conference call, Amit and Google engineers in Palo Alto decided on a
hacky solution: they would hand-edit the HTML of the Google homepage to include
links to relevant news articles. This didn't work: the large amounts of traffic
directed to these articles caused the news network's servers to crash almost
instantly. A month later, [an academic noted](http://bit.ly/2eOZa7d) that the
internet in 2001 was still "a narrowcast medium,", unsuited for massively
relevant, breaking events.

<center>
![The Google homepage on the morning of 9/11](https://slack-imgs.com/?c=1&o1=ro&url=http%3A%2F%2Fcomputerlab.io%2Fimages%2Fgoogle-911.png)
</center>

Terrorism had revealed a major limit of the era's information processing
systems.

Amit and his colleague Krishna Bharat were stuck at the conference center until
planes were allowed to fly again. Over the next few days, Singhal and Bharat
sketched out the architecture of an internal tool that would index news
websites constantly, collecting information about events that had just
happened. It would also cluster and rank stories without human editorial
intervention.

By mid-November, they had an internal prototype that attracted the attention of
Google executives like Marissa Mayer and Eric Schmidt. They were both ["very
excited"](https://www.digitalriptide.org/person/krishna-bharat/) about the
prototype, and green-lighted its productization. Jeff Dean, "the most
remarkable engineer at Google", became involved with the project, using it as a
test case for real-time indexing.

Google News was eventually released to the public in September 2002.

Over the next few years, Google expanded their news platform, but Amit and
other executives realized that everything else also needed to be indexed in
real time. In order to index the whole internet, every day, the distributed
programming techniques used to create Google News would have to be formalized
and reused. In addition, 9/11 seemed to drive home the fact that Google had
become a new kind of portal, the 'homepage of the internet' where people would
turn in times of need. Google had become more than just a search utility, it
had become the future of the web.

To address these concerns, Google released [the MapReduce
paper](http://bit.ly/2wiDFlp), which detailed the abstractions Google had
developed to manage the complexity of their numerous ad-hoc distributed
systems. The 2004 paper noted that the MapReduce library was first successfully
used in clustering news stories for Google News, and then applied to Google's
core web index.

The fact that Google shared ideas like MapReduce in academic papers helped to
enable a generation of web 2.0 companies that created value by quickly
ingesting, indexing, and transforming user data. For example, in 2009 Facebook
employed a MapReduce cluster with over eighty nodes just to compute their
uncannily accurate 'suggested friends'.

<center>
![MapReduce diagram from the Google paper.](/images/map-reduce.png)
</center>

{% blockquote %}

MapReduce is a paradigm where big data is mapped to many computers by a 'magic'
hash function, and then reduced to useful information. A MapReduce platform like
Hadoop enables programmers to distribute computation across many worker nodes
without explicitly coordinating their interaction.

{% endblockquote %}

Why does it matter that there's a direct link between 9/11, Google News, and
MapReduce?

It's a reminder that 9/11 didn't just impact the political and military spheres
of American life, it affected our relationship with technology as well. People
in the tech industry like to describe the rise of computation as a sort of
inexorable trend: computers will always get faster, and become a bigger part of
our lives, at a mathematically determined rate similar to Moore's law. But the
story of 9/11 and Google News, like the [story of 9/11 and the 24/7 TV news
ticker](http://bit.ly/2jglZ8U), is an example of how violent crisis can inspire
or enable tech leaders to push for rapid integration of technology into our
daily lives.

In the absence of a violent crisis, people are more willing to question the
necessity of a technological solution, and are more likely to ask questions
like:

- Do we really need 24/7 news alert tickers?
- Should a search engine really be a news portal?
- Is this safe?

These questions can be frustrating to engineers, who often respond by saying "the
technology already exists!" or "you're slowing down innovation!".

It's true that something like MapReduce would have been developed in the
absence of 9/11. But, the punctured equilibrium created by violence can lead to
new technology being hastily deployed to solve the wrong problems. For example,
our government has expended vast resources to create comprehensive databases of
private communications in order to counter the threat of terrorism. It's
[likely](http://bit.ly/2wUcyPw) that these systems make heavy use of MapReduce
clusters. Meanwhile, efforts to improve the United States' healthcare system
are [crippled by interoperability issues](http://bit.ly/2wTA4xQ).

In some ways this is all ancient technical history: Google and other companies
are already moving away from the MapReduce paradigm in favor of more powerful
approaches. However, people like Amit Singhal are still quite young, and will
make the decisions that define our relationship to technology in the coming
decades.  For example, in February of this year, Amit joined Uber as the SVP of
engineering. He would have led Uber's do-or-die effort to introduce self-driving
cars into society, if he hadn't been [fired weeks later](http://bit.ly/2jg8JB9)
for failing to disclose a sexual harassment allegation that resulted in his
resignation from Google.

As we begin to cautiously deploy self-driving cars, machine learning, drones,
and blockchains, we should be remember that safety and privacy can suddenly mean
a very different thing in wartime. And we, like the academic mentioned
earlier, should remember that the "inherent ability of TCP/IP to re-route and
deliver data when important communications links are broken, as in war, or as in
the September 11 tragedy, is not surprising, given that TCP/IP was born out of
DoD-funded research."
