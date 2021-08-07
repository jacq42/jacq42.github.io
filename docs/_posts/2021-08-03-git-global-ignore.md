---
layout: post
title:  "Git: Global .gitignore"
tags: [ git, dev ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

## Global .gitignore erstellen

*nix oder Git Bash:
`git config --global core.excludesFile '~/.gitignore'`

Windows Cmd:
`git config --global core.excludesFile "%USERPROFILE%\.gitignore"`

Windows PowerShell:
`git config --global core.excludesFile "$Env:USERPROFILE\.gitignore"`

Wert lesen:
`git config --global core.excludesFile`

Dann unter dem Userverzeichnis eine `.gitignore` Datei erstellen und wie gewünscht konfigurieren.
Als Hilfe kann man auch [gitignore.io](https://www.toptal.com/developers/gitignore) verwenden.