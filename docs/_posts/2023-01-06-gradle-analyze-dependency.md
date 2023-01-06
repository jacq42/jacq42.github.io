---
layout: post
title:  Analyze Dependencies
tags: [ Gradle, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Cleanup your dependencies

<!--more-->

Es gibt für Gradle ein [Plugin](https://github.com/gradle-dependency-analyze/gradle-dependency-analyze), welches die eingebundenen Dependencies analysiert.

Um "sauber" zu arbeiten, sollten alle verwendeten Dependencies auch deklariert werden und alle nicht verwendeten Dependencies nicht unnötigerweise eingebunden werden.

Dafür muss lediglich in der `build.gradle` das Plugin integrieren werden:
```
plugins {
    id "ca.cutterslade.analyze" version "1.9.0"
}
```

Für ein Multimodule Projekt muss die Konfiguration etwas erweitert werden:
```
allprojects {
    apply plugin: "ca.cutterslade.analyze"
}
```

Dann kann auch schon die Analyse mit `./gradlew analyzeDependencies` ausgeführt werden. Beim Verstoß gegen oben genannte Konventionen schlägt der Build fehl.
Um bei Verwendung des Plugins in ein bestehendes Projekt nicht Stunden bis Tage mit dem Aufräumen der Dependencies zu verbingen, kann man auch nur eine Warnung ausgeben und den Build nicht fehlschlagen lassen. Dann hat man genügend Zeit, einmal feucht durchzuwischen (:sweat_drops:) :
```
tasks.named('analyzeClassesDependencies').configure {
    warnUsedUndeclared = true
    warnUnusedDeclared = true
    logDependencyInformationToFiles = true
}

tasks.named('analyzeTestClassesDependencies').configure {
    warnUsedUndeclared = true
    warnUnusedDeclared = true
    logDependencyInformationToFiles = true
}
```