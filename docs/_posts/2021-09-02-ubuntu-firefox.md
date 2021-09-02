---
layout: post
title:  "Ubuntu: Firefox Performance"
tags: [ Ubuntu, Firefox ]
author: jacq42
excerpt_separator: <!--more-->
---

<!--more-->

Nach dem Einrichten eines neuen Users war die Performance vom Firefox mehr als schlecht. Änderungen wurden nur durchgeführt, wenn nach einer Aktion (z.B. Klick auf Einstellungen), der Fokus vom Fenster entfernt und wieder aktiviert wurde. Sprich: klick auf eine andere Anwendung und dann wieder auf Firefox.

Nach kurzer Recherche die Lösung:
* Firefox im Safemode starten: `firefox --safe-mode`
* Hardwarebeschleunigung ausschalten: Properties > General > Performance > Hardwarebeschleunigung verwenden deaktivieren
* Firefox wieder normal starten