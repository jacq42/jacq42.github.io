---
layout: post
title:  "LCS: Linux Command Suite"
tags: [ Ubuntu, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Sammlung oft benötigter (und wieder vergessener) Linuxcommands

<!--more-->

Suche in Dateien:
```
grep -rnwi /path/ -e "search"
```

Benutzer mit sudo Rechten erstellen:
```
adduser <name> sudo
```
```
adduser <name>
sudo usermod -aG sudo <name>
```

Zertifikate importieren:
```
sudo mv *.crt /usr/local/share/ca-certificates
sudo update-ca-certificates

ls /etc/ssl/certs
```

Umwandlung der Zertifikate:
```
sudo openssl x509 -inform PEM -in certificate.cer -out certificate.pem
sudo openssl x509 -inform PEM -in certificate.cer -out certificate.crt
```