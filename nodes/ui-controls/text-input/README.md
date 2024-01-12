---
hide_title: true
hide_table_of_contents: true
title: Text Input node
---

{/*##head##*/}

# Text Input

This node places a text input field in the visual tree. The input can be used to capture information from a user.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/text-input/textinput_visual.png)

</div>

The captured value can easily be connected to other nodes in a project.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/text-input/textinput_node.png)

</div>

{/*##head##*/}

## Inputs

<div className="ndl-table-35-65">

| Data                                                  | Description                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Text</span>                | The text string of the Text Input node. Setting this will change the current text, unless _Set_ is connected, then it will be updated when _Set_ receives a signal.                                                                                                                            |
| <span className="ndl-data">Type</span>                | The type of the Text Input.<br/><br/>`Text`: A single line text input (default).<br/>`Text Area`: A multi line text input.<br/>`Email`: A single line email text input.<br/>`Number`: A single line number input.<br/>`Password`: A single line password input, will mask password by default. |
| <span className="ndl-data">Placeholder</span>         | The placeholder text for when the Text Input is empty.                                                                                                                                                                                                                                         |
| <span className="ndl-data">Placeholder Opacity</span> | The opacity of the placeholder text. `0` is completely transparent and invisible. `1` is completely solid and opaque.                                                                                                                                                                          |
| <span className="ndl-data">Text Alignment</span>      | The alignment of the text string within the Text Input node's bounding box.                                                                                                                                                                                                                    |

| Signal                                    | Description                                                                                                                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Set</span>   | Sets the text field value to the text in the _Text_ input.                                                                                                                                            |
| <span className="ndl-signal">Clear</span> | Clears the text.                                                                                                                                                                                      |
| <span className="ndl-signal">Focus</span> | Focuses the text field.<br/><br/>_Note_: Some browsers, most notably Safari, only allow focus if it originates from a user event, like a click. So using a Delay node or other method might not work. |
| <span className="ndl-signal">Blur</span>  | Removes the keyboard focus.                                                                                                                                                                           |

</div>

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

- [Margin](/nodes/shared-props/inputs/visual-input-properties/#margin)
- [Padding](/nodes/shared-props/inputs/visual-input-properties/#padding)
- [Alignment](/nodes/shared-props/inputs/visual-input-properties/#alignment)
- [Dimensions](/nodes/shared-props/inputs/visual-input-properties/#dimensions)
- [Layout, Position](/nodes/shared-props/inputs/visual-input-properties/#-position)
- [Text Style](/nodes/shared-props/inputs/visual-input-properties/#text-style)
- [Style](/nodes/shared-props/inputs/visual-input-properties/#style)
- [Border Style](/nodes/shared-props/inputs/visual-input-properties/#border-style)
- [Corner Radius](/nodes/shared-props/inputs/visual-input-properties/#corner-radius)
- [Box Shadow](/nodes/shared-props/inputs/visual-input-properties/#box-shadow)
- [Placement](/nodes/shared-props/inputs/visual-input-properties/#placement)
- [Other](/nodes/shared-props/inputs/visual-input-properties/#other)
- [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties/#advanced-html)

## Outputs

<div className="ndl-table-35-65">

| Data                                   | Description              |
| -------------------------------------- | ------------------------ |
| <span className="ndl-data">Text</span> | The current text string. |

| Signal                                       | Description                                        |
| -------------------------------------------- | -------------------------------------------------- |
| <span className="ndl-signal">On Enter</span> | Signal triggered when Enter/Return key is pressed. |

</div>

It also features the standard set of UI control <span className="ndl-signal">signals</span>:

@include "../../shared-props/outputs/_control-events.md"

### States

Apart from triggering <span className="ndl-signal">signals</span> the Checkbox node also notifies of its state through <span className="ndl-data">data</span> outputs:

@include "../../shared-props/outputs/_control-states.md"

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

- [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
- [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
- [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
