---
layout: post
title:  Spring native image
tags: [ Java, Spring, GraalVM ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

Siehe auch 
* in der [Spring native Doku](https://docs.spring.io/spring-native/docs/current/reference/htmlsingle/)
* im [Repo](https://github.com/spring-projects-experimental/spring-native)

## Konfiguration

In der `build.gradle` ergänzen:
```groovy
plugins {
  id 'org.springframework.experimental.aot' version '0.10.3'
  id 'org.graalvm.buildtools.native' version '0.9.3'
}

repositories {
  maven { url 'https://repo.spring.io/release' }
  mavenCentral()
}

bootBuildImage {
  builder = 'paketobuildpacks/builder:tiny'
  environment = ['BP_NATIVE_IMAGE': 'true']
}

nativeBuild {
  classpath processAotResources.outputs, compileAotJava.outputs
}

nativeTest {
  classpath processAotTestResources.outputs, compileAotTestJava.outputs
}
```

## Image erstellen

`./gradlew bootbuildImage`

## Mögliche Fehlermeldungen

1. No access hint found

Trat auf bei Verwendung des AxonFrameworks und der Spring Autoconfiguration 

```
* What went wrong:
Execution failed for task ':generateAot'.
> No access hint found for import selector: org.axonframework.spring.config.SpringAxonAutoConfigurer$ImportSelector
```

Lösung: ???
* Mit dem GraalVM Tracing Agent die benötigten Dateien unter `src/main/resources/META-INF/native-image` erstellen lassen [Anleitung hier]({% post_url 2021-09-08-graalvm%}) -> Fehler tritt weiterhin auf