---
title: Setup XanoClient
hide_title: true
---

# Setup XanoClient

This component is used to configure the Xano Client, enabling your app to establish connections and query your endpoints.

This prefab will not work unless you place one instance of the Setup Xano Client component in your projects Home Component and set the `API Group Base URL` and `Datasource` values:

<div className="ndl-image-with-background xl">

![](/library/prefabs/xano/setupxanoclient.png)

</div>

The `API Group Base URL` can be found here in Xano:

<div className="ndl-image-with-background">

![](/library/prefabs/xano/xanobaseurl.png)

</div>

## Inputs

| Data                                                 | Description                                                                      |
| ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span className="ndl-data">API Group Base URL</span> | The base Request URL used to call all the endpoints of the API Groups.           |
| <span className="ndl-data">Datasource</span>         | The data environment to be used in your Xano workspace. Defaults to `live`.      |
| <span className="ndl-data">Auth Login Path</span>    | The path to the login endpoint. Defaults to `/auth/login`.                       |
| <span className="ndl-data">Auth Signup Path</span>   | The path to the signup endpoint. Defaults to `/auth/signup`.                     |
| <span className="ndl-data">Auth Me Path</span>       | The path to the endpoint containing the user information. Defaults to `/auth/me` |

After the Xano Client has been set up you can find all the input values in the following Noodl variables:

- `Noodl.Variables.xanoApiGroupBaseUrl`
- `Noodl.Variables.xanoDatasource`
- `Noodl.Variables.xanoAuthSignupPath`
- `Noodl.Variables.xanoAuthLoginPath`
- `Noodl.Variables.xanoAuthMePath`

## Outputs

| Signals                                     | Description                                                                                        |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the Xano Client initilized successfully.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when the Xano Client failed initializing. Outputs the error message in the console. |
