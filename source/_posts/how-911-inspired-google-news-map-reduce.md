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
at Google, was at a conference in upstate New York. As the public searched for
news about the attacks on the Twin Towers, Amit and his colleagues quickly
realized that Google was [dramatically failing to meet the nation's information
needs](https://youtu.be/mTBShTwCnD4?t=2m). Searches for "World Trade Center" led
to pages about the architecture of the now-destroyed towers, or the menu at the
[Windows on the World restaurant](http://bit.ly/2gTDzyy).

In 2001, Google was only able to re-index the web about once a month. As a
result, the index used to fulfill searches did not reflect the current,
dramatically different state of the world.

Over a conference call, Amit and Google engineers in Palo Alto decided on a
hacky solution: they would hand-edit the HTML of the Google homepage to include
links to relevant news articles. This didn't work: the large amounts of traffic
directed to these articles caused the news network's servers to crash almost
instantly. A month later, [an academic
noted](http://web.mit.edu/6.033/2002/wwwdocs/papers/9-11.html) that the internet
in 2001 was still "a narrowcast medium".

<center>
![The Google homepage on the morning of 9/11](/images/google-911.png)
</center>

Terrorism had revealed a major limit of the era's information processing
systems.

Amit was stuck at the conference center until planes were allowed to fly again.
Over the next few days, he and and an engineer named Krishna Bararat sketched
out the architecture of an internal tool that would eventually become Google
News. The system would index news websites constantly, ensuring that Google
would be able to provide information about events that had just happened. It
would also cluster and rank stories without human editorial intervention.
Building this system would require rethinking Google's entire data pipeline.

Google News became available to the public in September 2002.

Over the next few years, Google expanded their news platform, but Amit and other
executives like Marissa Mayer realized that everything else also needed to be
indexed in "real time". In order to index the whole internet, every day, the
distributed programming techniques used to create Google News would have to be
formalized and reused. In addition, 9/11 seemed to drive home the fact that
Google had become a new kind of portal, the 'homepage of the internet' where
people would turn in times of need. Google had become more than just a search
utility, it had become the future of the web.

To address these concerns, in 2004 Google released [the MapReduce
paper](http://bit.ly/2wiDFlp), which detailed the abstractions Google had
developed in order to manage the complexity of their numerous ad-hoc distributed
systems. The paper noted that the MapReduce library was first successfully used
in clustering news stories for Google News, and then applied to Google's core
web index.

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

First, because MapReduce platforms enabled the rise of a new generation of web
2.0 companies that created value by ingesting and indexing a vast amount of
user-sourced data. Many web 2.0 companies manage their own complexity by using
abstractions to efficently offload work to different nodes, or process user data
to generate value. For example, in 2013 Facebook used a MapReduce cluster with
over eighty powerful servers just to compute 'recommended friends'.

Second, the reminder that 9/11 didn't just impact the political and military
spheres of American life. People in the tech industry like to imagine the rise
of computation as a sort of inexorable trend: computers will always get faster,
and become a bigger part of our lives, at a mathematically determined rate
similar to Moore's law. But, the story of 9/11 and Google News, just like the
[story of 9/11 and the pervasive news ticker on TV news](http://bit.ly/2jglZ8U),
highlights the degree to which violent crises can inspire or enable technocrats
to justify faster integration of technology into our daily lives. In the absence
of a crisis, people are more willing to questing the necessity of a
technological solution: they are more likely to ask questions like 'would we
really benefit from 24/7 news crawls? Do we really need this?' The techology
might be there, but people might resist its intrustion into their lives. Safety
means a different thing during wartime.

In some ways the story of MapReduce is ancient technical history: Google and
other companies are already moving away from the MapReduce paradigm, in favor of
more powerful tools. But, the people involved are still quite young, and will
make the decisions that define our relationship to technology in the coming
decades. For example, in January 2017, Amit Singhal joined Uber as SVP of
Engineering in charge of Uber's self-driving car program. In this role, he would
have been in position to push for a software solution to . I'm not sure what
this all means, but it's worth remembering that the development of the internet
itself was a defense project, MIT "Some aspects of the design of the Internet
make it very effective in crisis. An important example is the inherent ability
of TCP/IP to re-route and deliver data when important communications links are
broken, as in war, or as in the September 11 tragedy. This robustness is not
surprising, given that TCP/IP was born out of DoD-funded research." 
