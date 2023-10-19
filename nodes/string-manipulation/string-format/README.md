---
hide_title: true
hide_table_of_contents: true
title: String Format node
---

<##head##>

# String Format

This node is used to construct a new text <span className="ndl-data">string</span> from multiple other text <span className="ndl-data">strings</span>.

<div className="ndl-image-with-background l">

![](/nodes/string-manipulation/string-format/stringformat-node.png)

</div>

The <span className="ndl-node">String Format</span> node needs a format input where the output <span className="ndl-data">string</span> and string variables are defined.

<div className="ndl-image-with-background l">

![](/nodes/string-manipulation/string-format/stringformat-visual.png)

</div>

<##head##>

## Inputs

| Data                                               | Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Format</span>           | This input contains the format string, that is the template that will be used to generated the output. Any part of the template that is encapsulated in bracets will generate an input port. E.g. setting the string format to _{Hours} hours ago_ will create an input port called _Hours_. |
| <span className="ndl-data">Your `{strings}`</span> | The input ports generated from the **Format** input.                                                                                                                                                                                                                                         |

## Outputs

| Data                                        | Description                                                                                                                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Formatted</span> | The formatted string, e.g. if the string format is "_{Hours} hours ago_" and the _Hours_ input is connected to a value of _9_, the formatted string will be _9 hours ago_. |
