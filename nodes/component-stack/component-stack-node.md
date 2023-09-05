---
hide_title: true
hide_table_of_contents: true
title: Component Stack
---

<##head##>

# Component Stack

The **Component Stack** node is used to navigate between components in an area on the screen. It is typically used together with the navigation nodes [Push Component To Stack](/nodes/component-stack/push-component) and [Pop Component Stack](/nodes/component-stack/pop-component).

<div className="ndl-image-with-background">

![](/nodes/component-stack/component-stack/component-stack1.png)

</div>

Unlike the somewhat similar [Page Router](/nodes/navigation/page-router) the **Component Stack** is optimized for app type navigation (in contrast to web type) and does not use URLs and routing as part of the navigation.

The **Component Stack** works as a regular stack, meaning you can _Push_ (put a component at the top of the stack) and _Pop_ (remove the topmost component from the stack). You can also chose to _replace_ all components with the a new component (see [Push Component To Stack](/nodes/component-stack/push-component).

When pushing the **Component Stack** will create a new instance of the component. Only the top component will be shown. This means that you can have multiple instances of the same component on the stack at the same time. You can use the **Reset** action to clear the stack.

## Adding Component Entries to Push and Pop

A Component Stack should have a number of _component entries_ that it can push or pop. You add components entries by clicking on _Add Component_ button, giving the entry a name and select a component. These entries will then be available in the [Push Component To Stack](/nodes/component-stack/push-component) and [Pop Component Stack](/nodes/component-stack/pop-component) nodes.

## Visual Layout

With the **clip** property set to <span className="ndl-data">false</span>, the **Component Stack** will automatically take up as much space as available and expand beyond that if its component currently showing is larger. If the **clip** property is set to <span className="ndl-data">true</span> it fill up any available space in its parent container and clip its components if they are larger than that.

If you want to control the size of the **Component Stack** beyond that, you should put it as a child in a [Group](/nodes/basic-elements/group) node.

<##head##>

## Inputs

| Data                                               | Description                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Name</span>             | <##input:name##>This is the name of the **Component Stack**. If you have multiple **Component Stacks** in your project you use the name to identify it in the [Push Component To Stack](/nodes/component-stack/push-component) and [Pop Component Stack](/nodes/component-stack/pop-component) nodes. <##input##> |
| <span className="ndl-data">Start Page</span>       | The Component which will be shown by **Component Stack** at the start.                                                                                                                                                                                                                                            |
| <span className="ndl-data">Clip Content</span>     | <##input:clip##>If this property is set to `true` the **Component Stack** will clip any component that is extending beyond its size. If set to `false` the size of the **Component Stack** will grow if needed to fit its component.<##input##>                                                                   |
| <span className="ndl-data">Background Color</span> | <##input:backgroundColor##>The color that will be shown when there is no component covering the **Component Stack** or when the component is transparent.<##input##>                                                                                                                                              |
| <span className="ndl-data">Mounted</span>          | <##input:mounted##>This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.<##input##>                                                  |

| Signal                                    | Description                                                                                                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Reset</span> | <##input:reset##>Triggering this action resets the **Component Stack** meaning all components on the stack will be removed and only the **Start Page** will be on the stack.<##input##> |

| Deprecated                                         | Description                                                                             |
| -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <span className="ndl-deprecated">Use Routes</span> | <##input:useRoutes##>**This Property is deprecated and should not be used.**<##input##> |

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

| Data                                                 | Description                                                                                                                        |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Top Component Name</span> | <##output:topPageName##>This property holds the name of the current component that is on the top of the stack.<##output##>         |
| <span className="ndl-data">Stack Depth</span>        | <##output:stackDepth##>This property equals to the number of components that are currently on the **Component Stack**.<##output##> |

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../shared-props/inputs/_visual-input-properties.md"

@include "../shared-props/outputs/_visual-output-properties.md"

</div>
