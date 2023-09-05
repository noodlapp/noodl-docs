---
title: Web Camera
hide_title: true
---
# Web Camera

Adding this module will give you access to the Web Camera node.

## Usage example

The **Web Camera** node gets the video stream of a target device’s camera (mobile camera or computer web camera). The **Web Camera** is used together with the **Video** node to display the camera stream. See the image below for how to hook it up.

![](/library/modules/webcamera/webcamera-node.png)

It will work inside of Noodl without problems, but to make it work on a phone, or on a website, the project needs to be hosted on a secure server (https). If you use the Noodl Cloud Deploy functionality your project will be hosted on a secure server so this is a great way to test the Web Camera on a phone.

Note that iOS sometimes can be tricky, but try setting the Video node to mute and autoplay to get the Web Camera stream.
