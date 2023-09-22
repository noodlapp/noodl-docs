---
hide_title: true
hide_table_of_contents: true
title: Cloud File node
---

<##head##>

# Cloud File

Represents a file that has been uploaded to the Noodl Cloud Services and stored as a file property in a **Record**.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-file/cloud-file.png)

</div>

**Cloud File** is typically used in combination with the [Open File Picker](/nodes/utilities/open-file-picker) and the [Upload File](/nodes/data/cloud-data/upload-file) to upload a file and store a reference to it in the database. Then **Cloud File** is used to retrieve the reference and get the URL or Name of the file.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/upload-file/upload-file.png)

</div>
<##head##>

## Inputs

| Data                                         | Description                                                                                                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Cloud File</span> | <##input:cloud file##>A file that has been stored in the Noodl Cloud Services. Often used in combination with a **Record** to retrieve the **Name** and **URL** of a file.<##input##> |

## Outputs

| Data                                   | Description                                        |
| -------------------------------------- | -------------------------------------------------- |
| <span className="ndl-data">URL</span>  | <##output:url##>The URL of the file.<##output##>   |
| <span className="ndl-data">Name</span> | <##output:name##>The Name of the file.<##output##> |
