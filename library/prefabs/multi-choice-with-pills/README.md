---
title: Multi Choice With Pills
hide_title: true
---

# Multi Choice With Pills

A simple component for multi choice selection comprising a drop down with all options and the selected options are shown as pills above the drop down.

<div className="ndl-image-with-background">

![](/library/prefabs/multi-choice-with-pills/multi-choice-with-pills.png)

</div>

After importing the module you will see a component called **Multi Choice With Pills** in your project.

The example below shows how to hook the **Multi Choice With Pills** up to data in an **Object**, you can save the value back to the object with the **Set Object Properties** using the **Selection Changed** signal.

<div className="ndl-image-with-background xl">

![](/library/prefabs/multi-choice-with-pills/multi-choice-with-pills-1.png)

</div>

As input it takes three arrays of strings, one containing all possible options, the **Options** input, this is the "value" of the options, it might differ from the labels, i.e. what is shown on screen. This you can specify with the **Labels** array input, it must have the same number of strings in the array, each one corresponding to a value in the **Options** array.

The final array is the **Selection** array, it contains all options that are selection. There is also an output from the component called **Selection** which is updated when the user interacts with the component, the **Selection Changed** event is triggered.

This component also features a **Reset** signal input, that can be used to clear the selection.
