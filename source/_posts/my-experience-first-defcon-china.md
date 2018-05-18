---
layout: post
title: My Experience at DEF CON China Beta
date: 2018-05-18
category: Notes
lede: Parameterizing a REST API over multiple types of users can be a headache. Learn how we addressed this common pattern with our own reusable Django application - django-rest-framework-roles.
author: Patrick Steadman
published: true
image: "https://computerlab.io/images/defcon-china-1.jpg"
---

![](/images/defcon-china-1.jpg)

> "We've cleansed the United States [of] hackers."

*- Kevin Mandia, CEO of FireEye, in a [talk](https://www.youtube.com/watch?v=rPCLbp6y23I) at DoDIIS17*

After failing to qualify for the "Crash and Compile" drinking and coding
competition at DEF CON 25, my friend Rob and I wandered over to the IoT village
and cleared some space for our laptops. Rob helped me start exploring the
village's capture the flag (CTF) network, using `arp-scan` to identify
vulnerable routers, fitness trackers and even appliances set up by the CTF's
organizers. I chose a low point value router with a CVE, and began the process
of writing an exploit based on the CVE's write-up.

Several iterations and Red Bull vodkas later, my exploit suddenly worked (!),
springing me into a crude reverse shell.

I felt, for the first time in years, a spiky jolt of pure dopamine, and
immediately felt empowered to weaponize my middling web engineer skills and
learn other classic hacking stuff like binary reversing, just because I wanted
to play CTF. 

CTF, in its many variants, simultaneously appeals to to the part of me that
likes the intensity of team sports, and the part of me that wants to play with
weird computing systems.

People all over the world seem to find CTF really compelling. Thanks to the CTF
directory [ctftime.org](https://ctftime.org), I've been able to participate in CTFs hosted by
organizations based in India, China, Iran, and even Pennsylvania. Ironically,
this Olympian quality can lead to interesting problems, like when many
competitors in the Iranian CTF found themselves unable to connect to challenge
machines because their IPs had been added to ISP blacklists.

DEF CON China has its roots in international CTF culture, specifically in a 2016
coffee date between Jeff Moss and Baidu Security exec Ma Jie, who was in Vegas
along with Baidu's Blue Lotus CTF team, the first Chinese team to participate in
the DEF CON CTF finals. Apparently, in that meeting, the two developed an
understanding, and the rest is recently-made history. A lot of the
Chinese-language articles about the event focus on the Blue Lotus CTF team
aspect of the story (the team eventually got 2nd!). Western press about DEF CON
China has simply been...sparse, but the reaction on
[Twitter](https://twitter.com/wbm312/status/891871962271633410) and
[Reddit](https://www.reddit.com/r/Defcon/comments/6qtwe6/defcon_beta_in_beijing_china_huge_fing_mistake/?st=jhch6rd3&sh=c152af0b#bottom-comments)
was basically "Wtf? Why would you do DEF CON in China? [Prediction of
disaster]."

As someone who has lived and worked in mainland China, I had my own set of
likelihood filters for this type of drama. And overall, DEF CON China matched my
expectations pretty neatly. I personally made the trip because 1) I hoped to be
exposed to some new computer ideas, 2) I hoped to meet Chinese via workshops and
contests, 3) all in a relaxed, celebratory atmosphere sort of unique to DEF CON.

