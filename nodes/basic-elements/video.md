---
hide_title: true
hide_table_of_contents: true
title: Video
---

<##head##>

# Video

This node places a video surface in the visual tree. It features a wide range of design options and settings for playback.

The <span className="ndl-data">source</span> can be set from a URL or a file. You can drag videos from your computer and drop them into Noodl to add them to the project folder. This will make them selectable as the <span className="ndl-data">source</span> in the <span className="ndl-node">Video</span> node Property Panel.

<##head##>

## Inputs

<div className="ndl-table-35-65">

| Signal                                      | Description                                  |
| ------------------------------------------- | -------------------------------------------- |
| <span className="ndl-signal">Play</span>    | Signal to start playing the video.           |
| <span className="ndl-signal">Pause</span>   | Signal to pause the video.                   |
| <span className="ndl-signal">Restart</span> | Signal to play the video from the beginning. |
| <span className="ndl-signal">Reset</span>   | Signal to reset the video to the beginning.  |

| Data                                       | Description                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| <span className="ndl-data">Source</span>   | The source of the video. Either a local file in the project folder or an absolute url. |
| <span className="ndl-data">Poster</span>   | An image shown when the video is not started. Choose an image in the project folder.   |
| <span className="ndl-data">Autoplay</span> | Sets whether the audio/video should start playing as soon as it is loaded.             |
| <span className="ndl-data">Controls</span> | Sets whether the audio/video browser native controls are visible.                      |
| <span className="ndl-data">Volume</span>   | The volume of the video when played.                                                   |
| <span className="ndl-data">Muted</span>    | Sets whether the audio/video is muted or not.                                          |
| <span className="ndl-data">Loop</span>     | Indicates whether the video should loop when the end is reached during playback.       |

The Video node also has some special Video Layout properties:

| Data                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Video Position X</span> | The video's X position within the **Video** node's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <span className="ndl-data">Video Position Y</span> | The video's Y position within the **Video** node's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <span className="ndl-data">Object Fit</span>       | Specifies how the video will behave when scaled to other size than the default size.<br/><br/>`Contain`: The video will be scaled by keeping aspect ratio and making sure the video fits in the bounding box. This may introduce transparent areas within the **Video** node's bounding box.<br/>`Cover`: The video will be scaled by keeping aspect ratio and making sure the video fills the entire bounding box. Portions of the video may be clipped.<br/>`Fill`: The video will fill the bounding box by scaling without keeping aspect ratio.<br/>`None`: The video will not be scaled. May be clipped. |

</div>

### Visual

This node supports the following [Visual Input Properties](/nodes/shared-props/inputs/visual-input-properties):

- [Margin](/nodes/shared-props/inputs/visual-input-properties#margin)
- [Alignment](/nodes/shared-props/inputs/visual-input-properties#alignment)
- [Dimensions](/nodes/shared-props/inputs/visual-input-properties#dimensions)
- [Layout, Position](/nodes/shared-props/inputs/visual-input-properties#-position)
- [Style](/nodes/shared-props/inputs/visual-input-properties#style)
- [Border Style](/nodes/shared-props/inputs/visual-input-properties#border-style)
- [Corner Radius](/nodes/shared-props/inputs/visual-input-properties#corner-radius)
- [Box Shadow](/nodes/shared-props/inputs/visual-input-properties#box-shadow)
- [Placement](/nodes/shared-props/inputs/visual-input-properties#placement)
- [Dimension Constraints](/nodes/shared-props/inputs/visual-input-properties#dimension-constraints)
- [Other](/nodes/shared-props/inputs/visual-input-properties#other)
- [Advanced HTML](/nodes/shared-props/inputs/visual-input-properties#advanced-html)

## Outputs

<div className="ndl-table-35-65">

| Signal                                             | Description                                                                                                                                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">On Can Play</span>    | Signal triggered when the video has loaded and is ready to be played.                                                                                                                                                     |
| <span className="ndl-signal">On Time Update</span> | Signal triggered when the playing position of the audio/video has changed. Event is invoked both by playing the media as well as when the playback position is being moved (for example when fast forward is being used). |

| Data                                          | Description                                                   |
| --------------------------------------------- | ------------------------------------------------------------- |
| <span className="ndl-data">DOM Element</span> | A reference to the DOM Element representing this visual node. |
| <span className="ndl-data">videoWidth</span>  | The width of the video source.                                |
| <span className="ndl-data">videoHeight</span> | The height of the video source.                               |

</div>

### Visual

This node supports the following [Visual Output Properties](/nodes/shared-props/outputs/visual-output-properties).

- [Bounding Box](/nodes/shared-props/outputs/visual-output-properties/#bounding-box)
- [Mounted](/nodes/shared-props/outputs/visual-output-properties/#mounted)
- [Pointer Events](/nodes/shared-props/outputs/visual-output-properties/#pointer-events)
- [Hover Events](/nodes/shared-props/outputs/visual-output-properties/#hover-events)
- [Other](/nodes/shared-props/outputs/visual-output-properties/#other)

<div className="hidden-props-for-editor">

@include "../shared-props/inputs/_visual-input-properties.md"
@include "../shared-props/outputs/_visual-output-properties.md"

</div>
