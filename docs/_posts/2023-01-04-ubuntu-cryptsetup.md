---
layout: post
title:  "Ubuntu: Cryptsetup"
tags: [ Ubuntu ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

Wenn sich der Akku vollständig entladen hat, gehen sämtliche Einstellungen im BIOS verloren. Wenn nach dem Booten die Fehlermeldung
_"cryptsetup: Waiting for encrypted source device UUID=xxx"_ erscheint, stimmen sehr wahrscheinlich die Sata Einstellungen nicht. Dafür
im BIOS Setup unter _System Configuration_ > _SATA Operation_ von _RAID On_ auf _AHCI_ umswitchen. Neustarten und denn wird das Device hoffentlich gefunden.
