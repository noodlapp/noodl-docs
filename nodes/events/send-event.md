---
hide_title: true
hide_table_of_contents: true
title: Send Event
---

<##head##>

# Send Event

This node sends a <span className="ndl-signal">signal</span> to another place in your app without having to connect the nodes directly. To learn more about **Events** check out the [Events Guide](/docs/guides/business-logic/events).

<div className="ndl-image-with-background l">

![](/nodes/events/send-event/send-event.png)

</div>

The <span className="ndl-node">Send Event</span> node lets you specify a channel to broadcast to. When this node is triggered with a <span className="ndl-signal">Send signal</span> all <span className="ndl-node">Receive Event</span> nodes set to that channel will be triggered.
<##head##>

## Inputs

| Mixed             | Description                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Custom Inputs** | **Send Event** nodes can have arbitrary input ports that will be passed on to the [Receive Event](/nodes/events/receive-event) nodes when the _Send_ signal is triggered. These ports can be added by inspecting the node and clicking the _Add port_ button. |

| Data                                           | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Channel Name</span> | The channel name can be any identifier and is used on the [Receive Event](/nodes/events/receive-event) nodes to connect a sender and receiver node.<br/><br/>There may be multiple **Send Event** nodes with the same channel. In that case the receiving nodes listening to the channel will get a merged set of ports from all **Send Event** nodes.                                         |
| <span className="ndl-data">Send To</span>      | <##input:propagation##>Controls what components the event will be sent to.<##input##><br/><br/>`Global`: Send to all components<br/>`Parent`: Send the event up the visual hierarchy to parent components.<br/>`Children`: Send the events to all children of this component, and their descendants.<br/>`Siblings`: Send the event to all siblings of this component in the visual hierarchy. |

| Signal                                         | Description                                                                                                                                                                                                             |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Send Event</span> | <##input:sendEvent##>Send a signal to this input to send the event.<##input##> This is a signal port and when triggered the corresponding [Receive Event](/nodes/events/receive-event) nodes will be triggered as well. |
