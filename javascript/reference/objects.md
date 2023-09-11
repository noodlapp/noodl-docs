---
hide_title: true
hide_table_of_contents: true
title: Noodl.Objects
---

# Noodl.Objects

One step above **Variable**s are **Object**s,
this is a global data model of Noodl objects.
Each object is referenced with an **Id** and can contain a set of properties.
You can access all objects in your workspace through their **Id** and the `Noodl.Objects` prefix.
Change a property of an object will trigger all connections from object nodes with the corresponding **Id** and property.
You can learn more about objects and how you use them in your Noodl applications [here](/docs/guides/data/objects).

<div className="ndl-image-with-background xl">

![](/javascript/reference/objects/objects.png)

</div>

```javascript
// This will change the property MyProperty
// of object with id MyObjectId and trigger
// all object nodes (with that id) in your project
Noodl.Objects.MyObjectId.MyProperty = "Hello";

// Use this notation of that object id contains spaces
Noodl.Objects["Form Values"].input_text = "Whoops";

Noodl.Objects["Form Values"]["A property with spaces"] = 20;

// Reading an object property
console.log(Noodl.Objects.CurrentUser.Name);

// This will set all properties of the object you assign with
// to the object with id "SomeId"
// You cannot set the id property this way,
// that property will be ignored if part of the object you assign
Noodl.Objects.SomeId = { ... }
```
