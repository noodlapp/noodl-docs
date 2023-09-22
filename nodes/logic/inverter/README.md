---
hide_title: true
hide_table_of_contents: true
title: Inverter node
---

<##head##>

# Inverter

This node changes <span className="ndl-data">true</span> values to be <span className="ndl-data">false</span>, and <span className="ndl-data">false</span> values to be <span className="ndl-data">true</span>. It is identical to a logic NOT operation.

<div className="ndl-image-with-background l">

![](/nodes/logic/inverter/inverter_node.png)

</div>

The <span className="ndl-node">Inverter</span> node runs JavaScript in the background and interprets truthy and falsy values in the same fashion. It is equal to creating an <span className="ndl-node">Expression</span> node with the expression `!value`.

<##head##>

## Inputs

| Data                                    | Description          |
| --------------------------------------- | -------------------- |
| <span className="ndl-data">Value</span> | The value to invert. |

## Outputs

| Data                                     | Description                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| <span className="ndl-data">Result</span> | The result of inverting the input _Value_. This is equal to either _True_ or _False_ |

## Advanced

The inverter is equal to creating the following expression:
`!value` .
