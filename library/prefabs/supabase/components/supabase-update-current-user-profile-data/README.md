---
title: Update Current User Data
hide_title: true
---

# Update Current User Data

This component is used to to update the current logged in users profile data.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/updateprofile.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Signals                                | Description                      |
| -------------------------------------- | -------------------------------- |
| <span className="ndl-signal">Do</span> | Triggers the fetch request call. |

| Data                                   | Description                                         |
| -------------------------------------- | --------------------------------------------------- |
| <span className="ndl-data">Data</span> | A JS object containing the data you want to update. |

## Outputs

| Data                                    | Description                                             |
| --------------------------------------- | ------------------------------------------------------- |
| <span className="ndl-data">Error</span> | The error sent back after a failed request to Supabase. |

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
