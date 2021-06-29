---
layout: post
title:  "LCS: Linux Command Suite"
tags: [ Ubuntu, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Sammlung oft benötigter (und wieder vergessener) Linuxcommands

<!--more-->

Suche in Dateien:
```
grep -rnwi /path/ -e "search"
```

Benutzer mit sudo Rechten erstellen:
```
adduser <name> sudo
```
```
adduser <name>
sudo usermod -aG sudo <name>
```