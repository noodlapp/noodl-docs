---
title: Xano
hide_title: true
---

# Xano

This prefab gives you a few components that allows you to connect to Xano and manage user authentication.

> This prefab is built by [Guillaume Maison](https://twitter.com/gmaison). Please show him some love if you find this prefab useful.

<div className="ndl-image-with-background l">

![](/library/prefabs/xano/xano-thumb.png)

</div>

## Included components

### Base Components

- **[Xano - Setup XanoClient](components/setup-xanoclient)**: Sets up the Xano SDK client to access your instance and workspace. Must be placed in your projects home component.
- **[Xano - Request](components/xano-request)**: Does an API Call to a Xano Endpoint and returns the result.

### User Components

- **[Xano – Sign Up](components/xano-sign-up)**: Signs up a new user.
- **[Xano – Log In](components/xano-log-in)**: Logs in a user.
- **[Xano – Log Out](components/xano-log-out)**: Logs out a user.
- **[Xano – Current User](components/xano-current-user)**: Gets the user data of the currently logged in user and saves it to a global `currentUser` object.
- **[Xano – Update Current User](components/xano-update-current-user)**: Updates user data for the currently logged in user, both in Xano and the `currentUser` object.
- **[Xano – authToken – Refresh](components/xano-authtoken-refresh)**: Triggers a refresh of the auth token. Mostly for internal use inside of the Xano prefab, but exposed for advanced users.

## Quickstart

First, drop a **Xano – Setup XanoClient** in your project home component. Then set the `API Group Base URL` and the `Datasource`. Finally, open the Project Settings sidebar, find the **Head Code** input and paste the following at the top:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@xano/js-sdk@latest/dist/xano.min.js"
></script>
```

To automatically refresh the users **authToken** and keep them logged in for longer periods of time, add this to your project home component:

<div className="ndl-image-with-background l">

![](/library/prefabs/xano/authrefresh.png)

</div>
