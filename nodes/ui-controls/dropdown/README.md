---
hide_title: true
hide_table_of_contents: true
title: Dropdown node
---

{/*##head##*/}

# Dropdown

This node places a dropdown input field in the visual tree.
The input can for example be used to capture information from a user.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/dropdown/dropdown_visual.png)

</div>

The dropdown takes an array of options as an input,
which will be shown in the dropdown for the user to pick from.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/dropdown/dropdown_node.png)

</div>

## The Incoming Items Format

The incoming items should be an [Array](/nodes/data/array/array-node) of [Objects](/nodes/data/object/object-node),
for example coming from a [Static Array](/nodes/data/array/static-array),
[Query Records](/nodes/data/cloud-data/query-records) or a [Function](/nodes/javascript/function) node.

The **Object** should have two mandatory properties: `Label`, `Value` (note that the case matters, `value` would not work). The `Label` property should contain the string to be shown in the **Dropdown**.
The `Value` property will be set on the output **Value** on the **Dropdown**.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/dropdown/dropdown-2.png)

</div>

Depending on how your original data looks, it may be necessary to use the [Array Map](/nodes/data/array/array-map/) node to re-map values in the original data towards `Label` and `Value`.
One useful pattern is to map the `id` of an **Object** to the `Value` property in the **Array Map** to easily access the selected **Object**.
The mapping can be achieved through `Value: function (object) { return object.id }`.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/dropdown/dropdown-mapping.png)

</div>

{/*##head##*/}

## Inputs

| Data                                                  | Description                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span>               | {/*##input:item##*/}This input takes an **Array** of **Objects** that will populate the **Dropdown**. You should make sure that they have the two properties `Label` and `Value` set as they are used to represent the item in the **Dropdown**.{/*##input##*/} |
| <span className="ndl-data">Value</span>               | {/*##input:value##*/}Setting this input will force the **Dropdown** to select the item with the same value set in its `Value` property.{/*##input##*/}                                                                                                          |
| <span className="ndl-data">Placeholder</span>         | The placeholder text for when the dropdown is empty.                                                                                                                                                                                                    |
| <span className="ndl-data">Placeholder Opacity</span> | The opacity of the placeholder text. `0` is completely transparent and invisible. `1` is completely solid and opaque.                                                                                                                                   |

User interaction can be enabled and disabled:

@include "../../shared-props/inputs/_enabled.md"

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

-   [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
-   [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
-   [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
-   [Layout, Position](/nodes/shared-props/inputs/visual-input-properties/#-position)
-   [Text Style](/nodes/shared-props/inputs/visual-input-properties/#text-style)
-   [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
-   [Border Style](/nodes/shared-props/inputs/visual-input-properties/#border-style)
-   [Corner Radius](/nodes/shared-props/inputs/visual-input-properties/#corner-radius)
-   [Box Shadow](/nodes/shared-props/inputs/visual-input-properties/#box-shadow)
-   [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
-   [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

The main output is the following:

| Data                                    | Description                                                                                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | {/*##output:value##*/}This output holds the value, i.e. what is in the property `Value` in the currently selected **Object** in the Dropdown.{/*##output##*/} |

| Signal                                    | Description                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Changed</span> | {/*##output:changed##*/}This signal signal is emitted when the selection of the **Dropdown** changes.{/*##output##*/} |

It also features a set of more in depth <span className="ndl-signal">signals</span>:

@include "../../shared-props/outputs/_control-events.md"

### States

Apart from triggering <span className="ndl-signal">signals</span> the Dropdown node also notifies of its state through <span className="ndl-data">data</span> outputs:

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
