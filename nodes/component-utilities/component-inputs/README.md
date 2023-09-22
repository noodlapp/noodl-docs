---
hide_title: true
hide_table_of_contents: true
title: Component Inputs node
---

<##head##>

# Component Inputs

This node is used to create inputs for reusable components.

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-inputs/ci_node.png)

</div>

A <span className="ndl-node">Component Input</span> node can have multiple ports connected to inputs on the nodes inside of the component.

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-inputs/ci_node2.png)

</div>

<##head##>

A very powerful feature of Noodl is the ability to create **Components** that act as reusable nodes in your application.

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-inputs/component-inputs.png)

</div>

A core concept of components is that they can have inputs and outputs like any of the built in nodes.

The inputs of a component originate from a **Component Inputs** node and are connected to any node in the component.

When a **Component Inputs** node is created, it doesn't have any ports. The ports must be added by inspecting the node (left clicking it) and then clicking the **+Port** button.
You can create and name ports as you wish.

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-inputs/component-inputs-add.png)

</div>

You can have multiple **Component Input** nodes in a single component. If you have multiple **Component Input** nodes with ports that share the same name, they will be merged into one input. It's important that target ports have the same or compatible types. If not, the port may not show up in instances of the component.

You can also create groups for your component inputs using the **+Group** button, inputs in a specific group will have that as header in the properties of the component instance node.
