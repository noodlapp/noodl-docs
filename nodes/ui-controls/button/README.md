---
hide_title: true
hide_table_of_contents: true
title: Button node
---

{/*##head##*/}

# Button

This node places a customizable button in the visual tree.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/button/button_visual.png)

</div>

The button has a <span className="ndl-signal">Click</span> signal that you can use to trigger actions.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/button//button_node.png)

</div>
{/*##head##*/}

This control contains all logic such as accessibility etc. It can be styled in via it's properties.
Use variations to create different types of buttons

## Inputs

The Button can be enabled and disabled using the Enabled input:

@include "../../shared-props/inputs/_enabled.md"

The Button node has a set of label properties that can be set:

| Data                                           | Description                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Enable Label</span> | Sets whether the label is visible or not.                                                        |
| <span className="ndl-data">Text Style</span>   | Set an existing text style to this node, or create a new text style from the current properties. |
| <span className="ndl-data">Label</span>        | A text string that will be shown as the label on the button.                                     |

Similarly, it has a set of icon properties:

| Data                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enable Icon</span> | Sets whether the icon is visible or not.                                                            |
| <span className="ndl-data">Type</span>        | Use this to set if you want to use a predefined `icon` or a custom `image` from the project folder. |
| <span className="ndl-data">Source</span>      | Where to get the icon.                                                                              |
| <span className="ndl-data">Spacing</span>     | The spacing between the text and the icon.                                                          |
| <span className="ndl-data">Placement</span>   | Sets whether the icon should be to the `left` or to the `right` of the _Label_                      |
| <span className="ndl-data">Size</span>        | The width of the icon in `px`.                                                                      |
| <span className="ndl-data">Color</span>       | Sets the color of the icon. Only visible if _Type_ is set to `icon`.                                |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [Padding](/nodes/shared-props/inputs/visual-input-properties#padding)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#position)
-   [Text Styles](/nodes/shared-props/inputs/visual-input-properties#text-styles)
-   [Style](/nodes/shared-props/inputs/visual-input-properties#style)
-   [Border Style](/nodes/shared-props/inputs/visual-input-properties#border-style)
-   [Corner Radius](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
-   [Box Shadow](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [Dimension Constraints](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
-   [Other](/nodes/shared-props/inputs/visual-input-properties#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

The main output for the button is the Click <span className="ndl-signal">signal</span>:

| Signal                                    | Description                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Click</span> | {/*##output:onClick##*/}A signal is sent on this output when the button is clicked.{/*##output##*/} |

It also features a set of more in depth <span className="ndl-signal">signals</span>:

@include "../../shared-props/outputs/_control-events.md"

### States

Apart from triggering <span className="ndl-signal">signals</span> the Button node also notifies of its state through <span className="ndl-data">data</span> outputs:

@include "../../shared-props/outputs/_control-states.md"

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
