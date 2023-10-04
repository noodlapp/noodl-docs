---
hide_title: true
hide_table_of_contents: true
title: Noodl.Files
---

# Noodl.Files

The **Noodl.Files** service lets you access the cloud services files.

#### **`Noodl.Files.upload(file,options)`**  
**Only available on the frontend**  
This function will upload a file to the backend. You can specify a progress callback using the options.

<div className="ndl-image-with-background xl">

![](/javascript/reference/files/upload.png)

</div>

```javascript
const cloudFile = await Noodl.Files.upload(Inputs.File, {
  onProgress: (p) => {
    console.log(p.total, p.loaded);
  },
});

console.log(cloudFile.name);
console.log(cloudFile.url);
```

#### **`Noodl.Files.delete(fileName)`**  
**Only available in cloud functions**  
This function will delete a file that has been uploaded to the backend. You need to provide the file name that was returned when the file was uploaded. So not the full `url` but the `hash+filename` returned by the upload function.

```javascript
// Can only be done in cloud functions
await Noodl.Files.delete(filename);
```
