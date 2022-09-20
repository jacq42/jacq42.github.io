---
layout: post
title:  SonarQube
tags: [ Java, Testing, Quality, CleanCode, Tools ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(50, 50, 150)
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
plugins {
	id 'org.sonarqube' version '3.0'
}

sonarqube {
  properties {
    property "sonar.projectName", "Projektname"
    property "sonar.projectKey", "Im Server konfigurierter Key"
    property "sonar.host.url", "http://localhost:9000"
  }
}

tasks['sonarqube'].dependsOn test
```

Analyse starten: `gradle sonarqube -Dsonar.login=<token>`\
Das Token muss über die UI erstellt werden.

#### Plugin in der IDE integrieren

In Eclipse oder STS über den Marketplace das [Plugin](https://marketplace.eclipse.org/content/sonarlint) installieren. Nach dem Neustart der IDE gibt es einen neuen Eintrag im Kontextmenü **Sonarlint**. Unter **Bind to SonarQube or SonarCloud** kann man den lokalen Server verbinden. Dann kann man mit **Analyze** die Analyse innerhalb der IDE starten. Bei Codeänderungen wird die Analyse automatisch ausgeführt. In den Klassen sieht man die Codesmells oder Bugs als unterstrichene Linien.

## Konfiguration auf dem Server

Man sollte zusammen mit allen Entwicklern einmal über die [Rules](https://docs.sonarqube.org/latest/user-guide/rules/) schauen und entscheiden, welche eingehalten werden sollen und welche evtl. keinen Sinn ergeben. Es sind im Server bereits Rules konfiguriert. Man sollte von diesem Set ein eigenes ableiten und darin Rules (de-)aktivieren. Dies erfolgt in der Adminoberfläche über: Quality Profiles -> Java -> Sonar Way -> Copy -> Fancy Namen auswählen. 

Um die Codequalität dauerhaft sicherzustellen, sollte der Server so konfiguriert werden, dass der Build bei einer zu schlechten Qualität bzw. einer zu hohen Anzahl von Bugs und Technical Depts den Build fehlschlagen lässt. Dafür lassen sich [Quality Gates](https://docs.sonarqube.org/latest/user-guide/quality-gates/) definieren.

## Gamification

Um die Jagd nach Bugs ein wenig spielerischer zu betreiben, gibt es [SonarQuest](https://www.viadee.de/sonarquest). Ich habe es noch nicht testen können, klingt aber vielversprechend.

## Rules ausschließen

Sollen innerhalb eines Projektes oder einer Klasse Rules ausgeschlossen werden, kann dies mit `@SuppressWarning("java:S1135")` an der Klasse/Methode geschehen.\
Zum Ausschluss gibt es auch die Möglichkeit über eine 'sonar-project.properties' oder über die Konfiguration im Server. 

