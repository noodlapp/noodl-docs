---
title: Log In
hide_title: true
---

# Log In

This component is used to log in a user.

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/login.png)

</div>

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

## On success

When a user has successfully been logged in the **Log In** component will create a Noodl Object with the id `currentUser`. This object contains all the user data retrieved from Xanos `/auth/me` endpoint.

A successful signup will also trigger a `Xano User Logged In` event. You can hook into to this event anywhere in your app using a [Receive Event](/nodes/events/receive-event/) node.

## Keeping the user logged in

To keep the user logged in for longer periods of time you need to refresh the **authToken**. This can be done by placing the following nodes in the **home component**:

<div className="ndl-image-with-background l">

![](/library/prefabs/xano/authrefresh.png)

</div>

## Inputs

| Data                                       | Description                                  |
| ------------------------------------------ | -------------------------------------------- |
| <span className="ndl-data">Email</span>    | The email of the user you want to log in.    |
| <span className="ndl-data">Password</span> | The password of the user you want to log in. |

| Signals                                | Description                                            |
| -------------------------------------- | ------------------------------------------------------ |
| <span className="ndl-signal">Do</span> | Send a Signal to this input to send the login request. |

## Outputs

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
