---
hide_title: true
hide_table_of_contents: true
title: Boolean node
---

<##head##>

# Boolean

This node holds a <span className="ndl-data">boolean</span> (true/false) value. You can use it to quickly store a <span className="ndl-data">boolean</span> using the <span className="ndl-signal">Set</span> input. It can also be used to hold a static value in logical operations.

<div className="ndl-image-with-background l">

![](/nodes/data/boolean/boolean-1.png)

</div>

You can connect the <span className="ndl-node">Boolean</span> node to a <span className="ndl-node">Component Inputs</span> node. This will make the input shows up as a <span className="ndl-data">boolean</span> (checkbox) in the Property Panel for instances of this component.

<div className="ndl-image-with-background l">

![](/nodes/data/boolean/boolean-2.png)

</div>

<##head##>

## Inputs

| Data                                    | Description                                                                                                                                                |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | The value to store in the node. The output value will equal this value, unless _Set_ is connected, then it will be updated when **Set** receives a signal. |

| Signal                                  | Description                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Set</span> | This is used to only update the output when _Save Value_ is set to true. This will allow you to freeze the stored value and only allow it to update under certain conditions, e.g. on a Tap. |

## Outputs

| Data                                    | Description                    |
| --------------------------------------- | ------------------------------ |
| <span className="ndl-data">Value</span> | The boolean stored in the node |

| Signal                                     | Description                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------- |
| <span className="ndl-signal">Stored</span> | This port sends a signal when the value is stored via the _Set_ input signal. |
