---
layout: post
title:  Json Views
tags: [ Java, json, jackson ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

Json Views können dazu verwendet werden, um je nach Anwendungsfall mehr oder weniger Parameter eines Objekts in ein Json zu Serialisieren/Deserialisieren.

Dafür müssen verschiedene Views definiert werden:

```java
public class Views {
    public static class Minimal { }
    public static class Extended extends Minimal { }
}
```

Im DTO werden die Parameter den Views zugeordnet:

```java
public class User {
    @JsonView(Views.Minimal.class)
    public int id;

    @JsonView(Views.Minimal.class)
    public String name;
    
    @JsonView(Views.Extended.class)
    public String category;
}
```

Werden keine JsonView Annotation an einem Parameter gesetzt, sind automatisch alle konfigurierten Views erlaubt.

Zur Umwandlung in den richtigen Typ muss nur noch am Controller / der Ressource der gewünscht View konfiguriert werden:

```java
@JsonView(Views.Minimal.class)
@RequestMapping("/user/{id}")
public User getUser(@PathVariable int id) {
    return userService.getUserBy(id);
}
```

Ergibt: 
```json
{"id": 1, "name": "Max Mustermann"}
  ```

Bei der Konfiguration von:
```java

@JsonView(Views.Extended.class)
@RequestMapping("/user/{id}")
public User getUserDetails(@PathVariable int id) {
    return userService.getUserBy(id);
}
```
wäre das Ergebnis:
```json
{"id": 1, "name": "Max Mustermann", "category":  "INTERNAL"}
  ```

Link: siehe auch [Baeldung](https://www.baeldung.com/jackson-json-view-annotation)