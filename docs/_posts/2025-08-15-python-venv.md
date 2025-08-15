---
layout: post
title:  "Python: virtual environment"
tags: [ python ]
author: jacq42
excerpt_separator: <!--more-->
color: rgb(175, 175, 175)
---

<!--more-->

When working with Python you need a lot of libraries to work with. Diffent projects needs different libraries.

To use them without getting conflicts you should create a virtual environment for every project. Every environment
is created on top of the global Python installation.

Switch to project directory and:
```python
python3 -m venv .venv
source .venv/bin/activate
```

Install needed libraries: `pip install`

Freeze requirements: `pip freeze > requirements.txt`

Add to gitignore:
```
.venv/
__pycache__/
*.pyc
```

Add to README:
```
## Local setup

1. Activate virtual environment for Python: `source .venv/bin/activate`
2. Install requirements: `pip install -r requirements.txt`
```
