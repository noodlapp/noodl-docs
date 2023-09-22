---
hide_title: true
hide_table_of_contents: true
title: Pop Component
---

<##head##>

# Pop Component Stack

The **Pop Component Stack** node is used together with a [Component Stack](/nodes/component-stack/component-stack-node) to navigate back ("pop"). It is typically used when creating app style navigation. For more information on how **Component Stack** navigation work, check out the [Component Stack](/nodes/component-stack/component-stack-node) documentation.

<div className="ndl-image-with-background l">

![](/nodes/component-stack/pop-component/pop-component-stack.png)

</div>

?> Note that you have to use the **Pop Component Stack** node from within a component in the **Component Stack**.

<##head##>

## Inputs

| Signal                                       | Description                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigate</span> | <##input:navigate##>Triggering this action will pop the topmost component from the stack. If there is a component under the popped component, it will be now be visible.<##input##> |

### Back Actions and Results

When popping a component from the stack you can also trigger a **Back Action** and a **Result**. This can be used to communicate back to the place where the component was originally pushed using the [Push To Component Stack](/nodes/component-stack/push-component) node. This could for example be used to communicate back some contents of a form, and if the user pressed "OK" or "Cancel".

| Mixed                     | Description                                                                                                                                                                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Back Actions, Results** | You can add any number of **Back Actions** and **Result** inputs to the **Pop Component Stack** node. These will show up as outputs on any [Push To Component Stack](/nodes/component-stack/push-component) node pointing to the component with this **Pop Component Stack** node. |

<span className="hidden-props-for-editor"><##input:backAction-\*##>A **Back Action** signal. Triggering this will pop from the **Component Stack** and send a signal to the [Push To Component Stack](/nodes/component-stack/push-component) node used to push the component.<##input##></span>

<span className="hidden-props-for-editor"><##input:result-\*##>A **Result** input. Any data sent to this input will be forwarded to the [Push To Component Stack](/nodes/component-stack/push-component) node when the component is popped.<##input##></span>
