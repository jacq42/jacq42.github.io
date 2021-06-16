---
layout: post
title:  "Kubernetes CKAD"
tags: [ Java, Container, Kubernetes ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Vorbereitung auf das [CKAD Zertifikat](https://www.cncf.io/certification/ckad/)

<!--more-->

## Links

* [Certified Kubernetes Application Developer Certificate](https://www.cncf.io/certification/ckad/)
* Vorbereitung auf CKAD auf [freecodecamp](https://www.freecodecamp.org/news/how-to-become-a-certified-kubernetes-application-developer/)

## ???

Pod erstellen: `sudo k3s kubectl run busybox --image=busybox --restart=Never --rm -it -- echo "Welcome to Kubernetescd"`
```
Welcome to Kubernetescd
pod "busybox" deleted
```

Interaktiven Pod erstellen: `sudo k3s kubectl run busybox -i --image=busybox --restart=Never --rm -it --` Abbruch mit Strg+D
```
If you don't see a command prompt, try pressing enter.
/ # echo "Hello world"
Hello world
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ # 
pod "busybox" deleted
```

## Clusterkonzepte

### Namespace

Zum Erstellen von virtuellen Clustern innerhalb des physischen Clusters.\
* Erstellen von Environments: dev, stage, QA, prod
* Komplexes System in Subsysteme aufbrechen
* Vermeidung von Namenkollisionen: Die gleiche Ressource kann mit dem gleichen Namen in unterschiedlichen Namespaces erstellt werden

Erstellen: `kubectl create namespace my-namespace`
Auflisten: `kubectl get namespaces`
Löschen: `kubectl delete namespace my-namespace`