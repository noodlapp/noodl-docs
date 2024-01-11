---
title: My Prefab
hide_title: true
---

# My Prefab

A good idea is to start the docs with a short 2-3 sentence description of what the prefab does. In this starter you will see some made up info about a made up prefab called My Prefab.

> This is how to write a blockquote. It is neat to (sparingly) use for extra important info or if you want to add some attribution the [Author](https://noodl.net) of the Prefab.

<div className="ndl-image-with-background">

![](/library/prefabs/my-prefab/thumb.png)

</div>

Above you can see how images should be added. The last class is determining the size of the image. It can be left blank, but also supports the classes `s`, `m`, `l` and `xl`. Image paths are relative to the `static` folder in the docs root.

## Included components

After the introduction, it is recommended to add a linked index of all the included components, with a short description.

- **[My Prefab - Setup](./components/setup-my-prefab/README.md)**: Sets up My Prefab. Must be placed in your projects home component.
- **[My Prefab - Request](./components/my-prefab-request/README.md)**: Does an API Call to My Prefabs Endpoint and returns the result.

## Quickstart

A quickstart is always nice to have in the overview, for people to get going quickly. It could look something like this:

First, drop a **My Prefab - Setup** in your project home component. Then set the `API Key` and the `Datasource`. Finally, open the Project Settings sidebar, find the **Head Code** input and paste the following at the top:

```html
<script
  type="text/javascript"
  src="https://some-cdn.com/my-example-library.js"
></script>
```

After this you can use the **My Prefab - Request** to make requests across your app.
