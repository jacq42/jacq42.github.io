---
layout: post
title:  SonarQube
tags: [ Java, Testing, Quality, CleanCode ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Wie lässt sich damit effizient die Qualität verbessern?

<!--more-->

## Was ist SonarQube?

[SonarQube](https://www.sonarqube.org/) ist ein Tool, um die Codequalität und -sicherheit sicherzustellen. Die wird über statische Codeanalysen durchgeführt. Dem Entwickler werden Bugs, technical depts und Sicherheitsrisiken angezeigt.

Hier eine [Architekturübersicht](https://docs.sonarqube.org/latest/architecture/architecture-integration/).

## Anwendung im Projekt

### Einbindung auf dem CI Server

In der Buildpipeline sollte nach dem Ausführen der Tests die Codeanalyse durchgeführt werden.

Dafür muss in der Pipeline der [SonarScanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-jenkins/) konfiguriert werden. 

Auf dem Jenkins wird der Scanner installiert und konfiguriert. In der `build.gradle` muss sonarqube bereits integriert sein, so dass mit einem Gradletask die Analyse gestartet werden kann. Nun kann in der Pipeline eine neue stage hinzugefügt werden:
```
  stage('SonarQube analysis') {
    withSonarQubeEnv() { // Will pick the global server connection you have configured
      sh './gradlew sonarqube'
    }
  }
```

### Während der Entwicklung

Während der Entwicklung kann dies lokal auf dem Rechner ausgeführt werden. Der Sonarserver lässt sich als Docker Container starten. Dann kann man entweder einen Gradletask aufrufen, um die Analyse zu starten oder man nutzt das [SonarLint](https://www.sonarlint.org/) Plugin, um die Analyse in der IDE zu nutzen.

Server als [Docker Container](https://hub.docker.com/_/sonarqube) starten:
```
docker run -d --name sonarqube -p 9000:9000 sonarqube
docker start sonarqube
```
Dann sollte die [grafische Oberfläche](http://localhost:9000/) erreichbar sein. Wenn nach einem Passwort gefragt wird: admin/admin.

Konfiguration im Gradle Projekt:
```
apply plugin: 'org.sonarqube'

buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "org.sonarsource.scanner.gradle:sonarqube-gradle-plugin:2.6.2"
  }
}

sonarqube {
  // Starten mit gradle sonarqube -Dsonar.jdbc.url=jdbc:postgresql://localhost:5432/sonar -Dsonar.verbose=true
  properties {
    property "sonar.projectName", "Projektname"
    property "sonar.projectKey", "Key anhand Packagestruktur?"
    property "sonar.jacoco.reportPath", "${project.buildDir}/jacoco/test.exec"
  }
}
```

Analyse starten: `gradle sonarqube -Dsonar.jdbc.url=jdbc:postgresql://localhost:5432/sonar -Dsonar.verbose=true`

## Konfiguration auf dem Server

Man sollte zusammen mit allen Entwicklern einmal über die [Rules](https://docs.sonarqube.org/latest/user-guide/rules/) schauen und entscheiden, welche eingehalten werden sollen und welche evtl. keinen Sinn ergeben. Es sind im Server bereits Rules konfiguriert. Man sollte von diesem Set ein eigenes ableiten und darin Rules (de-)aktivieren. Dies erfolgt in der Adminoberfläche über: Quality Profiles -> Java -> Sonar Way -> Copy -> Fancy Namen auswählen. 

Um die Codequalität dauerhaft sicherzustellen, sollte der Server so konfiguriert werden, dass der Build bei einer zu schlechten Qualität bzw. einer zu hohen Anzahl von Bugs und Technical Depts den Build fehlschlagen lässt. Dafür lassen sich [Quality Gates](https://docs.sonarqube.org/latest/user-guide/quality-gates/) definieren.


## Gamification

Um die Jagd nach Bugs ein wenig spielerischer zu betreiben, gibt es [SonarQuest](https://www.viadee.de/sonarquest). Ich habe es noch nicht testen können, klingt aber vielversprechend.