My first two hopes were realized. Most of the talks I saw were good, from a
deep-dive into the technicalities of [CORS vulnerabiity
scanning](https://github.com/chenjj/CORScanner) by Dr. Haixin Duan, to a more
galaxy-brain talk by Dan Kaminsky that used the class of Spectre-like
speculative execution bugs to suggest that many of our mental models about how
computers work are quite misleading. Once these talks end up online, they'll be
an invaluable resource for hackers in both China and the west, a conspicious
bridge between the communities, and a source of high-quality, infosec-specific
language learning material. It's harder to be sure about the enduring value of
the connections I made the at DEF CON, but I'm optimistic. Trying to network at
a conference is always a bit harrowing, and the challenge is only compounded by
the social characteristics of hackers and a language barrier. But, a
collaborative site-to-site VPN configuration activity at the Packet Hacking
Village helped to create some weak ties that I feel good about. I wanted to try
out the activity because of my many struggles in the VPN-oriented world of
healthcare data engineering, I'm not sure why the Chinese group decided to throw
their ThinkPads into the ring. Regardless, after about two hours of
misconfiguration and interference (including a first attempt where one of the
sites irrecoverably crashed when it was configured to recursively connect to
itself), we symbolically managed to merge the networks of two firewalls running
on Baidu hardware.

I'm still getting a feel for Chinese developed culture, but I really like the
term *manong* (码农), which translates to 'code farmer' or 'code peasant',
something like the western idea of a 'code monkey' but with more diligent and
humble connotations.  The people I met at the VPN exercise are obviously not
perfectly representative of Chinese infosec community, but they did seem more
humble than many of the people I've met at DEF CON in Vegas, more focused on
being polite than seeming 'badass'. And, strikingly, their group was gender
balanced, which actually makes sense given that the company they work for was
founded by a woman.

I also enjoyed talking with someone from the SnowWatch (看雪)
[forum](https://bbs.pediy.com/), which I'd encountered while searching for
information on Chinese CTFs. He helped me register an account using WeChat.
Ultimately, online platforms like SnowWatch (or simply GitHub) are probably the
best place to build working relationships with foreign hackers. I also hope that
the CTF(s) of the next DEF CON China will have open online qualifications, or
that there will also be something like [OpenCTF](http://openctf.com/).
Ultimately, content like OpenCTF is a community effort, and perhaps it's on
people like me and my VPN friends to make stuff happen.

![](/images/defcon-china-park.jpg)

The character of DEF CON is heavily informed by the fact its in Las Vegas. Vegas
casinos are, by design, a break from reality -- food, drinks and lights
meant to keep you gambling work just as well to keep you hacking. It's
unfortunate that the first DEF CON China was held at an isolated hotel in an
office park next to Beijing's 5th Ring Road. I missed more than one talk when I
left the hotel looking for a quick lunch, only to end up wandering over two
kilometers without seeing anything to seat besides the lunch boxes being served
to construction workers. At the hotel, there no good way to bring food or even a
cup of coffee into the talks or chill-out areas -- spaces that closed promptly
after the last event of the day. I think there's an opportunity to localize some
classic DEF CON stuff, like the toxic BBQ, hacker karaoke, and movie showings. A
big Chinese-style roadside BBQ on the first night would have helped Chinese and
foreign conference attendees get to know each other in a relaxed setting.
Instead, it seemed like everyone just left the hotel after the last talk in
insular groups.


<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Defcon?src=hash&amp;ref_src=twsrc%5Etfw">#Defcon</a> <a href="https://twitter.com/hashtag/China?src=hash&amp;ref_src=twsrc%5Etfw">#China</a> really awesome! But it is really pity haven&#39;t make friends with foreign hackers😭 <a href="https://t.co/PZSJdlP2Gi">pic.twitter.com/PZSJdlP2Gi</a></p>&mdash; fujie.gu (@fre3vil) <a href="https://twitter.com/fre3vil/status/995603761627254784?ref_src=twsrc%5Etfw">May 13, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

I think getting Chinese and western hackers chatting is relevant to reasonable
concerns about organizing a corporate-sponsored event in an authoritarian
country. DEF CON's values and goals are not very clearly defined, but I think
that creating a space that facilitates strong, informal, peer-to-peer
relationships between Chinese and foreign hackers is consistent with the
often-stated motivation of better personal information security for all. I'm
sure channels for these types of relationships exist already, but they're likely
situated in intelligence or military contexts where hacking is more likely to be
treated as a zero sum game rather than a constructive, creative space. If DEF
CON China doesn't manage to create a space like this, I think it'll always feel
sort of weird that the DEF CON brand is being applied to a distinct Chinese
professional information security conference. The event's sponsors seem to
already understand this, and the hackable vending machines and arcade games were
a good first step towards irreverence and informality.


