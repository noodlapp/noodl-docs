---
title: Making Connections
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl'

# Making Connections

## What you will learn in this guide

How to make data connections between nodes to start creating data driven user interfaces.

## Data connections

All nodes have inputs and outputs. Most of the properties of a node (that you can edit in the property panel) are also available as inputs. Many nodes also have outputs that provide some sort of data value. The most common example is the **Text Input** node that provides (amonng other things) the typed text as an output value. Using connections you can ensure that an output from one node is written to an input of another node when it is updated. Take a look at the very simple interface below:

<div className="ndl-image-with-background xl">

![](/docs/guides/data/making-connections/making-connections-ui.png)

</div>

Here you have a **Text Input** and a **Text** UI Element. Now let's say we want the **Text** element to show whatever we type into the **Text Input**. For that we can connect the two nodes.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/making-connection.mp4")}/>
</div>

Now when we type something in the **Text Input**, it will output that on the **Text** output. This is connected to the apptly named **Text** input of the **Text** node.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/testing-connection.mp4")}/>
</div>

As you can see above, when you start typing in the **Text Input** you can see the **Text** is also updated. You can also see in the node graph editor that the connection lights up briefly when data is updated on the output and written to the input.

If you hover the connection in the node graph editor you can also view the latest value that have been sent over the connection, and if you click the little inspection popup you can pin it. Click it again to unpin it.

Making direct connections is fun an all, but using the many utility nodes available you can convert and augment the data on it's way from the output to the final input. First, delete the connection you just made. Deleting a connection is done by clicking it once to reveal the **Delete Icon** and clicking it again to delete.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/delete-connection.mp4")}/>
</div>

Now, here you can see how we use a **String Format** node to make a nice greeting.

<div className="ndl-image-with-background xl">

![](/docs/guides/data/making-connections/string-format.png)

</div>

Now you when you type in the **Text Input** box you can see how the data is first passed to the **String Format** node that then augments the data and passes it along on it's **Formatted** output. Learn more about how the [String Format](/nodes/string-manipulation/string-format) node work in the node reference documentation.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/making-connections/testing-connection-2.mp4")}/>
</div>

We have covered a very important concept that is used for making data driven reactive user interfaces. But we won't get far just connecting different UI Controls together, most often we need to present data from a database, or an external API. For that we will introduce the data nodes (the green ones), and we'll start with the **Variable** in the next guide.
