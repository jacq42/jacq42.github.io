---
layout: post
title:  "Ubuntu: Security first"
tags: [ Ubuntu ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

Beim Aufsetzen eines neuen Systems sollte standardmäßig die **Festplatte verschlüsselt** werden.


Als **Virenscanner** gibt es für Ubuntu [ClamAV](https://www.clamav.net/): Folge der Installationsanleitung auf der Seite. Der Service sollte dann als Daemon _clamav-daemon_ laufen.

Die verwendeten Datenbanken werden mit freshclam aktualisiert, das ebenfalls als Daemon läuft. In der `/etc/clamav/freshclam.conf` kann man die Einstellungen
dazu vornehmen. Falls freshclam noch nicht läuft, einmal `freshclam` aufrufen und es sollte fortan als _clamav-freshclam_ Service laufen.
In den Logs `/var/log/clamav/freshclam.log` sollte je nach Einstellung zu erkennen sein, dass er die Datenbanken aktualisiert. Die Datenbanken selbst liegen unter `/var/lib/clamav`.

Um **Realtime Scanning** einzurichten, muss die [Config](https://docs.clamav.net/manual/OnAccess.html?highlight=onac#configuration-and-recipes) angepasst werden:
In der `/etc/clamav/clamav.conf` ergänzen:
```
OnAccessIncludePath /path/to/watch
OnAccessExcludeUname clamav
OnAccessPrevention yes
OnAccessDisableDDD yes
```
Danach nicht vergessen, den Daemon neu starten `service clamav-daemon restart`.


Sollte auch eine **Firewall** nötig sein, dann [ufw einrichten](https://www.cyberciti.biz/faq/how-to-configure-firewall-with-ufw-on-ubuntu-20-04-lts/). Es sollte ausreichen:
`sudo ufw status`
`sudo ufw default allow outgoing`
`sudo ufw default deny incoming`
`sudo ufw enable`
Um Regeln anzuzeigen einfach `sudo ufw status numbered` aufrufen. Dann sollte eine nummerierte Liste aller Regeln zu sehen sein. Um eine der Regeln zu löschen einfach mit `sudo ufw delete <nr>` die entsprechende Regel angeben.