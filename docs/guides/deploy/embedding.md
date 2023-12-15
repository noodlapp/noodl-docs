---
title: Embedding / iframe / Micro Frontend
hide_title: true
---

# Embedding / iframe / Micro Frontend

Noodl is a powerful tool for creating iframe and micro frontends.

Micro Frontend, iframe, and embedding are all techniques used in web development for integrating different components or applications into a single web page. However, they have distinct approaches and use cases.

## Embedding

Embedding is a more general term that refers to the process of including one piece of content within another, usually referring to the iframe technique.

### Embedding inside a Noodl app

If you are looking to embed other websites (example youtube) into Noodl, have a look at the [Custom HTML module](https://docs.noodl.net/2.9/library/modules/custom-html/).

## iframe

An iframe (inline frame) is an HTML element that allows you to embed another HTML document within a parent HTML document. By using an iframe, you can display content from another website or application within your web page without affecting the main page's layout or styling. This is useful for embedding third-party content like maps, videos, or widgets. However, iframes have some limitations, such as security risks, lack of responsiveness, and difficulty in communication between parents and iframe content.

### Add an iframe to a website

To add an iframe to your HTML document, you can use the `<iframe>` tag with the `src` attribute specifying the URL of the content you want to embed. Here's an example:

```html
<iframe
  width="560"
  height="315"
  src="https://url.to.your.deployed.app/"
  rameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

In this example, the `<iframe>` tag has several attributes:

- `width` and `height`: Set the dimensions of the iframe.
- `src`: The URL of your deployed Noodl app.
- `frameborder`: Set to "0" to remove the border around the iframe.
- `allow`: Specifies a list of features that are allowed within the iframe, such as accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, and picture-in-picture.
- `allowfullscreen`: Allows the iframe to go full-screen mode when the full-screen API is used.

This example demonstrates how to add an iframe to your HTML document to embed a deployed Noodl app. You can customize the attributes as needed to suit your specific use case or other types of content to be embedded using iframes.

## Micro Frontend

Micro Frontends is an architectural pattern that involves breaking down a frontend application into smaller, more manageable, and independent parts, called micro frontends. Each micro frontend is a self-contained unit of the frontend code that is responsible for a specific set of features or functionality.

The micro frontend approach allows for greater flexibility and scalability in frontend development, as each micro frontend can be developed and deployed independently, and can be composed to create the overall frontend application. This approach also allows for different teams to work on different parts of the front-end application, using different technologies.

If you are interested in hearing more, [reach out to us in the community](https://www.noodl.net/community).
