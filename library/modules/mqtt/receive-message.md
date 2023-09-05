---
title: Receive Message
hide_title: true
---

<##head##>

# Receive Message

**Receive Message** nodes are used to receive messages sent over MQTT, by a [**Send Message**](/library/modules/mqtt/send-message) node for example. Messages can be sent across devices and
be used for inter-device communication and IoT. The **Receive Message** node subscribes to an MQTT topic and receives any message and payload published to that topic.

![](/library/modules/mqtt/receive-message.png)
<##head##>

<div class = "node-inputs">

## Inputs

### Other

**Topic**
The topic name can be any identifier and is used by the **Receive Message** nodes to connect sender and receiver nodes, or publishers and subscribers in MQTT. Most commonly the topics are specified as a hierarchy with **/** as delimiters, e.g. _/Foo/Bar/1_. Sometimes the topics need to be dynamic, this can be achieved by encapsulating a topic component with curly brackets, e.g. _/Foo/{Bar}/1_. In this case a port called _Bar_ will show up.
Topics on _Receive Message_ can also be specified with wildcards, so for instance _/Foo/+/Bar_ will subscribe to both _/Foo/Hello/Bar_ and _/Foo/Goodbye/Bar_.
The exact topic component used when sending the message can be retrieved in a similar way to dynamic topics, by specifying _/Foo/+X+/Bar_ an output port called _X_ will
be created that will hold the value of the topic component when the message is received.

**Enabled**
Enable and disable the **Receive Message** node.

</div>

<div class = "node-outputs">

## Outputs

### PAYLOAD

**Receive Message** nodes can have arbitrary output ports, payloads, that will assume the value of any incoming messages, for example a [Send Message](/library/modules/mqtt/send-message) node. These ports are referred to as payload ports.
These ports can be added by inspecting the node and clicking the _Add port_ button in the _Payload_ section.

**Received**
A signal triggered when a message is received.

</div>

[0]: ./send-message
