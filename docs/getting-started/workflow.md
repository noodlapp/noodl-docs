---
title: Workflow overview
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Workflow Overview

Let's take a look at the different concepts of the Noodl workflow when building your applications, namely

* Building User Interfaces
* Page Navigation & Components
* Actions
* Working with Data
* The Cloud Database
* Business Logic
* Cloud Functions
* Collaboration
* Modules and Prefabs

## Building user interfaces

Any app needs a great **User Interface**. In Noodl it's easy and fast to build dynamic, reactive, beautiful user interfaces using the built in UI Controls. These controls are then arranged and layed out appropriately. Noodl contains a library of highly customizable core UI controls. It's also possible to extend Noodl with your own UI Controls, if needed.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/ui-1.mp4")}/>
</div>

### Customizing UI Controls

Each UI Control have properties that use can be used for fine grained customization. Here is a short overview of concepts important for building user interfaces:

-   **Visual States** Each UI Control have a set of visual states, e.g. Hover, Pressed etc, and the control properties can be set for each state individually. Learn more [here](/docs/guides/user-interfaces/visual-states).

-   **Transitions** You can control transition animations between each visual state using the animation editor.

-   **Variants** Define re-usable variants for your UI controls including properties, visual states and transitions. Build your own design systems and become super productive. Learn more [here](/docs/guides/user-interfaces/style-variants)

## Page Navigation & Components

When you start building more complete frontends you will be working with **components**. A component can be an entire page in your application, these are called **Page Component**s, or they can be a smaller part of your UI that you want to re-use in many places, these are called **Visual Component**s. Pages can be found in the top navigation bar, and visual components are found in the component panel in the sidebar. You can also use the preview in design mode to quickly locate a certain visual element in your app.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/nav-1.mp4")}/>
</div>

It's simple to create page navigation but the system is also flexible enough to build more complex navigation flows, such as nested navigation. Noodl supports state of the art web app navigation, with permalinks and encoding of data in URLs. Here is a short overview of concepts important for building pages and navigation:

-   The **Page**, **Page Router** and **Navigate** nodes are the essence of the navigation system. Learn how to build basic page navigation in this [guide](/docs/guides/navigation/basic-navigation) and more advanced multi level navigation [here](/docs/guides/navigation/multi-level-navigation).

-   Another feature of the navigation is **Popups**, these can be used to show or collect transient information. Learn more about popups [here](/docs/guides/navigation/popups)

## Actions

An important concept in Noodl, that was briefly shown above, is **action nodes**. These nodes perform some sort of action when they are triggered by a signal, e.g. from a UI control (such as a button click) or from another action node (such as when the action has completed successfully or failed). Noodl contains a wide variety of action nodes for most common basic tasks such as **Navigation** and **Reading and writing data**.

![](/docs/getting-started/basic-concepts/connecting-nodes.gif)

Connections between nodes is a core concept in Noodl, this is how you connect your user interface to data and actions. 

## Working with data

When you have built some of your frontend, added pages, components and navigation it is time to connect dynamic data to your user interfaces. This is what makes your application come alive, and in Noodl you have a neat visual way to build modern reactive user interfaces.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/data-1.mp4")}/>
</div>

There are three basic concepts for data in Noodl, the **Variable**, **Object** and **Array** nodes. You can learn more about how to work with these [here](/docs/guides/data/overview).

A very common pattern in web applications frontends are different types of lists or other dynamic repeating content. Learn how to do that in Noodl [here](/docs/guides/data/list-basics)

## Business Logic

As mentioned above you use **action nodes** to perform some sort of business logic action in Noodl. There are a wide variety of action nodes built in for most basic tasks such as navigating between pages, or storing data in the database. Data and signals from your UI controls are connected to your action nodes, and you can connect them together to make flows.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/actions-1.mp4")}/>
</div>

But most applications require some sort of more advanced business logic, for instance processing data from the database or maybe logic to create more advanced UI components. You can build most basic logic with the built in action nodes, but when you require more complex actions it is very easy and fast to add code to your projects.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/edit-code.mp4")}/>
</div>

Not a skilled software developer? Don't worry, the philosofy of Noodl is to focus on the code that matters and remove much of the unncessecary complexities of developing software. If you have basic knowledge of Javascript, you will get very far with Noodl.

## The cloud services

Now it's time to take a look at the second part of the Noodl platform, the cloud services. This is an important piece of any web application. You can create and manage cloud databases, or cloud services as they are refered to as, from within your Noodl project.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/cloud-1.mp4")}/>
</div>

The Noodl cloud services will provide your applications with a couple of important functions:

-   **Reading and writing data**. You can create **Class**es where you store **Record**s, these can then be read, filtered and presented in your application. Dive in [here](/docs/guides/cloud-data/overview) to start learning about cloud services.

-   **User Management**. Most applications need users, you can sign up users, log in, manage passwords etc. 

-   **Access Control**. When you have users and data, you need to control which users can access what data. This can be done trough **Role**s in your cloud servies. Learn more [here](/docs/guides/cloud-data/access-control)

-  **Cloud Functions**. You are not just limited to creating logic on the frontend, you can also create cloud functions that peform tasks that run in the cloud. This is super useful for things like database operations that should have admin access and background jobs.

## Cloud Functions

Using the same techniques to build logic as described above you can build logic that runs in the cloud, this is called a **Cloud Function**. 

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/cloud-2.mp4")}/>
</div>

This is very useful for many different functions such as:

- Access the database in admin mode, do things that should not be possible from the client for security reasons such as resetting passwords and verifying emails.

- Connection to external services using e.g. OAuth or webhooks need to logic to run in the cloud, here cloud functions can be super helpful.

- Performing queries is much faster in the cloud, so if you need to make many database queries and compound the result you can achieve high performance by doing this in the cloud.


## Collaboration

Finally, when your applications is growing you will want to work with your colleagues and friends. Thankfully, Noodl has a solid collaboration system with version control built in. You can work together on a project, you can each work on your own branches and merge. We try to bring really powerful concepts from the software development world into Noodl to make sure that you will never hit a wall.

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/initial-state.png)

</div>

Learn more about the collaboration and version control capabilities [here](/docs/guides/collaboration/version-control).

## Modules and Prefabs

In Noodl you can also import modules developed by others or develop your own modules. You can find a list of current modules provided by Noodl [here](/library/modules/overview). You can also build your own modules and extensions, for example wrapping existing Javascript libraries. You can read more about it [here](/javascript/extending/overview).

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-modules.png)

</div>

An important concept in Noodl that will take your productivity to the next step are **prefabs**, these are pre-built components that can be cloned into your project. You can use them as is, or as a starting point to modify and extend. It's also a great way to learn some of the good development patterns in Noodl.

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-prefabs.png)

</div>


