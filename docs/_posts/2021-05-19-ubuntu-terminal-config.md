---
layout: post
title:  Terminal in Ubuntu konfigurieren
tags: [ Ubuntu, IDE ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

Ich arbeite gern mit der [Zsh](https://wiki.ubuntuusers.de/Zsh/) zusammen mit [Oh-My-Zsh](https://ohmyz.sh) und dem [Solarized Farbschema](https://github.com/aruhier/gnome-terminal-colors-solarized).

<!--more-->

## Zsh

Die [Zsh](https://wiki.ubuntuusers.de/Zsh/) ist eine Shell mit erhöhter Funktionalität gegenüber der Standardshell unter Ubuntu (Bash). Da es bereits diverse Vergleiche zwischen 
[zsh vs. bash](https://www.ecosia.org/search?q=zsh+vs+bash) im Netz gibt, werde ich sie an dieser Stelle nicht aufzählen. Da sie die gleichen Funktionen wie die Bash bietet, kann man
sie einfach mal testen.

## Oh-My-Zsh

[Oh-My-Zsh](https://ohmyz.sh) ist eine Erweiterung für die Zsh mit diversen Funktionen. So kann man z.B. im Terminal sehen, in welchem Gitbranch man sich befindet und ob dieser Änderungen enthält. 
Für die Installation wird das github Repo lokal geklont (standardmäßig unter ~/.oh-my-zsh).
Unter den unzähligen [Pugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) findet sich bestimmt das eine oder andere :-)

## PowerLevel10k

[PowerLevel10k](https://github.com/romkatv/powerlevel10k) ist ein Theme für Zsh. Es bietet unterschiedliche Zusatzinformationen im Terminal an, wie z.B. den Branchnamen und Zustand, wenn es sich um ein GitRepo handelt.
Für die Installation einfach der Anleitung folgen: Repo nach .oh-my-zsh/custom/themes klonen und ZSH_THEME in ~.zshrc konfigurieren. (Danach mit zsh die Shell neu starten.) Dann kann mit `p10k configure` die Anzeige konfiguriert werden.

## Solarized

[Solarized](https://github.com/aruhier/gnome-terminal-colors-solarized) ist eine Farbpalette mit 16 Farben für den Gebrauch im Terminal und in GUI Anwendungen. Durch die Verwendung eines einheitlichen Farbschemas erhöht sich die Lesbarkeit.
Um das Schema in der ZSH zu verwenden, sollte man der [Anleitung](https://github.com/aruhier/gnome-terminal-colors-solarized#installation-and-usage) folgen. Ich verwende derzeit das *light* Schema, da dies mit einem dunklen Hintergrund besser zu lesen ist.
