# Computer Lab's Website
[![Build
Status](https://travis-ci.org/computer-lab/computerlab.io.svg?branch=master)](https://travis-ci.org/computer-lab/computerlab.io)

This repository contains the Hexo source for Computer Lab's [website](http://computerlab.io). 

## Developer Setup
1. Clone this repository with `git clone
https://github.com/computer-lab/computerlab.io --recursive`.  The `--recursive`
argument is necessary to also clone the theme submodule, which is currently
located at
[https://github.com/ptsteadman/hexo-theme-corporate](https://github.com/ptsteadman/hexo-theme-corporate).
This theme will probably forked into a new special Computer Lab theme.

2. `cd` to `computerlab.io`, and install dependencies with `npm install`.

3. Start a development server with `hexo server`.

4. To deploy live, simply push to master.  The travis continuous integration
server will build the site and deploy it to s3.
