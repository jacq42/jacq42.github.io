---
layout: post
title:  Analyze Dependencies
tags: [ Gradle, dev ]
author: jacq42
lastupdate: 2024-02-22
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
```groovy
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
```kotlin.dsl
tasks.named<AnalyzeDependenciesTask>("analyzeClassesDependencies") {
    warnUsedUndeclared = true
    warnUnusedDeclared = true
    logDependencyInformationToFiles = true
}

ttasks.named<AnalyzeDependenciesTask>('analyzeTestClassesDependencies') {
    warnUsedUndeclared = true
    warnUnusedDeclared = true
    logDependencyInformationToFiles = true
}
```

Beim Aufäumen kann es sein, dass man Libs, die man verwendet, nicht deklarieren möchte (weil man den Root bereits verwendet).
Dann kann man mit `permitTestUsedUndeclared` die Fehlermeldung unterdrücken.

Im umgekehrten Fall kann es sein, dass man eine Lib deklariert, aber nicht verwendet.
Dann kann man mit `permitTestUnusedDeclared` auch hier die Fehlermeldung unterdücken. 

Auf der [Readme der Pluginseite]((https://github.com/gradle-dependency-analyze/gradle-dependency-analyze)) findet man noch weitere Beispiel für die Configuration.