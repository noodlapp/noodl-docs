---
hide_title: true
hide_table_of_contents: true
title: Record node
---

{/*##head##*/}

# Record

This node is used to read data from a **Record**. A **Record** is an **Object** with a **Class**, with predefined properties of specific types and that can be stored in the Noodl backend.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/record/record-node.png)

</div>

You have to choose the class for the **Record** node in the property panel and you must make sure that the node has the Id of the record it should access (there are multiple ways to do this, see full docs for details).

Then you can access the properties of the specific **Record** through the property outputs.
{/*##head##*/}

## Inputs

| Data                                    | Description                                                                                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span> | Select the **Class** for this Records that this node will get data from. Choosing the **Class** will make the node get all properties of the class as outputs. |
| <span className="ndl-data">Id</span>    | {/*##input:id##*/}The Id of the **Record** that this node should read data from.{/*##input##*/}                                                                        |

@include "../_id-source.md"

| Signal                                    | Description                                                                                                                                                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | {/*##input:fetch##*/}Send a signal on this input to fetch the data for this **Record** from the backend. All **Record** nodes that share the **Id** with this node (i.e. are reading data from the same record) will be updated.{/*##input##*/} |

## Outputs

| Data                                               | Description                                                                                                                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id</span>               | {/*##output:id##*/}The Id of the **Record** this node is accessing the properties for.{/*##output##*/}                                                                                                           |
| <span className="ndl-data">Error</span>            | {/*##output:error##*/}This will contain the error message if a fetch action failed and the **Failure** signal was emitted.{/*##output##*/}                                                                       |
| <span className="ndl-data">Class Properties</span> | {/*##output:prop-\*##*/}The value of this property in the record that the node reads from.{/*##output##*/} This node will have an output for each property in the **Class** that have been selected on the node. |

| Signal                                                      | Description                                                                                                                                                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetched</span>                 | {/*##output:fetched##*/}A signal is sent on this output when a **Fetch** has been completed successfully. This is as a result of triggering a fetch by sending a signal to the **Fetch** input.{/*##output##*/} |
| <span className="ndl-signal">Failure</span>                 | {/*##output:failure##*/}A signal is sent on this output if a fetch action has failed. This is a potential result of triggering a fetch by sending a signal to the **Fetch** input.{/*##output##*/}              |
| <span className="ndl-signal">Changed</span>                 | {/*##output:changed##*/}A signal is sent on this output if the record that this node is reading data from has changed locally.{/*##output##*/}                                                                  |
| <span className="ndl-signal">Property Changed Signal</span> | {/*##output:changed-\*##*/}A signal is sent here if the value of the property on the record this node is reading data from has changed locally.{/*##output##*/}                                                 |
