---
layout: post
title: The Art Data Landscape, 2021 
date: 2021-09-17
category: Notes
lede: "In 2017 I became dangerously obsessed with blockchain and pigeons."
author: Patrick Steadman
published: true
image: "http://computerlab.io/images/art_data_landscape.png"
---

![Arts Data Industry Landscape Diagram](/images/art_data_landscape.png)

The first time I encountered an *industry landscape* was on my first day interning at an ad tech company back in 2014. It was part of a slide deck meant to introduce us to the ad tech ecosystem and make us aware of the data and financial flows between its subsectors, each consisting of dozens of competing companies. The presenter zoomed in our logo, then proceeded to explain our small but integral—and arguably pro-social—role.


![Ad tech landscape.](/images/ad_tech_landscape.jpg)

Insofar as the above image produces a vague sense of awe, the term *industry landscape*  might seem like a good name for this type of infographic. If, however, it evokes a dreary economic trypophobia, the term *industry ecosystem diagram* might be more appropriate. Here, we see densely-packed manufacturers and consumers locked in wars of attrition over precarious niches, parasitism, wastes repurposed as sustenance, the ceaseless sedimentation of death. On Twitter I’ve seen the [cloud native landscape](https://landscape.cncf.io/) compared to everything from
[metabolic pathways of the human body](http://biochemical-pathways.com/#/map/1) to *The Garden of Earthly Delights*.

![The Cloud Native Interactive Landscape](/images/cloud_native_landscape.png)

![Metabolic pathways of life.](/images/metabolic_pathways_landscape.png)

One question the arts data landscape may raise is: how does the arts data landscape relate to the overall art industry landscape? Or the overall data landscape? Annual global expenditure on database software alone comes in at roughly equivalent to the entire global art market. In 2019, approximately [$76
billion](https://www.thebusinessresearchcompany.com/report/database-software-market) was allocated to these databases, as compared with
[$67 billion](https://www.ubs.com/global/en/our-firm/art/collecting/art-market-survey.html#artmarketreport2019)
spent on fine art. Arts data is a marginal use case for data software, and in many ways arts *data* is peripheral to art and the art world itself. So why scrutinize arts data, rather than simply visiting a museum, or building scalable time-series databases for wind farms or something?

![Arts Data Industry Landscape Diagram](/images/art_data_landscape.png)

For one thing, fine arts data upholds a balance of being pretty *interesting* and *relatable*, while remaining *non-toxic*, *commercially relevant*, and still not prohibitively *proprietary*. I like to think of it as *charismatic data*. Examples of *uncharismatic data* might include electronic health records (very toxic—if you leak it, you have to report it to the public), high frequency financial data (expensive), Large Hadron Collider data (unrelatable), and online advertising data (boring).

Another reason people like studying art is that it’s basically illustrated history: history as told by quirked-up aesthetes, as opposed to economists and military experts. And *contemporary* art acts as a sort of map of this surplus—a “topology of particular places,” as per Boris Groys.

Accordingly, the art data landscape is crowded with projects by entrepreneurs who want to fall back on a cushy lifestyle business, or academics looking for a suitable data set to try out their new ML system. I think there may also be a bit of the “tech savior” dynamic going on, in which figures from tech, academia, or finance feel that they can bring the light of data-driven decision-making to the benighted art world.

In one important respect, however, the art world is benighted. Most people still engage with art via galleries and museums (and/or their social media), and these institutions have vested interests in their constituent artists and traditions. No matter how balanced a museum’s or mega-gallery’s curators might appear, at a fundamental level they’re still shills for the whole idea of art itself—if only for the simple reason that it pays their bills, in cash or in clout. By leveraging some of the art data platforms in the landscape, specifically exploring *secondary market sales* and the *network structure of exhibitions and artists*, I believe it’s possible to achieve a more nuanced and contextual understanding of contemporary art. Which is not to say this understanding is any more enjoyable than going to museums, fairs, or galleries. It’s just more lucid and predictive.

So how does one explore the network structure of exhibitions and artists? The answer may come in a tool from the art data landscape: [Artfacts](https://artfacts.net/). Artfacts establishes its basic value in its artist ranking system, one based on exhibition history rather than sales or critical reception. This intuitive restructuring reveals a sustained history of exhibitions with prestigious institutions is at the heart of determining artistic merit—and more difficult to manipulate than sale prices, social media, or critique. If you would like to learn about how this ranking is calculated, I recommend watching this video:

[EMBED VIDEO LINK]

Another boutique upstart, the Artists Pension Trust, took this idea of value transparency and applied it directly to artists themselves. APT was founded by Moti Shniberg, who infamously filed a trademark application for [“September 11, 2001”](https://news.artnet.com/art-world/artist-pension-trust-rise-fall-part-one-2058236) just hours after the Twin Towers were erased from the New York skyline. (The stated purpose of the application was for “entertainment in the nature of visual and audio performances, and musical variety, news and comedy shows,” and was later denied.) APT was designed to provide financial security for artists by enabling them to invest a portion of their artwork into a collective trust. The trust would then sell the artwork at a later date, and the profits would be shared among the artists.

In 2016, [APT merged](https://www.ft.com/content/8540f19e-b87c-11e6-961e-a1acd97f622d) with another Shniberg company, MutualArt, a managementless data aggregation platform with a mission of transparent art pricing. MutualArt Group now provides a range of services for collectors, dealers, and art-lovers, including access to a comprehensive database of art auction results and prices, as well as news and analysis of the art market.

Last year, Artlogic—one of the art world's most established database and web development firms—absorbed three more leading art tech institutions: exhibit-E, galleryManager, and ArtBase. Appropriately, they [took to Instagram](https://www.instagram.com/p/CYo00wbsqgc/) to announce the deal, and [further expounded](https://fadmagazine.com/2022/01/11/artlogic-announces-its-merger-with-exhibit-e-gallerymanager-artbase/), the “pandemic has created a dramatic acceleration of galleries moving online… we will shape the future of how the art world does business online."

Artlogic and Artbase were already massive in the gallery management space. But maintaining software of this caliber is difficult, not to mention expensive, and most platforms provide the same basic service. The art world really doesn’t need thirty different gallery software-as-a-service systems. And (unfortunately) the data is more valuable when it’s all in one place.
​
Right now, with exponential traffic in the industry, it’s actually harder to know who the hot, young, emerging artists are. Gallerists, dealers, and investors must decide based on, well, art value. But if all gallery management software consolidated, an owner could simply log in and with a few quick keystrokes (`SELECT artist_name from recent_transactions ORDER BY sale_price DESC WHERE transaction_date > last_month`) root out the answers they desire. There’s already the problem where artists start at a small gallery only to get scooped up by a blue chip as soon as they put out a strong show. This would just make that process even faster, which means independent galleries would struggle as value becomes less ambiguous.

Art world “data” “transparency” is not inherently good or evil. It all depends on what is being made transparent, and to whom. Facebook, for instance, is all about making the world more  “transparent” by connecting global data, but it’s deeply asymmetrical in execution, and compromised by sociopolitical allegiances. Likewise, in 1997, Jeff Bezos explained his decision to start Amazon as a book marketplace, simply because of the vast [data value inherent to books](https://www.fastcompany.com/90430303/a-rediscovered-1997-video-reveals-why-jeff-bezos-chose-books-and-not-cds-to-be-amazons-first-product): “There are more items in the book category than there are items in any other category by far." Which is what I’ve been trying to get at with *charismatic data*. NFT people don’t necessarily care about art, in the same way Bezos didn’t care about books, and this accounts for the asymmetry that data can reinforce.

To me, the very point of art involves an ongoing evolution of my own perspective: learning to appreciate more subtle beauty and more terrifying eroticisms, revisioning what precisely constitutes aesthetic transcendence, and attempting to reconcile the virtues I recognize in daily life with the world of appearances.

John Berger rhetoric (“Does this piece speak to you?”) surely has its place. A McDonald’s Big Mac, however, speaks to me on a profound level, and at certain times has penetrated to the core of my being. But people don’t want to spend the equivalent of a car or a house on a painting that ages like a hamburger, because it will forever scream: *YOU GOT SCAMMED!* Buyers want artworks that age like fine wine. Or, for the enthusiasts who can’t afford a car or house, let alone art, and for whom art’s sacred nature may be more sharply honed, it’s just as important to know what to identify with, as well as to avoid. No one wants to be caught aligning with today’s passing fancy, an MFA clout chaser, some serial networker, lame market artist, or false prophet.

If we reexamine data’s role in the art world, it can be restructured and harnessed to our collective advantage. And new sectors of the art data landscape are constantly emerging. Equity and accessibility services, like [AccessKit](https://accesskit.media/)—a web-based tool that creates immersive, synchronized experiences for art viewers of all abilities—are cropping up alongside marketplace utilities, deepening the ever-complex relationships by which the art world operates. Through revised contexts of relevance and worth, data can shed light on that dark decline our reliance on traditional media and industry has saddled art with, and deliver us to that place of enlightenment, which technology promises. Human conditions for aesthetic value must be integrated within tech in order for it to solve our art problems, and the key to that value lies, like it or not, in the data itself. If it’s starting to feel like a galactic spiral, just remember our trypophobic imagery above. Ecosystems are never stable—they regulate exclusively through caprice and chaos.