---
hide_title: true
hide_table_of_contents: true
title: Slider node
---

{/*##head##*/}

# Slider

This node places a range slider in the visual tree. It is used to select a <span className="ndl-data">number</span> between a `min` and a `max` value.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/slider/slider_visual.png)

</div>

The <span className="ndl-node">Slider</span> node allows you to set a <span className="ndl-data">Step</span> value. This controls in what intervals the slider can be incremented or decremented.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/slider/slider_node.png)

</div>

{/*##head##*/}

## Inputs

| Data                                    | Description                                                                                                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | Sets the numeric value of the control.                                                                                |
| <span className="ndl-data">Min</span>   | Sets the numeric minumum value that can be selected using this range control. Default is 0.                           |
| <span className="ndl-data">Max</span>   | Sets the numeric maximum value that can be selected using this range control. Default is 100.                         |
| <span className="ndl-data">Step</span>  | Sets the numeric step value for this range control. Values can only be selected in the specified steps. Default is 1. |

It can be enabled and disabled using the <span className="ndl-data">Enabled</span> input:

@include "../../shared-props/inputs/_enabled.md"

### Thumb and track

The Property Panel features editing popouts for the Slider Thumb and Track. These are styled separately using modified versions of the [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions), [Border Style](/nodes/shared-props/inputs/visual-input-properties/#border-style), [Corner Radius](/nodes/shared-props/inputs/visual-input-properties/#corner-radius) and [Box Shadow](/nodes/shared-props/inputs/visual-input-properties/#box-shadow) gadgets.

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
-   [Padding](/nodes/shared-props/inputs/visual-input-properties/#padding)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties/#-position)
-   [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
-   [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

| Data                                            | Description                                                                                                                             |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>         | The current selected numeric value of the range control.                                                                                |
| <span className="ndl-data">Value Percent</span> | The current selected numeric value of the range control adjusted to be between `0` and `100`, so the value of the range control in `%`. |

@include "../../shared-props/outputs/_control-events.md"

### States

The Slider

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
