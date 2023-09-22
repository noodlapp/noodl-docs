---
hide_title: true
hide_table_of_contents: true
title: Insert Into Array node
---

<##head##>

# Insert Object Into Array

This node is used to insert an _Object_ into an _Array_. Both the Array and the Object are referred to through their _Id_. The insert happens when the _Do_ action is triggered.

<div className="ndl-image-with-background l">

![](/nodes/data/array/insert-into-array/insert-object-into-array.png)

</div>

<##head##>

## Inputs

| Data                                        | Description                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------- |
| <span className="ndl-data">Array Id</span>  | <##input:collectionId##>The _Id_ of the Array to insert the Object into.<##input##> |
| <span className="ndl-data">Object Id</span> | <##input:modifyId##>The _Id_ of the Object to insert into the Array.<##input##>     |

| Signal                                 | Description                                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Sending a signal to this input inserts the Object with the _Id_ set on the input _Object Id_ into the Array with the _Id_ set on the input _Array Id_.<##input##> |

## Outputs

| Signal                                   | Description                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>This signal is sent when the insertion is ready.<##output##> |
