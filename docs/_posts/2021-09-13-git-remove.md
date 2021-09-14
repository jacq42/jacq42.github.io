---
layout: post
title:  "Git: Remove / Delete / Revert / ..."
tags: [ git, dev ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

## Dateien aus dem Index entfernen

Man hat versehentlich Dateien zum Index hinzugefügt, die man gar nicht comitten möchte. Diese möchte man zwar aus dem Index, nicht aber aus dem working tree entfernen:
`git rm <file> --cached`

Gibt man den Befehl ohne **--cached** Parameter ein, wird man darauf hingewiesen, dass man entweder den Parameter **--cached** verwenden soll, um die Datei zu behalten oder
den Parameter **-f** verwenden soll, wenn man sie endgültig löschen möchte.

## Einen lokalen Commit entfernen

Was bisher geschah? Nach dem Switch auf den master (lokal) wurden Änderungen committed ohne vorher einen FeatureBranch zu erstellen. 
Dieser Commit sollte wieder rückgängig gemacht werden: `git reset --soft HEAD~1` war die Lösung.\
Bei `git reset HEAD~1` werden die Dateien auch aus der Staging Area gelöscht, bleiben aber im jeweiligen Ordner liegen.\
Um Dateien endgültig zu löschen, einfach einen `git reset --hard HEAD~1` anwenden.