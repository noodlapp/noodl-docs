---
title: Sheet Row
hide_title: true
---

<##head##>

# Sheet Row

This node is used do simplify handling of results from a [Query Sheet](/library/modules/gsheets/node-docs/sheet-row) node. It's typically used in a combination with a [Repeater Item](/nodes/ui-controls/repeater-item) to easily connect any columns available in a row in a Google Sheets sheet.

By setting the `Row Id` of the **Sheet Row**, and selecting the **Sheet** (if you use more than one) your **Sheet Row** will automatically show all available column values.

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/sheet-row/sheet-row-1.png)

</div>

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/node-docs/sheet-row/sheet-row-2.png)

</div>

?> Note that the Google Sheet need to be made public for Noodl to be able to access it.

<##head##>

## Inputs

| Data                                     | Description                                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Sheet</span>  | The name of the Sheet in which the row lies. This input only exists if you are querying multiple sheets, otherwise it will automatically select the sheet you are querying.                                                           |
| <span className="ndl-data">Row Id</span> | The id of the Sheet Row. The Id is determined by the [Query Sheet](/library/modules/gsheets/node-docs/query-sheet) node accessing the Sheet, where you can decide how the Id is generated throguh the **Use Column For Id** property. |

| Signal                                    | Description                                                                                                                                                               |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | Explicitly tells the **Sheet Row** to fetch data from the Google Sheet. If this signal is unconnected it will fetch automatically when the **Sheet Row** node is created. |

## Outputs

| Data                                            | Description                                                                                     |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Column Values</span> | Each column in the row will become and output with the same name holding the value of the cell. |

| Signal                                      | Description                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetched</span> | This signal is sent when new data have been fetched from the Google Sheet to the **Sheet Row**. |
