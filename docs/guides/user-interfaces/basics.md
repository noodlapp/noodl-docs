---
title: Building User Interfaces Basics
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Building User Interfaces Basics

## What you will learn in this guide

In this guide you will learn how to place and group components in the visual canvas.

## Adding UI elements
To add UI controls and other UI elements, such as Texts, to the currently selected visual component you click the **[+]** icon at the top of the visual canvas. This brings up the **Node Picker**, here you can find yourself to the **UI Elements** section. Click the element you want to add and it is added to the currently selected component.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/add-ui-control.mp4")}/>
</div>

## Editing properties
To edit the properties of a UI element, you click the element in the visual canvas (or more commonly in the node graph editor) which will bring up the properties panel. Here you can edit all properties of the UI element.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/edit-properties.mp4")}/>
</div>

## The visual heirarchy
As you add UI elements to your component you will see the visual heirarchy being built in the node graph editor. All UI elements are depicted as blue nodes. Here are some nifty things to know about the visual hierarchy in the node editor.

- All components must have a **single root** UI Element, most ofthen this is a **Group** node.

- You can hover the UI elements in the node graph editor to reveal them in the visual canvas.

- You can manipulate the heirarchy much like you would a layer panel in other design tools.

- You can bring up the **Node picker** by **right clicking** in the node graph editor. If you want the newly created UI element to be placed as a child to another UI element simply right click the parent element to bring up the **Node Picker**.

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/ui-heirarchy.mp4")}/>
</div>

## Grouping and Layouts
Now that you know how to place new components it's time to learn another important concept, grouping. This is how you group UI elements together and control the layout of the elements under a group. Use the **Node Picker** to create a new group, place it where you want it in the heirarchy, select, drag and drop the UI elements that you want under the group.

The **Group** node gives you a bunch of options for layouting user interfaces, learn more about the details of layouting and the group node in this [guide](/docs/guides/user-interfaces/layout)

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/user-interfaces/basics/grouping.mp4")}/>
</div>