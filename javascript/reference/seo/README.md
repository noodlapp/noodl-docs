---
hide_title: true
hide_table_of_contents: true
title: Noodl.SEO
---

# Noodl.SEO

The **Noodl.SEO** API lets you change metatags and document titles without directly accessing the window object, this is required for server-side rendering where we don't have a window.

:::info

All of this is only available on the frontend.

:::

### Reference

#### **`Noodl.SEO.setTitle(value)`**  
This function updates the window title.

#### **`Noodl.SEO.meta`**  
Get all the metatags that is currently used.

#### **`Noodl.SEO.clearMeta()`**  
Clear all the metatags that currently exist.

#### **`Noodl.SEO.getMeta(key)`**  
Get a specific metatag by key.

#### **`Noodl.SEO.setMeta(key, value)`**  
Set a metatag with key and value.
