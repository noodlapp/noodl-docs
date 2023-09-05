---
title: Pagination
hide_title: true
---

# Pagination

This prefab contains a UI component that is very handy with queries and UIs that require pagination. That is when you want to fetch and show one page at a time and let the user navigate between the available pages.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagination/pagination-1.png)

</div>

This is can be used well together with [Query Records](/nodes/data/cloud-data/query-records) and the [Table](/library/prefabs/table) prefab. Here is a quick example. Don't forget to first clone the prefab into your project. You can simply add the component after a **Table** with the **Query Records** connected as shown below.

<div className="ndl-image-with-background xl">

![](/library/prefabs/pagination/pagination-nodes-1.png)

</div>

Then you simply connect the <span class="ndl-data">Skip</span> output to the corresponding input on the **Query Records** and the <span class="ndl-signal">Changed</span> signal to the <span class="ndl-signal">Do</span> action on the query records. This will have the records fetch with the new **Skip** when the user clicks on a new page.

Note that we have also connected the <span class="ndl-data">Total Count</span> from the query node to the corresponding input on the **Pagination** component. This will let the component know home many total records/rows there are in the data set. Make sure it's enabled in the **Query Records** properties.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagination/pagination-total-count.png)

</div>

You also need to specify how many rows you want per page. This is done in the <span class="ndl-data">Page Size</span> property.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagination/pagination-props-1.png)

</div>

Finally you can set the currently <span class="ndl-data">Selected Page</span> by connecting to the correspinding input. Remeber that it is zero based.

<div className="ndl-image-with-background l">

![](/library/prefabs/pagination/pagination-props-2.png)

</div>

## Responsiveness

The pagination control will grow to fill the space it has available to it by setting the <span class="ndl-data">Width</span> property. 

<div className="ndl-image-with-background m">

![](/library/prefabs/pagination/pagination-width.png)

</div>

If all pages fit inside the available space it will not keep growing instead you can control the alignment within the available space here.

<div className="ndl-image-with-background m">

![](/library/prefabs/pagination/pagination-inner-align.png)

</div>