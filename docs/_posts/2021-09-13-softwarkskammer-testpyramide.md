---
layout: post
title:  Testpyramide
tags: [ Quality, Testing, Meetup ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

In der [Softwerkskammer Köln](https://www.meetup.com/de-DE/Softwerkskammer-Koln/) gab es einen Vortrag über [The pyramid is dead, long live the pyramid](https://www.meetup.com/de-DE/Softwerkskammer-Koln/events/280315089/) von [Ramona Schwering](https://twitter.com/leichteckig). Hier einige Stichpunkte daraus:

## Test Typen

* **Manuelles Testen**: sowohl per Checkliste als auch Exploratives Testen
* **Unit Tests**
* **Integration Tests**
* **End-to-End Tests**: Sicht eines Users annehmen. Klicks nachbilden. Langsam.

## Test Pyramide

* ![Test Pyramide](https://www.mountaingoatsoftware.com/uploads/blog/Testpyramid.jpg)
* Von [Mike Cohn](https://www.mountaingoatsoftware.com/blog/the-forgotten-layer-of-the-test-automation-pyramid)
* Erweitert/Verbreitet u.a. von [Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html)
* Wenn Unit Tests zu groß sind, wird aus dem unteren Layer eher ein Servicetest

## Test Diamant

* Unit Tests sind anfällig für Änderungen
* Wenn zu kleinteilig, dann meist auch zu aufwändig
* Layer mit Unit Tests einschrumpfen (= Spizte des Diamanten)
* 4 Layer: e2e -> System (Komponenten) -> Integration (Service) -> Unit

* Manueller Test sollte nicht ersetzt werden
* Automatisches Testen sollte Routineaufgaben übernehmen, nicht komplettes Testen

## Eistüte aka Pizzastück

* Eiskugeln = Manuelles Testen

## Testing crab

* ?
* Visual Testing (Screenshotvergleiche): [percy](https://percy.io)

* wenn die Pyramide umgedreht wird, es also mehr e2e Tests gibt, dann ist das Testen ansich sehr zeitaufwändig

## Testing Trophäe

* unterhalb der Unit Tests gibt es noch einen Sockel mit statischen Tests (ESLint, Sonar)
* Manuelle Test befinden sich um die Trophäe herum

## Was sollte man testen?

* häufige Workflows
* kritische Pfade (die am meisten Schaden anrichten)
* Tests sollten einfach in der Wartung sein, performant laufen, wirkliche Fehler finden -> sollen Vertrauen in die Tests und die Software schaffen
* Form/Shape ist eher zweitrangig und kann sich von Projekt zu Projekt unterscheiden

## Weitere Links zum Thema testen allgemein

* [End to End Test mit Cypress.io](https://www.youtube.com/watch?v=-vekdbWRWvI)
* [Testing Without Mocks: A Pattern Language](http://www.jamesshore.com/v2/blog/2018/testing-without-mocks)
* [TDD Lunch & Learn](http://www.jamesshore.com/v2/projects/lunch-and-learn)
* London <-> Detroit: [Mocking as a Design Tool](https://www.codurance.com/publications/2018/10/18/mocking-as-a-design-tool)
* Exploratives Testen:
    * Testcharta definieren und nach gesetzter Zeit aufhören
    * man findet oft die meisten Fehler
    * [Lets explore](https://slides.com/mkutz/exploratory-testing-introduction)
    * Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing (978-1937785024)
* Flaky Tests:
    * Wann entfernen? -> besser disablen und überprüfen (muss sofort mit Ticket geschehen oder im aktuellen/nächsten Sprint)
    * [Flaky Tests](https://www.youtube.com/watch?v=5VMvCZaGW_c)

## Abseits vom Thema aber auch interessant
* Lizenzfreie Bilder von [unsplash](https://unsplash.com)
