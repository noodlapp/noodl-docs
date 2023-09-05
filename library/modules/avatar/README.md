---
title: Avatar Module
hide_title: true
---

# Avatar Module

This module allows you to add avatars to your Noodl App.

<div className="ndl-image-with-background l">

![](/library/modules/avatar/preview.png)

</div>

## Nodes

In this module, there are a few nodes, which include:

### Avatar Node

This node is written using the SDK and gives you all the options to modify the style of the avatar.

### Avatar Group

<div className="ndl-image-with-background l">

![](/library/modules/avatar/avatar-group-node.png)

</div>

This is a simple node that takes in an array of objects.
It makes a few modifications to the array like taking only x amount of items and then sending that into a Repeater node,
using the Avatar Group Item component.

Items input:

```js
[
  {
    Text: 'AA',
    Image: 'avatars/avatar-n4KewLKFOZw.jpg',
  },
  {
    Text: 'AA',
    Image: 'avatars/avatar-TW_z_iUD_bQ.jpg',
  },
];
```

### Avatar Group Item

A node that maps the inputs from the Avatar Group into what should be used on the Avatar node.

### [Logic] Name Abbreviation

Converts a full name to 2 characters.
For example:

```
Input: "John Doe"
Output: "JD"
```
