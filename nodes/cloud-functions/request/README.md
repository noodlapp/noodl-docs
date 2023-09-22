---
hide_title: true
hide_table_of_contents: true
title: Request
---

<##head##>

# Request

The **Request** node is the starting point for **Cloud Functions**, it is where the logic flow is initiated when the function is called from the client. Each cloud function component can only have one **Request** node.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/request/request.png)

</div>

It's also where any input parameters to the **Cloud Function** is provided. To learn more about cloud functions take a look at the [guide](/docs/guides/cloud-logic/introduction).

You specify what parameters the cloud function accepts in the properties of the **Request** node. Here you can also specify if the user must be logged in on the client to call this function.

<div className="ndl-image-with-background l">

![](/nodes/cloud-functions/request/request-2.png)

</div>

<##head##>

By default the user must be logged in on the client, and if thats not the case the cloud function call will automatically fail with an error indication an invalid session.

However, if you check the **Allow Unauthenticated** property the function can be called without a valid user session on the client.

<div className="ndl-image-with-background xl">

![](/nodes/cloud-functions/request/request-3.png)

</div>

If the cloud function accepts unauthenticated requests, you can tell if the call was authenticated (there was a valid user session on the client) with the two outputs **Authenticated** and **User Id**. This can be used to trigger two different flows.

## Inputs

| Data                                            | Description                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Allow Unauthenticated</span> | Specifies if a valid user session (the user is logged in) is required on the client for calling this function. |

### Parameters
You can add parameters using the properties of this node. Parameters will show up when using the [Cloud Function](/nodes/data/cloud-data/cloud-function) node to call a cloud function from the client.

## Outputs

| Data                                            | Description                                                                                                                                                                                                                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Authenticated</span> | This output will be **true** if the client calling this cloud function had a valid user session, i.e. the user was logged in. |
| <span className="ndl-data">User Id</span> | If the user was logged in when calling this function this output will be the **Id** of the user record. |

| Signal                                      | Description                                                                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Received</span> | This signal is the starting point for the cloud function logic flow. The first actions you want performed in the cloud function should be connected to this input. |


