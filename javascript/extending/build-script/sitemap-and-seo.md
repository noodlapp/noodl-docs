---
title: Build script that generate Sitemap and static pages
hide_title: true
---

<head>
  <meta name="robots" content="noindex,nofollow,noarchive" />
</head>

# Generate a Sitemap and static pages

Having a `sitemap.xml` is very important for SEO,
so that search engines can build up a good map on the website.

With Noodl we can create build scripts that will alter the files after building.
What is really cool with this feature is that you can find all the information on
how the project is built, so we can find all the Pages nodes and generate a nice
sitemap and even create static index.html files to improve the SEO even more!

## Examples

Here are 2 examples of a script that generates a sitemap from all the pages.

### Static pages for Sitemap.xml

In case you don't have any dynamic pages, this script is really easy to use.

```js
const fs = require("fs");

/**
 * Sitemap class that helps us build the sitemap XML.
 */
class Sitemap {
  constructor() {
    this.urls = [];
  }

  add(entry) {
    this.urls.push(entry);
  }

  toXml() {
    let xml = `<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >`;

    xml += this.urls
      .map((item) => {
        let entry = `<url>`;
        Object.keys(item).forEach((key) => {
          entry += `<${key}>${item[key]}</${key}>`;
        });
        return entry + `</url>`;
      })
      .join("");

    return xml + `</urlset>`;
  }
}

module.exports = {
  async onPostBuild(context) {
    /**
     * this.getPages() returns a flat array of all the pages,
     * like this:
     *
     *  [
     *      {
     *          title: "page title",
     *          path: "/path-1/path-2",
     *      }
     *  ]
     *
     */
    const pages = await context.getPages();

    // Create our Sitemap class
    const sitemap = new Sitemap();

    // Loop over all the pages
    pages.forEach((page) => {
      // Add the page to the sitemap with
      // the sitemap tags we want to use.
      //
      // Here is what kind of tags there are:
      // https://www.sitemaps.org/protocol.html
      sitemap.add({
        // NOTE: In this example the path is not an absolute URL, which is required to make sitemaps work correctly.
        loc: page.path,
        changefreq: "weekly",
        priority: 0.5,
      });
    });

    // Write our sitemap.xml to the outputPath
    //
    // if you are deploying via our cloud service
    // this will also upload the file.
    await fs.promises.writeFile(
      `${context.outputPath}/sitemap.xml`,
      sitemap.toXml()
    );
  },
};
```

### Dynamic pages for Sitemap.xml

To make this one work you have to provide the information required by Noodl
to understand what your dynamic pages have.

```js
// We can do that by sending more information to the "getPages" method.
const pages = await context.getPages({
  // Async function that is called for each page that has variables.
  async expandPaths(route) {
    // Check the current page path.
    if (route.current.path === "page-3/{id}") {
      // Return a list of our expanded paths.
      return [
        {
          title: "My custom title",
          path: "page-3/0",
          meta: {
            description: "My description",
            keywords: "",
          },
        },
        {
          path: "page-3/1",
        },
        {
          path: "page-3/2",
        },
      ];
    }

    // Return the default value.
    // this will not be called unless there is a variable in the path.
    // So we are returning an invalid path here.
    return [
      {
        path: route.current.path,
      },
    ];
  },
});

// ...

// To access the meta data from the pages we can call
// pages[0].meta
```

### Generate static pages

We can expand on the previous example with dynamic pages for Sitemap.xml.
In this case we want to take all the information and write a index.html file
for each page.

```js
const fs = require('fs');
const path = require('path');

// ...

// Loop over all the pages
for (let index = 0; index < pages.length; index++) {
  const page = pages[index];

  // Create the filepath where we want to save the new index.html file.
  const pageDir = path.join(context.outputPath, page.path);

  // Generate a index.html file with our custom title and headcode.
  const content = await context.createIndexPage({
    title: page.title,
    headCode: `
      <meta name="description" content="${page.meta.description}">
      <meta name="keywords" content="${page.meta.keywords}">
    `,
  });

  // Create all the folders to the path.
  await fs.promises.mkdir(pageDir, {
    recursive: true,
  });

  // Save our new index.html file.
  await fs.promises.writeFile(path.join(pageDir, "index.html"), content);
}
```
