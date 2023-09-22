---
hide_title: true
hide_table_of_contents: true
title: Variable node
---

<##head##>

# Variable

Use this node to store a single data variable that will be globally accessible throughout the application. **Variable** works in a similar way as [Object](/nodes/data/object/object-node) but can only store one value.

<div className="ndl-image-with-background l">

![](/nodes/data/variable/variable/variable-1.png)

</div>

The value can be dynamically stored, either by passing it a new value or by sending <span className="ndl-signal">signals</span> to the <span className="ndl-node">[Set Variable](/nodes/data/variable/set-variable)</span> node.

<##head##>

## Storing a value

Give the Variable a name with the **Name** input and simply connect to **Value**, whenever the input connection is updated the value will be stored in the variable. You can also use the [Set Variable](/nodes/data/variable/set-variable) node to update tha value of a **Variable**. In this case, you control when the value is stored by sending a signal to the <span className="ndl-signal">Do</span> action.

## Use a stored value

When a value is stored in a variable you can use it somewhere else in your application simply be creating a new node and giving it the same **Name** and connecting the **Value** property.

## Inputs

| Data                                    | Description                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Name</span>  | <##input:name##>The name of the **Variable**. All **Variable** nodes with the same name will share the same data.<##input##>                                                                                                                                                                                                               |
| <span className="ndl-data">Value</span> | <##input:value##>The value that you want the **Variable** to get. You will connect your data to this input. The value of the **Variable** will change when the data changes. If you want to control more precisely when the value should be updated, you should use the [Set Variable](/nodes/data/variable/set-variable) node.<##input##> |

| Signal                                    | Description                                                                                                                                                                                                                                                                                |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-signal">Fetch</span> | <##input:fetch##>Normally the value output of the node is updated once the **Name** input is set and if there is a change in the data from somewhere in the graph. However, if this signal has a connection it will wait until it gets a signal on **Fetch** before it updates.<##input##> |

## Outputs

| Data                                    | Description                                                                |
| --------------------------------------- | -------------------------------------------------------------------------- |
| <span className="ndl-data">Value</span> | <##output:value##>The current value of this **Variable** node.<##output##> |
| <span className="ndl-data">Name</span>  | <##output:name##>The name of the **Variable**.<##output##>                 |

| Signal                                      | Description                                                                                                                                                                                                                                                                     |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Changed</span> | <##output:changed##>This signal is sent when the **Value** of this **Variable** has changed. Note: The signal triggers when any **Variable** with the same **Name** is changed, i.e. it triggers when the underlying data has changed.<##output##>                              |
| <span className="ndl-signal">Fetched</span> | <##output:fetched##>Signal when the data of this **Variable** node has been fetched and updated, either as a response to the **Fetch** input signal (when it has completed and the output **Value** is updated), or when the **Name** of the variable have changed.<##output##> |
