---
hide_title: true
hide_table_of_contents: true
title: Filter Record
---

<##head##>

# Filter Record

This node is used to filter an <span className="ndl-data">array</span> that is assumed to contain Records of a given class based on custom filter conditions.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/filter-records/filter-records-node.png)

</div>

You can specify both filter and sorting visually.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/filter-records/filter-records-visual.png)

</div>
<##head##>

## Inputs

| Data                                                      | Description                                                                                                                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span>                 | <##input:enabled##>If disabled the node will simply pass the input array through without change, if enabled the input array will be filtered and sorted.<##input##> |
| <span className="ndl-data">Class</span>                   | The **Class** of records that the input array is assumed to contain.                                                                                                |
| <span className="ndl-data">Use Limit</span>               | <##input:use limit##>Enabled or disable limiting of the input array to a specific number of maximum records.<##input##>                                             |
| <span className="ndl-data">Limit</span>                   | <##input:limit##>The number of maximum records to limit the output filtered array to contain.<##input##>                                                            |
| <span className="ndl-data">Skip</span>                    | <##input:skip##>The number of records in the beginning of the output filtered array to skip.<##input##>                                                             |
| <span className="ndl-data">Items</span>                   | <##input:items##>The input array of records that should be filtered by this node.<##input##>                                                                        |
| <span className="ndl-data">Filter Parameter Inputs</span> | <##input:fp-\*##>Each filter parameter get an input where a connection can be made to provide the value for the paramter.<##input##>                                |

| Signal                                     | Description                                                                                                                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Filter</span> | <##input:filter##>Send a signal on this input to perform the filtering, this will produce a new filtered array on the **Items** output. If this input does not have a connection, the input array will be filtered every time it is updated.<##input##> |

## Outputs

| Data                                              | Description                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Items</span>           | <##output:items##>This output will contain the filtered array of records.<##output##>                |
| <span className="ndl-data">Count</span>           | <##output:count##>The number of records in the filtered output array.<##output##>                    |
| <span className="ndl-data">First Record Id</span> | <##output:first record id##>The **Id** of the first record in the filtered output array.<##output##> |

| Signal                                       | Description                                                                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Filtered</span> | <##output:filtered##>A signal will be sent on this output when the input array have been successfully filtered.<##output##> |
