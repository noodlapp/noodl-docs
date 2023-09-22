---
hide_title: true
hide_table_of_contents: true
title: Set Record Properties node
---

<##head##>

# Set Record Properties

This action node will set property values of a record.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/set-record-properties/set-record-properties-node.png)

</div>

You need specify the class of the record in the property panel. Then you can either specify the values of the properties to set in the property panel or by providing them as an input connection.

Send a <span className="ndl-signal">signal</span> to <span className="ndl-signal">Do</span> to perform the action.
<##head##>

## Inputs

| Data                                              | Description                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span>           | The class of record for this node. Choosing the class will determine which property inputs that become available on the node.                                                                                                                                                                        |
| <span className="ndl-data">Store to</span>        | <##input:store to##>Specifies if this node should store both to the cloud and locally, or only locally.<##input##>                                                                                                                                                                                   |
| <span className="ndl-data">Properties to store</span>        | <##input:properties to store##>Specifies if only the explicitly specified properties should be save, **only specified**, this means that only the properties that have a value either in the property panel or via an input connection will be written to the cloud record. If **All** is selected that means that all properties will always be written, if there is no explicit value provided on this node the value of the object with the corresponding **Id** will be used.<##input##>                                                                                                                                                                                   |
| <span className="ndl-data">Id</span>              | <##input:id##>Specify the **Id** of the record that you want to set the properties on.<##input##> This input is only valid if **Id Source** is set to **Specify explicitly**.                                                                                                                        |
| <span className="ndl-data">Property Inputs</span> | <##input:prop-\*##>The value to set this property to when the action is triggered.<##input##> For each property in the specified class there will be an input of the correct type. You can provide the values for the inputs either through connections or by specifying them in the property panel. |

@include "../_id-source.md"

| Signal                                 | Description                                                                                                |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>When a signal is received on this input the properties will be set on the record.<##input##> |

@include "../_acl.md"

## Outputs

| Data                                    | Description                                                                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id</span>    | <##output:id##>The **Id** of the record where the properties will be updated by this node.<##output##>          |
| <span className="ndl-data">Error</span> | <##output:error##>The specific error message in case something went wrong when updating the record.<##output##> |

| Signal                                      | Description                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>A signal is sent here when the record have been updated successfully.<##output##>                                                                      |
| <span className="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when updating the record.<##output##> You can find the specific error in the **Error** output. |
