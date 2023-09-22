---
hide_title: true
hide_table_of_contents: true
title: Sign Up node
---

<##head##>

# Sign Up

This node is used to sign up new users in the Noodl Cloud Service.

<div className="ndl-image-with-background l">

![](/nodes/data/user/sign-up/sign-up_visual.png)

</div>

The <span className="ndl-node">Sign Up</span> node is the easiest way to handle users in a Noodl web app. Once a user is created with this node, they can log in through the <span className="ndl-node">Log In</span> node and you can access user information via the <span className="ndl-node">User</span> node.

<div className="ndl-image-with-background l">

![](/nodes/data/user/sign-up/sign-up_node.png)

</div>

<##head##>

## Inputs

| Data                                                     | Description                                                                                                                                                                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Username</span>               | <##input:username##>This is the username of the new user that is going to sign up. It is required that this input has a value and it must be unique, or the sign up will fail.<##input##>                                                                            |
| <span className="ndl-data">Password</span>               | <##input:password##>This input should contain the password for the new user.<##input##>                                                                                                                                                                              |
| <span className="ndl-data">Email</span>                  | <##input:email##>Optionally the new user can be given assigned an email.<##input##>                                                                                                                                                                                  |
| <span className="ndl-data">Your custom properties</span> | <##input:prop-\*##>A property of the **User** class. You can add additional properties to the **User** class in the Noodl Cloud Services dashboard. <##input##> These will show up as inputs on the **Sign Up** node to optionally bhe given a value during sign up. |

| Signal                                 | Description                                                                                                                                          |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Send a signal to this action to trigger the sign up. Once completed the **Success** or **Failure** event will be triggered.<##input##> |

## Outputs

| Signal                                      | Description                                                                                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | <##output:success##>This action will be triggered if the sign up was succesful. The user is now logged in and information about the user can be accessed via the **User** node.<##output##> |
| <span className="ndl-signal">Failure</span> | <##output:failure##>This action will be triggered if something went wrong while trying to sign up the user. The error message can be found in the **Error** output.<##output##>             |

| Data                                    | Description                                                                                     |
| --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Error</span> | <##output:error##>This output will contain the error message if the sign up failed.<##output##> |
