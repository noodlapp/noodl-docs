---
title: Request
hide_title: true
---

# Request

This component is used to call Xano API endpoints.

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

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
