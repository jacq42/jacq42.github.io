---
layout: post
title:  "Git: Store credentials"
tags: [ git, dev ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

## Nutzername und Passwort für ein Repository speichern

Um nicht bei jedem Push und Pull Nutzername und Passwort eingeben zu müssen, können diese gespeichert werden. Natürlich nur so, dass niemand sie lesen und verwenden kann ;-)

Die Daten können auch wieder pro Repository oder global gespeichert werden.

Lokal: In das Repository wechseln und \
`git config credential.helper store`

Global:\
`git config --global credential.helper store`

Beim nächsten Push oder Pull werden die Daten abgefragt und gespeichert. Danach kann ohne Eingabe von Nutzername und Passwort mit dem Repository gearbeitet werden. Die Daten werden gespeichert in `~/.git-credentials`

| Hinweis: Bei der Verwendung des Store für ein github Projekt, in dem eine **Zwei-Faktor-Authentifizierung** konfiguriert ist, kann nicht das Passwort genutzt werden. Dann muss in der github Oberfläche ein Token generiert werden, das als Passwort verwendet wird. Dazu im github Profil auf _Settings > Developer Settings > Personal access tokens_ gehen und ein Token generieren lassen. **Wichtig: Das Token auch speichern, da es über die Oberfläche nicht mehr kopiert, sonder nur noch neu generiert werden kann.**