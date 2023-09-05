---
hide_title: true
hide_table_of_contents: true
title: Set Parent Component Object Properties
---

<##head##>

# Set Parent Component Object Properties

With this node you can set properties on the closed parent **Component Object**. You can access properties of the closet parent **Component Object** with the [Parent Component Object](/nodes/component-utilities/parent-component-object) node.

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/set-parent-component-object-properties/set-parent-component-object-properties.png)

</div>

<##head##>

## Inputs

| Signal                                 | Description                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Stores any properties that are typed in the property panel or connected. All **Component Object** nodes in the same component, as well as any [Parent Component Object](/nodes/component-utilities/parent-component-object) nodes, will be updated. <##input##> |

| Data                                                | Description                                                                                                                                     |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Custom Properties</span> | <##input:prop-\*##>A property to set in the **Component Object**. You can list the properties you want to set in the property panel.<##input##> |

## Outputs

| Signal                                   | Description                                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>A signal is sent on this output when the set action is completed.<##output##> |
