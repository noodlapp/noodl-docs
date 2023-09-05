---
title: Supabase
hide_title: true
---

# Supabase

This prefab gives you a few components that allows you to connect to Supabase and manage user authentication.

> This prefab is built by [Guillaume Maison](https://twitter.com/gmaison) and [Rico Trevisan](https://twitter.com/RicoTrevisan). Please show them some love if you find this prefab useful.

<div className="ndl-image-with-background l">

![](/library/prefabs/supabase/thumb.png)

</div>

## Included components

### Base Components

- **[Supabase - Setup Client](components/setup-client)**: Sets up the Supabse SDK client to access your supabase instance. Must be placed in your projects home component.
- **[Supabase - Example Request](components/supabase-request-example)**: An example on how to fetch data from a table in Supabase.

### User Components

- **[Supabase – Sign Up](components/supabase-sign-up)**: Signs up a new user.
- **[Supabase – Log In](components/supabase-log-in)**: Logs in a user.
- **[Supabase – Log Out](components/supabase-log-out)**: Logs out a user.
- **[Supabase – Send Password Reset](components/supabase-send-password-reset)**: Sends a link to reset user password.
- **[Supabase – Send Magic Link](components/supabase-send-magic-link)**: Sends a login link without password.
- **[Supabase – Resend Confirmation](components/supabase-resend-confirmation)**: Resend a signup confirmation email when validating sign up by email
- **[Supabase – Fetch Current User Auth](components/supabase-fetch-current-user-auth)**: Retrieves the auth data of the currently logged in user and saves it to a global `currentUser` object.
- **[Supabase – Fetch Current User Profile Data](components/supabase-fetch-current-user-profile-data)**: Retrieves the non-auth user data of the currently logged in user and saves it to a global `currentUser` object.
- **[Supabase – Update Current User Auth](components/supabase-update-current-user-auth)**: Updates auth data for the currently logged in user, both in Supabase and the `currentUser` object.
- **[Supabase – Update Current User Profile Data](components/supabase-update-current-user-profile-data)**: Updates user data for the currently logged in user, both in Supabase and the `currentUser` object.

### Pages

You will also find a couple of pages that allow you to quickly get up and running with all user features.
Set the `Supabase Example App Root` as your home component for a quick start on all routing.

## Quickstart

First, drop a **Supabase – Setup Client** in your project home component and input your `Supabase URL` and `Supabase Anon Key` in its Property Panel. Then, open the **Projects Settings** sidebar and find the `Head Code` input. Add the following at the top:

```html
<script type="module">
  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.22.0';

  window.createClient = createClient;
</script>
```

Lastly, you need to connect the `Did Mount` output of your root Group node to the `Do` input of the `Supabase - Setup Client` like so:

<div className="ndl-image-with-background l">

![](/library/prefabs/supabase/setup.png)

</div>

This will set everything up and allow you to use all of the other Supabase components.

You can use an **[Object](/nodes/data/object/object-node)** node set to the id `currentUser` to get all the user data (if a user is logged in).

You can use the **[Supabase – Fetch Current User Auth](components/supabase-update-current-user-auth)** component to check if the user is logged in. If the user is already authenticated from a previous session, this session is retrieved, the user is considered logged in, and the component outputs `true` on its `Logged In` output and in the `currentUser` Noodl object.

Use the **[Supabase - Fetch Current User Profile Data](components/supabase-update-current-user-profile-data)** to trigger a data fetch and refresh the non-auth data in the `currentUser` object.
