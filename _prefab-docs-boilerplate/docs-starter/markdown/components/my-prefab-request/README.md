---
title: My Prefab - Request
hide_title: true
---

# My Prefab - Request

This component is used to call My Prefab endpoints.

> Please note that [My Prefab - Setup](/library/prefabs/my-prefab/components/setup-my-prefab/) needs to be set up in your app before you can properly use this component.

## Extracting the data

The simplest way to extract the data from the response is by using an [Expression](/nodes/math/expression/) node, and accessing the body from the response:

<div className="ndl-image-with-background l">

![](/library/prefabs/my-prefab/request.png)

</div>

For more advanced extraction (and parsing) you can use a [Function](/nodes/javascript/function) node.

## Inputs

| Data                                           | Description                                                                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Endpoint</span>     | The path of the endpoint to be called within the API Group, like `/auth/signup` or `/auth/login`.         |
| <span className="ndl-data">Request Type</span> | The type of request you want send. Follows the HTTP standards `GET`, `POST`, `PUT`, `PATCH` and `DELETE`. |
| <span className="ndl-data">Data</span>         | A JSON formatted payload that will be sent as Request Body.                                               |

| Signals                                | Description                                        |
| -------------------------------------- | -------------------------------------------------- |
| <span className="ndl-signal">Do</span> | Sends a Signal to this input to start the request. |

## Outputs

| Data                                       | Description                                   |
| ------------------------------------------ | --------------------------------------------- |
| <span className="ndl-data">Response</span> | The JSON formatted response from the request. |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
