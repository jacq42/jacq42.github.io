---
layout: post
title:  "WIP: Kubernetes"
tags: [ Java, Container, Kubernetes ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

Was sind die Konzepte? Wie wende ich es an?

<!--more-->

Kubernetes ist eine Plattform zur Verwaltung von containerisierten Anwendungen (z.B. Docker). Kubernetes erleichtert die Konfiguration und die Automatisierung. Ist ein Open-Source-Projekt von Google (seit 2014 entwickelt).\
Unterstützt mehrere Container Laufzeiten: Docker, containerd, cri-o, rklet, ..

Warum K8s? Kubernetes stammt aus dem Griechischen und bedeutet Steuermann/Pilot. K8 = Abkürzung für K(ubernete) anhand der Anzahl der Buchstaben

Daneben gibt es auch [K3s](https://k3s.io/): eine abgespeckte Version von K8s, die sich leicht auf dem eigenen Laptop installieren lässt. Name leitet sich ab aus dem 10 buchstabigen K8s -> Hälfte = 5 Buchstaben -> also K3s. Sonst keine weitere Bedeutung.

## Konzepte

Mit _Kubernetes-API-Objekten_ lässt sich der Status des Clusters beschreiben: welche Containerimages verwendet werden, die Anzahl der Replikate etc. Die API kann man entweder direkt oder (besser) per `kubectl` verwenden. Ist der Status festgelegt, startet die Arbeit des _Kubernetes Control Plane_. Kubernetes führt verschiedene Aufgaben automatisch aus: (Neu-)Starten von Containern, Skalierung etc. Control Plane verwaltet Kubernetes Cluster
* Kubernetes Master hat 3 Prozesse auf einem einzelnen Node (= Master Node): 
    * `kube-apiserver`: stellt Kubernetes-API zur Verfügung (= Frontend für Steuerebene). REST API
    * `kube-scheduler`: überwacht neu erstellte Pods und weist sie Nodes zu. Auswahlkriterien: Ressourcen, welche Hardware ist gewünscht etc.
    * `kube-controller-manager`: Komponente, in der Controller ausgeführt werden
* jeder Nicht-Master-Node führt 2 Prozesse aus: 
    * `kubelet` (kommuniziert mit Master): führt Container in einem Pod ausgeführt werden (nur Kubernetes Container)
    * `kube-proxy` (Netzwerkproxy für den Node)
Ein Node kann eine VM oder eine physische Maschine sein.
Metadaten zum Cluster werden in einem Store gespeichert (etcd als Standard oder andere Datenbank). `etcd` ist ein Key-Value-Store\
Raft-Consensus Protocol: n/2+1 Knoten müssen live sein (Bei 3 Knoten kann 1 ausfallen, bei 5 können 2 ausfallen)

Basisobjekte:
* Pod: 
    * kleinste deployable Einheit, kleine Kapseln
    * eine Gruppe von 1 oder mehreren Containern, die zusammengehören (gemeinsamer Speicher, Netzwerkressourcen)
    * haben 1 IP Adresse
    * auf einem Node können mehrere Pods laufen
* Service
* Volume
* Namespace

Controller: bauen auf Basisobjekten, überwachen den Cluster Zustand und versuchen, den gewünschen Zustand sicherzustellen
* ReplicaSet
* Deployment
* StatefulSet
* DaemonSet
* Job

**Fazit:** Kubernetes besteht aus verschiedenen Komponenten, die miteinander zusammenspielen, die austauschbar sind (Docker oder containerd) und die skaliert werden können. Dadurch ist Kubernetes extrem flexibel aber auch komplex. Um diese Komplexität auf dem Entwicklerrechner zu umgehen, kann K3s genutzt werden.

## Praktische Anwendung

* Definition des Status in einer yaml Konfigurationsdatei
* Ausführen mit `kubectl apply -f myservice.yml`

## K3s

* nur 1 Binary mit allen Komponenten
* in Go programmiert
* vollwertiges Kubernetes
* kann auch auf Raspi ausgeführt werden
* einfache Defaults sind bereits gesetzt

## Demo

* [arkade](https://github.com/alexellis/arkade): Marketplace, um Helm Charts zu installieren
* [Helm](https://helm.sh/) Charts: Packagemanager für Kubernetes
* [k3sup](https://github.com/alexellis/k3sup) (gesprochen Ketchup): Kann auf Remoteservern k3s Server und Agent installieren (über ssh)

### K3s installieren (und Demo deployen)

1. K3s installieren: `curl -sfL https://get.k3s.io | sh -`
2. Prüfen: `sudo k3s kubectl get nodes`
3. [deployment.yml](/assets/data/deployment.yml) erstellen
4. Starten: `sudo k3s kubectl apply -f deployment.yml`
5. Pods anschauen: `sudo k3s kubectl get pods`
6. ifconfig IP herausfinden -> im Browser aufrufen -> sollte Startseite für nginx anzeigen
7. stoppen: `sudo k3s kubectl delete -f deployment.yml`

[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) stellt HTTP und HTTPS Routen von außerhalb des Clusters in den Cluster zur Verfügung

### Hochverfügbarkeitscluster aufsetzen

Cluster aus mehreren VMs aufbauen

Raft-Consensus Protocol: Bei 3 Nodes kann 1 Node wegbrechen und das Cluster ist noch healthy.

1. arkade installieren: `curl -sLS https://dl.get-arkade.dev | sudo sh`
2. k3sup installieren: `arkade get k3sup` und dann `sudo mv /home/<username>/.arkade/bin/k3sup /usr/local/bin` (wird nach dem Download angezeigt)
3. VMs erstellen und SSH Schlüssel hinterlegen
	* curl muss installiert sein
	* Portweiterleitung funktioniert nicht: `ssh -p 2222 user@127.0.0.1` um auf VM mit Port 22 zuzugreifen
	* Besser als 2. Netzwerkadapter Host-only setzen
4. Auf dem 1. Node ein Server installieren: `k3sup install --ip IP-ADRESS-SERVER --user root --cluster`
	* "--cluster" -> etcd anstatt SQLite
	* Fehlermeldung: _sudo: ein Terminal ist erforderlich, um das Passwort zu lesen; verwenden Sie entweder die Option -S zum Lesen von der Standardeingabe oder konfigurieren Sie einen Askpass-Helfer_
		* in der VM unter `/etc/sudoers.d/` eine neue Datei mit dem Username
		* Inhalt: `myuser ALL = (ALL) NOPASSWD: ALL`
		* Rechte ändern: chmod 0440 /etc/sudoers.d/myuser
5. Cluster testen: siehe den letzten Infos bei der Installation
    ``` 
    export KUBECONFIG=/home/<user>/.ssh/kubeconfig
    kubectl config set-context default
    kubectl get node -o wide
    ```
    * Ausgabe listet den neu erstellten Master auf:
    ```
    kubectl get node -o wide
	NAME                STATUS     ROLES         AGE   VERSION         INTERNAL-IP   EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
	ubuntu-virtualbox   NotReady   etcd,master   7s    v1.19.11+k3s1   10.0.2.15     <none>        Ubuntu 20.04.2 LTS   5.8.0-55-generic   containerd://1.4.4-k3s1
    ```
6. Weiteren Server zum Cluster hinzufügen: `k3sup join --ip IP-ADRESS-NEU --user root --server-user root --server-ip IP-ADRESS-SERVER --server`
	* endete bisher nur in der Fehlermeldung _Error: unable to setup agent: Process exited with status 1_
7. Nodes testen: `kubectl get nodes`
8. Noch einen Server hinzufügen: wie 6. nur andere IP
9. Noch einen Server hinzufügen: wie 6. nur andere IP
10. TBD (min. 36 des SK Videos)

## Links

* [Grundlagen lernen](https://kubernetes.io/de/docs/tutorials/kubernetes-basics/)
* [Vortrag in der Softwerkskammer](https://www.youtube.com/watch?v=545w9d_Kb5U)