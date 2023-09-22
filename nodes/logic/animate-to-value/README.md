---
hide_title: true
hide_table_of_contents: true
title: Animate To Value node
---

<##head##>

# Animate To Value

This node takes a target value and will automatically animate towards it. The animation will restart every time the target value changes.

<div className="ndl-image-with-background l">

![](/nodes/logic/animate-to-value/animate-to-value.png)

</div>

<##head##>

## Inputs

| Data                                         | Description                                                                                                                                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Target Value</span> | The value to animate to |
| <span className="ndl-data">Duration</span> | The duration of the animation in milliseconds|
| <span className="ndl-data">Delay</span> | Delay before the animation starts in milliseconds |
| <span className="ndl-data">Easing Curve</span> | The easing curve of the animation |

## Outputs

| Data                                     | Description                                                                                                                                                     |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Current Value</span> | The current value of the animation |
| <span className="ndl-signal">At Target Value</span> | Signals when the animation has reached its target value |
