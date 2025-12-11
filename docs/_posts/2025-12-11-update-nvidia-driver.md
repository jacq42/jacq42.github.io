---
layout: post
title:  "Ubuntu: Update or install Nvidia driver"
tags: [ Ubuntu, Nvidia ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

Link: https://documentation.ubuntu.com/server/how-to/graphics/install-nvidia-drivers/

Check currently installed driver:
```
cat /proc/driver/nvidia/version
```

Check available drivers:
```
sudo ubuntu-drivers list

nvidia-driver-570-server, (kernel modules provided by linux-modules-nvidia-570-server-generic)
nvidia-driver-470, (kernel modules provided by nvidia-dkms-470)
nvidia-driver-418-server, (kernel modules provided by nvidia-dkms-418-server)
nvidia-driver-470-server, (kernel modules provided by nvidia-dkms-470-server)
nvidia-driver-535-server, (kernel modules provided by linux-modules-nvidia-535-server-generic)
nvidia-driver-580-server, (kernel modules provided by linux-modules-nvidia-580-server-generic)
nvidia-driver-390, (kernel modules provided by linux-modules-nvidia-390-generic)
nvidia-driver-450-server, (kernel modules provided by linux-modules-nvidia-450-server-generic)
nvidia-driver-570, (kernel modules provided by linux-modules-nvidia-570-generic)
nvidia-driver-580, (kernel modules provided by linux-modules-nvidia-580-generic)
nvidia-driver-545, (kernel modules provided by nvidia-dkms-545)
nvidia-driver-535, (kernel modules provided by linux-modules-nvidia-535-generic)
```

Install with automatic detection of best match:
```
sudo ubuntu-drivers install
```

OR install with specific version:
```
sudo ubuntu-drivers install nvidia:580
```

