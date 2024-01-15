---
hide_title: true
hide_table_of_contents: true
title: Set Object Properties node
---

{/*##head##*/}

# Set Object Properties

You can use this node to set properties on an [Object](/nodes/data/object/object-node). You must identify the **Object** with it's **Id** (see full docs for details)

<div className="ndl-image-with-background l">

![](/nodes/data/object/set-object-properties/set-object-properties.png)

</div>

You can then specify which properties you want to set on the Object in the property panel.

<div className="ndl-image-with-background">

![](/nodes/data/object/set-object-properties/prop-panel.png)

</div>

Finally, send a signal to **Do** to perform the action.

{/*##head##*/}

## Inputs

@include "../_properties.md"

| Data                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Id Source</span> | An Id of a record is needed to perform the action of this node. The **Id Source** property specifies how this Id is retrieved, the options are:<br/><br/>`Specify explicitly`: This means you need to specify the Id of the record explicitly through e.g. a connection to the **Id** input.<br/>`From repeater`: This means that the Id for the record will be derived from a repeater. This option is only valid if the component this node is placed in is created by a repeater. Then this node will act on the repeater object that this component was created for. |
| <span className="ndl-data">Id</span>        | {/*##input:id##*/}On this input you provide the **Id** of the object where you will set the properties.{/*##input##*/}                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

| Signal                                 | Description                                                                                        |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | {/*##input:do##*/}Send a signal on this input to perform the action and set the properties.{/*##input##*/} |

## Outputs

| Data                                 | Description                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Id</span> | {/*##output:id##*/}The **Id** of the Object where you will / have set the properties. This is simply a mirror of the **Id** input.{/*##output##*/} |

| Signal                                   | Description                                                                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-signal">Done</span> | {/*##output:done##*/}A signal is sent on this output when the action is performed. You can use this to trigger other actions that needs to run after the properties have been set.{/*##output##*/} |
