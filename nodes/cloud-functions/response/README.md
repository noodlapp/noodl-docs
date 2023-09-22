---
hide_title: true
hide_table_of_contents: true
title: Response node
---

<##head##>

# Response

The **Response** node is used to complete a cloud function and return the result to the client. There can be many **Response** nodes in a cloud function and they can either return a **Success** or **Failure** result.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/response/response-1.png)

</div>

The response is sent when a signal is received on the **Send** input. You can specify if it's a successful or failed result in the properties using the **Status** property.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/response/response-2.png)

</div>

<##head##>

If the status is **Failure** you can provide an error message that will be returned to the calling [Cloud Function](/nodes/data/cloud-data/cloud-function) node.

If the status is **Success** you can provide a number of result parameters that will be returned to the calling client [Cloud Function](/nodes/data/cloud-data/cloud-function) as outputs.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/response/response-3.png)

</div>

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Status</span> | Specifies if this is a successful or failed response, **Success** or **Failure** that will be sent to the calling client when the **Send** signal is received. |
| <span className="ndl-data">Error Message</span> | If this **Response** node have a **Failure** status you can provide an error message using this property that will be sent back to the client and the calling **Cloud Function** node. |

### Parameters
You can add parameters using the properties of this node, if the **Status** is set to **Success**. Parameters will show up when using the [Cloud Function](/nodes/data/cloud-data/cloud-function) node as outputs. When the **Send** signal is received on a **Response** node it will send back the result parameters which will be emitted on the outputs of the cloud function node that made the call.

