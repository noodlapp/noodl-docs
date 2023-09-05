---
title: Query Sheet
hide_title: true
---

<##head##>

# Query Sheet

This node is used to query data from a public Google Sheet. You can filter and sort the data. The data is organized in _Rows_ where the values of each cell in the row is exposed in a properties of the row.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/query-sheet/query-sheet-1.png)

</div>

The node works in a similar way as the [Query Records](/nodes/data/cloud-data/query-records) node where you can add filters and sorting.

<div className="ndl-image-with-background">

![](/library/modules/gsheets/node-docs/query-sheet/query-sheet-2.png)

</div>

?> Note that the Google Sheet need to be made public for Noodl to be able to access it.

<##head##>

## Document Id and Sheet Name

You refer to the document through its id. You find the id in the URL of the Google Sheet.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/query-sheet/query-sheet-3.png)

</div>

You also have to specify the Sheet Name. You find the Sheet names in the Google Document at the bottom of the sheet.

<div className="ndl-image-with-background">

![](/library/modules/gsheets/node-docs/query-sheet/query-sheet-4.png)

</div>

## Filters

A filter can be added to the query. It can be a combination of various filter operators (`equalTo`, `notEqualTo`, `exists`, etc) depending on the type of the column. Multiple filters can be combined using `AND` and `OR`. A the values to filter against can be set dynamic by making the filter use an `Input` rateher than a static value. This will create an input on the node that you can connect.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/query-sheet/query-sheet-5.png)

</div>

## Returned results

The results of the query is an **Array**, just as with a regular **Query Record**. The Array contains Objects that represents the rows in the Google Sheet. Each column value will be represented by a property in the respective object, with the same name as the column. When using a [Sheet Row](/library/modules/gsheets/node-docs/sheet-row) node, the **Id** of the object can be used to set the **Row Id** of the Sheet Row node.

## Controlling when queries are performed

If the `Do` signal is unconnected, the Query will automatically be run when the **Query Sheet** node is created and whenever any of its inputs change. By connecting the `Do` signal, the Query will only be run when `Do` is triggered.

## Inputs

| Data                                                | Description                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Document Id</span>       | The id of the Google Sheets document. You can find it in the URL of the sheet.                                                                                                                                                                                                                                                      |
| <span className="ndl-data">Sheet Name</span>        | The name of the sheet where to capture the data in the Google Sheet.                                                                                                                                                                                                                                                                |
| <span className="ndl-data">Use Column For Id</span> | You can select a column that will become the **Id** of the Noodl Objects that will represent each row. It's important that the values in this column are unique. You can also chose `Unique Id`, then Noodl will generate it's own id's.                                                                                            |
| <span className="ndl-data">Use limit</span>         | A<span className="ndl-data"> boolean </span> that selects whether there will be a limit or not on how many items that are loaded when the query is run. This is useful when you are handling large amount of items and you want to do pagination.                                                                                   |
| <span className="ndl-data">Limit</span>             | This input is only available if `Use Limit` is set to<span className="ndl-data"> true </span>. It decides how many items that will be loeded when the query is triggered. To be used in combination with `Skip` to create paginations.                                                                                              |
| <span className="ndl-data">Skip</span>              | This input is only available if `Use Limit` is set to<span className="ndl-data"> true </span>. It sets how many items that will be skipped when the query is triggered. To be used in combination with `Skip` to create paginations. For example, if `Limit` is set to 10 and `Skip` is set to 30, the query will fetch item 31-40. |
| <span className="ndl-data">Filter</span>            | Each filter that is set up to controlled by an input will show up as an input on the node.                                                                                                                                                                                                                                          |

| Signal                                 | Description                                                                                                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | This signal will trigger the query to be executed. If the signal is not connected, the query will automatically be triggered when instanciated and when any of its inputs changes. |

## Outputs

| Data                                            | Description                                                                                                                                                                                                                                              |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span>         | An array of items that's the result of the query. The items represents a row in the Google Sheet and will contain all column values as properties on the Object, as well as an id that's set up depending on the `Set Column For Id` property is set up. |
| <span className="ndl-data">Count</span>         | The number of items the latest query returned.                                                                                                                                                                                                           |
| <span className="ndl-data">First Item Id</span> | The id of the first item that was returned in the latest query.                                                                                                                                                                                          |
| <span className="ndl-data">Error</span>         | A textual description of the latest error, when the `Failure` signal was triggered as a result of a failed Query.                                                                                                                                        |

| Signal                                      | Description                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | This signal is sent when a Query was successfully performed.                                                  |
| <span className="ndl-signal">Failure</span> | This signal is sent when a Query failed for some reason. The `Error` property will contain the error message. |
