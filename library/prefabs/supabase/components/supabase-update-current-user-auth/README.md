---
title: Update Current User Auth
hide_title: true
---

# Update Current User Auth

This component is used to to update the current logged in users email and password.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/updateauth.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Signals                                | Description                      |
| -------------------------------------- | -------------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the fetch request call. |

| Data                                       | Description                         |
| ------------------------------------------ | ----------------------------------- |
| <span className="ndl-data">Email</span>    | The email you want to update to.    |
| <span className="ndl-data">Password</span> | The password you want to update to. |

## Outputs

| Data                                    | Description                                                    |
| --------------------------------------- | -------------------------------------------------------------- |
| <span className="ndl-data">Data</span>  | The response sent back after a successful request to Supabase. |
| <span className="ndl-data">Error</span> | The error sent back after a failed request to Supabase.        |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
