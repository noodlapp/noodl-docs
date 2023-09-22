---
hide_title: true
hide_table_of_contents: true
title: Receive Event
---

<##head##>

# Receive Event

This node is used to receive a signal triggered by a <span className="ndl-node">Send Event</span> node. To learn more about **Events** check out the [Events Guide](/docs/guides/business-logic/events).

<div className="ndl-image-with-background l">

![](/nodes/events/receive-event/receive-event.png)

</div>

The <span className="ndl-node">Send Event</span> node lets you specify a channel to broadcast to. All <span className="ndl-node">Receive Event</span> nodes set to that channel will be triggered simultaneously.
<##head##>

## Inputs

| Data                                      | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span> | <##input:enabled##>This port is used to disable/enable this node.<##input##> If disabled the receiver node will not be activated when the corresponding [Send Event](/nodes/events/send-event) node is triggered.                                                                                                                                                                                   |
| <span className="ndl-data">Consume</span> | <##input:consume##>This property specified if and how the event is consumed when captured by this receive event node.<##input##>                                                                                                                                                                                                                                                                    |
| <span className="ndl-data">Channel</span> | <##input:channelName##>Each **Receive Event** node must listen to a specific channel.<##input##> This means that when a [Send Event][/nodes/events/send-event] node of that channel is triggered all **Receive Event** nodes with the same channel will be triggered as well (depending on the propagation, please review the [Events guide](/docs/guides/business-logic/events) for more details). |

## Outputs

| Mixed                                            | Description                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Custom Outputs</span> | The **Receive Event** node will automatically get outputs from all [Send Event][0] nodes connected to the same channel. See the [Send Event][0] documentation for more details on adding ports for sending values with events. |

| Signal                                       | Description                                                                                                                                                                              |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Received</span> | <##output:eventReceived##>This is a signal port, it is triggered when a signal is triggered in any **Send Event** node with the same channel as this **Receive Event** node.<##output##> |
