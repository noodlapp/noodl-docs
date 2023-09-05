---
title: Fetch Current User Profile Data
hide_title: true
---

# Fetch Current User Auth

This component is used to send a request to Supabase and retrieve all profile data on the currently logged in user. After a success it updates the `profile` property on the Noodl object with the id `currentUser`.

<div className="ndl-image-with-background">

![](/library/prefabs/supabase/fetchdata.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Signals                                | Description                      |
| -------------------------------------- | -------------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the fetch request call. |

## Outputs

| Data                                    | Description                                          |
| --------------------------------------- | ---------------------------------------------------- |
| <span className="ndl-data">Error</span> | Outputs the the error message if the request failed. |

| Signals                                          | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| <span className="ndl-signal">Success</span>      | Sends a signal if the request is successful.             |
| <span className="ndl-signal">Failure</span>      | Sends a signal if the request has failed.                |
| <span className="ndl-signal">No User Data</span> | Sends a signal if there is no user data to be retrieved. |
