---
hide_title: true
hide_table_of_contents: true
title: Circle node
---

<##head##>

# Circle

This node places a circle (or a circle segment) in the visual tree. It features a wide range of design options.

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/circle/circle_visual.png)

</div>

<##head##>

## Inputs

| Data                                           | Description                                                                                                                                                                        |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Size</span>         | Specifies the size of the Circle in pixels.                                                                                                                                        |
| <span className="ndl-data">Start Angle</span>  | The start angle of the Circle segment.                                                                                                                                             |
| <span className="ndl-data">End Angle</span>    | The end angle of the Circle segment.                                                                                                                                               |
| <span className="ndl-data">Fill</span>         | Specify whether the Cirlce should be filled or not.                                                                                                                                |
| <span className="ndl-data">Fill Color</span>   | Specify the fill color.                                                                                                                                                            |
| <span className="ndl-data">Stroke</span>       | Enables the stroke of the Circle.                                                                                                                                                  |
| <span className="ndl-data">Stroke Width</span> | Sets the width of the Circle stroke.                                                                                                                                               |
| <span className="ndl-data">Stroke Color</span> | Sets the stroke color of the Circle stroke.                                                                                                                                        |
| <span className="ndl-data">Line Cap</span>     | Specifies what kind of cap there will be on the circle stroke.<br/><br/>`Butt`: A direct cut, not rounded end of the circle stroke.<br/>`Round`: A round end to the circle stroke. |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#position)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [Other](/nodes/shared-props/inputs/visual-input-properties#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

Many of the UI nodes share the same outputs. Please refer to the [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties) documentation.

This node supports the following properties:

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [Pointer Events](/nodes/shared-props/outputs/visual-output-properties#pointer-events)
-   [Hover Events](/nodes/shared-props/outputs/visual-output-properties#hover-events)
-   [Other](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
