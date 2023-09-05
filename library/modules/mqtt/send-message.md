---
title: Send Message
hide_title: true
---

<##head##>
# Send Message 

**Send Message** nodes are used to send a message over MQTT, to another device for example. All devices that connect to the editor will
use the same MQTT broker and thus messages can be sent across devices. The **Send Message** node uses topics to specify which receivers should get the messages.


![](/library/modules/mqtt/send-message.gif)

<##head##>

<div class = "node-inputs">

## Inputs

### General

**Topic**  
The MQTT topic this **Send Message** will publish messages to. Most commonly the topics are specified as a hierarchy with **/** as delimiters, e.g. _/Foo/Bar/1_. Sometimes the topic needs to be dynamic, this can be achieved by encapsulating a topic component with curly brackets, e.g. _/Foo/{Bar}/1_. In this case a port called _Bar_ will show up.

**Format**
This input sets the format the payload will be sent in, either as JSON or as a CSV.

**Send on Change**
This boolean controls whether a new message will be sent automatically when any payload input changes, or if you have to explicitly trigger the _Send_ signal to send the message.

**Send**  
This is a signal port and when triggered the corresponding **Receive Message** nodes will be triggered as well.

### PAYLOAD

**Send Message** nodes can have arbitrary input ports that represent the payload that will be sent with the message when the _Send_ signal is triggered. These ports can be added by inspecting the node and clicking the _Add port_ button in the _Payload_ section.

### RATE LIMIT

**Rate Limit**
This boolean specifies if there should be a rate limit added to the messages, i.e. if the number of messages should be throttled at a specific value. This could be useful if you have a continouos stream of messages you want to send, for example a sensor reading, but you want to avoid congesting the MQTT broker.

**Messages / Sec**
If _Rate Limit_ is set, this defines how many messages per second this node will send.

</div>

<div class = "node-inputs">

## Outputs

This node doesn't have any outputs.

</div>
