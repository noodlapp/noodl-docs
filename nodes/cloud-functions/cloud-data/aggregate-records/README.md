---
hide_title: true
hide_table_of_contents: true
title: Aggregate Records
---

<##head##>

# Aggregate Records

This node is used to compute an aggregate over properties of records in the cloud database. 

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/cloud-data/aggregate-records/aggregate-records.png)

</div>

You create and give a name to an aggregate.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/cloud-data/aggregate-records/props-1.png)

</div>

Then for each aggregate name you created you choose the property to aggregate over and the type of aggregate.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/cloud-data/aggregate-records/props-2.png)

</div>

<##head##>

You can also specify filters to limit the aggretate to a select set of recrods. This is done in the same way as with the [Query Records](/nodes/data/cloud-data/query-records) node, please see those reference docs for more details.

You can do aggregates over two types of properties **String** and **Number**, these are the available aggregates:

**String**, for string there is only one aggregate, `Distinct` this returns the unique values for the property in all records.

**Number**, for number you can use the following aggregates:
- `Min` This will return the minumum value for the property for all records.
- `Max` Return the maximum value for the property for all records.
- `Sum` Return the sum of the property for all records.
- `Avg` Return the avegage of the property for all records.

## Inputs

| Data                                                | Description                                                                                                                                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Class</span>             | Select the **Class** for the types of records this node should do aggregate over. When the **Class** is selected you can create filters and aggregates of the **Class**.                                                                                                 |
| <span className="ndl-data">Filter</span>            | This specifies the type of filter, you can choose from:<br/><br/>`Visual`: Specify your filter using the visual filter editor.<br/>`JavaScript`: Specify your filter using JavaScript (this is more flexible and you can create more dynamic queyries but it's also more complex) |
| <span className="ndl-data">Query Parameters</span>  | <##input:qp-\*##>The input for specifying the value of a query parameter.<##input##> Each paramteter used in your query will get an input where you can provide a value through a connection.<##input##>                                                                          |
| <span className="ndl-data">Aggregates</span>  | <##input:aggregates##>This a list of the aggregates you want to perform. You must provide the names of the outputs that will contain the aggregates here.<##input##>                                                                          |

### Aggregate property and operation

For each aggregate you create you also need to provide the property if should aggregate and the operation it should use.

| Data                                                | Description                                                                                                                                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Property</span>             | Select the property of the **Class** that this aggregate should use.                                                                                                 |
| <span className="ndl-data">Operation</span>            | Pick the operation that the aggregate should use. See above for which operations are available for which types. |


| Signal                                 | Description                                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal here to perform the aggregate.<##input##> |

## Outputs

| Data                                              | Description                                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span>           | <##output:error##>This output contains the error message incase something when wrong when executing the aggregate.<##output##>                                                                           |

| Signal                                      | Description                                                                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-signal">Success</span> | <##output:success##>A signal is sent here if the aggregate was successful and the result is ready.<##output##>                                             |
| <span className="ndl-signal">Failure</span> | <##output:failure##>A signal is sent here if something went wrong with the aggregate. You can find the error message via the **Error** output.<##output##> |

