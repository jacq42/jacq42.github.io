---
layout: post
title:  Update Gradle Wrapper
tags: [ Gradle, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

The propper way

<!--more-->

Die gewünschte Version auswählen: https://gradle.org/releases/

```
./gradlew wrapper --gradle-version <Versionsnummer> --distribution-type bin
```

Danach steht in der `gradle/wrapper/gradle-wrapper.properties` die neue Version drin und beim nächsten Gradlebuild wird
die aktuelle Version geladen.