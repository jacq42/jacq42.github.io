---
layout: post
title:  "Ubuntu: User Login"
tags: [ Ubuntu ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

Hide user from login screen

<!--more-->

## Problem

Ein vorhandener User sollte nicht im Login Screen angezeigt werden.

## Lösung

Den User als Systemuser konfigurieren:

* Eine Datei anlegen oder die vorhandene Datei öffnen und Änderungen unter User vornehmen

```
/var/lib/AccountsService/users/XXX

[User]
SystemAccount=true
```



