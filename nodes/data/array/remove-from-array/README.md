---
hide_title: true
hide_table_of_contents: true
title: Remove From Array node
---

<##head##>

# Remove Object From Array

This node is used to remove an _Object_ from an _Array_. Both the Array and the Object are referred to through their _Id_. The removal happens when the _Do_ action is triggered.
If the _Object_ to be removed is not in the array, nothing will happen.

<div className="ndl-image-with-background">

![](/nodes/data/array/remove-from-array/remove-object-from-array.png)

</div>

<##head##>

## Inputs

| Data                                        | Description                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Array Id</span>  | <##input:collectionId##>The _Id_ of the Array from which the Object will be removed.<##input##> |
| <span className="ndl-data">Object Id</span> | <##input:modifyId##>The _Id_ of the Object to remove from the Array.<##input##>                 |

| Signal                                 | Description                                                                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>This actions removes the Object with the _Id_ set on the input _Object Id_ from the Array with the _Id_ set on the input _Array Id_.<##input##> |

## Outputs

| Signal                                   | Description                                                                |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>This signal is sent when the removal is done.<##output##> |
