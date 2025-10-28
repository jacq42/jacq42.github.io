---
layout: post
title:  "Ubuntu: DRM videos within brave"
tags: [ Ubuntu, DRM, Brave ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

Videos with DRM protected content can be viewed only when the browser has an extension for that, for example Googles Widevine extension. With Ubuntu I was not able to simply install the extension within the brave browser and could not see the content.

Following this [instruction](https://support.brave.app/hc/en-us/articles/23881756488717-How-do-I-enable-Widevine-DRM-on-Linux) helped me:

- Create a Symlink: `sudo ln -s /opt/google/chrome/WidevineCdm /opt/brave.com/brave/WidevineCdm`
- Enable the extension under `brave://settings/extensions`
- Restart the browser
