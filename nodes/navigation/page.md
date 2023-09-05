---
hide_title: true
hide_table_of_contents: true
title: Page
---

<##head##>

# Page

The **Page** node is a basic building block when creating web type navigation using a [Page Router](/nodes/navigation/page-router).

:::note

**Page** nodes cannot be created throught the node picker, it can only be created by adding a new **Page** in the component list.

:::

**Pages** are typically used together with a [Page Inputs](/nodes/navigation/page-inputs) node to be able to provide parameters to the **Page**.

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/create-page.png)

</div>

<##head##>

## Inputs

| Data                                       | Description                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Title</span>    | <##input:title##>This property controls the title of the **Page** i.e. what the title of the browser window will be say when the **Page** is active.<##input##>                                                                                                    |
| <span className="ndl-data">URL path</span> | <##input:urlPath##>This property controls the URL route to this **Page** in relation to its [Page Router](/nodes/navigation/page-router).<##input##> See the documentation for [Page Router](/nodes/navigation/page-router) for more details on how routing works. |

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/):

-   [Padding](/nodes/shared-props/inputs/visual-input-properties#padding)
-   [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties#other)

<div className="hidden-props-for-editor">

@include "../shared-props/inputs/_visual-input-properties.md"

@include "../shared-props/outputs/_visual-output-properties.md"

</div>
