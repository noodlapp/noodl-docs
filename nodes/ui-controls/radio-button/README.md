---
hide_title: true
hide_table_of_contents: true
title: Radio Button
---

<##head##>

# Radio Button

This node places a radio button in the visual tree. The <span className="ndl-node">Radio Button</span> must be placed in a <span className="ndl-node">Radio Button Group</span> node to function properly.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button/radio_button_visual.png)

</div>

You must specify a unique <span className="ndl-data">Value</span> for each <span className="ndl-node">Radio Button</span> node. Only one <span className="ndl-node">Radio Button</span> in a <span className="ndl-node">Radio Button Group</span> can be selected at once.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button/radio_button_node.png)

</div>

<##head##>

The core radio button has a very simple visual appearance and is most often used in other components as part of a design system. This control contains all logic such as accessibility etc. It can be styled in via it's properties, or you can use it only for the logic and create your own radio button component in your own design system.

<div className="ndl-image-with-background s">

![](/nodes/ui-controls/radio-button/radiobutton.gif)

</div>

## Inputs

The main input of the Radio Button node is the <span className="ndl-data">Value</span> input:

| Data                                               | Description                                                                                                                                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>            | The value for this radio button. The value of the selected radio button in a radio button group will be passed as the **Value** output of the radio button group. All radio buttons in a group should have unique values. |
| <span className="ndl-data">Background Color</span> | The background color when the radio button is "checked".                                                                                                                                                                  |

It can be enabled and disabled using the <span className="ndl-data">Enabled</span> input:

@include "../../shared-props/inputs/_enabled.md"

The Checkbox node has a set of label properties that can be set:

| Data                                           | Description                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span className="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span className="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |
| <span className="ndl-data">Spacing</span>      | The spacing between the label and the checkbox.                                                  |

Similarly, it has a set of icon properties:

| Data                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span className="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span className="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span className="ndl-data">Placement</span>   | Sets whether the icon should be to the `left` or to the `right` of the _Label_                      |
| <span className="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span className="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
-   [Padding](/nodes/shared-props/inputs/visual-input-properties/#padding)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties/#-position)
-   [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
-   [Border Style](/nodes/shared-props/inputs/visual-input-properties/#border-style)
-   [Corner Radius](/nodes/shared-props/inputs/visual-input-properties/#corner-radius)
-   [Box Shadow](/nodes/shared-props/inputs/visual-input-properties/#box-shadow)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
-   [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

The main output of the Radio Button node is the <span className="ndl-data">Checked</span> output.

| Data                                      | Description                                                                                                                                                                                                        |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Checked</span> | A boolean output that is true when this radio button control is checked and false if not. This is useful when using this control as a base for your own component that will represent visually that it is checked. |

It also features a set of <span className="ndl-signal">signals</span>:

@include "../../shared-props/outputs/_control-events.md"

### States

Apart from triggering <span className="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span className="ndl-data">data</span> outputs:

@include "../../shared-props/outputs/_control-states.md"

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
