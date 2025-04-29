---
layout: post
title:  branch by abstraction
tags: [ CleanCode, Meetup, Quality, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

> "Branch by Abstraction" is a technique for making a large-scale change to a software system in gradual way that allows you to release the system regularly while the change is still in-progress.
siehe [bliki](https://martinfowler.com/bliki/BranchByAbstraction.html)

## Problem

- System ohne Downtime
- viele Requests
- paralles Arbeiten an der Codestelle

## Möglichkeit eigener Branch

- Mergehölle
- integrative Distanz: passt der Branch noch zu main? oder zu anderen Branches?

## Lösung

- Abstraktionen einführen 
- FeatureToggles verwenden
- eine zweite Implementierung erstellen und mittels Toggle mit der ersten tauschen
- Cleanup: entfernen der ersten Implementierung nach erfolgreicher Umstellung

## Vorgehen

- Interface erstellen
- alte Methoden umbenennen: z.B. legacyXXX
- neue Methoden ergänzen und Datenobjekte konvertieren (alte Methode weiterhin nutzen)
- Tests ergänzen (alte müssen bestehen bleiben)
- in den Services auf Interface und neue Methoden umstellen
- Aufräumen: aufgebaute Abstraktion wieder abbauen (inkl. Entfernung des Interfaces)

## Links

- Martin Fowler: [https://martinfowler.com/bliki/BranchByAbstraction.html](https://martinfowler.com/bliki/BranchByAbstraction.html)
- The Mikado Method: [https://www.manning.com/books/the-mikado-method](https://www.manning.com/books/the-mikado-method)
