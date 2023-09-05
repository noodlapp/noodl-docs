---
title: Interacting with the Mapbox Module
hide_title: true
---

# Interacting with the Mapbox Module

## What you will learn in this guide

This guide will teach you how to implement basic interactions with your Mapbox map using the Mapbox Module.

## Overview

If you haven't setup Mapbox, it is recommended to read [setting up Mapbox guide](/library/modules/mapbox/guides/setting-up) before continuing this guide.

We will go though the following steps:

- Getting the latitude and longitude of the position a user clicked on the map.
- Detecting when a user moves the map.

## Getting the position that the user clicked

If we start out with the same super simple app as in the previous guide ([Setting up](/library/modules/mapbox/guides/setting-up) guide) we can start adding some interactions to it.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/initial-state.png)

</div>

Let's first remove the "Hello World"-text. Instead we replace it with a panel. We will build it using a [Group](/nodes/basic-elements/group) node. So add a **Group** node at the bottom of the node hierarchy. Name it "Popup Panel" for readability.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/interacting/nodes-1.png)

</div>

We want it to float on top of the Mapbox Map so change it's **Position** to **Absolute**. Center it and dock it to the bottom using the **Layout** controls. Set a size of 300 pixels wide and 100 pixels high for now. Give it a bottom margin of 20 pixels to give it some space.

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/interacting/popup-panel-1.png)

</div>

Also make it white, with rounded corners of 10 pixels and a 2 pixel outline of a dark grey color. Also tick `Shadow Enabled` to make it a little nicer visually.

<div className="ndl-image-with-background s">

![](/library/modules/mapbox/guides/interacting/popup-panel-2.png)

</div>

Now you should have a panel floating on top of the map.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/screen-1.png)

</div>

We want to print out the geographical location in the panel, i.e. the latitude and longitude of the position the user clicks.

Add two text nodes in the panel. Adjust the padding (horizontally and vertically) of the "Popup Panel" to 10 pixels to give the text some space.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/state-2.png)

</div>

Then connect the two outputs `Longitude` and `Latitude` to the respective text.

_Make sure it's the one under "Mapped Clicked" Section_ since there are two other similarly named outputs that holds the current panning position of the map.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/connection-1.png)

</div>

Now try clicking around in the map. You should see the two texts updating whenever you click.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/screen-2.png)

</div>

## Tracking Map Movement

Now let's add some behavior to the panel. We want it to appear from the bottom when the user clicks on the map. Then, when the user starts panning or zooming in the map. To do this we are going to use the `Click` and `Map Moved` output signals.

First add a [States](/nodes/utilities/logic/states) node that will hold the current state of the panel. Add the states "Off Screen" and "On Screen". Create a value to control in the state, lets call it "Y Position". This is the value that will control the Y position of the panel. It will be 120 when the panel is "Off Screen" (i.e. it will be below the screen). Then it will be 0 when the panel is "On Screen", i.e. it will be back at the bottom of the screen.

<div className="ndl-image-with-background">

![](/library/modules/mapbox/guides/interacting/states-panel-1.png)

</div>

Finally hook up the outputs `Click` and `Map Moved` signal to change the state between "On Screen" and "Off Screen". Feed back the output "Y Position" to the **Pos Y** of the panel.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/guides/interacting/nodes-2.png)

</div>

Now you should be able to move around and click on the map, showing and hiding the panel printing the longitude and latitude.
