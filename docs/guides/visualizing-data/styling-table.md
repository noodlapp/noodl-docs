---
title: Styling the Table
hide_title: true
---
import CopyToClipboardButton from '/src/components/copytoclipboardbutton'
import ImportButton from '../../../src/components/importbutton'

# Styling the Table

## What you will learn in this guide
In this guide we will look at how we can style the **[Table](/library/prefabs/table/)** prefab and make the app we have created in the previous guides look a bit nicer. We will only make some minor changes to the background colors and borders of the **Table**, but we encourage you to play around with the **Table** prefab on your own and make it into something that fits your use cases.

## Changing the app background
Let's start with an easy change, the overall background color of our app. Go the the App component and select the **Page Router**.

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/styling-table/select-app.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/select-pr.png)

</div>

Now change the **Background Color** property to ```#F0EDE8```, and the app should look like the second image below.

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/change-bg-pr.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/new-bg.png)

</div>

## Styling the table
Go back to the Start Page and double click on the **Table** component in the node graph. It should take you into the **Table** prefab, and this is where we will make some styling changes.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/double-click-table.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-overview.png)

</div>

Select the top **Group** and remove it's **Border** by setting it to none and set the **Corner Radius** to 0:

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/select-table-group.png)

</div>

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/table-group-props.png)

</div>

Next select the **Group** named Header Row and find the Border Style section. In the Border Style section, select the bottom border and set it's color to Grey - 300. Let's also set it's **Background Color** to White.

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/select-header-row.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/styling-table/header-row-props.png)

</div>

It doesn't look like much right now, but let's continue by styling the rows of the **Table**. In the Components tab, unfurl the **Table** and select the **Row** subcomponent.

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/row-in-comp.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/row-overview.png)

</div>

We want all rows to have the same background color so select the **Color Blend** node and set **Color 0** and **Color 1** to Grey - 100. 

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/color-blend-props.png)

</div>

Also make sure that the bottom border of the **Group** named Row is set to 1px and Grey - 300

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/row-border-props.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-in-progress.png)

</div>

The table is starting to look pretty good, we want to add a border around the whole thing, but before we do that, let's style the **Image Cell** slightly.

Select the **Image Cell** in the Components view. 

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/image-cell.png)

</div>

Find the **Image** node and give it 8px Corner Radius.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/image-props.png)

</div>

Now we will add a border around the whole **Table** and we will also include the **Pages And Rows** in that border. Go back to the Start Page, and wrap the **Table** and **Pages And Rows** in a **Group** called Table Border. 

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-border-group.png)

</div>

Select the Table Border **Group** and set the **Border style** to Solid 1px and Grey - 300, give it 8px **Corner Radius** and make sure that **Clip Content** is checked:

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/table-border-props.png)

</div>

The table now looks really good, except for the bottom where we have the **Pages And Rows**.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-style-done.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-bottom.png)

</div>

Let's fix it by wrapping the **Pages And Rows** in it's own **Group** and give that Group a White **Background**.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/pages-and-rows-in-group.png)

</div>

Select the **Pages And Rows** and give it 16px margin all around.

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/pages-and-rows-padding.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-final.png)

</div>

That looks quite nice, so let's make the Filters section look a bit nicer too.

## Style the Filters section
The filters section currently looks like this:

<div className="ndl-image-with-background m">

![](/docs/guides/visualizing-data/styling-table/filters-initial.png)

</div>

It needs a header so let's add a **Group** as a child to the Filter Column and call it Filter Header. Then with the Filter Header **Group** selected set the **Height** to 42px and have it align it's content vertically centered. Also give it 16px **Padding** both left and right and set it's **Background Color** to White.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/add-filter-header.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/filter-header-props.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/filter-header-props-bg.png)

</div>

Add **Text** node as a child to the Filter Header **Group** and set the **Text** property to "Filters" and change the **Text Style** to Label Medium.

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/text-node-filter-header.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/text-node-props.png)

</div>

Wrap the **Filter** component in a **Group** and add 16px Top, Left and Right *Padding** to the Group.

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/filters-in-group.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/group-padding-props.png)

</div>

Now select the Filter Column **Group** and update the **Top Margin** to 40px, check the **Clip Content** property, set the **Background Color** to Grey - 100, give it a Solid 1px, Grey - 300 border all around and a **Corner Radius** of 16px. 

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/select-filter-column.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/column-props-1.png)

</div>

<div className="ndl-image-with-background s">

![](/docs/guides/visualizing-data/styling-table/column-props-2.png)

</div>

That's if for the filters section, but as a final touch we will update the **Text Style** called Body Medium. Select the **Text** node in the Filter Header, find the **Text Style** property and click the settings icon next to Body Medium and set the **Size** to 14px.

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/styling-table/text-style-conf.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/visualizing-data/styling-table/text-style-props.png)

</div>

## Summary
Now we have styled our **Table** and the filters section and below you can see what it looked like before and after the styling. Prefabs like that **Table** are a great way to quickly build out your experiences, but they are meant to be tinkered with and hopefully this guide has given you some ideas of how you can update the look and feel of prefabs.

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-no-style.png)

</div>

<div className="ndl-image-with-background xl">

![](/docs/guides/visualizing-data/styling-table/table-with-style.png)

</div>