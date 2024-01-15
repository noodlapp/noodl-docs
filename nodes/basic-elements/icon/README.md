---
hide_title: true
hide_table_of_contents: true
title: Icon node
---

{/*##head##*/}

# Icon

This node places an icon in the visual tree.

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/icon/icon.png)

</div>

You can use an icon from the built in library, or provide your own image source.
{/*##head##*/}

## Dynamic icons

If you want to dynamically pass an icon from the icon library to the **Icon** node you do this through the <span class="ndl-data">Icon Source</span> input.

This input expects an object with a **class** (being the name of the icon library) and **code** (being the icon code that you see when you hover an icon in the icon picker). The easiest way of transforming a string to an icon object is to use a custom function containing the following code:

```js
Outputs.iconObject = {
  "class": "material-icons",
  "code": Inputs.iconCode,
};
```

This will automatically create an <span className="ndl-data">iconCode</span> input and an <span className="ndl-data">iconObject</span> output.

## Inputs

| Data                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span className="ndl-data">Icon Source</span> | Where to get the icon.                                                                              |
| <span className="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span className="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

- [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
- [Padding](/nodes/shared-props/inputs/visual-input-properties#padding)
- [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
- [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#-position)
- [Style](/nodes/shared-props/inputs/visual-input-properties#style)
- [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
- [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties):

- [Bounding Box](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
- [Mounted](/nodes/shared-props/outputs/visual-output-properties#mounted)
- [Other](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
