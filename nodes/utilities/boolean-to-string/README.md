---
hide_title: true
hide_table_of_contents: true
title: Boolean To String
---

<##head##>

# Boolean To String

This node takes a <span className="ndl-data">boolean</span> input and converts it into the strings <span className="ndl-data">true</span> or <span className="ndl-data">false</span>.

<div className="ndl-image-with-background l">

![](/nodes/utilities/boolean-to-string/boolean-to-string.png)

</div>

<##head##>

## Inputs

| Data                                               | Description                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Selector</span>         | <##input:selector##>This is the boolean value that will select which string to output.<##input##> |
| <span className="ndl-data">String for true</span>  | <##input:trueString##>The string to output if the selector is true.<##input##>                    |
| <span className="ndl-data">String for false</span> | <##input:falseString##>The string to output if the selecor is false.<##input##>                   |

## Outputs

| Data                                            | Description                                                                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Current Value</span> | <##output:currentValue##>The selected string, i.e. either **String for true** or **String for false** depending on the **Selector**.<##output##> |

| Signal                                               | Description                                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Selector Changed</span> | <##output:inputChanged##>This signal is sent when the **Selector** changes value.<##output##> |
