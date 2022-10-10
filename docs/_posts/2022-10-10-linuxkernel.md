---
layout: post
title:  "Ubuntu: Zu wenig Speicherplatz auf der Boot Partition"
tags: [ Ubuntu, dev ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

Ein wiederkehrendes Problem

<!--more-->

Hin und wieder scheinen alte Kernelversionen nicht gelöscht zu werden oder die Boot-Partition ist einfach zu klein, so dass nicht 3 Kernelversionen behalten werden können. Dann können keinen neuen Versionen installiert werden, es muss erst Platz geschafft werden.

Die Boot-Partition vergrößern macht bei einer kompletten Neuinstallation Sinn. Heutzutage sollten 1 GB eingeplant werden.

Weitere Möglichkeiten (mal haben sie geholfen, mal nicht):

* `sudo apt autoremove` entfernt ungenutzte Pakete
* `sudo apt -f autoremove` ist noch etwas strenger
* `sudo apt-get purge` räumt auf
* `apt-get -f install` räumt auf
* `sudo dpkg --configure -a` räumt auf
* `sudo dpkg --purge --force-depends linux-image-extra-4.4.0-127-generic`
* `dpkg -l 'linux-[ihs]*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\([-0-9]*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d'` zeigt veraltete Versionen
* `dpkg -l 'linux-[ihs]*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\([-0-9]*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/* !d' | xargs sudo dprk -P` löscht veraltete Versionen
* `dpkg -l linux-[ihs]* | sed '1,6d'| grep -vE '^ii|^un|^rc'` zeigt fehlerhafte Pakete an

## Ein (abendfüllendes) Beispiel aus der Praxis

```
▶uname -r
5.4.0-126-generic
```

```
▶ls -la
insgesamt 303053
drwxr-xr-x  5 root root     5120 Sep 24 13:54 .
drwxr-xr-x 26 root root     4096 Okt  7  2021 ..
-rw-r--r--  1 root root   191087 Jun  9  2020 config-4.4.0-185-generic
-rw-r--r--  1 root root   237947 Aug 10 10:17 config-5.4.0-125-generic
-rw-r--r--  1 root root   237946 Aug 26 11:39 config-5.4.0-126-generic
drwx------  3 root root     4096 Jan  1  1970 efi
drwxr-xr-x  5 root root     1024 Sep 22 06:25 grub
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img -> initrd.img-5.4.0-126-generic
-rw-r--r--  1 root root 60102883 Aug 30 18:09 initrd.img-4.4.0-185-generic
-rw-r--r--  1 root root 99887582 Sep 16 15:53 initrd.img-5.4.0-125-generic
-rw-r--r--  1 root root 99904271 Sep 24 13:54 initrd.img-5.4.0-126-generic
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img.old -> initrd.img-5.4.0-125-generic
drwx------  2 root root    12288 Sep 13  2016 lost+found
-rw-r--r--  1 root root   182704 Aug 18  2020 memtest86+.bin
-rw-r--r--  1 root root   184380 Aug 18  2020 memtest86+.elf
-rw-r--r--  1 root root   184884 Aug 18  2020 memtest86+_multiboot.bin
-rw-------  1 root root  3918695 Jun  9  2020 System.map-4.4.0-185-generic
-rw-------  1 root root  4758850 Aug 10 10:17 System.map-5.4.0-125-generic
-rw-------  1 root root  4748865 Aug 26 11:39 System.map-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz -> vmlinuz-5.4.0-126-generic
-rw-------  1 root root  7214112 Jun 10  2020 vmlinuz-4.4.0-185-generic
-rw-------  1 root root 13660416 Aug 10 10:24 vmlinuz-5.4.0-125-generic
-rw-------  1 root root 13648128 Aug 26 13:58 vmlinuz-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz.old -> vmlinuz-5.4.0-125-generic
```

```
▶sudo apt autoremove
Paketlisten werden gelesen... Fertig
Abhängigkeitsbaum wird aufgebaut.       
Statusinformationen werden eingelesen.... Fertig
0 aktualisiert, 0 neu installiert, 0 zu entfernen und 4 nicht aktualisiert.
```

```
▶sudo apt -f autoremove
Paketlisten werden gelesen... Fertig
Abhängigkeitsbaum wird aufgebaut.       
Statusinformationen werden eingelesen.... Fertig
0 aktualisiert, 0 neu installiert, 0 zu entfernen und 4 nicht aktualisiert.
```

```
▶dpkg -l 'linux-[ihs]*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\([-0-9]*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d'                   
linux-headers-5.4.0-125
linux-headers-5.4.0-125-generic
linux-image-4.4.0-185-generic
linux-image-5.4.0-125-generic
```

```
▶dpkg -l 'linux-[ihs]*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\([-0-9]*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs sudo dpkg -P
[sudo] Passwort für colonia: 
(Lese Datenbank ... 336089 Dateien und Verzeichnisse sind derzeit installiert.)
Entfernen von linux-headers-5.4.0-125-generic (5.4.0-125.141) ...
dpkg: Abhängigkeitsprobleme verhindern Entfernen von linux-image-4.4.0-185-generic:
 linux-modules-extra-4.4.0-185-generic hängt ab von linux-image-4.4.0-185-generic | linux-image-unsigned-4.4.0-185-generic; aber:
  Paket linux-image-4.4.0-185-generic soll entfernt werden.
  Paket linux-image-unsigned-4.4.0-185-generic ist nicht installiert.

dpkg: Fehler beim Bearbeiten des Paketes linux-image-4.4.0-185-generic (--purge):
 Abhängigkeitsprobleme - wird nicht entfernt
dpkg: Abhängigkeitsprobleme verhindern Entfernen von linux-image-5.4.0-125-generic:
 linux-modules-extra-5.4.0-125-generic hängt ab von linux-image-5.4.0-125-generic | linux-image-unsigned-5.4.0-125-generic; aber:
  Paket linux-image-5.4.0-125-generic soll entfernt werden.
  Paket linux-image-unsigned-5.4.0-125-generic ist nicht installiert.

dpkg: Fehler beim Bearbeiten des Paketes linux-image-5.4.0-125-generic (--purge):
 Abhängigkeitsprobleme - wird nicht entfernt
Entfernen von linux-headers-5.4.0-125 (5.4.0-125.141) ...
Fehler traten auf beim Bearbeiten von:
 linux-image-4.4.0-185-generic
 linux-image-5.4.0-125-generic
```

```
▶sudo update-initramfs -d -k 4.4.0-185-generic
update-initramfs: Deleting /boot/initrd.img-4.4.0-185-generic
```

```
▶ls -la
insgesamt 244127
drwxr-xr-x  5 root root     5120 Okt 10 21:30 .
drwxr-xr-x 26 root root     4096 Okt  7  2021 ..
-rw-r--r--  1 root root   191087 Jun  9  2020 config-4.4.0-185-generic
-rw-r--r--  1 root root   237947 Aug 10 10:17 config-5.4.0-125-generic
-rw-r--r--  1 root root   237946 Aug 26 11:39 config-5.4.0-126-generic
drwx------  3 root root     4096 Jan  1  1970 efi
drwxr-xr-x  5 root root     1024 Sep 22 06:25 grub
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img -> initrd.img-5.4.0-126-generic
-rw-r--r--  1 root root 99887582 Sep 16 15:53 initrd.img-5.4.0-125-generic
-rw-r--r--  1 root root 99904271 Sep 24 13:54 initrd.img-5.4.0-126-generic
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img.old -> initrd.img-5.4.0-125-generic
drwx------  2 root root    12288 Sep 13  2016 lost+found
-rw-r--r--  1 root root   182704 Aug 18  2020 memtest86+.bin
-rw-r--r--  1 root root   184380 Aug 18  2020 memtest86+.elf
-rw-r--r--  1 root root   184884 Aug 18  2020 memtest86+_multiboot.bin
-rw-------  1 root root  3918695 Jun  9  2020 System.map-4.4.0-185-generic
-rw-------  1 root root  4758850 Aug 10 10:17 System.map-5.4.0-125-generic
-rw-------  1 root root  4748865 Aug 26 11:39 System.map-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz -> vmlinuz-5.4.0-126-generic
-rw-------  1 root root  7214112 Jun 10  2020 vmlinuz-4.4.0-185-generic
-rw-------  1 root root 13660416 Aug 10 10:24 vmlinuz-5.4.0-125-generic
-rw-------  1 root root 13648128 Aug 26 13:58 vmlinuz-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz.old -> vmlinuz-5.4.0-125-generic
```

```
▶sudo update-initramfs -c -k all
update-initramfs: Generating /boot/initrd.img-4.4.0-185-generic
modinfo: ERROR: could not get modinfo from 'crc32': No such file or directory
update-initramfs: Generating /boot/initrd.img-5.4.0-125-generic
update-initramfs: Generating /boot/initrd.img-5.4.0-126-generic
```

```
▶ls -la
insgesamt 303073
drwxr-xr-x  5 root root     5120 Okt 10 21:32 .
drwxr-xr-x 26 root root     4096 Okt  7  2021 ..
-rw-r--r--  1 root root   191087 Jun  9  2020 config-4.4.0-185-generic
-rw-r--r--  1 root root   237947 Aug 10 10:17 config-5.4.0-125-generic
-rw-r--r--  1 root root   237946 Aug 26 11:39 config-5.4.0-126-generic
drwx------  3 root root     4096 Jan  1  1970 efi
drwxr-xr-x  5 root root     1024 Sep 22 06:25 grub
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img -> initrd.img-5.4.0-126-generic
-rw-r--r--  1 root root 60107050 Okt 10 21:31 initrd.img-4.4.0-185-generic
-rw-r--r--  1 root root 99903433 Okt 10 21:31 initrd.img-5.4.0-125-generic
-rw-r--r--  1 root root 99903774 Okt 10 21:32 initrd.img-5.4.0-126-generic
lrwxrwxrwx  1 root root       28 Sep 22 06:24 initrd.img.old -> initrd.img-5.4.0-125-generic
drwx------  2 root root    12288 Sep 13  2016 lost+found
-rw-r--r--  1 root root   182704 Aug 18  2020 memtest86+.bin
-rw-r--r--  1 root root   184380 Aug 18  2020 memtest86+.elf
-rw-r--r--  1 root root   184884 Aug 18  2020 memtest86+_multiboot.bin
-rw-------  1 root root  3918695 Jun  9  2020 System.map-4.4.0-185-generic
-rw-------  1 root root  4758850 Aug 10 10:17 System.map-5.4.0-125-generic
-rw-------  1 root root  4748865 Aug 26 11:39 System.map-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz -> vmlinuz-5.4.0-126-generic
-rw-------  1 root root  7214112 Jun 10  2020 vmlinuz-4.4.0-185-generic
-rw-------  1 root root 13660416 Aug 10 10:24 vmlinuz-5.4.0-125-generic
-rw-------  1 root root 13648128 Aug 26 13:58 vmlinuz-5.4.0-126-generic
lrwxrwxrwx  1 root root       25 Sep 22 06:24 vmlinuz.old -> vmlinuz-5.4.0-125-generic
```

-> Hilfe brachte nur ein manuelles Löschen (`sudo rm ...`) der veralteten Versionen:
```
sudo update-initramfs -d -k 4.4.0-185-generic
sudo rm config-4.4.0-185-generic
sudo rm vmlinuz-4.4.0-185-generic
sudo rm System.map-4.4.0-185-generic
```

mit anschließendem 
```
▶sudo update-grub
Quelldatei `/etc/default/grub'
Quelldatei `/etc/default/grub.d/init-select.cfg'
GRUB-Konfigurationsdatei wird erstellt …
  WARNING: PV /dev/mapper/nvme0n1p3_crypt in VG ubuntu-vg is using an old PV header, modify the VG to update.
  WARNING: PV /dev/mapper/nvme0n1p3_crypt in VG ubuntu-vg is using an old PV header, modify the VG to update.
Linux-Abbild gefunden: /boot/vmlinuz-5.4.0-126-generic
initrd-Abbild gefunden: /boot/initrd.img-5.4.0-126-generic
Linux-Abbild gefunden: /boot/vmlinuz-5.4.0-125-generic
initrd-Abbild gefunden: /boot/initrd.img-5.4.0-125-generic
  WARNING: PV /dev/mapper/nvme0n1p3_crypt in VG ubuntu-vg is using an old PV header, modify the VG to update.
  WARNING: PV /dev/mapper/nvme0n1p3_crypt in VG ubuntu-vg is using an old PV header, modify the VG to update.
  WARNING: PV /dev/mapper/nvme0n1p3_crypt in VG ubuntu-vg is using an old PV header, modify the VG to update.
Startmenüeintrag für UEFI-Firmware-Einstellungen wird hinzugefügt
abgeschlossen
```

Da dann immer noch einige Bytes fehlten noch ein 
```
▶sudo update-initramfs -d -k 5.4.0-125-generic 
update-initramfs: Deleting /boot/initrd.img-5.4.0-125-generic
```

und eine Update über die Aktualisierungsverwaltung mit anschließendem autoremove brachte:
```
▶ls -la
insgesamt 232965
drwxr-xr-x  5 root root     5120 Okt 10 21:49 .
drwxr-xr-x 26 root root     4096 Okt  7  2021 ..
-rw-r--r--  1 root root   237946 Aug 26 11:39 config-5.4.0-126-generic
-rw-r--r--  1 root root   237852 Sep 20 11:19 config-5.4.0-128-generic
drwx------  3 root root     4096 Jan  1  1970 efi
drwxr-xr-x  5 root root     1024 Okt 10 21:49 grub
lrwxrwxrwx  1 root root       28 Okt 10 21:48 initrd.img -> initrd.img-5.4.0-128-generic
-rw-r--r--  1 root root 99903695 Okt 10 21:41 initrd.img-5.4.0-126-generic
-rw-r--r--  1 root root 99838614 Okt 10 21:48 initrd.img-5.4.0-128-generic
lrwxrwxrwx  1 root root       28 Okt 10 21:48 initrd.img.old -> initrd.img-5.4.0-126-generic
drwx------  2 root root    12288 Sep 13  2016 lost+found
-rw-r--r--  1 root root   182704 Aug 18  2020 memtest86+.bin
-rw-r--r--  1 root root   184380 Aug 18  2020 memtest86+.elf
-rw-r--r--  1 root root   184884 Aug 18  2020 memtest86+_multiboot.bin
-rw-------  1 root root  4748865 Aug 26 11:39 System.map-5.4.0-126-generic
-rw-------  1 root root  4747163 Sep 20 11:19 System.map-5.4.0-128-generic
lrwxrwxrwx  1 root root       25 Okt 10 21:48 vmlinuz -> vmlinuz-5.4.0-128-generic
-rw-------  1 root root 13648128 Aug 26 13:58 vmlinuz-5.4.0-126-generic
-rw-------  1 root root 13664512 Sep 20 12:43 vmlinuz-5.4.0-128-generic
lrwxrwxrwx  1 root root       25 Okt 10 21:48 vmlinuz.old -> vmlinuz-5.4.0-126-generic
```

## Volllaufen verhindern

In der Datei __/etc/apt/apt.conf.d/50unattended-upgrades__ die Option setzen:
```
# in /etc/apt/apt.conf.d/50unattended-upgrades ändern
...
// Do automatic removal of new unused dependencies after the
// upgrade (equivalent to apt-get autoremove)
Unattended-Upgrade::Remove-Unused-Dependencies "true";
```

Dann wird nach der Installation ein `sudo apt-get autremove` durchgeführt und nicht mehr verwendete Pakete damit regelmäßig gelöscht (auch veraltete Kernelversionen).