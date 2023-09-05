---
title: Fundamentals
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Fundamentals

Here you will learn about a few fundamental concepts in Noodl that are important to get a grasp on before continuing. You can view the video below or review the short guide.

<div style={{padding:'62.5% 0 0 0',position:'relative'}}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/kD-Oz_M-IS4" style={{position:'absolute',top:0,left:0}} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

## Nodes

The main building blocks of Noodl are nodes. Every node has its own specific purpose and is very simple in itself, but together they become really powerful. There are a number of types of nodes, indicated by its color. **Blue** nodes are visual elements, such as buttons, or not immediately visible but related, such as groups. **Green** nodes are generally related to reading, writing and manipulating data. **Grey** nodes are utilities, and **Pink** nodes are related to business logic and Javascript.

![](/docs/getting-started/basic-concepts/nodes.png)

### Inputs and outputs

All nodes have inputs and outputs. Connecting two nodes is as easy as clicking one node, dragging the connection to another node and selecting what output should be connected to what input. You can visually see the data flow in the Node Editor, and clicking a connection allows you to see what data is being passed.

![](/docs/getting-started/basic-concepts/connecting-nodes.gif)

Most properties in Noodl can be connected, that's what makes it so powerful and easy to be creative with.

### Connection types

Noodl has two different connection types, <span className="ndl-data">Data</span> and <span className="ndl-signal">Signals</span>.

-   <span className="ndl-data">Data</span>: This connects an output value from one node, such as the content of a Text Input or a Variable, to an input of another node. This is typically used to present data in your user interface. When data is passed over a connection you will see it light up in the node graph editor.

-   <span className="ndl-signal">Signal</span>: Whenever we want our app to perform some kind of action we use a Signal connection. This connects a signal output, a node can have several signal outputs that each will trigger on a specific event, e.g. Click on a button, to a signal input on another node. The receiving node will typically be some kind of action that is peformed when the signal is received. When a signal is triggered you will see it light up in the node grap editor.

### Type conversion

You can not connect <span className="ndl-data">Data</span> and <span className="ndl-signal">Signals</span> directly to one another, but there are nodes that can convert the connection types, for example if you want to trigger a signal whenever a value changes.

## Components

A clusters of nodes and connections, "node graph", and make up a component. These components can then be combined in new node graphs and be part of even larger components. For a larger app, you typically create many different components to keep your application organised. These components can have their own inputs and outputs, just like the built in nodes. This is a great way of reusing UI or logic across your application.

Component is also a great way to abstract and encapsulate complex functionality. You can decide what properties a component has and that are exposed the outer world, sort of like an API.

### Component types

There are four types of components: Page, Visual, Logic and Cloud Function.

-   `Page`: Page components are your app’s screens and can be navigated to using Page Router nodes.

-   `Visual`: Visual components are made to group and render your UI elements on the screen. They can contain logic, but the main output is always something visible.

-   `Logic`: Logic components are the brains of your app. They are used to group nodes that don’t render anything on screen. It can be as simple as a couple of nodes that do data transformation to something more complex, like routing signals to different outputs based on passed values.

-  `Cloud Function`: A cloud function component is a logic component that run in the cloud. It can do tasks that cannot be done on the frontend and may contain other logic components.

### Update everywhere

One very practical thing with Components is that they are global, meaning that whenever you update a component's internals, these changes will be updated everywhere this component is used in the app.

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/getting-started/basic-concepts/always-live.mp4")}/>
</div>
