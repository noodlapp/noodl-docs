---
hide_title: true
hide_table_of_contents: true
title: Noodl.Navigation
---

# Noodl.Navigation

**Only available on the frontend**  
The **Noodl.Navigation** service lets you perform navigation from functions and scripts.

#### **`Noodl.Navigation.showPopup(componentPath,parameters)`**  
This function will show the provided visual component as a popup.

```javascript
const result = await Noodl.Navigation.showPopup("#mysheet/mypopupcomponent", {
  Message: "hello",
});

console.log(result.action); // The action used to close the popup
console.log(result.parameters); // The close parameters
```

The **parameters** are provided to the component as inputs, and must match the component input names.

#### **`Noodl.Navigation.navigate(routerName,targetPageName,parameters)`**  
This function will navigate on a given page router, identified with **routerName**, to a provided page, identified with **targetPageName** (the path to the page component), and give it the parameters provided in **parameters**.

```javascript
Noodl.Navigation.navigate("Main", "#mysheet/DetailsPage", {
  ObjectId: theClickedObjectId,
});
```

#### **`Noodl.Navigation.navigateToPath(path,query)`**  
This function will navigate to a specific url path. You can provide query parameters as an object. The function will use the current path mode selected in the project, hash or path.

```javascript
Noodl.Navigation.navigateToPath("/main/details/" + theClickedObjectId, {
  query: {
    filter: true,
  },
});
```
