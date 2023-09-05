---
title: Fetch Current User Auth
hide_title: true
---

# Fetch Current User Auth

This component is used to send a request to Supabase and retrieve all authorisation data on the currently logged in user. After a success it updates the `auth`, `session` and `loggedIn` properties on the Noodl object with the id `currentUser`.

<div className="ndl-image-with-background">

![](/library/prefabs/supabase/fetchauth.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Signals                                | Description                      |
| -------------------------------------- | -------------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the fetch request call. |

## Outputs

| Data                                        | Description                                         |
| ------------------------------------------- | --------------------------------------------------- |
| <span className="ndl-data">Logged In</span> | A boolean that holds the users current login state. |

| Signals                                  | Description                                   |
| ---------------------------------------- | --------------------------------------------- |
| <span className="ndl-signal">Done</span> | Sends a signal when the request has finished. |
