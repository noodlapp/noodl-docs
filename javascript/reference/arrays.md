---
hide_title: true
hide_table_of_contents: true
title: Noodl.Arrays
---

# Noodl.Arrays

**Only available on the frontend**  
The third part of the global data model in Noodl are arrays. Each array is reference by its **Id** using the `Noodl.Arrays`prefix, similar to objects and variables. You can learn more about arrays in the [arrays guide](/docs/guides/data/arrays). Changing an array will trigger an update of all **Array** node with the corresponding **Id**.

<div className="ndl-image-with-background xl">

![](/javascript/reference/arrays/arrays.png)

</div>

:::note
Generally arrays in Noodl are expected to contain objects. There is nothing stopping you putting other stuff in arrays but
:::

```javascript
// This will change the array with id MyArray and update all Arrays nodes
// with that id.
Noodl.Arrays.MyArray = [{ Hello: "There" }];

// Use this if you have spaces in your array id
Noodl.Arrays["Recepie List"] = [{ Name: "Fancy Burger" }];

// Reading arrays
console.log(Noodl.Arrays.MyArray);

// WARNING, you can access arrays like this but this will not trigger an update
// in Noodl. You should avoid modifying arrays like this.
Noodl.Arrays.MyArray.push({ Hello: "Again" });

// Instead, create a new array. This will trigger an update
// on all Array nodes with id MyArray
Noodl.Arrays.MyArray = Noodl.Arrays.MyArray.concat([{ Hello: "Again" }]);
```
