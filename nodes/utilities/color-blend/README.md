---
hide_title: true
hide_table_of_contents: true
title: Color Blend node
---

<##head##>

# Color Blend

This node lets you blend between color values.

<div className="ndl-image-with-background">

![](/nodes/utilities/color-blend/color-blend.png)

</div>

<##head##>

## Inputs

| Data                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Color 0..N</span>  | The colors to mix. These ports are numbered as _Color 0_, _Color 1_ etc. When a color is specified a new input will be created for the next color.                                                                                                                                                                                                                                                                                                             |
| <span className="ndl-data">Blend value</span> | This specifies how the input colors will be blended. The inputs colors are interpolated linearly so a _Blend Value_ of _0_ will result in the color of the input port _Color 0_ and a value of _1_ will result in _Color 1_.<br/><br/>A value of 0.5 will be a mix of 50% of _Color 0_ and _Color 1_, a number of 1.5 will be a mix between _Color 1_ and _Color 2_, etc. Values below 0 or above the amount of input colors are clamped to the closest color. |

## Outputs

| Data                                     | Description                 |
| ---------------------------------------- | --------------------------- |
| <span className="ndl-data">Result</span> | The resulting blended color |
