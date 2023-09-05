---
title: Pages And Rows
hide_title: true
---

# Pages And Rows

This prefab contains a UI component that is very handy with queries and UIs that require pagination. That is when you want to fetch and show one page at a time and let the user navigate between the available pages.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagesandrows/pagesandrows-1.png)

</div>

This is can be used well together with [Query Records](/nodes/data/cloud-data/query-records) and the [Table](/library/prefabs/table) prefab. Here is a quick example. Don't forget to first clone the prefab into your project. You can simply add the component after a **Table** with the **Query Records** connected as shown below.

<div className="ndl-image-with-background xl">

![](/library/prefabs/pagesandrows/pagesandrows-nodes-1.png)

</div>

Then you simply connect the <span class="ndl-data">Skip</span> and <span class="ndl-data">Limit</span> outputs to the corresponding inputs on the **Query Records** and the <span class="ndl-signal">Changed</span> signal to the <span class="ndl-signal">Do</span> action on the query records. This will have the records fetch with the new **Skip** and **Limits** when the user clicks on one of the page controls, or changes the number of rows per page.

Note that we have also connected the <span class="ndl-data">Total Count</span> from the query node to the corresponding input on the **Pagination** component. This will let the component know home many total records/rows there are in the data set. Make sure it's enabled in the **Query Records** properties.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagination/pagination-total-count.png)

</div>

You may want to control the number of rows per page and the currently selected page via connections or provide a default value, you can do this via the <span class="ndl-data">Selected Page</span> and <span class="ndl-data">Rows Per Page</span> inputs, remember that **Selected Page** is zero based (the first page has index 0).

<div className="ndl-image-with-background l">

![](/library/prefabs/pagesandrows/pagesandrows-props-1.png)

</div>

Finally you can control the options in the **Rows Per Page** dropdown using the <span class="ndl-data">Options</span> property. You provide an array with numbers corresponding to the different options. 

<div className="ndl-image-with-background l">

![](/library/prefabs/pagesandrows/pagesandrows-props-2.png)

</div>

This is the default:

```javascript
[5,10,15,20,30,40,50]
```