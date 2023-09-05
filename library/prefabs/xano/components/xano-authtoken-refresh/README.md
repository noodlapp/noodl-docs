---
title: authToken Refresh
hide_title: true
---

# authToken Refresh

This component is used to automatically refresh the user **authToken**.

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/auth.png)

</div>

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

## Inputs

| Data                                            | Description                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">TTL</span>           | Sets the duration before refreshing the authToken. It is commonly set to half of the token duration. |
| <span className="ndl-data">Endpoint Path</span> | Sets the API endpoint path (used with the `API Group Base URL`) to refresh the user authToken.       |

| Signals                                   | Description                  |
| ----------------------------------------- | ---------------------------- |
| <span className="ndl-signal">Start</span> | Starts the refresh sequence. |
| <span className="ndl-signal">Stop</span>  | Stops the refresh sequence.  |

## Outputs

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
