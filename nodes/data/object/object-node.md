---
hide_title: true
hide_table_of_contents: true
title: Object
---

<##head##>

# Object

An **Object** is a basic data object in Noodl that stores any amount of properties. It can be used standalone or together with [Array](/nodes/data/array/array-node) and [Repeater](/nodes/ui-controls/repeater) nodes to create lists. An **Object** works much like a [Variable](/nodes/data/variable/variable-node) but it can store many properties in one object.

<div className="ndl-image-with-background l">

![](/nodes/data/object/object/object-3.png)

</div>

The **Object** node is typically used together with the [Create New Object](/nodes/data/object/create-new-object) node and the [Set Object Properties](/nodes/data/object/set-object-properties) node to create a complete object lifecycle, creating and updating object properties.

<div className="ndl-image-with-background l">

![](/nodes/data/object/object/object-lifecycle.png)

</div>

<##head##>

You can also create and refer to an object statically (i.e. not using a [Create New Object](/nodes/data/object/create-new-object) by settings its **Id**. Generally, the **Id** is a global identifyer of the **Object** meaning that any **Object** nodes with the same idea will refer to the same data. If you change the properties in one **Object** node the values of all **Object** nodes with the same **Id** will be changed immediately, unless if you connect the **Fetch** signal.

## Similarities between Objects and Records

**Object** and [Record](/nodes/data/cloud-data/record) nodes are very similar. A **Record** can be seen as an **Object** that is backed by a database entry and hence have actions to **Fetch** from and **Store** it in the database. A **Record** also has a database defined schema based on its **Class** which enables Noodl to detect its available properties from its database Class. **Objects** does not have a schema.
If needed, you can use the **Id** of a **Record** as the **Id** of an **Object** to access its properties, but obviously cannot use the **Object** to store or fetch the data from the database.

Generally you use **Objects** as data holder for data that does not need to be stored in a database.

## Inputs

### General

| Data                                                | Description                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Custom Properties</span> | An **Object** node can have any amount of properties. Each property will get one input and output to set/get their current value.                                                                                                                                                                                                                                          |
| <span className="ndl-data">Id</span>                | <##input:id##>Set the _Id_ for this **Object**. All **Object** nodes with the same _Id_ will refer to the same data and have the same properties.<##input##> Changing a value of any property will immediately update the property in all other **Object** nodes with the same **Id** (unless if you connect the **Fetch** signal to a specific _Object_ node, see below). |

| Signal                                    | Description                                                                                                                                                                                                                                                                                               |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | <##output:fetch##>Normally when an **Object** _Id_ is set, the property outputs are immediately updated. If you want to control how the data is updated you can connect to the _Fetch_ signal input. Then you need to explictly send a signal here for the **Object** node to fetch the data.<##output##> |

## Outputs

### General

| Data                                                | Description                                                                                                  |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Id</span>                | <##output:id##>The _Id_ for this **Object** node.<##output##>                                                |
| <span className="ndl-data">Custom Properties</span> | An **Object** can have any amount of properties. Each property will get one output to get the current value. |

| Signal                                                       | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-signal">Changed</span>                  | <##output:changed##>Signal when any of the properties of this **Object** have changed.<##output##>                                                                                                                 |
| <span className="ndl-signal">Fetched</span>                  | <##output:fetched##>Signal when the **Object** has fetched and updated it's outputs. Note that the event is triggered no matter if the properties have changed or not.<##output##>                                 |
| <span className="ndl-signal">Changed Property Signals</span> | An **Object** will also get changed signal outputs for each of it's properties. They will emit a signal when the property changes value when this or some other **Object** node with the same _Id_ triggers a set. |

<span className="hidden-props-for-editor"><##output:changed-\*##>Triggered when this user defined property is changed.<##output##></span>

<span className="hidden-props-for-editor"><##input:prop-\*##>User defined property.<##input##></span>

<span className="hidden-props-for-editor"><##output:prop-\*##>User defined property.<##output##></span>
