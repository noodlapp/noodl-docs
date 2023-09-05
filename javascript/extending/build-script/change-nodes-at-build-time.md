---
title: Change nodes at build time
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# Change nodes at build time

:::note

This is recommended to only use in 2.7.x.

If using it in 2.6.x, you will change the current project
which will not be temporary during building.

:::

```js
module.exports = {
  async onPreBuild(context) {
    // Get all the "Function" nodes
    const functionNodes = context.project.getNodesWithType('JavaScriptFunction');
    functionNodes.forEach((node) => {
      // Replace all "Hello World" to "Hello" in the scripts
      node.parameters.functionScript = node.parameters.functionScript
        .replace("Hello World", "Hello");
    });
  },
};
```
