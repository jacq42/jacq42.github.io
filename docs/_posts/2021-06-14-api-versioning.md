---
layout: post
title:  "API Versionierung"
tags: [ Java, API ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Welche Möglichkeiten gibt es?

<!--more-->

## Zu beachtende Punkte

* Rückwärtskompatibität beachten
* Major Versionen vermeiden
* Vorwärtsrkompatibilität berücksichtigen
  
* siehe dazu [hier]( https://www.mnot.net/blog/2012/12/04/api-evolution)

## 3 Wege, es falsch zu machen

1. Version in der URL lassen: 
	* `/api/v1/...`
2. Version im MediaType des Accept Header übertragen: 
	* `application/vnd.myname.v1+json` oder `application/vnd.myname+json; version=2`
3. Custom Request Header verwenden:
	* `api-version: 2`
	
### URL

(+) durch Nutzung von HATEOAS wird der Client automatisch auf die neue Version geleitet\
(-) URL wird länger\
(-) wenn eine Änderung an einer Resource passiert, muss die gesamte API auf die neue Version gesetzt werden: /api/v2/.. (auch die Resourcen, die sich nicht geändert haben\
(-) Cache muss mehrere Versionen der gleichen Resource haben\
(-) Cache Invalidierung funktioniert nicht mehr über mehrere Versionen\
(-) Clientcaching ist einfacher, da Caching mit URL als Key einfacher ist, als MediaType als Key\

### Accept Header

(+) nur die Resourcen, die sich geändert haben, müssen in beiden Versionen vorhanden sein\
(-) für das Caching muss ein Vary HTTP Header verwendet werden: siehe auch [hier](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.44)

### Request Header	

(-) die Resource ist jetzt nicht nur durch eine URL, sondern eine Kombination von URL + Header definiert\
(+) URL der Resource ändert sich nicht

## Links:
* [Stackoverflow - how-to-manage-rest-api-versioning-with-spring](http://stackoverflow.com/questions/20198275/how-to-manage-rest-api-versioning-with-spring)
* [Baeldung - rest-versioning](http://www.baeldung.com/rest-versioning)
* [dzone - your-api-versioning-wrong](https://dzone.com/articles/your-api-versioning-wrong)