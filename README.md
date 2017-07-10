# Computer Lab's Website
[![Build
Status](https://travis-ci.org/computer-lab/computerlab.io.svg?branch=master)](https://travis-ci.org/computer-lab/computerlab.io)

This repository contains the Hexo source for Computer Lab's
[website](http://computerlab.io).  

The `master` branch currently deploys to [computerlab.io](http://computerlab.io),
using the Cloudfront CDN. A cloudfront invalidation is necessary in order to
immediately view updated content.

The `staging` branch currently deploys to [staging.computerlab.io](http://staging.computerlab.io).

## Developer Setup
1. Clone this repository with `git clone
https://github.com/computer-lab/computerlab.io --recursive`.  The `--recursive`
argument is necessary to also clone the theme submodule, which is currently
located at
[https://github.com/computer-lab/hexo-theme-computer-lab](https://github.com/computer-lab/hexo-theme-computer-lab).

2. `cd` to `computerlab.io`, and install dependencies with `npm install`.

3. Install `hexo-cli`, and start a development server with `hexo server`. The
   site will be browsable at [localhost:4000](http://localhost:4000).

4. To deploy live, simply push to master.  The [Travis](https://travis-ci.org/)
continuous integration server will build the site and deploy it to s3.  The
build takes about a minute.  If you made changes to the theme submodule, commit
and push those first.

## Content

To add new content to the "blog" part of the site, add a new markdown file to
the `/source/_posts` directory.  
