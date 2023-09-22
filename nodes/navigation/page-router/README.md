---
hide_title: true
hide_table_of_contents: true
title: Page Router node
---

<##head##>

# Page Router

This node lets you navigate between your <span className="ndl-node">[Page](/nodes/navigation/page)</span> nodes using the <span className="ndl-node">[Navigate](/nodes/navigation/navigate)</span> or <span className="ndl-node">[Navigate To Path](/nodes/navigation/navigate-to-path)</span> nodes. You can also use the <span className="ndl-node">[External Link](/nodes/navigation/external-link)</span> node to navigate to a page outside your app.

Unlike the somewhat similar [Component Stack](/nodes/component-stack/component-stack-node) the **Page Router** is optimized for web type navigation (in contrast to app type) and uses URLs and routing as part of the navigation as well as the browser history.

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/page-router-1.png)

</div>

Every <span className="ndl-node">Page Router</span> has a <span className="ndl-data">Start Page</span>. The pages are rendered inside of the <span className="ndl-node">Page Router</span>. You can use the <span className="ndl-data">Clip Behavior</span> option to decide how the <span className="ndl-node">Page Router</span> should wrap its content.

<##head##>

## Implementation

The **Page Router** uses standard browser navigation which means that the user can use the browser **Back** button to navigate back in the **Page Router** history.

Note that the **Page Router** only navigates between [Pages](/nodes/navigation/page). **Pages** cannot be created through the Node Picker. You create them using **Create Page** in the component side bar.

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/create-page.png)

</div>

After creating your **Pages** they are automatically added to your **Page Router** unless you have multiple **Page Routers** in your project. Then you'll have to add them manually to where they belong.

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/pages-in-router.png)

</div>

## Start Page

When creating and adding pages to your **Page Router** you will have to make one of the pages a starting page by opening the menu on the page item in the **Page Router** properties and selecting _Make Start Page"_.

<div className="ndl-image-with-background">

![](/nodes/navigation/page-router/make-start-page.png)

</div>

## Navigating

### URLs to Page Routers and Pages

Noodl uses a URL to route a **Page Router** to a specific **Page**. A **Page Router** may optionally have a **URL Path**. Each page has also has a **URL Path** that will uniquely identify the URL route to that page.

Generally, the route to a **Page** looks like the following

`<domainname>#/<route1>/<route2>/<route3>...`

where `<domainname>` is the domain on where you host the app and each `<route>` points to either a **Page Router** or a **Page** within a **Page Router**. The `<route>` may also include a **Page Parameter** and **Query Parameters** (see below).

For example a **Page Route** with the **URL Path** 'myrouter', with two possible pages with **URL Paths** _page1_ and _page2_, will have two possible routes: `myrouter/page1` and `#myrouter/page2`. Note the '#' character that is always added in the beginning of a route. If, for example, the Noodl App is deployed on the domain `app.mynoodlapps.com`, entering `https://app.mynoodlapps.com#myrouter/page2` in the browser will take make the **Page Router** with the **URL Path** _myrouter_ navigate to the **Page** with the **URL Path** _page2_.

### Navigating using Navigation node

The most straight forward way of navigating between pages within an app is to use the [Navigate](/nodes/navigation/navigate) node. This node will navigate to the **Page** selected in the **Navigation** node. This will update the URL of the browser to the route pointing to that page. There is also a [Navigate To Path](/nodes/navigation/navigate-to-path) node that allows an explicit path to be set, that could for example perform navigation on multiple **Page Routers** at the same time by simply specifying a full URL path.

## Multiple Page Routers

If needed, you can use multiple **Page Routers** at the same time. This could for example be used if you have multiple navigation flows within a higher level navigation flow. For example, you may have a top level navigation between the pages _Home_ _Settings_ and _Content_ and within each page have sub navigation into specific pages under each section.

![](/nodes/navigation/page-router/multi-router.png)

@include "../_common-navigation.md"

## Visual Appearance

The **Page Router** is a visual node. It will automatically expand to take all space available in the current layout, unless its **Clipping Behavior** is set to **Expand To Content Size** in which case it will have the same size as the **Page** its showing (if available).

## Inputs

| Data                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Name</span>             | <##input:name##>The name of the **Page Router**. If you have multiple **Page Routers** the name will be used to identify them.<##input##>                                                                                                                                                                                                                                                                                                                                                          |
| <span className="ndl-data">URL path</span>         | <##input:urlPath##>An optional path of the **Page Router** when routing a URL towards it.<##input##>                                                                                                                                                                                                                                                                                                                                                                                               |
| <span className="ndl-data">Clip Behavior</span>    | <##input:clip##>This property controls the size and clipping behavior of the **Page Router**. It has three possible values: **Expand To Content Size**, **Scroll** or **Clip Content**.<##input##><br/><br/>`Expand To Content Size`: Changes the size of the **Page Router** to fit the size of the **Page** it's currently showing.<br/>`Scroll`: Makes the **Page Router** take as much space as it can. Any **Page** inside it will be scrollable if it cannot fit inside the **Page Router**. |
| <span className="ndl-data">Background Color</span> | <##input:backgroundColor##>The color that will be shown when there is no **Page** covering the **Page Router** or when the **Page** is transparent.<##input##>                                                                                                                                                                                                                                                                                                                                     |
| <span className="ndl-data">Mounted</span>          | <##input:mounted##>This property is used to completely remove the node from the DOM. If this property is set to false the node is removed from the DOM. It differs from the _Visible_ property where the node is still part of the DOM but invisible.<##input##>                                                                                                                                                                                                                                   |

| Signal                                    | Description                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Reset</span> | <##input:reset##>Triggering this action will reset the **Page Router** making it show the start page.<##input##> |

### Visual

This node also supports the [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html) gadget from the [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties/).

## Outputs

| Data                                                 | Description                                                                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Current Page Title</span> | <##output:current page title##>The title of the page that is currently showing in this **Page Router**.<##output##> |

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties/):

-   [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
-   [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
-   [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../../shared-props/inputs/_visual-input-properties.md"

@include "../../shared-props/outputs/_visual-output-properties.md"

</div>
