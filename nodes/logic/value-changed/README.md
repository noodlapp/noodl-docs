---
hide_title: true
hide_table_of_contents: true
title: Value Changed node
---

<##head##>

# Value Changed

This node sends a <span className="ndl-signal">signal</span> when the input value changes.

<div className="ndl-image-with-background l">

![](/nodes/logic/value-changed/valuechanged_node.png)

</div>

The <span className="ndl-node">Value Changed</span> node is useful to trigger actions in your web app based on changes in your data.

<##head##>

## Inputs

| Data                                    | Description                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Input</span> | <##input:input##>The value that this node should observe. When this value changes the **Value Changed** signal will be triggered.<##input##> |

## Outputs

| Signal                                            | Description                                                                               |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Value Changed</span> | <##output:valueChanged##>This signal is sent when the input value is changed.<##output##> |
