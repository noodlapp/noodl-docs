---
title: How to add a Favicon?
hide_title: true
---

# How to add a Favicon?

A favicon is a small image displayed next to the page title in the browser tab.

:::tip

A favicon is a small image, so it should be a simple image with high contrast.

:::

Firstly add your favicon to the project folder,
for example `favicon.ico` in this example.

This can be done by either dragging the favicon into the project or opening the folder where the project is saved.

Next, add this to the **Head Code** in project settings: 
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

Your browser tab should now display your favicon image to the left of the page title.
