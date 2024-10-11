---
layout: post
title:  npm overrides
tags: [ JavaScript, TypeScript, npm ]
author: jacq42
excerpt_separator: <!--more-->
#color: rgb(0, 100,100)
---

<!--more-->

If you want to replace a dependency of a dependency you can use overrides.
This is useful to fix security issues

Let us assume a project with sveltekit. The sveltekit includes another lib cookie. The current version of the 
cookie lib has a security issue but there is also a fix for that. When the parent package doesn't have a new version with 
that fix we can override the version of the transitive lib by ourselves.

See following example of a package.json:

```json
{
  "devDependencies": {
    "@sveltejs/kit": "^2.6.4"
  },
  "overrides": {
    "@sveltejs/kit": {
      "cookie": "^0.7.0"
    }
  }
}
```

This will override the version of cookie package to at least 0.7.0.

Remember to remove the overrides when the parent lib has been updated.

For more information, see documentation on [npmjs](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides).