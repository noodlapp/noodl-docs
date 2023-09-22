---
hide_title: true
hide_table_of_contents: true
title: Show Popup
---

<##head##>

# Show Popup

This node is used to display a component as a modal popup on top of the entire window.

<div className="ndl-image-with-background">

![](/nodes/popups/show-popup/show-popup-2.png)

</div>

The <span className="ndl-node">Show Popup</span> node lets you specify which component will be popped up when signaled with the <span className="ndl-signal">Show</span> input. Any <span className="ndl-node">Component Inputs</span> that the specified component has will be available as inputs to the <span className="ndl-node">Show Popup</span> node.

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-1.png)

</div>

<##head##>

When a popup is closed with the [Close Popup](/nodes/popups/close-popup) node it is possible to send back signals and values via **Results** and **Close Actions**. These will become available as outputs for the **Show Popup** node if the target popup component contains **Close Popup** nodes.

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-3.png)

</div>

## Inputs

| Data                                     | Description                                                                                                                             |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Target</span> | <##input:target##>A component that will be cloned and put on top of the entire window when the **Show** signals is received.<##input##> |

| Signal                                   | Description                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| <span className="ndl-signal">Show</span> | <##input:show##>Send a signal here to show the popup.<##input##> |

| Mixed                | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Component Inputs** | Any **Component Inputs** that the popup component have will be available as inputs. |

<span className="hidden-props-for-editor"><##input:popupParam-\*##>A parameter input originating from a **Component Input** in the **Target** component. It's value will be forwarded to the component.<##input##></span>

## Outputs

| Signal                                            | Description                                                                                                                                                                         |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Closed</span>        | <##output:closed##>This output sends a signal when the popup is closed with a **Close Popup** node.<##output##> See [Close Popup](/nodes/popups/close-popup/) for more information. |
| <span className="ndl-signal">Close Actions</span> | Any close action signals provided via the [Close Popup](/nodes/popups/close-popup/) node from the target popup component will become available here.                                |

<span className="hidden-props-for-editor"><##output:closeAction-\*##>A result signal originating from the **Target** components **Close Popup** node.<##output##></span>

| Data                                            | Description                                                                                                                                   |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Close Results</span> | Any result values provided via the [Close Popup](/nodes/popups/close-popup/) node from the target popup component will become available here. |

<span className="hidden-props-for-editor"><##output:closeResult-\*##>A result output originating from the **Target** components **Close Popup** node.<##output##></span>
