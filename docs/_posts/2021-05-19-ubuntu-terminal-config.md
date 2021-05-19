---
layout: post
title:  "Terminal in Ubuntu konfigurieren"
date:   2021-05-19 11:07:22 +0200
categories: [ "ubuntu", "dev" ]
---

Ich arbeite gern mit der [Zsh](https://wiki.ubuntuusers.de/Zsh/) zusammen mit [Oh-My-Zsh](https://ohmyz.sh) und dem [Solarized Farbschema](https://github.com/aruhier/gnome-terminal-colors-solarized).

## Zsh

Die [Zsh](https://wiki.ubuntuusers.de/Zsh/) ist eine Shell mit erhöhter Funktionalität gegenüber der Standardshell unter Ubuntu (Bash). Da es bereits diverse Vergleiche zwischen 
[zsh vs. bash](https://www.ecosia.org/search?q=zsh+vs+bash) im Netz gibt, werde ich sie an dieser Stelle nicht aufzählen. Da sie die gleichen Funktionen wie die Bash bietet, kann man
sie einfach mal testen.

## Oh-My-Zsh

[Oh-My-Zsh](https://ohmyz.sh) ist eine Erweiterung für die Zsh mit diversen Funktionen. So kann man z.B. im Terminal sehen, in welchem Gitbranch man sich befindet und ob dieser Änderungen enthält. 
Für die Installation wird das github Repo lokal geklont (standardmäßig unter ~/.oh-my-zsh).
Unter den unzähligen [Pugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) findet sich bestimmt das eine oder andere :-)

## Solarized

[Solarized](https://github.com/aruhier/gnome-terminal-colors-solarized) ist eine Farbpalette mit 16 Farben für den Gebrauch im Terminal und in GUI Anwendungen. Durch die Verwendung eines einheitlichen Farbschemas erhöht sich die Lesbarkeit.
Um das Schema in der ZSH zu verwenden, sollte man der [Anleitung](https://github.com/aruhier/gnome-terminal-colors-solarized#installation-and-usage) folgen. Ich verwende derzeit das *light* Schema, da dies mit einem dunklen Hintergrund besser zu lesen ist.
