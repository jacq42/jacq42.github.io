---
layout: post
title:  "JUnit5: NoSuchMethodError"
tags: [ Java, Testing, JUnit ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Cause: *Configuration error: You must configure at least one set of arguments for this @ParameterizedTest*

<!--more-->

## Fehlerbeschreibung

Der Fehler trat bei der Verwendung von 
```java
@ParameterizedTest
@MethodSource
```
auf. Bei Verwendung von 
```java
@ParameterizedTest
@ArgumentsSource
``` 
trat der Fehler nicht auf. Allerdings ist ein `ArgumentsProvider` nicht in jedem Fall sinnig und z.T. auch unübersichtlicher.

## Ursache und Lösung

Im Projekt wurden durch eine transitive Abhängigkeit mehrere Versionen der junit-platform verwendet (konkret: Version 1.5.0 und 1.7.2).
Nach Ausschluss der Version 1.5.0 bestand der Fehler nicht mehr und es konnte wie gewünscht `@MethodSource` verwendet werden.

Die Fehlersuche war leider etwas schwierig, da die Methode mit dem Namen ja vorhanden war, aber scheinbar nicht gefunden wurde.