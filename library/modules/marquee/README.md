---
title: Marquee Module
hide_title: true
---

# Marquee

[![GitHub](https://img.shields.io/static/v1?style=plastic&logo=github&label=GitHub&message=Source%20Code)](https://github.com/noodlapp/modules/tree/main/modules/marquee)

This module allows you to add a marquee to your Noodl App using any of the other visual nodes.

<div className="ndl-image-with-background l">

![](/library/modules/marquee/preview-marquee.png)

</div>

:::tip

When developing components for the Marquee node, it is advisable to work on the component outside the Marquee node.
This is because the Marquee node duplicates HTML elements and ceases to listen for hot-reload when the component is modified.
To ensure consistent results, it is recommended to reload the page and observe the current appearance.

:::

### Getting started

After importing this module you will see one new nodes in the node picker called "Marquee" in the external libraries category.

We can start by placing the Marquee node into our visual tree.
All the children placed in this node will be added into the marquee list and duplicated to fill the space.

For example when we add a Text node inside like this:

<div className="ndl-image-with-background">

![](/library/modules/marquee/text-1.png)

</div>

Then in the preview we will see this:

<div className="ndl-image-with-background">

![](/library/modules/marquee/text-1-preview.png)

</div>
