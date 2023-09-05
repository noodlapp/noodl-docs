---
title: Send Password Reset
hide_title: true
---

# Send Password Reset

This component is used to send a password reset email to the provided email.

<div className="ndl-image-with-background l">

![](/library/prefabs/supabase/send-password-reset.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Data                                    | Description                              |
| --------------------------------------- | ---------------------------------------- |
| <span className="ndl-data">Email</span> | The email to send the password reset to. |

| Signals                                | Description                       |
| -------------------------------------- | --------------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the password reset call. |

## Outputs

| Data                                    | Description                                                 |
| --------------------------------------- | ----------------------------------------------------------- |
| <span className="ndl-data">Data</span>  | The response data from a successful request.                |
| <span className="ndl-data">Error</span> | The error sent back after a failed logout call to Supabase. |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
