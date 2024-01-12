---
hide_title: true
hide_table_of_contents: true
title: Image node
---

{/*##head##*/}

# Image

This node places an image in the visual tree. It features a wide range of design options and blend modes.

The <span className="ndl-data">source</span> can be set from a URL or a file. You can drag images from your computer and drop them into Noodl to add them to the project folder. This will make them selectable as the <span className="ndl-data">source</span> in the <span className="ndl-node">Image</span> nodes Property Panel.

{/*##head##*/}

## Inputs

| Data                                         | Description                                                                                                                                                                                                                  |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Source</span>     | The image source path. Choose an image in your project or point to a valid URL that can be accessed.                                                                                                                         |
| <span className="ndl-data">Source Set</span> | Use this property to specify different image sources for different resolutions making it more responsive. Learn more [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#-position)
-   [Style](/nodes/shared-props/inputs/visual-input-properties#style)
-   [Border Style](/nodes/shared-props/inputs/visual-input-properties#border-style)
-   [Corner Radius](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
-   [Box Shadow](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [Dimension Constraints](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
-   [Other](/nodes/shared-props/inputs/visual-input-properties#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

Many of the UI nodes share the same outputs. Please refer to the [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties) documentation.

This node supports the following properties:

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Pointer Events](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
-   [Hover Events](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
