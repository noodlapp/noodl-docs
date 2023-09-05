---
title: Shake Detector
hide_title: true
---

# Shake Detector

This is an example of how to use the [Script](/nodes/javascript/script) node to implement a "Shake detector".

<div className="ndl-image-with-background">

![](/library/modules/shake-detector/shake-detector.png)

</div>

## Inputs

| Data                                        | Description                                                  |
| ------------------------------------------- | ------------------------------------------------------------ |
| <span className="ndl-data">Timeout</span>   | The minimum time between two shakes                          |
| <span className="ndl-data">Threshold</span> | How much the phone has to be moved until a shake is detected |

| Signal                                                 | Description                                                                                                                                                             |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Request Permission</span> | Some systems, mainly iOS, requires the user to give the web app permission to use the sensors. This signal will open a popup that allows the users to grant permission. |

## Outputs

| Data                                               | Description                                                                                                                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Needs Permission</span> | **True** if permission is required for accessing the device sensors. Usually **true** on iOS, and **false** on other systems. Will also be **false** on iOS after permission has been granted |

| Signal                                             | Description                |
| -------------------------------------------------- | -------------------------- |
| <span className="ndl-signal">Shake Detected</span> | A shake has been detected! |
