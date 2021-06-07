---
layout: post
title: Mediendatenbank
#feature-img: "assets/img/portfolio/github.png"
img: "assets/img/portfolio/github.png"
tags: [ dev, Java, Springboot ]
---

Dieses Projekt war eine "Fingerübung". 

Ziel: Erstellen einer Springboot Anwendung zum Verwalten von TODOs. 

Aufgaben:
* Es gibt einen RESTController mit Endpunkten zum Erstellen, Löschen und Auflisten der TODOs
* Es gibt eine UI, die die TODOs anzeigt und löschen kann
* Es gibt eine Postman Collection, um die Endpunkte ansprechen zu können

Gedanken zur Umsetzung:

Backend:
* Erstellen einer Springboot Anwendung mit dem Spring Initializer über die IDE
* Verwenden der Hexagonalen Architektur
* Verwendung von Entitys und ValueObjects für die Domäne
* Erstellung eines RESTControllers als Port

Frontend:
* Erstellen einer REACT Anwendung mit `npx create-react-app frontend`
* Erstellen eines Service zum Holen und Löschen der TODOs
* Erstellen einer Komponente zur Darstellung als Tabelle

Zusammenbau:
* Gradle Plugin zum Mergen des gebauten Frontend in das Backend
* Auslieferung der gesamten Anwendung als ein gemeinsames JAR