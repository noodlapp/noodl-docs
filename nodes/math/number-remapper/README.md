---
hide_title: true
hide_table_of_contents: true
title: Number Remapper node
---

<##head##>

# Number Remapper

This node maps a range of input <span className="ndl-data">numbers</span> to a range of output <span className="ndl-data">numbers</span>. It translates the relative position of the input <span className="ndl-data">number</span> to its corresponding <span className="ndl-data">number</span> in the output range.

<div className="ndl-image-with-background l">

![](/nodes/math/number-remapper/number_remapper_node.png)

</div>

If the input range is `0 to 360`, the output range is `0 to 1` and the input <span className="ndl-data">number</span> is `180` the output <span className="ndl-data">number</span> will be `0.5`.

<##head##>

## Inputs

| Data                                             | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Input Value</span>    | The number to remap.                                                                                                                                                                                                                                                                                                                                                                                   |
| <span className="ndl-data">Input Minimum</span>  | When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Minimum_.                                                                                                                                                                                                                                                                           |
| <span className="ndl-data">Input Maximum</span>  | When the _Input Value_ equals this value the output of this node will exactly equal the value specified in _Output Maximum_.                                                                                                                                                                                                                                                                           |
| <span className="ndl-data">Output Minimum</span> | The lowest value to output.                                                                                                                                                                                                                                                                                                                                                                            |
| <span className="ndl-data">Output Maximum</span> | The highest value to output.                                                                                                                                                                                                                                                                                                                                                                           |
| <span className="ndl-data">Clamp Output</span>   | Controls the behavior if the _Input Value_ is lower than _Input Minimum_ or higher than _Input Maximum_.<br/><br/>If _Clamp Output_ is set to _Yes_ then the output will not be lower than _Output Minimum_ or higher than _Output Maximum_. If _Clamp Output_ is set to _No_ then the output will be linearly extrapolated and will be lower or higher than the specified minimum and maximum values. |

## Outputs

| Data                                             | Description                                                                |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| <span className="ndl-data">Remapped Value</span> | The result of remapping the _Input Value_ with the values specified above. |
