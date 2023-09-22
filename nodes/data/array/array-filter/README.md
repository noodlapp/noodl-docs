---
hide_title: true
hide_table_of_contents: true
title: Array Filter node
---

<##head##>

# Array Filter

This node will take an array of items as input and output a filtered version of the items. Look at the Filter section below to find information on how to create filters.

<div className="ndl-image-with-background l">

![](/nodes/data/array/array-filter/array-filter.png)

</div>

<##head##>

## Inputs

### General

| Data                                        | Description                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span>   | <##input:enabled##>The filtering is enabled by default, if disabled the array will simply pass through unfiltered.<##input##> |
| <span className="ndl-data">Items</span>     | <##input:items##>The array that should be filtered.<##input##>                                                                |
| <span className="ndl-data">Use Limit</span> | <##input:filterEnableLimit##>Enables or disables limiting the number of objects in the outputted items array.<##input##>      |
| <span className="ndl-data">Limit</span>     | <##input:filterLimit##>Specify the maximum number of objects in the filtered output.<##input##>                               |
| <span className="ndl-data">Skip</span>      | <##input:filterSkip##>Specify the number of objects to skip from the beginning of the filtered output.<##input##>             |

| Signal                                     | Description                                                                                                                                                                                                                                                       |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Filter</span> | <##input:filter##>By default the node will filter as soon as there is a new array on the _Items_ input or if that array changes. But if there is a connection to the _Filter_ input it will wait until a signal is sent here to perform the filtering.<##input##> |

### Filter

By default the **Array Filter** node will pass through all objects of the input array. You can filter on **Object** properties. Add which properties you want to filter on.

<div className="ndl-image-with-background">

![](/nodes/data/array/array-filter/collection-filter.png)

</div>

For each filter property you can specify:

**Type**
The type you want for the filter, can be _Number_, _String_ or _Boolean_.

**Op**
The available operations of the filter depend on the type that is set.

-   _Equals_ Include in filter if the property equals the provided value. Available for all types.
-   _Not Equals_ Include in filter if the property does NOT equal the provided value. Available for all types.
-   _Greater than_ Include in filter if the property is greater than the provided value. Only available if type is _Number_.
-   _Less than_ Include in filter if the property is less than the provided value. Only available if type is _Number_.
-   _Greater than or equal_ Include in filter if the property is greater than or equal to the provided value. Only available if type is _Number_.
-   _Less than or equal_ Include in filter if the property is less than or equal to the provided value. Only available if type is _Number_.
-   _Matches Regexp_ Match a regexp to the provided value. Available if type is _String_

?> To perform a free text search on strings, use the _Matches Regexp_ operation and set the _Value_ to the partial string you want to search for.

**Value**
<##input:filterFilterValue-\*##>The value used to test against in the filter operation.<##input##>

<div className="ndl-image-with-background">

![](/nodes/data/array/array-filter/collection-filter-2.png)

</div>

### Sort

By default the **Array Filter** node does not sort the output, it will be in the same order as the input. You can specify sorting. Like filters you simply add which properties you want to sort on.
For each property you can choose the sorting order.

<div className="ndl-image-with-background">

![](/nodes/data/array/array-filter/collection-sort.png)

</div>

## Outputs

### General

| Data                                            | Description                                                                                                                                         |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span>         | <##output:items##>The filtered and sorted array.<##output##>                                                                                        |
| <span className="ndl-data">Count</span>         | <##output:count##>The number of objects in the filtered array.<##output##>                                                                          |
| <span className="ndl-data">First Item Id</span> | <##output:firstItemId##>The _Id_ of the first object in the filtered array, or _undefined_ if there are no items in the filtered array.<##output##> |

| Signal                                       | Description                                                                                                                                         |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Filtered</span> | <##output:filtered##>Signal emitted when the array has been filtered, either due to a _Filter_ signal sent or if the array has changed.<##output##> |
