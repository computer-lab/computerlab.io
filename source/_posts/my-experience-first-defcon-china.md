- --
layout: post
title: My Experience at the First DEF CON China
date: 2018-05-18
category: Notes
lede: Parameterizing a REST API over multiple types of users can be a headache. Learn how we addressed this common pattern with our own reusable Django application - django-rest-framework-roles.
author: Patrick Steadman
published: true
---

> "We've kind of cleansed the United States from hackers."

*- Kevin Mandia, CEO of FireEye, in a [talk](https://www.youtube.com/watch?v=rPCLbp6y23I) at DoDIIS17*

After failing to qualify for the "Crash and Compile" drinking and coding
competition at DEF CON 25, my friend Rob and I wandered over to the IoT village
and cleared some space for our laptops. Rob helped me to explore the village's
capture the flag (CTF) network, using arp-scan to identify vulnerable routers,
fitness trackers and even appliances set up by the CTF's organizers. I chose a
low-point value router with a CVE, and began the process of writing an exploit
based on the the CVE's write-up.

Several iterations and redbull vodkas later, my exploit suddenly worked (!),
springing me into a crude reverse shell.

I felt, for the first time in years, a spiky jolt of pure dopamine, and
immediately felt empowered to weaponize my middling web engineer skills and
learn other classic hacking stuff like binary reversing, just because I wanted
to play CTF. 

CTF, in its many variants, simultaneously appeals to to the part of me that
likes the intensity of team sports, and the part of me that wants to play with
weird computing systems.

People all over the world seem to find CTF really compelling. Thanks to the CTF
directory ctftime.org, I've been able to participate in CTFs hosted by
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
aspect of the story (the team eventually got 2nd!). Western press about
DEF CON China has simply been...sparse, but the reaction on Twitter and Reddit
was basically "Wtf? Why would you do DEF CON in China? [Prediction of
disaster]."

As someone who has lived and worked in mainland China, I had my own set of
likelihood filters for this type of drama. And overall, DEF CON China matched my
expectations pretty neatly. I made the trip because 1) I hoped to be exposed to
some new computer ideas, 2) I hoped to meet Chinese via workshops and contests,
3) all in a relaxed, celebratory atmosphere sort of unique to DEF CON.

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
collaboriative site-to-site VPN configuration activity at the Packet Hacking
Village helped to create some weak ties that I feel good about. I wanted to try
out the activity because of my many struggles in the VPN-oriented world of
heatlhcare data engineering, I'm not sure why the Chinese group decided to throw
their ThinkPads into the ring. Regardless, after about two hours of
misconfiguration and interference (including a first attempt where one of the
sites irrecoverably crashed when it was configured to recursively connect to
itself), we symbolically managed to merge the networks of two firewalls running
on Baidu hardware.

I'm still geting a feel for Chinese developed culture, but I really like the
term manong, which translate to 'code farmer' or 'code peasant', similar to the
English idea of a 'code monkey' but with more diligent and humble connotations.
The people I met at the VPN exercise are obviously not perfectly representative
of Chinese infosec community, but they did seem more humble than many of the
people I've met at DEF CON in Vegas, more focused on being polite than seeming
'badass'. And, strikingly, their group was gender balanced, which actually makes
sense given that the company they work for was founded by a woman.

I also enjoyed talking with someone from the "SnowWatch" forum, which I'd
encountered while searching for information about Chinese CTFs. He helped me
register an account using WeChat. Ultimately, online platforms like SnowWatch (or
simply GitHub) are probably the best place to build working relationships with
foreign hackers. I also hope that the CTF(s) of the next DEF CON China will have
open online qualifications, or that there will also be something like
[OpenCTF](http://openctf.com/). Ultimately, content like OpenCTF is a community
effort, and perhaps it's on people like me and my VPN friends to make stuff
happen.


