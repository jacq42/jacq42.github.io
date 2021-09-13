---
layout: post
title:  "Git: Remove from index"
tags: [ git, dev ]
author: jacq42
lastupdate: 2021-08-30
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

<p><i><b>Updated:</b> {{ page.lastupdate }}</i></p>

## Dateien aus dem Index entfernen

Man hat versehentlich Dateien zum Index hinzugefügt, die man gar nicht comitten möchte. Diese möchte man zwar aus dem Index, nicht aber aus dem working tree entfernen:
`git rm <file> --cached`

Gibt man den Befehl ohne **--cached** Parameter ein, wird man darauf hingewiesen, dass man entweder den Parameter **--cached** verwenden soll, um die Datei zu behalten oder
den Parameter **-f** verwenden soll, wenn man sie endgültig löschen möchte.