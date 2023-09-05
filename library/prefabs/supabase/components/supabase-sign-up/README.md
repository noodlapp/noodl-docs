---
title: Sign Up
hide_title: true
---

# Sign Up

This component is used to sign up a user into Supabase. Once email address and password are set, the sign up is triggered after a signal is sent to the `Do` input.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/sign-up.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Data                                       | Description                                 |
| ------------------------------------------ | ------------------------------------------- |
| <span className="ndl-data">Email</span>    | Sets the email used to sign up the user.    |
| <span className="ndl-data">Password</span> | Sets the password used to sign up the user. |

| Signals                                | Description               |
| -------------------------------------- | ------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the signup call. |

## Outputs

| Data                                           | Description                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------ |
| <span className="ndl-data">Data</span>         | The data that is sent back by the supabase client.                 |
| <span className="ndl-data">Error</span>        | The error sent back after a failed signup call to supabase.        |
| <span className="ndl-data">Is Connected</span> | `true`/`false` depending on if the user is connected after signup. |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
