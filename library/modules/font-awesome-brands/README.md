---
title: Font Awesome Brands
hide_title: true
---

# Font Awesome Brands

[![GitHub](https://img.shields.io/static/v1?style=plastic&logo=github&label=GitHub&message=Source%20Code)](https://github.com/noodlapp/modules/tree/main/modules/font-awesome-brands)

This module contains all the Font Awesome brand icons. Add it to your project and you will have access to it in all core nodes that support icons. Most notably the [Icon](/nodes/basic-elements/icon) node.

You can find a list of all the icons here: https://fontawesome.com/search?o=r&f=brands

<div className="ndl-image-with-background xl">

![](/library/modules/material-icons/iconpicker.png)

</div>

Using this via code, works like this:

```js
Outputs.iconObject = {
  class: "fa-brands",
  code: Inputs.iconCode,
  codeAsClass: true
}
```
