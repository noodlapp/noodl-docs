---
title: Adding pagination to the Table
hide_title: true
---

import CopyToClipboardButton from '/src/components/copytoclipboardbutton'
import ImportButton from '../../../src/components/importbutton'

# Adding pagination to the Table

## What you will learn in this guide

In this guide we will use the **[Pages And Rows](/library/prefabs/pagesandrows/)** component prefab to add pagination to the **[Table](/library/prefabs/table)** from the [Using the Table node to display data](/docs/guides/visualizing-data/table-to-visualize-data) guide. The **Pages And Rows** node also allows users to control how many rows the **Table** displays on each page.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j9sUBnFfjxo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Adding the Pages And Rows prefab

Bring up the Node Picker and select the Prefabs tab. Then find the **Pages And Rows** prefab and click clone.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/table-pagination/clone-pages-rows.png)

</div>

You should now have the **Pages And Rows** component in your project, so let's add it to the node graph underneath the **Table** node in the Start Page, like in the screenshot below:

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/pages-rows-in-graph.png)

</div>

Let's also give the **Pages And Rows** component a **Top Margin** of 16px:

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/table-pagination/top-margin.png)

</div>

## Setting up the Query Records node

In order to use the **Pages And Rows** component, we need to enable some properties on the **Query Records** node. Check the **Use Limit** property and also check the **Fetch Total Count** property. It should look like this:

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/table-pagination/query-records-properties.png)

</div>

The **Pages And Rows** component will give us the values for **Limit** and **Skip**, and the **Query Records** will give the total count to the **Pages And Rows**. In the next section we will make the connections.

## Connecting the Pages And Rows with the Query Records node

Let's start by making some connections from the **Pages And Rows** component to the **Query Records** node. Make the following connections:

- Connect the <span class="ndl-data">Skip</span> output from the **Pages And Rows** to the <span class="ndl-data">Skip</span> input of the **Query Records**
- Connect the <span class="ndl-data">Limit</span> output from the **Pages And Rows** to the <span class="ndl-data">Limit</span> input of the **Query Records**
- Connect the <span class="ndl-signal">Changed</span> output from the **Pages And Rows** to the <span class="ndl-signal">Do</span> input of the **Query Records**

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/connections-pr-qr.png)

</div>

Now from the **Query Records** make a connection to the **Pages And Rows**:

- Connect the <span class="ndl-data">Total Count</span> output from the **Query Records** to the <span class="ndl-data">Total Count</span> input of the **Pages And Rows**

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/connections-qr-pr.png)

</div>

It should look like this in the node graph when you are done:

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/connections-done.png)

</div>

## Explicit control of when the Query Records node fetches it's data

If you reload the application now, you will be met with the following:

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/empty-table.png)

</div>

The reason the table looks like this is because the **Query Records** node hasn't fetched any data. When we hooked up the <span class="ndl-signal">Changed</span> signal from the **Pages And Rows** to the <span class="ndl-signal">Do</span> action of the **Query Records**, the **Query Records** node went from implicitly fetching data, to only fetching data when it gets a signal to the <span class="ndl-signal">Do</span> action. This means that we want to make sure that the **Query Records** node fetches data as soon as something in the Node Graph has become visible, so let's connect the <span class="ndl-signal">Did Mount</span> signal from the **Group** node to the <span class="ndl-signal">Do</span> action of the **Query Records**, like this:

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/group-qr.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/all-connections.png)

</div>

If you reload now, it should look like this:

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/table-pagination/table-with-pagination.png)

</div>

## Summary

Now we have a fully functioning table where the user can control the number of rows that are displayed on each **Table** page thanks to the **Pages And Rows** component.
