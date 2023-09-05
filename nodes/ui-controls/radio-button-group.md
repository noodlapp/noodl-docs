---
hide_title: true
hide_table_of_contents: true
title: Radio Button Group
---

<##head##>

# Radio Button Group

This node is a non visual control used to group <span className="ndl-node">Radio Button</span> nodes. The <span className="ndl-node">Radio Button</span> must be placed in a <span className="ndl-node">Radio Button Group</span> node to function properly.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button-group/radio_button_visual.png)

</div>

The output of the <span className="ndl-node">Radio Button Group</span> node is the <span className="ndl-data">Value</span> of the selected <span className="ndl-node">Radio Button</span>. Only one <span className="ndl-node">Radio Button</span> in a <span className="ndl-node">Radio Button Group</span> can be selected at the same time.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/radio-button-group/radio_button_node.png)

</div>

<##head##>

## Inputs

| Data                                    | Description                                                                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | The value of the current selected radio button. By changing this value will change which radio button is currently selected. |

It can be enabled and disabled using the <span className="ndl-data">Enabled</span> input:

@include "../shared-props/inputs/_enabled.md"

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
-   [Padding](/nodes/shared-props/inputs/visual-input-properties/#padding)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
-   [Layout](/nodes/shared-props/inputs/visual-input-properties/)
-   [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
-   [Dimension Constraints](/nodes/shared-props/inputs/visual-input-properties/#dimension-constraints)
-   [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

| Data                                    | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| <span className="ndl-data">Value</span> | The current selected radio button value will be output here. |

| Signal                                      | Description                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Changed</span> | This event is triggered when the **Value** of the radio button group is changed due to user interaction. |

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../shared-props/inputs/_visual-input-properties.md"

@include "../shared-props/outputs/_visual-output-properties.md"

</div>
