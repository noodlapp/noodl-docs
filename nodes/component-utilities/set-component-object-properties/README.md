---
hide_title: true
hide_table_of_contents: true
title: Set Component Object Properties
---

<##head##>

# Set Component Object Properties

**Component Object** is a shared set of properties that can be accessed from a component as well as from any child components. This node is used to set properties on the **Component Object** these properties can be accessed via the [Component Object](/nodes/component-utilities/component-object) or the [Parent Component Object](/nodes/component-utilities/parent-component-object).

<div className="ndl-image-with-background l">

![](/nodes/component-utilities/set-component-object-properties/set-component-object-properties.png)

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

| Signal                                   | Description                                                                                     |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Done</span> | <##output:done##>An signal is sent on this output when the set action is completed.<##output##> |
