---
title: Resend Confirmation
hide_title: true
---

# Resend Confirmation

This component is used to resend a signup confirmation email if the initial email was not received or expired.

<div className="ndl-image-with-background l">

![](/library/prefabs/supabase/resendconfirmation.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly use this component.

## Inputs

| Data                                    | Description                                  |
| --------------------------------------- | -------------------------------------------- |
| <span className="ndl-data">Email</span> | The email to send the confirmation email to. |

| Signals                                | Description                          |
| -------------------------------------- | ------------------------------------ |
| <span className="ndl-signal">Do</span> | Triggers the send confirmation call. |

## Outputs

| Signals                                     | Description                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the request succeeded.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when an error occurred, and logs an error message in the console. |
