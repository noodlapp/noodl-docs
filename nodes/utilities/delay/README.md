---
hide_title: true
hide_table_of_contents: true
title: Delay
---

<##head##>

# Delay

This node lets you delay <span className="ndl-signal">signals</span> by the specified amount of milliseconds.

<div className="ndl-image-with-background l">

![](/nodes/utilities/delay/delay_node.png)

</div>

<##head##>

## Inputs

| Signal                                      | Description                                                           |
| ------------------------------------------- | --------------------------------------------------------------------- |
| <span className="ndl-signal">Start</span>   | Starts the timer. Does nothing if the timer is already running.       |
| <span className="ndl-signal">Restart</span> | Starts the timer. Restarts the timer if the timer is already running. |
| <span className="ndl-signal">Stop</span>    | Stops the timer if it's running. Does nothing otherwise.              |

| Data                                          | Description                                                                                        |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Duration</span>    | The duration of the timer in milliseconds.                                                         |
| <span className="ndl-data">Start Delay</span> | The delay before the timer starts after the _Start_ input is triggered. Specified in milliseconds. |

## Outputs

| Signal                                       | Description                                |
| -------------------------------------------- | ------------------------------------------ |
| <span className="ndl-signal">Started</span>  | Signal emitted when the timer starts.      |
| <span className="ndl-signal">Finished</span> | Signal emitted when the timer is finished. |
