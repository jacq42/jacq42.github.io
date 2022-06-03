---
layout: post
title:  "GitHub Action: cache"
tags: [ GitHub, dev ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

Sharing files between jobs and workspaces

<!--more-->

Um Daten zwischen verschiedenen Jobs zu teilen, gibt es in GitHub Actions zwei Möglichkeiten:
* [Artefakte]({% post_url 2022-05-05-github-action-artifacts %})
* Caching

Artefakte werden verwendet, um Dateien zu speichern, auf die nach dem Build noch zugegriffen werden soll: Test Reports, Security Reports o.ä.

Caching wird verwendet, wenn Dateien zwischen einzelnen Jobs ausgetauscht werden sollen. Zum Beispiel können erstellte Artefakte in einem späteren Job für das Deployment verwendet werden.

Weitere Informationen mit Beispielen gibt es im dazugehörigen [GitHub Projekt](https://github.com/actions/cache)

## Beispiel

{% raw %}
```
jobs:
  first-job:
    name: "Build"
    runs-on: ubuntu-latest
    steps:
      # do some fancy stuff here
      
      - name: Cache files
        uses: actions/cache@v3
        id: cache-files
        with:
          path: |
            src/main/resources/file-to-cache
            src/main/resources/other-file-to-cache
          key: cachekey-${{ github.sha }}
        
  second-job:
    name: "Publish"
    runs-on: ubuntu-latest
    steps:
      # do some fancy stuff here
      
      - name: Restore files
        uses: actions/cache@v3
        id: cache-files
        with:
          path: |
            src/main/resources/
          key: cachekey-${{ github.sha }}
```
{% endraw %}

