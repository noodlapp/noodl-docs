---
hide_title: true
hide_table_of_contents: true
title: Number
---

<##head##>

# Number

This node holds a <span className="ndl-data">number</span> value. It is local to the component and cannot be accessed elsewhere in the app.

<div className="ndl-image-with-background l">

![](/nodes/data/number/number-1.png)

</div>

You can also use the <span className="ndl-node">Number</span> node connected to a <span className="ndl-node">Component Inputs</span> node. This will make sure the input shows up as a <span className="ndl-data">number</span> input in the Property Panel for instances of this component.

<div className="ndl-image-with-background l">

![](/nodes/data/number/number-2.png)

</div>

<##head##>

## Inputs

| Data                                    | Description                                                                                                                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | The value to store in the node. The output value will equal this value, unless _Set_ is connected, then the value will be updated when a signal is received at the _Set_ input. |

| Signal                                  | Description                                                            |
| --------------------------------------- | ---------------------------------------------------------------------- |
| <span className="ndl-signal">Set</span> | This is used to only update the output when a signal is sent to _Set_. |

## Outputs

| Data                                    | Description                   |
| --------------------------------------- | ----------------------------- |
| <span className="ndl-data">Value</span> | The number stored in the node |

| Signal                                     | Description                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Stored</span> | A signal is outputted here when the value is updated as a result of the _Set_ signal being received. |
