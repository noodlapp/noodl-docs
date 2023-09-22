---
hide_title: true
hide_table_of_contents: true
title: External Link node
---

<##head##>

# External Link

This node is used to trigger a navigation to a page outside of your app.

It also supports common URL schemes, like `mailto:` and `tel:`.

<div className="ndl-image-with-background l">

![](/nodes/navigation/external-link/external-link.png)

</div>

Note that **External Link** does not work in the Noodl Viewer. You need to run the app in a browser for it to work.

<##head##>

## Inputs

| Data                                              | Description                                                                                                                                                                                                                   |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">Link</span>            | <##input:link##>The URL that should be opened when the **Do** signal is triggered. The URL should include the full scheme, e.g. `http://`, `mailto:`, etc. <##input##>                                                        |
| <span className="ndl-data">Open in New Tab</span> | <##input:openInNewTab##>If this property is set to <span className="ndl-data">true</span> the link will be opened in a new browser tab. Otherwise it will open (and replace) the current Noodl app in the browser.<##input##> |

| Signal                                 | Description                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------- |
| <span className="ndl-signal">Do</span> | <##input:do##>Recieving a signal to this input will navigate to the external link.<##input##> |
