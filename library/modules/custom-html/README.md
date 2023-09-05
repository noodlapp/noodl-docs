---
title: Custom HTML
hide_title: true
---

<##head##>

# Custom HTML

This node allows you to add your own custom HTML markup to your visual tree. Common use cases include embeds or inline SVG's.

<div className="ndl-image-with-background l">

![](/library/modules/custom-html/html.png)

</div>

You can pass dynamic values to your markup by using template strings. `{{ FillColor }}` will create an input port named `FillColor`.

<div className="ndl-image-with-background l">

![](/library/modules/custom-html/example.png)

</div>

## Security notice

This node also allows you to add script tags to your app. For security reasons all script tags are deactivated, but if you need to run a script (required for some embeds) you can turn off that fail safe. <strong>Please note that passing user input to your template string variables can be a security risk for you and your users, leaving you vulnerable to [XSS Attacks](https://en.wikipedia.org/wiki/Cross-site_scripting).</strong>

<##head##>

## Inputs

| Data                                                    | Description                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span className="ndl-data">HTML</span>                  | Your custom markup that will be rendered in the visual tree.                                                                                                                                                                                                                                                   |
| <span className="ndl-data">Run inline JavaScript</span> | Running scripts with user input can be dangerous. To provide an extra layer of security JavaScript in the custom HTML is prevented from running. Turn this on if your embed require scripts or if you are an advanced user with knowledge of [XSS Attacks](https://en.wikipedia.org/wiki/Cross-site_scripting) |
| <span className="ndl-data">Custom Variables</span>      | Any variable in a template string will become an input. Only one variable per template string allowed                                                                                                                                                                                                          |
