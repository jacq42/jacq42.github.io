---
layout: post
title:  "LCS: Linux Command Suite"
tags: [ Ubuntu, dev, Firefox ]
author: jacq42
excerpt_separator: <!--more-->
lastupdate: 2023-09-21
color: rgb(175, 175, 175)
---

Sammlung oft benötigter (und wieder vergessener) Linuxcommands

<!--more-->

## Suche in Dateien:

```
grep -rnwi /path/ -e "search"
```

## Benutzer mit sudo Rechten erstellen:

```
adduser <name> sudo
```
```
adduser <name>
sudo usermod -aG sudo <name>
```

## Benutzer auf CmdLine ändern

```
su - <username>
```

## apt-get

`sudo apt-show-versions <name>` Anzeige der Version eines installierten Packets (apt-show-versions muss evtl. noch installiert werden)

`apt-cache policy <name>` Zeigt eine Liste, welche Version installiert ist und welche remote vorhanden sind

`apt-get -V -s upgrade` Simulation, was alles aktualisiert werden würde

`sudo apt-get --only-upgrade install <name>` Aktualisiert nur ein bestimmtest Packet

## Installation ohne apt-get

`sudo dpkg -i <name>` Installation eines .deb Packages

[SnapStore](https://snapcraft.io/store): Programm auf dem Rechner, mit dem sich Anwendungen installieren lassen -> grafische Oberfläche nutzen

[AppImage](https://appimage.org/) Anwendungen ohne Installation laufen lassen

## Service nach dem Boot starten

`service <servicename> status` zeigt den Status an

`sudo systemctl enable <servicename>` enabled den Start des Service beim Start

`sudo systemctl disable <servicename>` disabled den Start des Service beim Start


## Zertifikate importieren:

```
sudo mv *.crt /usr/local/share/ca-certificates
sudo update-ca-certificates

ls /etc/ssl/certs
```

## Umwandlung der Zertifikate:

```
sudo openssl x509 -inform PEM -in certificate.cer -out certificate.pem
sudo openssl x509 -inform PEM -in certificate.cer -out certificate.crt
```

## Import von Zertifikaten im Browser

Firefox:
Einstellungen > Datenschutz und Sicherheit > Zertifikate > Zertifikate anzeigen > Ihre Zertifikate > Importieren

Chrome:
Einstellungen > Datenschutz und Sicherheit > Sicherheit > Zertifikate verwalten > Meine Zertifikate > Importieren