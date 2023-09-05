---
hide_title: true
hide_table_of_contents: true
title: Condition
---

<##head##>

# Condition

This node evaluates a condition and sends one of two <span className="ndl-signal">signals</span> depending on if the condition is <span className="ndl-data">true</span> or <span className="ndl-data">false</span>.

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/condition/condition_node.png)

</div>

The input <span className="ndl-data">Condition</span> will be treated as a <span className="ndl-data">boolean</span>, and the evaluation happens when the input changes, unless an explict <span className="ndl-signal">signal</span> is connected to the <span className="ndl-signal">Evaluate</span> input.

<##head##>

<div className="ndl-image-with-background l">

![](/nodes/utilities/logic/condition/condition.gif)

</div>

## Inputs

| Data                                        | Description                                                                                                                                                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Condition</span> | <##input:condition##>A boolean that decides which output signal (**On true** or **On false**) that should be triggered when the **Evaluate** signal is triggered or when the condition changes, if the **Evaluate** signal is not connected.<##input##> |

| Signal                                       | Description                                                                                                                                                                                                      |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Evaluate</span> | <##input:evaluate##>Evaluates the **Condition** input and triggers the respective output signal. If no signal is connected to Evaluate, the node will evaluate the input everytime the input changes.<##input##> |

## Outputs

| Data                                       | Description                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Is True</span>  | <##output:result##>A <span className="ndl-data">boolean</span> that is <span className="ndl-data">true</span> when the latest evaluated value on the **Condition** input is true. <##output##>    |
| <span className="ndl-data">Is False</span> | <##output:isfalse##>A <span className="ndl-data">boolean</span> that is <span className="ndl-data">false</span> when the latest evaluated value on the **Condition** input is false. <##output##> |

| Signal                                       | Description                                                                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">On True</span>  | <##output:ontrue##>Triggered when **Evaluate** is triggered and **Condition** is <span className="ndl-data">true.</span><##output##>   |
| <span className="ndl-signal">On False</span> | <##output:onfalse##>Triggered when **Evaluate** is triggered and **Condition** is <span className="ndl-data">false.</span><##output##> |
