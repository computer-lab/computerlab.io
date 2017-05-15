---
layout: post
title: Spaces for Newline Indents in Visual Studio
date: 2015-03-23
category: Notes
tags: 
- C#
- Visual Studio
thumbnail: https://s3.amazonaws.com/ptsteadman-images/vs.jpg
lede: "Visual Studio displays tabs as having the same 
width as four spaces.  But if you're collaborating with someone working 
in another text editor like vim, your automatically-inserted tabs will
appear larger than four spaces."
author: Patrick Steadman
---

### The Problem:

It's really annoying when Visual Studio shows you this:

{% img /images/vs1.png  %}


But github or vim shows you the same file like this:

{% img  /images/vim1.png  %}

If you use the "show whitespace" Visual Studio chord `(CTRL-R, CTRL-W)`, 
you'll see that visual studio inserts tabs instead of spaces by
default for newline indent:

{% img  /images/ws.png  %}

Visual Studio displays tabs as having the same 
width as four spaces.  But if you're collaborating with someone working 
in another text editor like vim, your automatically-inserted tabs will
appear larger than four spaces.

### The Solution:

Here's how to make visual studio insert spaces instead of tabs on newline indents:
go to `Tools->Options->Text Editor->All Languages->Tabs`:

{% img  /images/spaces.png  %}

That's better:

{% img  /images/ws2.png  %}
