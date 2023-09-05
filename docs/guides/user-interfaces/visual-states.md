---
title: Visual States
hide_title: true
---

# Working with Visual States

## What you will learn in this guide

This guide will teach you how to style **Visual nodes** differently based on user interaction.

## Overview

We will go through the following steps in this guide:

-   Create a button
-   Style its `neutral` state
-   Style it differently in its `hover` state

There is also a video walking through the guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ATyqeK_deu4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Let's go!

When working with Visual nodes we often find ourselves in situations where we want to style the node differently based on the user interaction. We might want to have a different background color when hovering a button, or indicating that a checkbox has been checked. This is done using **Visual States** in the nodes settings in the **Property Panel**.

Let’s create a button in our node tree, and give it a quick styling.

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/visual-states/node-created.png)

</div>

Our brand guidelines tell us that all buttons need to be the Dark color and that they shouldn't have any rounded corners.

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/visual-states/wrong-hover.gif)

</div>

Ok, so, it looks good now, but when I sent it to my designer friend they told me that while the button looked good in the neutral state, it was all wrong when hovered. The button is supposed to be the Primary Light color, and the text should be Dark. Let’s fix that by modifying the Hover state.

With the Button node still selected, let’s move over to the Visual State selector and click the Hover option.

<div className="ndl-image-with-background">

![](/docs/guides/user-interfaces/visual-states/states.png)

</div>

We will see the Property Panel shift around a bit. Some properties just don't make any sense to change in an interaction state, so Noodl will hide those properties for us.

Let’s scroll down to the properties for Label and Background Color and update them.

<div className="ndl-image-with-background l">

![](/docs/guides/user-interfaces/visual-states/update-states.png)

</div>

And voila - we are now following the brand guidelines.

<div className="ndl-image-with-background s">

![](/docs/guides/user-interfaces/visual-states/right-hover.gif)

</div>
