---
title: Match Media Query
hide_title: true
---

# Match Media Query

This component is used to check what breakpoint is currently active. It has one output for every breakpoint that outputs either `true` or `false`.

> Please note that you need to place a **[Media Query Setup](/library/prefabs/media-query/components/media-query-setup)** component in your projects home component for the **Match Media Query** comoponent to work.

<br/>

<div className="ndl-image-with-background xl">

![](/library/prefabs/media-query/media-query.png)

</div>

## Breakpoints

The breakpoints are set in the **[Media Query Setup](/library/prefabs/media-query/components/media-query-setup)** component. If the built in default breakpoints don't fit you, you can change them there.

For edge cases where you need to use a one-off breakpoint, you can use the **[Match Custom Media Query](/library/prefabs/media-query/components/match-custom-media-query)** component.

## Common usage

The most common usecase is to use this node together with a [States](/nodes/utilities/logic/states) node, or the **Mounted** input, as pictured above.

## Outputs

| Data                                                      | Description                                                                             |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <span className="ndl-data">Matches Small Mobile</span>    | _true_ if the viewport matches the **Small Mobile** breakpoint                          |
| <span className="ndl-data">Matches Regular Mobile</span>  | _true_ if the viewport matches the **Regular Mobile** breakpoint                        |
| <span className="ndl-data">Matches Tablet</span>          | _true_ if the viewport matches the **Tablet** breakpoint                                |
| <span className="ndl-data">Matches Regular Desktop</span> | _true_ if the viewport matches the **Regular Desktop** breakpoint                       |
| <span className="ndl-data">Matches Large Desktop</span>   | _true_ if the viewport matches the **Large Desktop** breakpoint                         |
| <span className="ndl-data">Matches All Mobile</span>      | _true_ if the viewport matches the **Small Mobile** or **Regular Mobile** breakpoints   |
| <span className="ndl-data">Matches All Desktop</span>     | _true_ if the viewport matches the **Regular Desktop** or **Large Desktop** breakpoints |
