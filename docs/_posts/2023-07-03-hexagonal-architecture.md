---
layout: post
title:  Hexagonale Architektur
tags: [ CleanCode, CodeQuality ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

## Was ist das?

- Isolation der Corelogik von äußeren Technologien
- Businesslogik (Domäne) ist frei von Technologien
- Logik ist nicht über verschiedene Services, Handler, Mapper, Controller etc. verteilt
- Zugriff von außen an einem Ports über einen Adapter (z.B. einen Controller)
- Zugriff nach außen ebenfalls an einem Port über einen Adapter (z.B. Repository für ein DB Zugriff)

- Klassen und Objekte innerhalb einer Schicht dürfen nur auf Klassen und Objekte innerhalb der gleichen Schicht oder einer Schicht innerhalb zugreifen:
    - Domain nur auf Domain
    - Application Services auf Domain und Services
    - Port and Adapter auf Domain, Services and Ports and Adapter

## Links

[Einführende Erklärung](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c)
[Alistair Cockburn’s original paper on Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)