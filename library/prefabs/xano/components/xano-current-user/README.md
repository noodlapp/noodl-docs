---
title: Current User
hide_title: true
---

# Current User

This component is used to fetch information from the current logged in users `/auth/me` path in Xano.

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/currentuser.png)

</div>

On a request it checks if the user is still logged in by looking for a valid **authToken**. The **authToken** is automatically generated when the user is logged in.

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

## Inputs

| Signals                                   | Description                                       |
| ----------------------------------------- | ------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | Send a Signal to this input to retrieve the data. |

## Outputs

| Data                                        | Description                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| <span className="ndl-data">Logged In</span> | `true` if the user is logged in, `false` if not.                           |
| <span className="ndl-data">Xano ID</span>   | The users ID.                                                              |
| <span className="ndl-data">Email</span>     | The users email.                                                           |
| <span className="ndl-data">User Data</span> | All the data retrieved from the `/auth/me` endpoint of the logged in user. |

| Signals                                     | Description                                                                                                          |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                                                           |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, or if the **authToken** is expired, and logs an error message in the console. |
