---
title: Log In
hide_title: true
---

# Log In

This component is used to log a user out.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/logout.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## On success

When a user has successfuly been logged out the **Log Out** component will empty the Noodl Object with the id `currentUser`.

A successful log out will also trigger a `Supabase User Logged Out` event. You can hook into to this event anywhere in your app using a [Receive Event](/nodes/events/receive-event/) node.

## Inputs

| Signals                                | Description              |
| -------------------------------------- | ------------------------ |
| <span className="ndl-signal">Do</span> | Triggers the login call. |

## Outputs

| Data                                    | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| <span className="ndl-data">Error</span> | The error sent back after a failed logout call to supabase |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
