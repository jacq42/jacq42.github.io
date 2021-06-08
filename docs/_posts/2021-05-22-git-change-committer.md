---
layout: post
title:  "Git: Setting username for a single repo"
tags: [ git, dev ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

## Username und Email für ein Repository setzen

Name und Email werden für den Commit verwendet. Diese sind global eingestellt (zu finden in ".gitconfig"). Sie können angesehen werden mit:\
`git config --global user.name`\
`git config --global user.email`

Nun möchte man für ein Repo nicht die globalen Daten verwenden, aber diese auch nicht überschreiben. Dafür in das gewünschte Repo wechseln und ausführen:\
`git config user.name "Max Mustermann"`\
`git config user.email "mail@mustermann.de"`

Werte prüfen mit:\
`git config user.name`\
`git config user.email`

Die Werte werden im Projekt unter ".git/config" abgelegt.

| Hinweis: Email für github = "jacq42@users.noreply.github.com"