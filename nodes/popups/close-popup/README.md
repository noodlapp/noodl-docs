---
hide_title: true
hide_table_of_contents: true
title: Close Popup node
---

<##head##>

# Close Popup

This node is used to close a popup that have previously been shown with the <span className="ndl-node">Show Popup</span> node. Sending a signal to the <span className="ndl-signal">Close</span> input will close the popup and remove the component instance.

<div className="ndl-image-with-background l">

![](/nodes/popups/close-popup/close-popup-1.png)

</div>

You can also pass data back to the component that triggered the popup by adding <span className="ndl-data">Result</span> values and <span className="ndl-signal">Close Action</span> signals. This is typically used for popups that propmt the user for some kind of input or action, like **Name**, **Confirm** or **Cancel**.

<##head##>

### Results and close actions

Sending data back to the triggering component is done by adding **Result** values and **Close Action** signals. The result values become inputs where you can pass data back, and the actions become signal inputs that can be used to send signals back. This is typically useful for popups that take some sort of input, e.g. **Name** and where the user can perform different actions, e.g. **Confirm** or **Cancel**.

<div className="ndl-image-with-background">

![](/nodes/popups/close-popup/close-popup-2.png)

</div>

After specifying results and close actions in the properties the corresponding inputs become available on the **Close Popup** node.

:::info

**Close Popup** has to be called in the same component that **Open Popup** opened.

:::

<div className="ndl-image-with-background l">

![](/nodes/popups/close-popup/close-popup-3.png)

</div>

These **Result** values and **Close Actions** will also become available as outputs on the [Show Popup](/nodes/popups/show-popup) nodes that have the component containing the **Close Popup** node as target.

<div className="ndl-image-with-background l">

![](/nodes/popups/show-popup/show-popup-3.png)

</div>

## Inputs

| Signal                                            | Description                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Close</span>         | <##input:close##>Send a signal here to close the popup. If no close actions are specified this should be used.<##input##> |
| <span className="ndl-signal">Close Actions</span> | All close actions specified on this node will become available as signal inputs. See above for more details.              |

<span className="hidden-props-for-editor"><##input:closeAction-\*##>When the **Popup** is closed using this custom **Close Action**, the same signal be triggered on the **Show Popup** node that was used to open the **Popup**.<##input##></span>

| Data                                            | Description                                                                                           |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Result Values</span> | All result values specified on this node will become available as inputs. See above for more details. |

<span className="hidden-props-for-editor"><##input:result-\*##>When the **Popup** is closed, this result parameter will be forwarded as an output on the **Show Popup** node that was used to open the **Popup**.<##input##></span>
