---
hide_title: true
hide_table_of_contents: true
title: Cloud Function node
---

<##head##>

# Cloud Function

Cloud functions are logic components that run in the cloud and not on the client like other logic components. The **Cloud Function** node is how you initiate a call to a cloud function component. Learn more about how to use cloud functions in this [guide](/docs/guides/cloud-logic/introduction).

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-function/cloud-function-1.png)

</div>

You will first need to pick the cloud function that you want to call with this node.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-function/cloud-function-2.png)

</div>

After you have picked the cloud function, the **Cloud Function** node will receive the input parameters and output result parameters defined in the cloud function so you can hook them up to the logic of your application.

A cloud function can either return a **Success** or **Failure** response, this will result in the corresponding output signal on the **Cloud Function** node. You can use this to trigger different flows in your logic.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/cloud-function/cloud-function-3.png)

</div>

If a **Failure** signal is emitted you can also use the **Error** output that will contain the error message sent from the cloud function.

If a **Success** signal is sent the result parameters will be available as outputs on the **Cloud Function** node.

<##head##>

:::note

When using a Noodl-hosted Cloud Service, there is currently a timeout of 15 seconds.
When the time has passed without a response the request will be canceled and the Error will be `timeout`. 

This does not happen when running Cloud Functions locally where there is no timeout, same when running your own self-hosted Cloud Service.

:::

## Inputs

| Data                                                | Description                                                                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Function</span>     | <##input:functionName##>The cloud function component that this node will call.<##input##>                                                                       |

### Parameters
The **Cloud Function** node will receive all parameters specified in the [Request](/nodes/cloud-functions/request) node in the cloud function component as inputs. When the <span className="ndl-signal">Call</span> signal is received the values on the inputs will be sent to the cloud funciton.

| Signal                                   | Description                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Call</span> | <##input:call##>Send a signal on this input to issue the request to the cloud function.<##input##> |

## Outputs

| Data                                     | Description                                                                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Error</span> | <##output:error##>If the cloud function results in an error status, this output will contain the error message. <##output##> |

### Result
The **Cloud Function** node will receive all result parameters specified in any [Response](/nodes/cloud-functions/response) node in the cloud function component that is called. When the cloud function completes and retuns a **Sucess** status, any result parameters sent back will be available on these outputs.

| Signal                                      | Description                                                                                              |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>This is sent if the cloud function returns a **Success** status.<##output##> |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This is sent if the cloud function returns a **Failure** status.<##output##>                        |
