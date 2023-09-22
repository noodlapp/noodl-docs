---
hide_title: true
hide_table_of_contents: true
title: Switch node
---

<##head##>

# Switch

This node holds a <span className="ndl-data">boolean</span> state. It is either <span className="ndl-data">true</span> (on) or <span className="ndl-data">false</span> (off).

<div className="ndl-image-with-background l">

![](/nodes/logic/switch/switch.gif)

</div>

<##head##>

## Inputs

### Change state

| Signal                                   | Description                                                                                                                                                                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">On</span>   | <##input:on##>Sending a signal to this input sets the state of the **Switch** to _On_.<##input##>                                                                           |
| <span className="ndl-signal">Off</span>  | <##input:on##>Sending a signal to this input sets the state of the **Switch** to _Off_.<##input##>                                                                          |
| <span className="ndl-signal">Flip</span> | <##input:flip##>Sending a signal to this input sets the **Switch** to the opposite of its current state. If it is _On_ flip will set it to _Off_ and vice versa.<##input##> |

| Data                                          | Description                                                                                                                                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Start State</span> | The starting state of the **Switch**. If the _Start State_ is set to _On_ then the _Switched To On_ output signal will trigger instantly when applications starts, or when a component is created dynamically. |

## Outputs

| Data                                            | Description                                                                                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Current State</span> | <##output:state##>This output is either _True_ or _False_ depending on if the **Switch** is _On_ or _Off_.<##output##> |

| Signal                                              | Description                                                                                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| <span className="ndl-signal">Switched To On</span>  | <##output:switchedToOn##>This signal is sent when the **Switch** goes from _Off_ to _On_.<##output##>  |
| <span className="ndl-signal">Switched To Off</span> | <##output:switchedToOff##>This signal is sent when the **Switch** goes from _On_ to _Off_.<##output##> |
