---
layout: post
title:  "Git: Delete local branch"
tags: [ git, dev ]
author: jacq42
#excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

## Löschen von lokalen Branches, die remote nicht mehr existieren

`git fetch -p`\
Löscht alle lokalen Branches, die gemerged wurden

Wenn es Branches gibt, die lokale Änderungen enthalten und nicht gemerged wurden:

`git branch -vv`\
Listet alle Branches mit etwas mehr Infos auf:
```
$ git branch -vv
  allesNeuMachtDerMai cb32fc8 [origin/allesNeuMachtDerMai] Mehr Inhalte
  feature1            889a3a9 [origin/feature1] Ignore
* githints            e99713c added valueobject (#4)
  master              e99713c [origin/master] added valueobject (#4)
  valueobject         e190d33 [origin/valueobject: gone] added valueobject
```

Wenn hinter dem Branchnamen ein gone steht, kann der Branch gelöscht werden mit:\
`git branch -D <name>`