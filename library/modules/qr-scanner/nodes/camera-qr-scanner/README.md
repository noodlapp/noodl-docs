---
title: Camera QR Scanner
hide_title: true
---

<##head##>

# Camera QR Scanner

The **Camera QR Scanner** node is used to open the camera view finder and scan for QR codes. It uses a [Video](/nodes/basic-elements/video) node to display the camera stream.

<div className="ndl-image-with-background l">

![](/library/modules/qr-scanner/nodes/camera-qr-scanner/camera-qr-scanner.png)

</div>
When a QR code has been successfully identified, the node will send a <span className="ndl-signal">Scan Successful</span> event and the decoded string, otherwise <span className="ndl-signal">Scan Failed</span>.
In this node, the decoding happens in real time, meaning if the QR code is not visible anymore the node will send an event to indicate that the scanning failed.
<##head##>

## Inputs

| Data                                                   | Description                                                                                                                                                                                                 |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Video Node</span>           | This input should be connected to the **Dom Element** output of the **Video** node that's used render the camera view finder.                                                                               |
| <span className="ndl-data">Front Facing</span>         | A **boolean** that decides if the front facing camera should be used (default) or the user facing came.                                                                                                     |
| <span className="ndl-data">Max Scans Per Second</span> | The number of scans per second the scanner will do to find QR codes. Lowering this number may improve performance if needed. Note that changing this number after triggering **Start** will have no effect. |

| Signal                                    | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| <span className="ndl-signal">Start</span> | Opens the camera stream and starts scanning for QR codes. |
| <span className="ndl-signal">Stop</span>  | Stops the camera stream and stops scanning for QR codes.  |

## Outputs

| Data                                          | Description                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">Scan Result</span> | This output contains the decoded string when a QR code has been found and decoded. If no QR code is found this string will be empty. |
| <span className="ndl-data">Valid Scan</span>  | A **boolean** that is **true** if the last scan was valid, otherwise **false**.                                                      |

| Signal                                              | Description                                                                                          |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Scan Successful</span> | Sends a signal when a successful scan was done. The resulting scan is on the **Scan Result** output. |
| <span className="ndl-signal">Scan Failed</span>     | Sends a signal when the latest scan failed, i.e. no QR code was found.                               |
