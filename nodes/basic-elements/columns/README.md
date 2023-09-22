---
hide_title: true
hide_table_of_contents: true
title: Columns node
---

<##head##>

# Columns

This node is used to layout your content in columns with gaps.

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/columns/columns_visual.png)

</div>

The <span className="ndl-node">Columns</span> node does not have any own styling attached to it. Instead it arranges all its children into dynamic layouts using **layout strings**.

## Layout strings

A layout string is simply a string of numbers with spaces between them. Every number represents a fraction of the full container width and is converted to a column. A <span className="ndl-node">Columns</span> node with the layout string `1 2 1` that contains 5 children will be rendered like this:

<div className="ndl-image-with-background l">

![](/nodes/basic-elements/columns/columns_example.png)

</div>

<##head##>

## Responsive layouts

### Using the Min Column Width value

The easiest way of making the columns responsive is by setting the <span class="ndl-data">Min Column Width</span> value. This will check if the columns will fit with your specified <span class="ndl-data">Layout String</span>. If the container can't fit the columns when they are at their Min Width, the layout will fold into a grid with fewer columns.

Make sure the children you pass are set to a width of `100%` of their parent.

### Using different layout strings

Advanced responsive layouts can easily be created by passing different values to the <span class="ndl-data">Layout String</span> input using a [States](/nodes/utilities/logic/states) node and the [Media Queries](/library/prefabs/media-query/) prefab.

Make sure the children you pass are set to a width of `100%` of their parent.

## Inputs

| Data                                               | Description                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Layout String</span>    | Determines the size and layout of the columns that the children are rendered into.            |
| <span className="ndl-data">Horizontal Gap</span>   | The horizontal spacing between the columns in `px`.                                           |
| <span className="ndl-data">Vertical Gap</span>     | The vertical spacing between the columns in `px`.                                             |
| <span className="ndl-data">Layout Direction</span> | If the columns should be rendered horizontally or vertically.                                 |
| <span className="ndl-data">Min Column Width</span> | The smallest the columns are allowed to be before they fold into a layout with fewer columns. |
| <span className="ndl-data">Mounted</span>          | If the columns node should be rendered in the app or not.                                     |
| <span className="ndl-data">Justify Content</span>  | The position of children in unfilled rows.                                                    |
