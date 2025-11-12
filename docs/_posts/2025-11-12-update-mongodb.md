---
layout: post
title:  "Ubuntu: Update MongoDB"
tags: [ Ubuntu, MongoDB ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

Updates can only be done for the next major version. If you want do update from 6 to 8, you need to do it in two steps.

To update a local mongodb you have to do the following steps:

1. Check/Set Feature Compatibility Version: [Upgrade from 7 to 8](https://www.mongodb.com/docs/v8.0/release-notes/8.0-upgrade-standalone/#feature-compatibility-version)
2. Stop mongod: `sudo systemctl stop mongod`
3. Uninstall mongod: `sudo apt-get purge "mongodb-org*"`
4. Install new version: [Install Version 8](https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-ubuntu/)
5. Check Version: `mongod -version`
6. Start service: `sudo systemctl start mongod`

