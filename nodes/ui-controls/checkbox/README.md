---
hide_title: true
hide_table_of_contents: true
title: Checkbox
---

<##head##>

# Checkbox

This node places a customizable checkbox in the visual tree.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/checkbox/checkbox_visual.png)

</div>

The checkbox will flip its state when clicked and its <span className="ndl-data">Checked</span> property can be connected to a data source, such as a <span className="ndl-data">variable</span> or <span className="ndl-data">object</span>.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/checkbox/checkbox_node.png)

</div>

<##head##>

This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own checkbox component in your own design system.

<div className="ndl-image-with-background s">

![](/nodes/ui-controls/checkbox/checkbox.gif)

</div>

## Inputs

The main input of the Checkbox node is the <span className="ndl-data">Checked</span> input:

<div className="ndl-table-35-65">

| Data                                               | Description                                                                                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Checked</span>          | <##input:checked##>A boolean setting the checkbox in "checked" or "unchecked" state. This is the value of the checkbox and can be connected to a data source.<##input##> |
| <span className="ndl-data">Background Color</span> | <##input:backgroundColor##>The background color when the checkbox is "checked"<##input##>.                                                                               |

</div>

It can be enabled and disabled using the <span className="ndl-data">Enabled</span> input:

<div className="ndl-table-35-65">

@include "../../shared-props/inputs/_enabled.md"

</div>

The Checkbox node has a set of label properties that can be set:

<div className="ndl-table-35-65">

| Data                                           | Description                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span className="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span className="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |
| <span className="ndl-data">Spacing</span>      | The spacing between the label and the checkbox.                                                  |

</div>

Similarly, it has a set of icon properties:

<div className="ndl-table-35-65">

| Data                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span className="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span className="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span className="ndl-data">Placement</span>   | Sets whether the icon should be to the `left` or to the `right` of the _Label_                      |
| <span className="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span className="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

</div>

<div className="ndl-table-35-65">

| Signal                                    | Description                                                                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Check</span>   | Reflects the same action as the user checked the Checkbox.                                                                                                                                            |
| <span className="ndl-signal">Uncheck</span> | Reflects the same action as the user unchecked the Checkbox.                                                                                                                                                                                      |

</div>

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

- [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
- [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
- [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
- [Layout, Position](/nodes/shared-props/inputs/visual-input-properties/#-position)
- [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
- [Border Style](/nodes/shared-props/inputs/visual-input-properties/#border-style)
- [Corner Radius](/nodes/shared-props/inputs/visual-input-properties/#corner-radius)
- [Box Shadow](/nodes/shared-props/inputs/visual-input-properties/#box-shadow)
- [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
- [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
- [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

The main output of the Checkbox node is the <span className="ndl-data">Checked</span> output.

<div className="ndl-table-35-65">

| Data                                      | Description                                                                                                                                                                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Checked</span> | <##output:checked##>A boolean output that is true when this checkbox control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked.<##output##> |

</div>

It also features a set of <span className="ndl-signal">signals</span>:

<div className="ndl-table-35-65">

@include "../../shared-props/outputs/_control-events.md"

</div>

### States

Apart from triggering <span className="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span className="ndl-data">data</span> outputs:

<div className="ndl-table-35-65">

@include "../../shared-props/outputs/_control-states.md"

</div>

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

- [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
- [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
- [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
