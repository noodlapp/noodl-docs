---
title: Log In
hide_title: true
---

# Log In

This component is used to log a user in. Once email address and password are set, the sign up is triggered after a signal is sent to the `Do` input.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/login.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## On success

When a user has successfully been logged in the **Log In** component will create a Noodl Object with the id `currentUser`. This object contains all the user data. You can use the **[Supabase - Fetch Current User Profile Data](/library/prefabs/supabase/components/supabase-update-current-user-profile-data)** to refresh all non-auth data for the user.

A successful login will also trigger a `Supabase User Logged In` event. You can hook into to this event anywhere in your app using a [Receive Event](/nodes/events/receive-event/) node.

## Inputs

| Data                                       | Description                                |
| ------------------------------------------ | ------------------------------------------ |
| <span className="ndl-data">Email</span>    | Sets the email used to log in the user.    |
| <span className="ndl-data">Password</span> | Sets the password used to log in the user. |

| Signals                                | Description              |
| -------------------------------------- | ------------------------ |
| <span className="ndl-signal">Do</span> | Triggers the login call. |

## Outputs

| Data                                    | Description                                                |
| --------------------------------------- | ---------------------------------------------------------- |
| <span className="ndl-data">Error</span> | The error sent back after a failed login call to Supabase. |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
