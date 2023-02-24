---
layout: post
title:  "Asciidoctor"
tags: [ CleanCode, CodeQuality, Documentation ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

docs-as-code

<!--more-->

Mit dem [Asciidoctor](https://docs.asciidoctor.org/) zusammen mit dem [Gradle Plugin](https://github.com/asciidoctor/asciidoctor-gradle-plugin)
lassen sich technische Dokumentationen sehr leicht nah am Code erstellen. Kein endloses Suchen in Confluenceseiten oder ständiges Nachfragen bei Kollegen mehr.

Wenn die Dokumentation im Repository selbst anstatt in einer vom Code getrennten Confluenceseite erfolgt, ist die Wahrscheinlichkeit, dass sie sich auf dem 
aktuellen Stand befindet, deutlich höher. (Fast) nichts ist schlimmer als veraltete Doku, die mit viel Herzblut erstellt wurde und man erst durch aufwändige
Recherche herausfinden muss, ob nun die Doku oder der Code die Wahrheit enthält. Eine sich selbst generierende Doku lässt das Entwicklerherz höher schlagen.

## HowTo

1. Seite(n) anlegen

Unter `src/docs/asciidoc` eine AsciiDoc Datei `xxx.adoc` erstellen. Diese könnte z.B. so aussehen: [`src/docs/asciidoc/xxx.adoc`]
```
= Überschrift  
// toc-title definition MUST follow document title without blank line!  
:toc-title: Inhaltsverzeichnis
  
// configure settings for asciidoc  
include::src/config.adoc[]  
  
// numbering from here on  
:numbered:  
  
<<<<  
// Kapitel 1
include::src/01_name_des_kapitels.adoc[]

<<<<  
// Kapitel 2
include::src/02_name_des_kapitels.adoc[]
```

Mit der include Direktive werden weitere Seiten inkludiert. Diese haben einen ähnlichen Aufbau: [`src/docs/asciidoc/src/01_name_des_kapitels.adoc`]
```
[[section-kapitel1]]  
== Überschrift Kapitel 1
  
Some content
```

2. Gradle Plugin konfigurieren

Example kotlin.dsl:
```
plugins {  
   id("org.asciidoctor.jvm.convert") version "3.3.2"  
}

tasks.withType<AsciidoctorTask> {  
   sources(delegateClosureOf<PatternSet> {  
      include("xxx.adoc")  
   })  
   baseDirFollowsSourceDir()  
}
```

Example gradle Style:
```
plugins {
  id 'org.asciidoctor.jvm.convert' version '3.3.2'
}

asciidoctor {
  dependsOn 'build'

  baseDirFollowsSourceFile()

  sources {
    include 'xxx.adoc'
  }
}
```
Dann wird mit `./gradlew asciidoctor` die Dokumentation unter `build/docs/asciidoc` als Htmlseite erstellt (Pdf ist auch möglich, muss aber konfiguriert werden).

## Templates

Für eine technische Dokumentation eines Services kann das [arc42 Template](https://arc42.org/overview) verwendet werden. Allerdings sollte der Service eine
gewisse Größe haben, da das Template recht umfangreich ist. Natürlich kann es jederzeit auf die eigenen Bedürfnisse angepasst werden.

## Und noch mehr

Wenn man jetzt noch [doctoolchain](http://doctoolchain.org/docToolchain/v2.0.x/) verwendet, kann man die Doku aus verschiedenen Elementen zusammenfügen und auch 
wieder als Confluenceseite erscheinen lassen.