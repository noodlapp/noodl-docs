---
title: Query Sheet Aggregate
hide_title: true
---

<##head##>

# Query Sheet Aggregate

This node is used do aggregate data queries on a column from a public Google Sheet. The aggregate query will be either

-   `min`/`max` - The minimum/maximum value of the specfied column.
-   `unique` - An **Array** containing all unique values in the column.
-   `count` - The number of entries in total of that column. Empty cells will not be counted.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/query-sheet-aggregate/query-sheet-ag-1.png)

</div>

?> Note that the Google Sheet need to be made public for Noodl to be able to access it.

<##head##>

## Results from the Aggregate Query

Note the the type of the **Result** output is dependent on which aggregate query that is run. For `min`/`max` and `count` **Result** will be a **Number**. For `unique` it will be an **Array**.

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

A filter can be added to the query, meaning the aggregate will only be calculated based on the filtered rows. It can be a combination of various filter operators (`equalTo`, `notEqualTo`, `exists`, etc) depending on the type of the column. Multiple filters can be combined using `AND` and `OR`. A the values to filter against can be set dynamic by making the filter use an `Input` rateher than a static value. This will create an input on the node that you can connect.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/query-sheet-aggregate/query-sheet-ag-1.png)

</div>

## Controlling when queries are performed

If the `Do` signal is unconnected, the Query will automatically be run when the **Query Sheet Aggregate** node is created and whenever any of its inputs change. By connecting the `Do` signal, the Query will only be run when `Do` is triggered.

## Inputs

| Data                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Document Id</span> | The id of the Google Sheets document. You can find it in the URL of the sheet.                                                                                                                                                                                                                                                                                                                               |
| <span className="ndl-data">Sheet Name</span>  | The name of the sheet where to capture the data in the Google Sheet.                                                                                                                                                                                                                                                                                                                                         |
| <span className="ndl-data">Column</span>      | The name of the column in the Google Sheet to run the aggreagate query on.                                                                                                                                                                                                                                                                                                                                   |
| <span className="ndl-data">Aggregate</span>   | Can be one of the following values: `Min`/`Max`/`Unique`/`Count`. `Min`/`Max` will set the miminum value in the specified column on the `Result` output. `count` will set the number of non-empty cells in the column on `Result`. Finally `Unique` will set the `Result` output to an **Array** of objects of the form `{Label:<unique value>, Value:<unique value>}` with all unique values of the column. |
| <span className="ndl-data">Filter</span>      | Each filter that is set up to controlled by an input will show up as an input on the node.                                                                                                                                                                                                                                                                                                                   |

| Signal                                 | Description                                                                                                                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | This signal will trigger the query to be executed. If the signal is not connected, the query will automatically be triggered when instanciated and when any of its inputs changes. |

## Outputs

| Data                                     | Description                                                                                                                                                                                          |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Result</span> | The result of the aggregate query. It's either a <span className="ndl-data">Number</span> or an **Array** depending on what aggregation query that that was performed (see `Aggregate` input above). |
| <span className="ndl-data">Error</span>  | A textual description of the latest error, when the `Failure` signal was triggered as a result of a failed Query.                                                                                    |

| Signal                                      | Description                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | This signal is sent when a Query was successfully performed.                                                  |
| <span className="ndl-signal">Failure</span> | This signal is sent when a Query failed for some reason. The `Error` property will contain the error message. |
