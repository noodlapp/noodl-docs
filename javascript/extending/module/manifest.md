# Module Manifest

:::note

WIP

:::

This document is all you need to know about what is required in the manifest.json file.

# React and Node Modules

```json
{
  "name": "name",
  "main": "index.js",
  "dependencies": [
    "http ..."
  ],
  "runtimes": ["browser"]
}
```

## Iconset

```json
{
  "name": "Material Icons",
  "type": "iconset",
  "browser":{
    "stylesheets": ["https://fonts.googleapis.com/css2?family=Material+Icons"]
  },
  "iconClass": "material-icons",
  "icons": ["10k", ...]
}
```
