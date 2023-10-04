---
hide_title: true
hide_table_of_contents: true
title: Noodl.CloudFunctions
---

# Noodl.CloudFunctions

**Only available on the frontend**  
The **Noodl.CloudFunctions** service lets you call Noodl cloud functions.

#### **`Noodl.CloudFunctions.run(functionName,parameters)`**  
This function will call a cloud function in the backend.

```javascript
const result = await Noodl.CloudFunctions.run("myFunctionName", {
  SomeParamater: "yes",
});
```
