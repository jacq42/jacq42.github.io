---
layout: post
title:  "Git: Credential Manager Core [Windows]"
tags: [ git, dev, troubleshooting ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

## Performance Probleme unter Windows

**Problem**: **git** brauchte eine Weile bis es sich mit dem Remote Server verbunden hat, um einen Befehl auszuführen (pull/push/fetch etc.)

**Lösung**: in der gitconfig den credential.provider konfigurieren
```
git config --global credential.provider generic
```

**Der Weg der Weisheit** führte über:

1. Logging erhöhen:
```
set GIT_TRACE = true
set GIT_CURL_VERBOSE = true
git <command>
```
-> Erkenntnis, dass der credential-manager-core eine etwas längere Pause einlegt (2 x 5s)

2. alle Parameter der gitconfig ansehen:
```
git config --list
```
-> keine Auffälligkeiten

3. Frag [Google|Ecosia|..]: https://github.com/microsoft/Git-Credential-Manager-Core/issues/364