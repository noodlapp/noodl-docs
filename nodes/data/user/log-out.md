---
hide_title: true
hide_table_of_contents: true
title: Log Out
---

<##head##>

# Log Out

This node is used to log out a user from the current session. That means that the <span className="ndl-data">User</span> node will no longer be able to access user data and that it will trigger the <span className="ndl-signal">Logged Out</span> event as well as the <span className="ndl-data">Authenticated</span> output will be false.

<div className="ndl-image-with-background l">

![](/nodes/data/user/log-out/logout.png)

</div>

<##head##>

## Inputs

| Signal                                 | Description                                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to logout the user. The user session will be removed from the browser.<##input##> |

## Outputs

| Signal                                      | Description                                                                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>This event will be triggered if the logout was succesful.<##output##>                                                                                     |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This event will be triggered if something went wrong while trying to logout the user. The error message can be found in the **Error** output.<##output##> |

| Data                                    | Description                                                                                     |
| --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the log out failed.<##output##> |
