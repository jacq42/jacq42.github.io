---
layout: post
title:  Sonargraph
tags: [ Quality, Tools ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(50, 50, 150)
---

<!--more-->

[Sonargraph Explorer](https://www.hello2morrow.com/products/sonargraph/explorer) ist ein statisches Codeanalyse Tool. Damit können die Abhängigkeiten von Packages/Klassen in einem Projekt visualisiert werden.

## Installation

Man muss sich einmal registrieren, um eine Lizenz zu bekommen. In der Software muss man einen Aktivierungscode eingeben und bekommt dann eine Lizenz. Diese muss man hin und wieder erneuern.

Bei einer Neuinstallation einfach [einloggen](https://www.hello2morrow.com/session/new). Unter **Your Licenses** findet man die aktuelle Lizenz (eventuell muss diese erneuert werden). Den Aktivierungscode kopieren und beim Start in den Dialog eintragen, um eine neue Lizenz zu installieren.

Beim Versuch, das Ganze unter /opt/ laufen zu lassen, hat sich die Software nicht aktualisiert und es wurden keine Bilder erstellt. Am besten, man installiert es (bzw. es wird ja nur entpackt) unter dem aktuellen Benutzer und startet es mit den eigenen Rechten.

## Projekt erstellen und analysieren

1. Neues System erstellen
2. Neues Java-Module hinzufügen
3. Neues Root-Directory hinzufügen: .../build/classes/java/main auswählen (funktioniert auch mit Kotlin)
4. System refresh durchführen
5. Show in Exploration View

## Analysen

Im **Exploration View** erkennt man die Zugriffe zwischen den einzelnen Packages. Verkürzt: Linien auf der linken Seite des Klassennamens sind OK, Linien auf der rechten sind Rückläufer und sollten näher untersucht werden.

Im **Graph View** kann man sich die Zugriffe einzelner Klassen genauer anschauen. Da am besten **Advanced** und **Only internal** auswählen, sonst wird es zu unübersichtlich.

Im **Issues View** sieht man noch einmal eine Auflistung der Probleme.

Im **Cycle Groups View** kann man erkennen, ob man zyklische Abhängigkeiten eingebaut hat.

## Beispiele

Analyse von einer Beispiel [Springboot Anwendung](https://github.com/jacq42/todo-a-rest/tree/main/backend), welche mit der Hexagonalen Architektur umgesetzt wurde

_Sonargraph kommt mit dem Darktheme nicht so wirklich zurecht_

Packagestruktur:

![Packagestruktur](/assets/img/jk/sonargraph_example_packages.png)

Einzelne Klasse im Graph:

![Graph TodoService](/assets/img/jk/sonargraph_example_graph.png)

