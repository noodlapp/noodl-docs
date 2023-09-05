---
title: Figma Plugin
hide_title: true
---

# Figma plugin

:::info
Download the plugin here: https://www.figma.com/community/plugin/1006908263044642341/Noodl
:::

If you're a Figma user you can use Figma documents to create nodes in Noodl.

Layers in Figma will be mapped to nodes in Noodl, and complex shapes will be exported as images.

The Noodl plugin can export:

-   Shapes like circles, rectangles and lines with one fill or stroke. These will be mapped to the corresponding Noodl nodes.
-   Complex shapes, like vectors paths and boolean operation, will be exported as images
-   Text styles
-   Positions and sizes will map to absolute layouts and fixed dimensions
-   Entire layer hierarchies, with the correct order and parent/child relations.

The Noodl plugin can't currently export:

-   Auto layout
-   Constraints
-   Prototype interactions

This guide uses the Mobile UI kit by Toni Gemayel — a design resource from the Figma community:
https://www.figma.com/community/file/836596421863073964/Mobile-UI-kit

## Export a layer

1. Select a layer
2. Open the Noodl plugin and click "Export". Make sure Noodl is running and have a project open.
3. Noodl will now become focused. Place the Noodl node in your node hierarchy. Assets, like images, will be automatically placed in your project directory.

<iframe width="560" height="315" style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/GsczhwfoyEE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

Note that the Ellipse in Figma was mapped to an `Image` node in Noodl, with the correct size, image asset and border.

:::info
Here's the same node duplicated in Noodl, with a different source and border radius
:::

![](/docs/guides/user-interfaces/figma-plugin/image2.png ':class=img-size-l')

## Export text and text styles

All text styles used by exported text layers will automatically be imported.

?> Figma uses the fonts you have installed on your system. In Noodl apps the required font files have to be defined in your projects. You can [import fonts via Google Fonts](https://www.youtube.com/watch?v=lgMZZC6XoAs) or [via font files](https://www.youtube.com/watch?v=P76v0Q38eKI)

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/sZm0eBZvLaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

?> Note that the text styles was added to the styles tab in Noodl ![](/docs/guides/user-interfaces/figma-plugin/text-styles.png ':class=img-size-l')

## Export complex shapes

Complex shapes that don't map to a visual node in Noodl, like this vector path, will be exported as images. You can use the "Default image size" option to specify what resolutions the images should be exported at.

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/mqML1OL0SUk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

## Export larger layer structures

To get started quickly you can export entire structures, like a whole page. As you progress building the application and you can extract components and replace the static layouts with dynamic layouts and make the design data-driven.

<iframe width="560" height="315"  style={{margin:'0 auto',display:'block'}} src="https://www.youtube-nocookie.com/embed/5miB0PD4z9k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>

:::info
Another page exported all at once
:::

![](/docs/guides/user-interfaces/figma-plugin/whole-page.png ':class=img-size-l')

## Notes about workflow

Most application are more dynamic than what's typically designed in Figma. Text inputs are interactive, labels and values are data-driven, the amount of items in a list isn't fixed, groups can have padding, and so on. This means that there's some work left to do on the nodes that are exported.

-   **Applications**: Export small parts, like a list item, a button, and build them up one by one in Noodl. Entire structures are harder to export as they often need to be restructured.

-   **Prototypes**: Export entire pages, one by one, and build up the navigation structure in Noodl. Then start replacing the parts that require dynamic and interactive elements, and adjust the layout where it needs to be more flexible.
