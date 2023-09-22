---
hide_title: true
hide_table_of_contents: true
title: Config
---

<##head##>

# Config

This node is used to fetch a configuration parameter from the cloud services. Can be used to store any sort of parameters like API Keys, email templates etc. The node works much like the [Variable](/nodes/data/variable/variable-node) node.

<div className="ndl-image-with-background xl">

![](/nodes/data/cloud-data/config/config-node.png)

</div>

You pick a **Parameter** in the properties of the node. First you must specify the **Parameter** in the **Config** section of the cloud services dashboard. Check out [this guide](/docs/guides/cloud-data/creating-a-backend) for more details on the dashboard.

<div className="ndl-image-with-background xl">

![](/nodes/data/cloud-data/config/config-dashboard.png)

</div>

<##head##>

When creating a parameter you can specify if it requires the **Master Key** or not. Requiring the master key means that you can only access these parameters in cloud functions, which is important for config parameters that needs to be kept secure.

Once you have create your parameters in the cloud services dashboard you can pick which parameter this node should read with the drop down.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/config/config-props.png)

</div>

## Local Override

Config parameters are especially useful when you need to have values that vary depending if you are working in your **testing** or **production** environment (which cloud service you are currently using). You can also specify a local override for a config parameter so that **this particular node** will return that value when your are working locally with the project. That is, when the working in the editor or when viewing the project in an external browser using the ```localhost``` domain.

<div className="ndl-image-with-background xl">

![](/nodes/data/cloud-data/config/config-local.png)

</div>

For the node above we want a special config parameter for when running locally so we can test without having to deploy every time, so we add a **Local Override** in the parameters of the config node.

<div className="ndl-image-with-background l">

![](/nodes/data/cloud-data/config/config-local-props.png)

</div>

## Inputs

| Data                                                | Description                                                                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Parameter</span>     | <##input:configKey##>The config parameter to use for this node.<##input##>                                                                       |

## Local Override

| Data                                                | Description                                                                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Enable</span>     | <##input:useDevValue##>Checking this will provide a special value for this node when running in the editor or from ```localhost```<##input##>                                                                       |
| <span className="ndl-data">Value</span>     | <##input:devValue##>The value to return from this node when running in the editor or on ```localhost```<##input##>                                                                       |


## Outputs

| Data                                     | Description                                                                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Value</span> | <##output:value##>The value for this config parameter for the current active cloud service, or the local override. <##output##> |


