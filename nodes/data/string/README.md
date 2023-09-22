---
hide_title: true
hide_table_of_contents: true
title: String
---

<##head##>

# String

This node contains a <span className="ndl-data">string</span> value (text). It can be provided with static data or be dynamically set from other nodes. The <span className="ndl-node">String</span> node is often used to convert other data types to a <span className="ndl-data">string</span> or to hold string values.

<div className="ndl-image-with-background l">

![](/nodes/data/string/string_node.png)

</div>

You can also use the String node connected to a <span className="ndl-node">Component Inputs</span> node. This will make sure the input shows up as a <span className="ndl-data">string</span> input in the Property Panel for instances of this component.

<##head##>

You can use it to provide a static value for input to other nodes. It is local to the component and cannot be accessed anywhere else in the graph.

<div className="ndl-image-with-background l">

![](/nodes/data/string/local-string.png)

</div>

You can simply connect to the **Value** input to set the value of the node when the connection is updated.

<div className="ndl-image-with-background l">

![](/nodes/data/string/string-1.png)

</div>

Using a variable node like above will make the **Text** component input show up as a string in the property editor of all instances of this component.

You can also use the **Set** input to control when the value of the variable node is updated. In the setup below the value is only updated when the **Text Input** node is blurred.

<div className="ndl-image-with-background l">

![](/nodes/data/string/string-2.png)

</div>

## Inputs

| Data                                    | Description                                                                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Value</span> | The value to store in the node. The output value will equal this value, unless _Set_ is connected, then the value will be passed to the output when a signal is sent to _Set_. |

| Signal                                  | Description                                                                                                                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Set</span> | This is used to only update the output when a signal is received. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap. |

## Outputs

| Data                                     | Description                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span>  | The string (text) stored in the node.                                                         |
| <span className="ndl-data">Length</span> | The length of the string (text) stored in the node, i.e. the number of characters and spaces. |

| Signal                                     | Description                                                             |
| ------------------------------------------ | ----------------------------------------------------------------------- |
| <span className="ndl-signal">Stored</span> | This port sends a signal when the value is updated via the _Set_ input. |
