---
hide_title: true
hide_table_of_contents: true
title: Navigate node
---

<##head##>

# Navigate

This node is used to navigate between <span className="ndl-node">[Page](/nodes/navigation/page)</span> nodes set up in a <span className="ndl-node">[Page Router](/nodes/navigation/page-router)</span>.

<div className="ndl-image-with-background l">

![](/nodes/navigation/navigate/navigate-page-inputs.png)

</div>

You can use a [Page Inputs](/nodes/navigation/page-inputs) node to pass parameters to the <span className="ndl-node">Page</span> you are navigating to. Any <span className="ndl-data">Path Parameters</span> or <span className="ndl-data">Query Parameters</span> you add will show up as inputs to the <span className="ndl-node">Navigate</span> node if you select that <span className="ndl-node">Page</span> as the <span className="ndl-data">Target Page</span>.

<##head##>

## Inputs

<div className="ndl-table-35-65">

| Data                                              | Description                                                                                                                                                          |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Router</span>          | Here you select which **Page Router** that this **Navigation** node will act on. This input is only available if there are multiple **Page Routers** in the project. |
| <span className="ndl-data">Target Page</span>     | Here you select the **Page** to navigate to. The pages available are based on which **Page Router** this **Navigation** node is associated with.                     |
| <span className="ndl-data">Open in new tab</span> | Open the new page in a new browser tab.                                                                                                                              |

| Signal                                       | Description                                                                                                       |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigate</span> | <##input:navigate##>Sending a signal to this input will perform the navigation to the **Target Page**.<##input##> |

| Mixed               | Description                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Page Parameters** | Any page parameters set in the [Pages Inputs](/nodes/navigation/page-inputs) used by the **Page** will be available as inputs on the **Navigate** node. |

<span className="hidden-props-for-editor"><##input:pm-\*##> An input parameter originating from the **Page Inputs** node of the **Target Page**.<##input##></span>

</div>

## Outputs

<div className="ndl-table-35-65">

| Signal                                        | Description                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigated</span> | <##output:navigated##>This event is triggered when a navigation as been performed.<##output##> |

</div>
