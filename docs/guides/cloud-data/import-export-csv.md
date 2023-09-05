
# Importing and exporting data with CSV

You can import and export data to/from your cloud service in the CSV (Comma Separated Values) format. This is done in the cloud services dashboard.

To export, browse the data for a specific record class and then you find the export commands in the toolbar at the top.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/import-export-csv/export-csv.png)

</div>

You can either export all records in a class (max 10K) or only the selected records. Select an option and then save the exported CSV.

To import a CSV you must also browse to the record class that you want to import into. Then you will find the import command in the `Edit` menu at the very bottom.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/import-export-csv/import-csv.png)

</div>

Click and then pick the CSV file on your computer that you want to use for import. The CSV file must follow a certain format for the import to work well.

### String

The input will be assigned directly as a string.

### Boolean

When the column data type is a boolean, there are a few different formats that are possible:

```js
"True" // == true
"true" // == true
"1" // == true
1 // == true

"FalsE" // == false
"false" // == false
"0" // == false
0 // == false
```

### Number

When the column data type is a number, it will convert the input to a number and assign if the value is not invalid or NaN.

### Date

Everything that is available via `new Date(...)` will be possible to import.

For example:

```json
"Thu Apr 13 2023 10:07:29 GMT+0200 (Central European Summer Time)"
"2023-04-13T08:02:46.447Z"
"Thu, 13 Apr 2023 08:06:11 GMT"
```

### Object

You can import an object type property by specifying it as JSON:

```json
{
  "some_property":10
}
```

### Array

Properties of array types can also be provided as JSON.

```json
[1,2,3]
```

### GeoPoint

A propety of type GeoPoint can be imported either as a string with latitude and longitude:

```json
"30,30"
```

Or as an object with lat/long as properties:

```json
{"latitude": 30, "longitude": 30}
```

### Pointer

A point is simply a string with the `Id` of the target record.

### Relation

This is currently not supported.

### File

```json
{
  "url": "path-to-file",
  "name: "filename.png"
}
```