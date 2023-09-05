---
hide_title: true
hide_table_of_contents: true
title: User
---

<##head##>

# User

This node provides information about the current user session, if the web app has a logged in user.

<div className="ndl-image-with-background l">

![](/nodes/data/user/user/user_node.png)

</div>

The <span className="ndl-node">User</span> node only works if the user is created in the project’s Noodl Cloud Service, and is logged in via the <span className="ndl-node">Log In</span> node.

<div className="ndl-image-with-background l">

![](/nodes/data/user/log-in/login_node.png)

</div>

<##head##>

## Inputs

| Signal                                    | Description                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetch</span> | <##input:fetch##>Send a signal to this input to fetch the user properties for the current logged in user from the Noodl Cloud Services. There must be a valid user session for this to work.<##input##> |

## Outputs

| Data                                                     | Description                                                                                                                                                                               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Id</span>                     | <##output:id##>The **Id** of the User record for the current logged in user.<##output##>                                                                                                  |
| <span className="ndl-data">Username</span>               | <##output:username##>The **Username** of the current logged in user.<##output##>                                                                                                          |
| <span className="ndl-data">Email</span>                  | <##output:email##>The **Email** of the current logged in user, if the user has an email stored.<##output##>                                                                               |
| <span className="ndl-data">Authenticated</span>          | <##output:authenticated##>This output will be true if a valid user session exists in the browser, i.e. there is a logged in user.<##output##>                                             |
| <span className="ndl-data">Error</span>                  | <##output:error##>If a **Fetch** action failed to retrieve the user information from the Noodl Cloud Services this output will contain the error message.<##output##>                     |
| <span className="ndl-data">Your custom properties</span> | <##output:prop-\*##>The value of extra properties of the **User** class specified in the Noodl Cloud Services.<##output##> The node will contain the latest value of all user properties. |

| Signal                                             | Description                                                                                                                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Fetched</span>        | <##output:fetched##>This signal is triggered after a **Fetch** has been successfully performed. That is the **Fetch** action is triggered by a signal and the user data is return from the Noodl Cloud Services.<##output##>          |
| <span className="ndl-signal">Changed</span>        | <##output:changed##>This signal is triggered when the User is changed locally by a **Set User Properties** node or a **Fetch** action of a **User** node.<##output##>                                                                 |
| <span className="ndl-signal">Failure</span>        | <##output:failure##>This signal is triggered when a **Fetch** action failed to retrieve the latest user data from the Noodl Cloud Services. This could be due to an invalid session.<##output##>                                      |
| <span className="ndl-signal">Logged In</span>      | <##output:logged in##>This signal is triggered when a user has been successfully logged in.<##output##>                                                                                                                               |
| <span className="ndl-signal">Logged Out</span>     | <##output:logged out##>This signal is triggered when a user has been successfully logged out.<##output##>                                                                                                                             |
| <span className="ndl-signal">Session Lost</span>   | <##output:session lost##>This signal is triggered when the current user session becomes invalid, e.g. if it has timed out.<##output##>                                                                                                |
| <span className="ndl-signal">Changed events</span> | <##output:changed-\*##>This signal will be triggered when the property is changed using the **Set User Property** node or when the latest user data is retrieved from the Noodl Cloud Services with the **Fetch** action.<##output##> |
