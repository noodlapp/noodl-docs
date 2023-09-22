---
hide_title: true
hide_table_of_contents: true
title: Clear Array node
---

<##head##>

# Clear Array

This node is used to remove all _Objects_ from an _Array_. The Array is referred to through their _Id_. Use the _Do_ action to remove all _Objects_ in the Array.

<div className="ndl-image-with-background l">

![](/nodes/data/array/clear-array/clear-array.png)

</div>

<##head##>

## Inputs

| Data                                       | Description                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| <span className="ndl-data">Array Id</span> | <##input:collectionId##>The _Id_ of the Array that will be cleared.<##input##> |

| Signal                                 | Description                                                                                                             |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>This actions removes all the Objects from the Array with the _Id_ set on the input _Array Id_.<##input##> |

## Outputs

| Signal                                   | Description                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>This event is sent when the removal is done, and the Array is empty.<##output##> |
