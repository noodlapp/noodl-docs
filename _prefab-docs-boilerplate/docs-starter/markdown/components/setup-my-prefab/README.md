---
title: My Prefab - Setup
hide_title: true
---

# My Prefab - Setup

This component is used to configure My Prefab, enabling your app to establish connections and query your endpoints.

This prefab will not work unless you place one instance of the **My Prefab - Setup** component in your projects Home Component and set the `API Key` and `Datasource` values:

<div className="ndl-image-with-background xl">

![](/library/prefabs/my-prefab/setup.png)

</div>

Below is how **Inputs** and **Outputs** should be documented. Please note the CSS classes attached to each key in the table, as well as the tables titles.

## Inputs

| Data                                         | Description                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| <span className="ndl-data">API Key</span>    | The base Request URL used to call all the endpoints of the API Groups.      |
| <span className="ndl-data">Datasource</span> | The data environment to be used in your Xano workspace. Defaults to `live`. |

## Outputs

| Data                                     | Description                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------- |
| <span className="ndl-data">Status</span> | The status of the prefab initialization. Can be `unloaded`, `loading` or `loaded`. |

| Signals                                     | Description                                                                                        |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Success</span> | Sends a signal when the Xano Client initilized successfully.                                       |
| <span className="ndl-signal">Failure</span> | Sends a signal when the Xano Client failed initializing. Outputs the error message in the console. |
