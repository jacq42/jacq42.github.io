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

Um "sauber" zu arbeiten, sollte alle verwendeten Dependencies auch deklariert werden und alle nicht verwendeten Dependencies auch nicht unnötigerweise eingebunden werden.

Dafür kann man in der `build.gradle` das Plugin integrieren:
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

Die Analyse kann dann mit `./gradlew analyzeDependencies` ausgeführt werden. Der Build schlägt fehl, wenn Dependencies konfiguriert wurden, die nicht verwendet werden oder verwendete (transitive) Dependencies nicht konfiguriert wurden.
Um bei Verwendung des Plugins in ein bestehendes Projekt nicht Tage mit dem Aufräumen der Dependencies zu verbingen, kann man auch nur eine Warnung ausgeben und den Build nicht fehlschlagen lassen:
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