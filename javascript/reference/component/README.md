---
hide_title: true
hide_table_of_contents: true
title: Component
---

# Component

**Only available on the frontend**  
The `Component` object is ony available in [Function](/nodes/javascript/function) and [Script](/nodes/javascript/script) nodes and it contains things related to the component scope where the **Function** or **Script** node is executing.

`Component.Object` is the [Component Object](/nodes/component-utilities/component-object) of the current component and you can use it just like any other [Noodl.Object](/javascript/reference/object). Most commonly this means accessing the properties of the object. When you set a property any **Component Object** node in this component instance will update accordingly.

<div className="ndl-image-with-background xl">

![](/javascript/reference/component/component-object.png)

</div>

In the example above the **Function** node called _Update selection_ is modifying the **Component Object** to create a new array for **Selection**. This is done by accessing the **Checkboxes** array in the component object and filtering and mapping that array.

```javascript
Component.Object.Selection = Component.Object.Checkboxes.filter(
  (o) => o.Checked
).map((o) => ({ Value: o.Value }));
```

`Component.ParentObject` is similair but this object is the [Parent Component Object](/nodes/component-utilities/parent-component-object), that is the **Component Object** of the parent component in the visual heirarchy. It is also used like any other [Noodl.Object](/javascript/reference/object).

`Component.RepeaterObject` If this component is the template of a repeater this will contain the object of the items array corresponding to this specific component instance. That is the same object as if you set an object **Id Source** to **From Repeater**, as shown below.

<div className="ndl-image-with-background l">

![](/javascript/reference/component/from-repeater-props.png)

</div>

Below is an example of such an object in a component.

<div className="ndl-image-with-background l">

![](/javascript/reference/component/repeater-object.png)

</div>

If this component is not directly the template used by a repeater but instead a sub component, you can still access the object. The object will be resolved by following the instance parent chain of components until it reaches a component that is a repeater template instance.
