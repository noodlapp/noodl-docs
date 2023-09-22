---
hide_title: true
hide_table_of_contents: true
title: Repeater node
---

<##head##>

# Repeater

This node is used to dynamically insert visual components based on <span className="ndl-data">array</span> data.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/repeater/repeater_visual.png)

</div>

The <span className="ndl-node">Repeater</span> node takes data from a Noodl <span className="ndl-data">Array</span> and generates an existing visual component for each item in the <span className="ndl-data">Array</span>. The [Object](/nodes/data/object/object-node) or [Record](/nodes/data/cloud-data/record) associated with the visual component can then be used to populate the component with data.

<div className="ndl-image-with-background l">

![](/nodes/ui-controls/repeater/repeater_node.png)

</div>

<##head##>

More details can be found in the [guide](/docs/guides/data/list-basics).

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Template Type</span> | This input is used to enable or disable dynamic templates. The input can be:<br/><br/>`Explicit`: The same _Component_ will be used for all items.<br/>`Dynamic`: Use code to choose what _Component_ to create for each item. In this case you will have to set the **Script** input. |
| <span className="ndl-data">Script</span>        | Available when **Template Type** is set to **Dynamic** or after chosing a _Component_ for a **Explicit** template type . Write a script to map input or choose what Component to create for every item (see below).                                                                    |
| <span className="ndl-data">Component</span>     | Only available when **Template Type** is set to **Explicit**. Choose a component from your project that will be used as template to dynamically create component instances for each object in the Items array.                                                                         |
| <span className="ndl-data">Items</span>         | <##input:items##>An array of [Objects](/nodes/data/object/object-node) or [Records](/nodes/data/cloud-data/record) that will be used to dynamically create components.<##input##>                                                                                                      |

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Refresh</span> | <##input:refresh##>By sending a signal to this input all items in the **Repeater** will be removed and then recreated.<##input##> |

### Script

Here you can put an script that will do one of two things. Either the script
a) Maps the properties of the objects in the **Items** array to component inputs of the template component instances created by the **Repeater** node. This is only available if **Template Type** is set to **Explicit**. (see _Mapping Inputs_ below), or b) Chooses which template component to use for each item in the item array provided to the **Repeater** node. This is only available (and mandatory) if the **Template Type** is set to **Dynamic**. (see _Dynamic Template Types_ below).

#### Mapping Inputs

```javascript
map({
    Label: 'Full Name',
    State: () => object.get('Married') === 'Yes',
})
```

By default the mapping is simply directly from object properties to component inputs. But you can use the script to change that mapping, in the example above the _Full Name_ property of the incoming object is mapped to the _Label_ component input. You can also use the script to do conversions of types by providing a function.
This could for example be useful when having a generic list item, that's used with various types of data arrays with different data models and properties.

#### Dynamic Template Types

By setting **Template type** to **Dynamic** you can use a script to determine which component that should be used for each item in the object **Array**. This could for example be useful if different items should have different visual representation and functionality tied to them.
You have to provide a script that determines which template to be used. The script will be called once for each object in the item array provided to the **Repeater** node. The script has has one input variable _item_ which is the current item. This can be used to get properties from the object. The script should set the variable _component_ to the path to the component to use as a template for the item. Note, this is a string containing the path, beginning with a "/", to the component in the Noodl project.

```javascript
let basePath = '/#My Sheet/ListItems'
if (item.type === 'header') {
    component = basePath + '/HeaderItem'
} else {
    component = basePath + '/StandardItem'
}
```

In the example above the script looks at the property "type" of each object, and either choses to component "#My Sheet/ListItems/HeaderItem" or "#My Sheet/ListItems/StandardItem" depending on the value.

## Outputs

| Mixed                | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| **Template Outputs** | An output is created for every signal output of the _Template_ component. |

| Data                                           | Description                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Item Id</span>      | <##output:itemActionItemId##>This output will be updated every time a signal is sent on any of the component output signals to reflect the **Id** of the related [Object](/nodes/data/object/object-node) or [Record](/nodes/data/cloud-data/record/) that triggered the signal.<##output##>                                                    |
| <span className="ndl-data">Item Outputs</span> | This group contains component outputs other than signals for the component template of the **Repeater** node. When a signal is triggered by one of the component instances the outputs will be replayed along with the _Item Id_ of the corresponding item. This can be used to store component specific outputs in e.g. objects and variables. |

<span className="hidden-props-for-editor"><##output:itemOutput-\*##>An output value coming from the list item.<##output##></span>

| Signal                                           | Description                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Item Signals</span> | This group contains component output signals from the component template of the **Repeater** node. When any of the component instances triggers an output signal, these will be relayed by the **Repeater** node along with the corresponding **Item Id**. |

<span className="hidden-props-for-editor"><##output:itemOutputSignal-\*##>An output signal coming from the list item.<##output##></span>
