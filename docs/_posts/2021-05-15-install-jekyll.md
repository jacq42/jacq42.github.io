---
layout: post
title:  Installation von Jekyll
tags: [ jekyll ]
author: jacq42
---

## In der bereits existierenden github page mit lokaler Testmöglichkeit

Diese Anleitung ist den [github docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) entnommen.

**Annahme**: Es exisitiert bereits eine github page.

1. jekyll installieren: z.B. für [Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
	* *beachten*: Wenn man ZSH statt Bash verwendet, müssen die Anpassungen in der .zshrc anstatt der .bashrc erfolgen.
2. docs Verzeichnis im github Projekt anlegen und in dieses wechseln
3. neues Jekyllprojekt erstellen mit: `jekyll new .`
4. Gemfile anpassen:
	* Zeile beginnend mit `gem "jekyll"` auskommentieren
	* github pages hinzufügen: neue Zeile einfügen `gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins`
	* dabei die [aktuelle github pages Version](https://pages.github.com/versions/) verwenden
5. _config.yml anpassen mit aktuellen Eigenschaften
6. Seite erstellen (lassen) mit `bundle install` bzw. `bundle update`
7. lokal testen: `bundle exec jekyll serve`

Weitere Infos zu [Jekyll](https://jekyllrb.com/), [front matter](https://jekyllrb.com/docs/front-matter/) und dem [minima Theme](https://github.com/jekyll/minima)

## Theme Type-on-Strap

Dieses [Theme](https://jamstackthemes.dev/demo/theme/jekyll-type-on-strap-theme/) sieht etwas "schöner" aus, ist immernoch sehr übersichtlich und minimal gehalten. Um es zu verwenden musste ich:

1. Gem im Gemfile setzen und mit `bundle update` neu bauen lassen oder remote_theme verwenden
1. _config.yml anpassen: siehe [Github Code](https://github.com/sylhare/Type-on-Strap/blob/master/_config.yml)
2. Die Ordnerstruktur anpassen:
** Vorher waren die Seiten unter <code>_pages</code> angelegt, jetzt unter <code>pages</code>
3. Front Matter der Posts anpassen