---
layout: post
title:  "GitHub: Dependabot konfigurieren"
tags: [ GitHub, dev, Quality, Tools ]
author: jacq42
#excerpt_separator: <!--more-->
color: rgb(200, 110, 80)
---

Monitor vulnerabilities in dependencies and keep them up-to-date

<!--more-->

[Dependabot](https://docs.github.com/en/code-security/dependabot) ist ein Tool, um die in einem Repo verwendeten Dependencies automatisch auf dem aktuellen Stand zu halten. 
So können Sicherheitsprobleme mit älteren Versionen vermieden werden.

## Integration über GitHub Actions

Im Repository unter `/.github` eine Datei `dependabot.yml` erstellen:

```
version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"

  - package-ecosystem: "gradle"
    directory: "/"
    schedule:
      interval: "weekly"
```

Im angegebenen Beispiel werden alle GitHub Actions (in den Workflow Dateien) und die Dependencies in der `build.gradle` einmal wöchentlich aktualisiert.

Es gibt vielfältige Möglichkeiten der [Konfiguration](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates) werden.

Dependabot schaut nach aktualisierten Versionen und tauscht diese aus. Es wird ein Pull Request mit den Änderungen erstellt. Vorhandene GitHub Action Workflows werden durchlaufen.

Die Pull Requests können entweder manuell oder automatisch gemerged werden. Wenn dies automatisch geschehen soll, dann unter `/.github/workflows` eine Datei `dependabot-automerge.yml` erstellen mit folgendem Inhalt:

```
name: Dependabot auto merge

concurrency:
  group: dependabot
  cancel-in-progress: false

permissions:
  id-token: write
  pull-requests: write
  contents: write

on: pull_request_target

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.3.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"

      - name: Checkout PR Branch
        uses: actions/checkout@v3
        with:
          ref: ${{ github.event.pull_request.head.sha }}

      - name: Build and test
        uses: eskatos/gradle-command-action@v2.1.5
        with:
          arguments: clean build
          
      - name: Enable auto merge for Dependabot PRs
        if: ${{steps.metadata.outputs.update-type != 'version-update:semver-major'}}
        run: gh pr merge --auto --squash "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Damit werden Minor Updates in den Versionen automatisch in den Code übernommen, wenn der Build erfolgreich durchlaufen wird. Major Updates müssen weiterhin manuell gemerged werden. So wird sichergestellt, dass Major Updates keine Breaking Changes mitbringen.
