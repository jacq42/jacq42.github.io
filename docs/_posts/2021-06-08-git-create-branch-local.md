---
layout: post
title:  "Git: Create local branch and push to remote"
tags: [ git, dev ]
author: jacq42
lastupdate: 2021-08-30
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

<p><i><b>Updated:</b> {{ page.lastupdate }}</i></p>

## Einen neuen Branch lokal erstellen und nach remote pushen

Branch lokal erstellen:\
`git branch <name>`

Branch auschecken:\
`git checkout <name>`

Oder gleich beides zusammen: erstellen + checkout\
`git checkout -b <name>`

Branch nach remote pushen:\
`git push -u origin <name>`