---
title: Setup Client
hide_title: true
---

# Setup Client

This component is used to initialize Supabase Client and set it up to query your Supabase backend.

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/setup-node.png)

</div>

> Please note that you need to place one instance of this component in your project home component, set the default values of the `Supabase URL` and `Supabase Anon Key`, and connect the the `Did Mount` output of your root Group node to the `Do` input like in the image above.

## Values from Supabase

You can find the required URL and Anon Key by logging into your Supabase instance, navigating to `Settings -> API`, and look for the Project URL and Project API Keys sections:

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/keys.png)

</div>

## Setup

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

## Global Variables

The Supabase prefab sets up a couple of global Noodl variables for you to work with:

### Supabase_userProfileTableName

This variable is a string and must be set to the name of the table containing the `user_profile` data in your Supabase instance. Its primary key must be named `id` and be of the same type as `auth.users.id`.

### currentUser

This variable contains all the data for the currently logged in user. It contains 4 fields:

- `currentUser.loggedIn`: a boolean containing the current logged in state
- `currentUser.auth`: an object with all the authentication data for current User
- `currentUser.session`: an object with all the session data for current User
- `currentUser.profile`: an object with all the data coming from the user profile

## Inputs

| Data                                                | Description                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| <span className="ndl-data">Supabase URL</span>      | Found in your `Supabase Instance -> Settings -> API -> Project URL section`.      |
| <span className="ndl-data">Supabase Anon Key</span> | Found in your `Supabase Instance -> Settings -> API -> Project API Keys section`. |

| Signals                                | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| <span className="ndl-signal">Do</span> | Starts the initialization of Supabase Client. |

## Outputs

| Signals                                     | Description                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the Supabase client initialization succeeded.                                   |
| <span className="ndl-signal">Failure</span> | Sends a signal when the Supabase client initialization failed with an error message in the console. |
