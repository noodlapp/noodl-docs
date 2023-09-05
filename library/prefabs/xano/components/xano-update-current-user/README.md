---
title: Update Current User
hide_title: true
---

# Update Current User

This component is used to update information in the current logged in users `/auth/me` path in Xano.

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/updatecurrentuser.png)

</div>

> Please note that [Xano Client](/library/prefabs/xano/components/setup-xanoclient/) needs to be set up in your app before you can properly use this component.

## Setting up endpoint

Xano does not create this endpoint by default for the user table. You have to create it manually, with a POST verb:

<div className="ndl-image-with-background">

![](/library/prefabs/xano/postverb.png)

</div>

## On success

When the data has successfully been updated the **Update Current User** component will also update the Noodl Object with the id `currentUser`.

A successful update will also trigger a `Xano currentUser Updated` event. You can hook into to this event anywhere in your app using a [Receive Event](/nodes/events/receive-event/) node.

## Inputs

| Data                                   | Description                  |
| -------------------------------------- | ---------------------------- |
| <span className="ndl-data">Data</span> | The data you want to update. |

| Signals                                | Description                                     |
| -------------------------------------- | ----------------------------------------------- |
| <span className="ndl-signal">Do</span> | Send a Signal to this input to update the data. |

## Outputs

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
