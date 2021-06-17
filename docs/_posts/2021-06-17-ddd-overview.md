---
layout: post
title:  Domain Driven Design
tags: [ DDD ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(50, 70,100)
---

Was ist Domain Driven Design? Welche Tools enthält die Werkzeugbox?

<!--more-->

Domain Driven Design (DDD) ist kein Framework oder Tool sondern ein Potpouri. Es gibt eine Unterscheidung in taktisches und strategisches Design.\
Im **taktischen Design** sind die Buildingblocks enthalten (Aggregate, Entity, ValueObject etc.). Hier bekommt der Entwickler konkrete Dinge für die Umsetzung an die Hand.\
Im **strategischen Design** wird versucht, mit dem gesamten Team (Developer + Domänenexperten) den/die Bounded Contexte, die Ubiquitous Language und die Context Map(s) zu erstellen. Anhand dessen sollte die Software geschnitten werden, damit die Teams möglichst unabhängig voneinander agieren können. Der Schnitt der Software erfolgt fachlich und nicht technisch.

## Definition

| Domain, Domainmodel

## Context matters

Ein Begriff in Context A hat eine andere Bedeutung als der gleiche Begriff in Context B.

![Context matters](/assets/img/jk/ContextMatters.png){:width='75%'}

**Beispiel: Kunde in einem Onlineshop**

Im __Kontext Bestellung__ sind Eigenschaften wie z.B. die Adresse wichtig. Im __Kontext Abrechnung__ sind Eigenschaften wie Zahlungsmöglichkeiten, Zahlungsmoral etc. wichtig. Ein globales Modell vom Kunden macht keinen Sinn, da nicht in jedem Kontext die Informationen benötigt werden und evtl. auch nicht bekannt sein sollen.

## Bounded Context

* Semantische Einheit
* Grenze, innerhalb deren ein Modell seine Gültigkeit hat
* Ubiquitous Language

* Problem Space -> ContextMap
* Solution Space

## Context Mapping

* = Landkarte der Kontexte
* Kontextübersicht skizzieren: Wie hängen die einzelnen Kontexte zusammen? Was sind die Abhängigkeiten?
* Auf Whiteboard oder Papier erstellen zusammen mit dem gesamten Team (Entwickler und Domänenexperten)
* Namen der Kontexte finden!

Eine etwas detailiertere Sicht inklusive der einzelnen Patterns gibt es in einem eigenen Beitrag.

## Ubiquitous Language

Innerhalb der Domäne gibt es eine gemeinsame Sprache. Diese wird von allen gesprochen: von den Entwicklern und von den Domänenexperten. So kann es nicht zu "Übersetzungsfehlern" kommen. Das bedeutet auch, wenn deutsche Fachbegriffe verwendet werden, sollte diese nicht in der Software ins Englische übersetzt werden. Ein "Vertrag" bleibt ein "Vertrag" und wird nicht zum "Contract".\
Jeder Kontext hat seine eigene Uqiquitous Language. Da ein Begriff in unterschiedlichen Kontexten unterschiedliche Bedeutung haben kann, bedeutet ein Kunde in Kontext A wahrscheinlich etwas anderes als ein Kunde in Kontext B.

## Literatur

* [Blue Book von Eric Evans](https://www.domainlanguage.com/ddd/blue-book/)
* [DDD Referenz DE](https://ddd-referenz.de/){:target='blank'}
* [DDD Referenz EN](https://www.domainlanguage.com/ddd/reference/){:target='blank'}