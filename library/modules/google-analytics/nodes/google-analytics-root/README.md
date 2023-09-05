---
title: Google Analytics Root
hide_title: true
---

<##head##>

# Google Analytics Root

This node loads Google Analytics in your Noodl app. It _must_ be placed in your **Root Component** for the tracking to work properly. You can find your **Root Component** in the **Components** list in the sidebar, having a house icon beside it.

<div className="ndl-image-with-background l">

![](/library/modules/google-analytics/screenshot.png)

</div>

This node uses [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4) and requires a [Google Analytics Measurement ID](https://support.google.com/analytics/answer/9539598#find-G-ID).

<##head##>

## Inputs

| Data                                             | Description                                                                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Measurement ID</span> | The [Google Analytics Measurement ID](https://support.google.com/analytics/answer/9539598#find-G-ID) to send the data to. |
| <span className="ndl-data">Allow Tracking</span> | Sets if tracking should be allowed. For GDPR reasons this is disabled by default.                                         |

## Outputs

| Signal                                                | Description                                                                              |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Starting Tracking</span> | Sends a signal after the tracking code is activated, before it's initialised in the app. |
