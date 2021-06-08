---
layout: post
title:  Value Object
tags: [ DDD, Java, CleanCode ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Was sind die Vorteile? Gibt es Nachteile?

<!--more-->

## Der Code wird lesbarer

`Map<Long, String>` lässt nicht erkennen, um was für eine Map es sich handelt.\
`Map<PersonId, PhoneNumber>` macht deutlich, um welche Objekte es sich in der Map handelt.

## Verhindert falsche Verwendung

Dies würde kompilieren und keinen Fehler werfen
```java
Police(String vsnr, String pid) {}

new Police("pid", "vsnr");
```

Um eine Verwechslung zu vermeiden sollte man ValueObjects verwenden. Dann würde es einen Compile Fehler geben.
```java
Police(VSNR vsnr, PoliceId pid) {}

new Police(pid, vsnr);
```

## Weniger Anpassung bei Änderung der internen Repräsentation

Wenn sich die interne Repräsentation ändert, ist der äußere Code davon nicht betroffen. Wenn z.B. bei einer Versicherungsnummer (VSNR) bisher ein Long verwendet wurde und daraus jetzt ein String wird, weil sich der Aufbau der ID verändert hat, muss das ValueObject selbst angepasst werden. An den Stellen, wo das Objekt übergeben wird, muss es nicht angepasst werden.

## Kapselung der Validierung

Die Prüfung, ob es sich um ein valides Objekt handelt, erfolgt im ValueObject selbst. Es muss / kann nicht mehr mehrere Stellen geben, an denen diese Validierung stattfindet bzw. stattfinden kann. Der Entwickler findet sie an der gesuchten Stelle und kann sie ggf. anpassen, wenn sich daran etwas ändert.\
Bei der Erstellung des ValueObjects wird vorher geprüft, ob es gültig ist. Nur dann wird ein Objekt zurückgegeben. **Ein ValueObject ist immer gültig.**

## Zusammenfassung

Vorteile:
* Typsicherheit
* hiding implementation
* Logik an einer Stelle

Nachteil:
* Es entstehen mehr Klassen, die aber meist recht übersichtlich sind