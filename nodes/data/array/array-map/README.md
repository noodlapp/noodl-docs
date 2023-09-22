---
hide_title: true
hide_table_of_contents: true
title: Array Map node
---

<##head##>

# Array Map

This node takes an input array, runs a small map script on each item, and outputs the resulting mapped array. That is an array with new objects, each created in the mapping script.

<div className="ndl-image-with-background l">

![](/nodes/data/array/array-map/array-map.png)

</div>

<##head##>

## Inputs

| Data                                    | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| <span className="ndl-data">Items</span> | <##input:items##>The array that should be mapped.<##input##> |

### Script

The mapping script used to map the objects in the input array to new objects in the mapped output array. The script should be provided in the following format:

```javascript
map({
    FullName: () => object.first_name + object.last_name,
    Age: 'years_old',
})
```

You can either provide a string with the name of the property that should be mapped with the syntax _to:'from'_ which will simply rename a property taking the value directly from the input object. Or you can provide a mapping function that takes the object (of the type [Noodl.Object](/javascript/reference/object)) and the function should return the mapped value.

Sometimes you need to extract the **Id** of the objects you are mapping, this can be done in the following way:

```javascript
map({
    Value: () => object.getId(),
    Label: 'PhotoName',
})
```

Note that the objects that are created when mapping are new objects so they will have their own Id as well.

## Outputs

### General

| Data                                    | Description                                                                                                      |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span> | <##output:items##>The mapped array.<##output##>                                                                  |
| <span className="ndl-data">Count</span> | <##output:count##>The number of items in the mapped array (this will be the same as the input array)<##output##> |

| Signal                                      | Description                                                                                                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Changed</span> | <##output:changed##>A signal is emitted here when the input array has been modified which will trigger the _Array Map_ node to remap the input and produce a new output _Items_.<##output##> |
