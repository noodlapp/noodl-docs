---
hide_title: true
hide_table_of_contents: true
title: Set Variable
---

<##head##>

# Set Variable

This node sets the **Value** of a [Variable](/nodes/data/variable/variable-node). You provide the new value on the **Value** input and trigger the <span className="ndl-signal">Do</span> action.

<div className="ndl-image-with-background l">

![](/nodes/data/variable/variable/variable-1.png)

</div>

<##head##>

## Inputs

| Data                                    | Description                                                                                                                                     |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Name</span>  | <##input:name##>The name of the **Variable** to set. Note: All **Variable** nodes with the same name will share the same data.<##input##>       |
| <span className="ndl-data">Value</span> | <##input:value##>The value that you want the **Variable** to get when you trigger the <span className="ndl-signal">Do</span> action.<##input##> |

| Signal                                 | Description                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Updates the value of the **Variable** to what is currently set on the input **Value**.<##input##> |

## Outputs

| Signal                                   | Description                                                                               |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>This event is triggered when the **Variable** have been set.<##output##> |
