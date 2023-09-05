---
title: Mapbox Map
hide_title: true
---

<##head##>

# Mapbox Map

This node adds a map to the visual tree, using [Mapbox](https://www.mapbox.com/). The map can be both interactive and static.

<div className="ndl-image-with-background l">

![](/library/modules/mapbox/nodes/mapbox-marker.png)

</div>

<##head##>

## Inputs

<div className="ndl-table-35-65">

#### Options

| Data                                    | Description                                                           |
| --------------------------------------- | --------------------------------------------------------------------- |
| <span className="ndl-data">Style</span> | A path to a [Mapbox Style](https://docs.mapbox.com/api/maps/styles/). |

#### Other

| Data                                          | Description                       |
| --------------------------------------------- | --------------------------------- |
| <span className="ndl-data">Interactive</span> | Enable / Disable any interactions |
| <span className="ndl-data">Anti-alias</span>  | Enable anti-alias                 |

#### Coordinates

| Data                                        | Description                        |
| ------------------------------------------- | ---------------------------------- |
| <span className="ndl-data">Longitude</span> | Sets the current active longitude. |
| <span className="ndl-data">Latitude</span>  | Sets the current active latitude.  |
| <span className="ndl-data">Zoom</span>      | Sets the current active zoom.      |
| <span className="ndl-data">Bearing</span>   | Sets the current active bearing.   |

#### Geolocate

| Signal                                             | Description                                                                  |
| -------------------------------------------------- | ---------------------------------------------------------------------------- |
| <span className="ndl-signal">Center on user</span> | Center the map on the user location, this only works with Geolocate enabled. |

#### Controls - Fullscreen

| Data                                                  | Description                    |
| ----------------------------------------------------- | ------------------------------ |
| <span className="ndl-data">Enable Fullscreen</span>   | Enable the fullscreen control. |
| <span className="ndl-data">Fullscreen Position</span> | Change the control position.   |

#### Controls - Geocoder

| Data                                                | Description                                  |
| --------------------------------------------------- | -------------------------------------------- |
| <span className="ndl-data">Enable Geocoder</span>   | Enable the Geocoder control.                 |
| <span className="ndl-data">Geocoder Position</span> | Change the control position.                 |
| <span className="ndl-data">Placeholder</span>       | Sets the placeholder in the search field.    |
| <span className="ndl-data">Show Marker</span>       | Show a marker of the search result location. |

#### Controls - Geolocate

| Data                                                   | Description                                    |
| ------------------------------------------------------ | ---------------------------------------------- |
| <span className="ndl-data">Enable Geolocate</span>     | Enable the Geolocate control.                  |
| <span className="ndl-data">Geolocate Position</span>   | Change the control position.                   |
| <span className="ndl-data">Show Accuracy Circle</span> | Show the accuracy circle of the user position. |
| <span className="ndl-data">Show User Heading</span>    | Show the user heading.                         |
| <span className="ndl-data">Show User Location</span>   | Show user location.                            |
| <span className="ndl-data">Track User Location</span>  | Track the user location.                       |

#### Controls - Navigation

| Data                                                  | Description                                     |
| ----------------------------------------------------- | ----------------------------------------------- |
| <span className="ndl-data">Enable Navigation</span>   | Enable the Navigation control.                  |
| <span className="ndl-data">Navigation Position</span> | Change the control position.                    |
| <span className="ndl-data">Show Compass</span>        | Show the compass button in the control.         |
| <span className="ndl-data">Show Zoom</span>           | Show the plus and minus buttons in the control. |
| <span className="ndl-data">Visualize Pitch</span>     | Visualize the pitch in the compass.             |

#### Controls - Scale

| Data                                             | Description                               |
| ------------------------------------------------ | ----------------------------------------- |
| <span className="ndl-data">Enable Scale</span>   | Enable the Scale control.                 |
| <span className="ndl-data">Scale Position</span> | Change the control position.              |
| <span className="ndl-data">Max Width</span>      | Sets the max width of the control.        |
| <span className="ndl-data">Unit</span>           | Sets the unit the control should display. |

#### Controls - Mapbox Draw

| Data                                                      | Description                     |
| --------------------------------------------------------- | ------------------------------- |
| <span className="ndl-data">Enable Mapbox Draw</span>      | Enable the Mapbox Draw control. |
| <span className="ndl-data">Mapbox Draw Position</span>    | Change the control position.    |
| <span className="ndl-data">Enable Draw Keybindings</span> | Enable Keybindings.             |
| <span className="ndl-data">Enable Draw Touch</span>       | Enable Touch inputs.            |
| <span className="ndl-data">Enable Draw Box Select</span>  | Enable Box Select.              |
| <span className="ndl-data">Display Draw Controls</span>   | Show the Mapbox Draw controls.  |

#### Controls - Mapbox Draw - Controls

| Data                                                 | Description                         |
| ---------------------------------------------------- | ----------------------------------- |
| <span className="ndl-data">Points</span>             | Show the point button.              |
| <span className="ndl-data">Line String</span>        | Show the line string button.        |
| <span className="ndl-data">Polygon</span>            | Show the polygon button.            |
| <span className="ndl-data">Trash</span>              | Show the trash button.              |
| <span className="ndl-data">Combine Features</span>   | Show the combine features button.   |
| <span className="ndl-data">Uncombine Features</span> | Show the uncombine features button. |

</div>

## Outputs

<div className="ndl-table-35-65">

| Data                                                      | Description                                                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <span className="ndl-data">(Coordinates) Longitude</span> | The current active longitude.                                                                    |
| <span className="ndl-data">(Coordinates) Latitude</span>  | The current active latitude.                                                                     |
| <span className="ndl-data">(Coordinates) Zoom</span>      | The current zoom level of the map                                                                |
| <span className="ndl-data">(Coordinates) Bearing</span>   | The current active bearing.                                                                      |
| <span className="ndl-data">(Map Clicked) Longitude</span> | The longitude that where the user clicked last. To be used with the Click signal.                |
| <span className="ndl-data">(Map Clicked) Latitude</span>  | The latitude that where the user clicked last. o be used with the Click signal.                  |
| <span className="ndl-data">Width</span>                   | The with of the map container.                                                                   |
| <span className="ndl-data">Height</span>                  | The height of the map container.                                                                 |
| <span className="ndl-data">Screen Position X</span>       | The amount of pixels between the left side of the window and the left side of the map container. |
| <span className="ndl-data">Screen Position Y</span>       | The amount of pixels between the top of the window and the top side of the map container.        |
| <span className="ndl-data">Mapbox Object</span>           | Get the Mapbox object.                                                                           |
| <span className="ndl-data">Mapbox Draw Object</span>      | Get the Mapbox Draw object.                                                                      |

| Signal                                           | Description                                                                               |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Click</span>        | Sends a signal when the map is clicked.                                                   |
| <span className="ndl-signal">Map Loaded</span>   | Sends a signal when the map has finished loading, after it has been mounted in the app.   |
| <span className="ndl-signal">Map Moved</span>    | Sends a signal after the map in view has been moved.                                      |
| <span className="ndl-signal">Did Mount</span>    | Sends a signal when the map has been rendered in the app, before the map has been loaded. |
| <span className="ndl-signal">Will Unmount</span> | Sends a signal before the map will be removed from the visual tree.                       |

</div>
