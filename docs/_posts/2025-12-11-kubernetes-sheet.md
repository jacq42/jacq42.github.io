---
layout: post
title:  "Kubernetes data sheet"
tags: [ Kubernetes, dev ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(175, 175, 175)
---

List of most important commands

<!--more-->

Assumption: Use of `k`as alias for `kubectrl`

## Generic

- List names of all resources: `k api-resources`
- List resources in default namespace: `k get RESOURCE_TYPE` 
- List resources in specified namespace: `k get RESOURCE_TYPE -n NAMESPACE`
- List resources in all namespaces: `k get RESOURCE_TYPE -A`

- Describe resource `k describe RESOURCE_NAME`

- Create definition file of existing resource: `k get RESOURCE_TYPE RESOURCE_NAME -o yaml > FILENAME.yaml`
- Create resource with existing definition file: `k create -f FILENAME.yaml`

- Edit exisiting resource: `k edit RESOURCE_TYPE RESOURCE_NAME`

- Repace existing resource: `k replace --force -f FILENAME.yaml`

## Pods

- Create Pod: `k run POD_NAME --image=IMAGE_NAME`
- Create definition file for Pod: `k run POD_NAME --image=IMAGE_NAME --dry-run=client -o yaml > FILENAME.yaml`

## ReplicaSets

- Up/Down-Scale: `k scale --replicas=NEW_NUMBER rs/RS_NAME`

## Namespaces

- Switch permanently to namespace: `k config set-context $(k config current-context) --namespace=NAMESPACE`

## Services

- Expose a service for a Pod: `k expose pod POD_NAME --port=PORT --name=SRV_NAME`
- Create a Pod and expose a service (same name): `k run POD_NAME --image=IMAGE_NAME --port=PORT --expose=true`

## Docker images

- Create: `docker build -t IMAGE_NAME PATH_TO_DOCKERFILE`
- Run an instance: `docker run -p EXPOSED_PORT:APP_PORT IMAGE_NAME`
- Run command in instance: `docker run IMAGE_NAME cat /etc/*release*`

## Links

- [Documentation](https://kubernetes.io/docs/home/)
- [Reference Guide](https://kubespec.dev/)

