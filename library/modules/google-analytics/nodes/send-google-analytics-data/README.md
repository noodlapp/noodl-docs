---
title: Send Google Analytics Data
hide_title: true
---

<##head##>

# Send Google Analytics Data

This node is used to send custom data to Google Analytics. It works similarily to the [gtag](https://support.google.com/analytics/answer/11147304) function provided by Google.

<div className="ndl-image-with-background l">

![](/library/modules/google-analytics/screenshot.png)

</div>

<##head##>

## Inputs

| Data                                                 | Description                                                                                                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Gtag Tracking Data</span> | The data that should be sent to Google Analytics. <br/><br/>For the code `gtag("event", "search", {"term": "Noodl"})` you would send `"event", "search", {"term": "Noodl"}` to this input. |

| Signal                                 | Description                                                        |
| -------------------------------------- | ------------------------------------------------------------------ |
| <span className="ndl-signal">Do</span> | Send a signal to this input to track the data in Google Analytics. |

## Outputs

| Signal                                        | Description                                                                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Data Sent</span> | Sends a signal when the data has been sent to Google Analytics. Useful for clearing user inputs after submission. |
