---
hide_title: true
hide_table_of_contents: true
title: Component Object node
---

<##head##>

# Component Object

This node is a shared set of properties that can be accessed from a component as well as from any child components. It can be used to implement things such as radio groups, tabs, accordion lists and other visual elements that need to coordinate. It is also a useful general tool for any kind communication between a set of components.

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/component-object/component-object.png)

</div>

The <span className="ndl-node">Component Object</span> node works much like the <span className="ndl-node">[Object](/nodes/data/object/object-node)</span> node where you add properties that become inputs or outputs to the node.

<##head##>

<div className="ndl-image-with-background">

![](/nodes/component-utilities/component-object/component-object-props.png)

</div>

Unlike the <span className="ndl-node">[Object](/nodes/data/object/object-node)</span> node it does not have an <span className="ndl-data">Id</span>. Instead all <span className="ndl-node">Component Object</span> nodes within the same component share the same data.

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Property name</span> | <##input:value-\*##>The value of a specific property of the Component Object. A Component Object node can have any amount of properties. They must be named in the Property Panel. When this input is changed all other Component Object nodes in the same component are updated.<##input##> Each property will get one input and output to set/get their current value. See below for more details. |

| Signal                                    | Description                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | <##input:fetch##>The fetch signal input can be used to explicitly signal when the data of a **Component Object** should be fetched. If a connection is made to this input the node will not automatically receive changes on it's properties, it will only get the new data when the fetch signal is triggered.<##input##> |

## Outputs

| Data                  | Description                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Custom properties** | <##output:value-\*##>A Component Object node can have any amount of properties. Each property will get one output to get the current value.<##output##> |

| Signal                                                       | Description                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Changed</span>                  | <##output:changed##>An event is triggered when any of the properties have changed.<##output##>                                                                                                                                                                                                                        |
| <span className="ndl-signal">Fetched</span>                  | <##output:fetched##>An event is triggered on this output when a fetch is completed as a result of a **Fetch** sent on to the node.<##output##>                                                                                                                                                                        |
| <span className="ndl-signal">Changed Property Signals</span> | <##output:changed-\*##>One changed signal output will be created for every property. They will emit a signal when the property changes value when this or some other **Component Object** or [Parent Component Object](/nodes/component-utilities/parent-component-object) node triggers the _Set_ input.<##output##> |
