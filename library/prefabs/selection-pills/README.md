---
title: Selection Pills
hide_title: true
---

# Selection Pills

A simple prefab component displaying a set of "pills" given an array of **Options** (the pill values) and **Labels** (what should be shown in the pills). The user can make a selection, one or many pills. It works very similar to the [Multi Choice](/library/prefabs/multi-choice) prefab.

<div className="ndl-image-with-background l">

![](/library/prefabs/selection-pills/selection-pills.png)

</div>

There are a few important properties of the **Selection Pills** prefab component that we need to take a closer look at:

<div className="ndl-image-with-background l">

![](/library/prefabs/selection-pills/selection-pills-props-1.png)

</div>

First, you specify a set of pill values in the **Options** property / input.

```javascript
['one','two','three']
```

Optionally you can specify labels corresponding to each option value, if not the option value will be used as label. This is done via the **Labels** property / input.

```javascript
['One','Two','Three']
```

Finally the **Selection** property / input also contains an array of string, but this time you should have it contain the option values that you want selected. Most often this is connect to a variable or object property. See the example below.

<div className="ndl-image-with-background xl">

![](/library/prefabs/selection-pills/selection-pills-nodes-1.png)

</div>

The component also have a corresponding **Selection** output, here you can see it contains the option values that the user have selected.




