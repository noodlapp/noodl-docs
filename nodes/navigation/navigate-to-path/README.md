---
hide_title: true
hide_table_of_contents: true
title: Navigate To Path node
---

<##head##>

# Navigate To Path

This node lets you navigate to a specific <span className="ndl-node">[Page](/nodes/navigation/page)</span> node in a <span className="ndl-node">[Page Router](/nodes/navigation/page-router)</span>.

<div className="ndl-image-with-background l">

![](/nodes/navigation/navigate-to-path/navigate-to-path.png)

</div>

In most cases you will want to use the <span className="ndl-node">[Navigate](/nodes/navigation/navigate)</span> or <span className="ndl-node">[External Link](/nodes/navigation/external-link)</span> nodes for your navigation. The <span className="ndl-node">Navigate To Path</span> node is a low level implementation suitable for more advanced and specific use cases.

<##head##>

## Usage

You don't specify which **Page Router** that should perform the navigation, it will be implicitly resolved using the provided path. For example, if you have a **Page Router** with **URL path** `router1`, with a **Page**with the **URL path** `page1`, which in turn contains an unnamed **Page** with the **URL path** `pageA`, providing the **Path** `/router1/page1/pageA/` will force the two **Page Routers** to navigate to the respective pages.

In a way, **Navigate To Path** is very much like writing a URL directly into the browser address bar. However the node is only used to navigate between **Pages** in the Noodl project. If you want to navigate to an external URL you should instead use the [External Link](/nodes/navigation/external-link) node.

## Inputs

<div className="ndl-table-35-65">

| Data                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Path</span>             | <##input:path##>Use this property to set the path to navigate to. Note that the **Path** should not include the domain but only the route within the Noodl project. The **Path** may include a **Path Parameter** as the final part, that will be forwarded to the receiving **Page**. You can also use `{}` to make part of the **Path** dynamic and expose the part as an input. For example the path `/{a}/{b}/` will expose two new inputs _a_ and _b_.<##input##> |
| <span className="ndl-data">Query Parameters</span> | You can add any number of **Query Parameters** that will be forwarded to the receiving [Page](/nodes/navigation/page/) through their [Page](/nodes/navigation/page-inputs/) node.                                                                                                                                                                                                                                                                                      |
| <span className="ndl-data">Open in new tab</span>  | Open the new page in a new browser tab.                                                                                                                                                                                                                                                                                                                                                                                                                                |

| Signal                                       | Description                                                                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Navigate</span> | <##input:navigate##>Sending a signal to this input will perform the navigation according to the provided **Path**.<##input##> |

<span className="hidden-props-for-editor"><##input:q-\*##>A **Query Parameter** that will be forwarded to the receiving **Page** node through their **Page Inputs** node.<##input##></span>

<span className="hidden-props-for-editor"><##input:p-\*##>A **Path Parameter** that will be part of the **Path**.<##input##></span>

</div>
