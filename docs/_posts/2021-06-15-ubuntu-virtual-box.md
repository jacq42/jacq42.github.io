---
layout: post
title:  VirtualBox unter Ubuntu
tags: [ Ubuntu, VM ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---
Wie erstellt und konfiguriert man VMs unter Linux?

<!--more-->

```
sudo apt-get install virtualbox virtualbox-qt virtualbox-dkms virtualbox-guest-additions-iso vde2
```

* virtualbox: VirtualBox
    * unter `/usr/share/doc/virtualbox` liegt ein UserManual.pdf
* virtualbox-qt: UI
* virtualbox-dkms:
* virtualbox-guest-additions-iso: Gasterweiterungen, die nach Installation des Betriebssystems installiert werden
    * erstellt ein VBoxGuestAdditions.iso unter `/usr/share/virtualbox/`
* vde2: Virtual Distributed Ethernet

Nach der Installation kann man über das Menü den VirtualBox Manager aufrufen und neue Maschinen erstellen etc.

## Konfigurieren

ISO Datei runterladen und als optisches Medium beim Starten der VM auswählen.

Hat man sich das OS so eingerichtet, wie man es möchte, kann man einen Sicherungspunkt erstellen: Machine > Sicherungspunkt erstellen

Nach der Installation des OS sollte man die Bootreihenfolge ändern: Platte vor Optischem Medium.

## Per SSH auf VM zugreifen

Voraussetzung: VM ist ausgeschaltet

Im Hauptfenster zur VM navigieren und "Ändern" auswählen: Netzwerk > Erweitert > Port-Weiterleitung

Neuen Wert eintragen:
* Name = SSH
* Protokoll = TCP
* (Host-IP: 127.0.0.1)
* Host-Port = 2222
* (Gast-IP: 10.0.2.15)
* Gast-Port = 22

Nach Neustart der Maschine kann man sich mit `ssh -p 2222 <user>@127.0.0.1` verbinden.\
Wenn es nicht möglich ist, dann auf der VM prüfen, ob ssh richtig konfiguriert ist. Unter Ubuntu muss u.U. noch `openssh-server` installiert werden.

## SSH ohne Port Forwarding

Voraussetzung: VM ist ausgeschaltet

Im Hauptfenster zur VM navigieren und "Ändern" auswählen: Netzwerk > Adapter 2 > Host-only Adapter

Dieser muss vorher unter Datei > Host-only Netzwerk-Manager konfiguriert werden

## Maus gefangen

Wenn man es geschafft hat, das VirtualBox die Maus gefangen hat und nicht wieder hergeben will: rechte STRG Taste drücken (sollte rechts unten am Fenster stehen).