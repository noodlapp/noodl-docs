---
hide_title: true
hide_table_of_contents: true
title: Text node
---

<##head##>

# Text

This node places a text element in the visual tree. You can use it for both single words as well as paragraphs of text.

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/text/text_visual.png)

</div>

The <span className="ndl-node">Text</span> node can be styled with font family, color, size, and much more.

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/text/text_node.png)

</div>

<##head##>

## Inputs

| Data                                         | Description                                                                                                                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Text</span>       | The text string to display.                                                                                                                                                                        |
| <span className="ndl-data">Text Align</span> | The alignment of the text string within the Text node's bounding box.                                                                                                                              |
| <span className="ndl-data">Word Break</span> | Control where line breaks are allowed. <br/><br/> `Normal`: Break on spaces and other whitespace characters <br/>`Break All`: Allow line breaks between any two characters, including inside words |

### Visual

The Text node features the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties).

-   [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties#dimensions)
-   [Text Styles](/nodes/shared-props/inputs/visual-input-properties#text-styles)
-   [Style](/nodes/shared-props/inputs/visual-input-properties#style)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#-position)
-   [Other](/nodes/shared-props/inputs/visual-input-properties#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

Many of the UI nodes share the same outputs. Please refer to the [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties) documentation.

This node supports the following outputs:

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Pointer Events](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
-   [Hover Events](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
