---
hide_title: true
hide_table_of_contents: true
title: Counter node
---

<##head##>

# Counter

This node holds a <span className="ndl-data">number</span> that can be increased or decreased with <span className="ndl-signal">signals</span>.

<div className="ndl-image-with-background l">

![](/nodes/math/counter/counter_node.png)

</div>

The Counter node can be limited to a `min` and a `max` value, and the limit can be turned on and off.

<##head##>

<div className="ndl-image-with-background l">

![](/nodes/math/counter/counter.gif)

</div>

## Inputs

| Signal                                             | Description                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Increase Count</span> | <##input:increase##>Triggering this action will increases the count by one.<##input##>          |
| <span className="ndl-signal">Decrease Count</span> | <##input:decrease##>Triggering this action will decrease the count by one.<##input##>           |
| <span className="ndl-signal">Reset To Start</span> | <##input:reset##>Triggering this action will reset the counter to its _Start Value_.<##input##> |
| <span className="ndl-signal">Start Value</span>    | <##input:startValue##>The start value of the count. Defaults to zero.<##input##>                |

| Data                                             | Description                                                                                                                                                                                         |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Min Value</span>      | <##input:limitsMin##>The minimum value of the counter. The counter will never decrease below this value. Note that **Limits Enabled** need to be set to `true` for this to be in effect.<##input##> |
| <span className="ndl-data">Max Value</span>      | <##input:limitsMax##>The maximum value of the counter. The counter will never increase above this value. Note that **Limits Enabled** need to be set to `true` for this to be in effect.<##input##> |
| <span className="ndl-data">Limits Enabled</span> | <##input:limitsEnabled##>This input controls if the limits (**Min Value** and **Max Value**) are active or disabled.<##input##>                                                                     |

## Outputs

| Data                                            | Description                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------- |
| <span className="ndl-data">Current Count</span> | <##output:currentCount##>This output contains the current count.<##output##> |

| Signal                                            | Description                                                                                                |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Count Changed</span> | <##output:countChanged##>This signal will be triggered whenever the **Current Count** changes.<##output##> |
