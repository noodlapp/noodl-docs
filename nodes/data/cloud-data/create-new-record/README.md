---
hide_title: true
hide_table_of_contents: true
title: Create New Record node
---

<##head##>

# Create New Record

This node is used to create a new record of a given class. You specify the class of record to be created in the Property Panel. Sending a <span className="ndl-signal">signal</span> to <span className="ndl-signal">Do</span> will perform the action.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/create-new-record/create-new-record.png)

</div>

You can also provide values for the properties of the record either via connections or by typing the values in the property panel.

<##head##>

## Inputs

| Data                                              | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span>           | Choose a class for the record that you want to create.                                                                                                                                                                                                                                                                                                                                        |
| <span className="ndl-data">Source Object Id</span>           | <##input:source object id##>This input can be used to provide an object whose properties will be used as the initial values of the newly created record.     <##input##>                                                                                                                                                                                                                                                                                                                                 |
| <span className="ndl-data">Property Inputs</span> | When the class of the record to be created is choosen, all properties of that class will be available as inputs. When the **Do** signal is received a new record will be created with the values of the properties either specified in the property panel or via connections. <##input:prop-\*##>The value of these inputs will become the properties of the newly created record.<##input##> |

| Signal                                 | Description                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal on this input to create a new record.<##input##> |

@include "../_acl.md"

## Outputs

| Data                                    | Description                                                                                                     |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id</span>    | <##output:id##>The **Id** of the new record that was created if the action was successful.<##output##>          |
| <span className="ndl-data">Error</span> | <##output:error##>The specific error message in case something went wrong when creating the record.<##output##> |

| Signal                                      | Description                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>A signal is sent here when the new record have been created successfully.<##output##>                                                                  |
| <span className="ndl-signal">Failure</span> | <##output:failure##>A signal is sent on this output if something went wrong when creating the record.<##output##> You can find the specific error in the **Error** output. |
