---
title: Google Sheets Module
hide_title: true
---
# Google Sheets Module

The Google Sheets Module makes it easy to read data from publich Google Sheets. Use it for example to use Google Sheets as a CMS system or a read-only data repository. There are three nodes included, [Query Sheet](/library/modules/gsheets/node-docs/query-sheet), [Query Sheet Aggregate](/library/modules/gsheets/node-docs/query-sheet-aggregate) and [Sheet Row](/library/modules/gsheets/node-docs/sheet-row).

<div className="ndl-image-with-background l">

![](/library/modules/gsheets/suatch-1.png)

</div>

The module will interpret a Google Sheet as a giant table meaning the first row encountered in the sheet will decide the names of the columns, and then each row will contains values for those columns in its cells. Empty rows and columns will be skipped.

?> Note that the Google Sheet need to be made publicly available for the module to be able to access it. Also, the module is read-only, i.e. you cannot write data to the Google Sheet.
