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

Each UI control has properties that can be used for fine-grained customization. Here is a short overview of concepts important for building user interfaces:

-   **Visual States** Each UI control has a set of visual states, such as Hover, Pressed, etc., and the control properties can be set for each state individually. Learn more [here](/docs/guides/user-interfaces/visual-states).

-   **Transitions** You can control transition animations between each visual state using the animation editor.

-   **Variants** Define reusable variants for your UI controls, including properties, visual states, and transitions. Build your own design systems to enhance productivity. Learn more [here](/docs/guides/user-interfaces/style-variants)

## Page Navigation & Components

When you start building more complete frontends, you will be working with **components**. A component can be an entire page in your application; these are called **Page Components**, or they can be a smaller part of your UI that you want to reuse in many places; these are called **Visual Components**. Pages can be found in the top navigation bar, and visual components are found in the component panel in the sidebar. You can also use the preview in design mode to quickly locate a specific visual element in your app.


<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/nav-1.mp4")}/>
</div>

It's simple to create page navigation but the system is also flexible enough to build more complex navigation flows, such as nested navigation. Noodl supports state of the art web app navigation, with permalinks and encoding of data in URLs. Here is a short overview of concepts important for building pages and navigation:

-   The **Page**, **Page Router** and **Navigate** nodes are the essence of the navigation system. Learn how to build basic page navigation in this [guide](/docs/guides/navigation/basic-navigation) and more advanced multi level navigation [here](/docs/guides/navigation/multi-level-navigation).

-   Another feature of the navigation is **Popups**, these can be used to show or collect transient information. Learn more about popups [here](/docs/guides/navigation/popups)

## Actions

An important concept in Noodl, as briefly shown above, is **action nodes**. These nodes perform some sort of action when triggered by a signal, for example, from a UI control (such as a button click) or from another action node (such as when an action has completed successfully or failed). Noodl contains a wide variety of action nodes for most common basic tasks, including **Navigation** and **Reading and Writing Data**.


![](/docs/getting-started/basic-concepts/connecting-nodes.gif)

Connections between nodes is a core concept in Noodl, this is how you connect your user interface to data and actions. 

## Working with data

When you have built some of your frontend, added pages, components and navigation it is time to connect dynamic data to your user interfaces. This is what makes your application come alive, and in Noodl you have a neat visual way to build modern reactive user interfaces.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/data-1.mp4")}/>
</div>

There are three basic concepts for data in Noodl, the **Variable**, **Object** and **Array** nodes. You can learn more about how to work with these [here](/docs/guides/data/overview).

A very common pattern in web applications frontends are different types of lists or other dynamic repeating content. Learn how to do that in Noodl [here](/docs/guides/data/list-basics).

## Business Logic

As mentioned above you use **action nodes** to perform some sort of business logic action in Noodl. There are a wide variety of action nodes built in for most basic tasks such as navigating between pages, or storing data in the database. Data and signals from your UI controls are connected to your action nodes, and you can connect them together to make flows.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/actions-1.mp4")}/>
</div>

But most applications require some sort of more advanced business logic, for instance processing data from the database or maybe logic to create more advanced UI components. You can build most basic logic with the built in action nodes, but when you require more complex actions it is very easy and fast to add code to your projects.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/edit-code.mp4")}/>
</div>

Not a skilled software developer? Don't worry; the philosophy of Noodl is to focus on the code that matters and remove much of the unnecessary complexities of software development. If you have a basic knowledge of JavaScript, you will go a long way with Noodl.

## The cloud services

Now it's time to take a look at the second part of the Noodl platform, the cloud services. This is an important piece of any web application. You can create and manage cloud databases, or cloud services as they are refered to as, from within your Noodl project.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/cloud-1.mp4")}/>
</div>

The Noodl cloud services will provide your applications with several important functions:

- **Reading and Writing Data**: You can create **classes** to store **records**, which can then be read, filtered, and presented in your application. Dive in [here](/docs/guides/cloud-data/overview) to start learning about cloud services.

-   **User Management**. Most applications need users, you can sign up users, log in, manage passwords etc. 

- **Access Control**: When you have users and data, you need to control which users can access what data. This can be done through **roles** in your cloud services. Learn more [here](/docs/guides/cloud-data/access-control).

- **Cloud Functions**: You are not limited to creating logic on the frontend; you can also create cloud functions that perform tasks running in the cloud. This is especially useful for operations like database operations requiring admin access and background jobs.

## Cloud Functions

Using the same techniques to build logic as described above you can build logic that runs in the cloud, this is called a **Cloud Function**. 

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/cloud-2.mp4")}/>
</div>

This is very useful for many different functions such as:

- Access the database in admin mode, do things that should not be possible from the client for security reasons such as resetting passwords and verifying emails.

- Connecting to external services using methods such as OAuth or webhooks requires logic to be executed in the cloud. In such cases, cloud functions can be incredibly helpful.

- Performing queries is significantly faster in the cloud, so if you need to make numerous database queries and combine the results, you can achieve high performance by doing this in the cloud.

## Collaboration

Finally, as your application grows, you'll want to collaborate with colleagues and friends. Thankfully, Noodl offers a robust collaboration system with built-in version control. You can collaborate on a project, work on your individual branches, and merge changes. We aim to incorporate powerful concepts from the software development world into Noodl to ensure you never encounter any limitations.

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/initial-state.png)

</div>

Learn more about the collaboration and version control capabilities [here](/docs/guides/collaboration/version-control).

## Modules and Prefabs

In Noodl you can also import modules developed by others or develop your own modules. You can find a list of current modules provided by Noodl [here](/library/modules/overview). You can also build your own modules and extensions, for example wrapping existing Javascript libraries. You can read more about it [here](/javascript/extending/overview).

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-modules.png)

</div>

An important concept in Noodl that will take your productivity to the next level is **prefabs**. These are pre-built components that can be cloned into your project. You can use them as they are or as a starting point for modification and extension. It's also a great way to learn some of the best development patterns in Noodl.

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/modules/browse-prefabs.png)

</div>


