---
layout: post
title:  Contextmapping
tags: [ DDD ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(50, 70,100)
---

<!--more-->

## Context Mapping

* = Landkarte der Kontexte
* Kontextübersicht skizzieren: Wie hängen die einzelnen Kontexte zusammen? Was sind die Abhängigkeiten?
* Auf Whiteboard oder Papier erstellen zusammen mit dem gesamten Team (Entwickler und Domänenexperten)
* Namen der Kontexte finden!

Anhand der erstellten Map lässt sich erkennen, wie die Teams zusammenarbeiten (müssen).

Tool zum digitalen Erstellen: [Context Mapper](https://contextmapper.org/)

### Patterns

![ContextMap Examples](/assets/img/jk/Examples_ContextMap.svg)

* Big Ball Of Mud
* In-Beetween Patterns:
	* Partnership (P)
	* Shared Kernel (SK)
		* Modell/Code/DB wird geteilt
		* kann nur geändert werden, wenn beide Teams zustimmen
	* Published Language (PL)
		* Austausch des Modells über eine definierte Spracht (WSDL)
		* wird oft zusammen mit dem Open Host Service verwendet
	* Separate Ways (SW)
		* es bestehen keine Beziehungen zwischen den Kontexten
		* in der Übersicht nur markieren, wenn keine Beziehungen bestehen sollen (sonst wird es zu unübersichtlich)
* Upstream Patterns:
	* Open Host Service (OHS)
		* Definition eines Protokolls, um anderen Systemen den Zugriff zu ermöglichen (REST, Soap)
	* Event Publisher (EP)
		* Publizierung eines Events (z.B. über Kafka)
    	* wer das Event nutzt, ist nicht bekannt
* Downstream Patterns:
	* Customer/Supplier (CS)
		* Downstream kann mitbestimmen, ob eine Änderung gemacht werden soll
		* Beispiel: APIs innerhalb einer Firma
	* Conformist (CF)
		* Downstream kann nicht mitbestimmen und muss auf Änderungen reagieren
		* Beispiel: öffentliche APIs wie z.B. von Facebook
	* Anticorruption Layer (ACL)
		* Tanslationlayer, um die Abhängigkeit zum Upstream Team zu minimieren
		* übersetzt das Modell des Upstream Teams in das eigene Modell
		* kann beidseitig sein
    	
### Context Mapper

Tool zum Erstellen von ContextMaps. Es gibt ein [Eclipse Plugin](https://marketplace.eclipse.org/content/context-mapper).\
Möchte man die Map grafisch erstellen lassen, muss [GraphViz](https://graphviz.org/) installiert sein.

1. Neues Projekt erstellen oder vorhandenes nutzen
2. Configure > Convert to Xtext Project
3. *.cml Datei erstellen
4. Im Kontextmenü: Context Mapper > Generate Graphical Context Map
5. ContextMap wird unter **src-gen** erstellt

Auflistung der einzelnen Beziehungen ab [hier](https://contextmapper.org/docs/language-reference/)