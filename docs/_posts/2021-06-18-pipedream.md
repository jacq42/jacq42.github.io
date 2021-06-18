---
layout: post
title:  pipedream
tags: [ Tools, API ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

## Was ist pipedream?

[pipedream](https://pipedream.com/) ist ein Tool, um APIs zu verbinden und damit Workflows zu erstellen.\
Es gibt Trigger und es gibt Aktionen. Man kann konfigurieren, was beim Auslösen eines Triggers passieren soll. Dafür definiert man einen oder mehrere Steps.

Ein Trigger ist z.B. ein HTTP-Request. Wenn dieser empfangen wird, kann eine Email gesendet werden oder es kann eine Slack Nachricht erstellt werden.

Es gibt eine freie Version und auch bezahlte Versionen: [siehe hier](https://pipedream.com/pricing)

## Beispielanwendung

Ein [Workflow](https://pipedream.com/@jacq42/http2slack-p_aNCjmlm), der aus dem Json Payload eines HTTP-Request den firstname und lastname auswählt und diesen an einen Slackchannel sendet.

Es gibt ein kurzes [Youtube Tutorial](https://www.youtube.com/watch?v=ivkE26ZsyUo).

## Wat soll dä Quatsch?

* man kann auf einfache Art und Weise APIs miteinander verbinden
* man muss nur sehr wenig Code schreiben (wenn überhaupt)
* man kann es aber auch zum Testen von APIs nutzen: bevor man die Anbindung in der eigenen Anwendung einbaut, hier mal eben testen
* es sind sehr viele Trigger und Aktionen vorhanden (HTTP, Email, SMS über Twilio, github, Slack, Trello, ...)