
### General Options

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Index Axis</span>                     |                                                                                                                                                                      |
| <span className="ndl-data">Responsive</span>                     | Resizes the chart canvas when its parent node changes size.                                                                                                          |
| <span className="ndl-data">Maintain Aspect Ratio</span>          | Maintain the original canvas aspect ratio (width / height) when resizing.                                                                                            |
| <span className="ndl-data">Aspect Ratio</span>                   | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Default: 1                                                                     |

### Animation

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">On Data Update</span>                 | When false, it wont animate when you update the data object. ([Preventing Animations](https://www.chartjs.org/docs/latest/developers/updates.html#preventing-animations)) |

### Title

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Show Title</span>                     | Is the title shown?                                                                                                                                                  |
| <span className="ndl-data">Text</span>                           | Title text to display.                                                                                                                                               |
| <span className="ndl-data">Align</span>                          | Alignment of the title.                                                                                                                                              |
| <span className="ndl-data">Position</span>                       | Position of title.                                                                                                                                                   |
| <span className="ndl-data">Color</span>                          | Color of text.                                                                                                                                                       |

### Title Font

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Font Family</span>                    | The font family.                                                                                                                                                     |
| <span className="ndl-data">Font Size</span>                      | The font size.                                                                                                                                                       |
| <span className="ndl-data">Font Style</span>                     | The font style.                                                                                                                                                      |
| <span className="ndl-data">Weight</span>                         | The font weight (boldness).                                                                                                                                          |
| <span className="ndl-data">Line Height</span>                    | The height of an individual line of text.                                                                                                                            |

### Tooltips

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Show Tooltips</span>                  | Are on-canvas tooltips enabled?                                                                                                                                      |
| <span className="ndl-data">Mode</span>                           | Sets which elements appear in the tooltip.                                                                                                                           |
| <span className="ndl-data">Position</span>                       | The mode for positioning the tooltip.                                                                                                                                |
| <span className="ndl-data">Background Color</span>               | Background color of the tooltip.                                                                                                                                     |
| <span className="ndl-data">Body Color</span>                     | Color of body text.                                                                                                                                                  |
| <span className="ndl-data">Spacing</span>                        | Spacing to add to top and bottom of each tooltip item.                                                                                                               |
| <span className="ndl-data">Corner Radius</span>                  | Radius of tooltip corner curves.                                                                                                                                     |
| <span className="ndl-data">Display Colors</span>                 | If true, color boxes are shown in the tooltip.                                                                                                                       |

### Tooltips Font

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Font Family</span>                    | The font family.                                                                                                                                                     |
| <span className="ndl-data">Font Size</span>                      | The font size.                                                                                                                                                       |
| <span className="ndl-data">Font Style</span>                     | The font style.                                                                                                                                                      |
| <span className="ndl-data">Weight</span>                         | The font weight (boldness).                                                                                                                                          |
| <span className="ndl-data">Line Height</span>                    | The height of an individual line of text.                                                                                                                            |

### Legend Labels

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Text Color</span>                     |                                                                                                                                                                      |
| <span className="ndl-data">Text Align</span>                     |                                                                                                                                                                      |
| <span className="ndl-data">Use Point Style</span>                |                                                                                                                                                                      |
| <span className="ndl-data">Point Style</span>                    |                                                                                                                                                                      |

### Legend Label Font

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Font Family</span>                    | The font family.                                                                                                                                                     |
| <span className="ndl-data">Font Size</span>                      | The font size.                                                                                                                                                       |
| <span className="ndl-data">Font Style</span>                     | The font style.                                                                                                                                                      |
| <span className="ndl-data">Weight</span>                         | The font weight (boldness).                                                                                                                                          |
| <span className="ndl-data">Line Height</span>                    | The height of an individual line of text.                                                                                                                            |

### Data Decimation

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Enabled</span>                        | Is decimation enabled?                                                                                                                                               |
| <span className="ndl-data">Algorithm</span>                      | Decimation algorithm to use. See the [more...](https://www.chartjs.org/docs/latest/configuration/decimation.html#decimation-algorithms)                              |
| <span className="ndl-data">Samples</span>                        | If the `lttb` algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.                       |
| <span className="ndl-data">Threshold</span>                      | If the number of samples in the current axis range is above this value, the decimation will be triggered. Defaults to 4 times the canvas width. The number of point after decimation can be higher than the `threshold` value. |

### Interaction

| Data                                                             | Description                                                                                                                                                          |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Intersect</span>                      | If true, the interaction mode only applies when the mouse position intersects an item on the chart.                                                                  |
| <span className="ndl-data">Mode</span>                           | Sets which elements appear in the interaction.                                                                                                                       |
| <span className="ndl-data">Axis</span>                           |                                                                                                                                                                      |
| <span className="ndl-data">Include Invisible</span>              | If true, the invisible points that are outside of the chart area will also be included when evaluating interactions.                                                 |
