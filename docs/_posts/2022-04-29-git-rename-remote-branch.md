---
layout: post
title:  "Git: Rename remote branch"
tags: [ git, dev, troubleshooting ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

How to rename a remote and local branch

<!--more-->

## Problem

Branch auf GitHub sollte umbenannt werden (master -> main)

## Lösung

1. Branch in GitHub umbenennen: Klick auf Repo -> Branches -> Umbenennen
2. Branch lokal umbenennen:
```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
git remote prune origin
```


