---
title: Setting up the Mapbox Module
hide_title: true
---

# Setting up the Mapbox Module

## What you will learn in this guide

This guide will show you how to include the Mapbox module in a project and set up an Mapbox API key to use for your application.

## Overview

We will go though the following steps:

- Install the Mapbox Module in a Noodl Project.
- Create an Access Token on the Mapbox account
- Create a minimal Mapbox App in Noodl

## Install the Mapbox Module

When in the project, open the "Module" tab in the Node Picker. Find the "Mapbox" module and click "Install".

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/setting-up/module-1.png)

</div>

After the module is imported, you should now be able to find the [Mapbox Map](library/modules/mapbox/nodes/v2/mapbox-map) node in the node picker. Right click in the node editor area to bring up the node picker. Look under "External libraries" to find the **Mapbox Map** node.

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/setting-up/nodepicker-1.png)

</div>

Add the node. Then put it as a child to your main App group. As you will see, you will immedieatly get a warning: _"No access token. Please specify one in the Project Settings and reload"_.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/no-token.png)

</div>

So to use the Mapbox Module you need an access token from Mapbox. You can read more about Access tokens [here](https://docs.mapbox.com/help/getting-started/access-tokens/) and also follow instructions on how to create one. Among other things you will have to set up an account on Mapbox unless you already have one.

## Entering the Mapbox Access Token

Once you got the token (which will look like a long password) you open up the "Project Settings" panel by clicking the cogwheel in the main panel to the left. Copy/Paste the token into the field called "Mapbox Access Token"

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/token-1.png)

</div>

Once you've added in the token, reload the viewer, and you should now have a Mapbox map showing in your App, something like below.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/setting-up/screen-1.png)

</div>

You can play a little with the map. Pan and zoom.
