---
layout: post
title:  "GitHub Action: artifacts"
tags: [ GitHub, dev ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

Upload and download of artifacts

<!--more-->

Um Daten zwischen verschiedenen Jobs zu teilen, gibt es in GitHub Actions zwei Möglichkeiten:
* Artefakte
* [Caching]({% post_url 2022-05-05-github-action-cache %})

Caching wird verwendet, wenn Dateien zwischen einzelnen Jobs ausgetauscht werden sollen. Zum Beispiel können erstellte Artefakte in einem späteren Job für das Deployment verwendet werden.

Artefakte werden verwendet, um Dateien zu speichern, auf die nach dem Build noch zugegriffen werden soll: Test Reports, Security Reports o.ä. Nach dem erfolgreichen Durchlaufen des Workflows oder nach einem Fehlschlag kann man auf die Artefakte zugreifen. Diese sind als ZIP dem workflow angehängt.

Weitere Informationen mit Beispielen gibt es in den dazugehörigen GitHub Projekten für den [upload](https://github.com/actions/cachehttps://github.com/actions/upload-artifact) und [download](https://github.com/actions/download-artifact)

## Beispiel

```
jobs:
  job-with-fancy-name:
    name: "Build"
    runs-on: ubuntu-latest
    steps:
      # do some fancy stuff here
      
      - name: Upload test reports
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: test-report
          path: build/reports/
          
      - name: Upload files
        if: success()
        uses: actions/upload-artifact@v3
        with:
          name: important-files
          path: build/path-to-files/
        
  even-fancier-job:
    runs-on: ubuntu-latest
    steps:
      # do some fancy stuff here
      
      - name: Download files
        uses: actions/download-artifact@v3
        with:
          name: important-files
          
      - name: Display structure of downloaded files
        run: ls -R
```


