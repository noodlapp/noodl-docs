---
title: Sign Up
hide_title: true
---

# Sign Up

This component is used create a new user in Xano.

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/signup.png)

</div>

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

## On success

When a new user has successfully been registered the **Sign Up** component will create a Noodl Object with the id `currentUser`. This object contains all the user data retrieved from Xanos `/auth/me` endpoint.

A successful signup will also trigger a `Xano User Logged In` event. You can hook into to this event anywhere in your app using a [Receive Event](/nodes/events/receive-event/) node.

## Inputs

| Data                                       | Description                                   |
| ------------------------------------------ | --------------------------------------------- |
| <span className="ndl-data">Email</span>    | The email of the user you want to sign up.    |
| <span className="ndl-data">Password</span> | The password of the user you want to sign up. |

| Signals                                | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | Send a Signal to this input to send the signup request. |

## Outputs

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
