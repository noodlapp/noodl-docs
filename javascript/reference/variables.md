---
hide_title: true
hide_table_of_contents: true
title: Noodl.Variables
---

# Noodl.Variables

Variables are the simplest form of global data model in Noodl. You can learn more about variables in the [guide](/docs/guides/data/variables). You can access all variables in your application trough the `Noodl.Variables` object. Changing a variable will trigger all connections to be updated for all **Variable** nodes in your project with the corresponding variable name.

<div className="ndl-image-with-background xl">

![](/javascript/reference/variables/variables.png)

</div>

```javascript
// This will change the variable named MyVariable
// and trigger all variable nodes in your project
Noodl.Variables.MyVariable = "Hello";

// Use this if you have spaces in your variable name
Noodl.Variables["My Variable"] = 10;

Noodl.Variables.userName = "Mickeeeey";

// Reading variables
console.log(Noodl.Variables.userName);
```
