# Progressive Web App

A Progressive Web App (PWA) is a type of web application that combines the best features of both web and native mobile applications. It delivers a fast, reliable, and engaging user experience across different devices and platforms, without the need to install an app from an app store. PWAs use modern web technologies to provide app-like functionality, such as offline access, push notifications, and access to device hardware.

As of today (Noodl 2.8.3) there are no built-in features to make it **easier** to work with Progressive Web Apps in Noodl.
If you are interested in hearing more, [contact us](https://www.noodl.net/community).

## Key characteristics

Here are some of the key characteristics of Progressive Web Apps.

### Connectivity independence

One of the key features of PWAs is their ability to work offline or with poor network conditions. This is achieved through caching strategies implemented using service workers, which store assets and data locally on the user's device.

Service workers are one of the ways to achieve this. JavaScript files that run in the background, separate from the main browser thread. They enable core PWA features like offline functionality, caching, background synchronization, and push notifications. Service workers act as a proxy between the web app and the network, allowing developers to control how network requests are handled and implement efficient caching strategies.

### Fast and reliable performance

They can work offline or with poor network conditions, using cached data and assets to provide a functional user experience.
PWAs use caching and background data synchronization to ensure a smooth and fast user experience.

Web workers are a powerful tool for enhancing web application performance. They execute JavaScript code in the background, separate from the main browser thread, allowing computationally intensive tasks to be offloaded without affecting the responsiveness of the user interface. Web workers communicate with the main thread using a messaging system, ensuring seamless integration with the rest of the application. By making it possible to run complex operations in parallel, web workers significantly improve the overall user experience, particularly in CPU-demanding applications.

There is a module built to work with Web Workers in Noodl, it is quite technical, and it can be found here [Web Worker Module](https://github.com/noodlapp/modules/tree/main/modules/web-worker).

### Installable

With Progressive Web Apps you can add your Noodl app to a device's home screen, similar to how native apps appear. Installing a PWA creates a shortcut and allows you to access the web app directly without needing to open a browser and navigate to the app's URL.

The installation process for PWAs is relatively simple and does not require downloading from an app store. Once a PWA meets certain criteria (e.g., having a web app manifest and being served over HTTPS), browsers may prompt users to install the PWA or provide an option to do so manually.

Once installed, the PWA can be launched from the home screen, app drawer, or any other location where native apps can be accessed. The PWA will open in a standalone window, without the typical browser interface elements, making it feel more like a native app.

## How to create a PWA?

### Creating the Web App Manifest

The web app manifest is a JSON file that provides metadata about the PWA, such as its name, icons, display settings, and preferred orientation. This information allows the PWA to be installed on a device's home screen with a custom icon and launch experience, making it feel more like a native app.

1. Create a manifest.json file and include it in your Noodl apps [project directory](/docs/guides/deploy/project-structure/).

2. Open the manifest.json file and add the basic properties required for your web app.

Here's a simple example:

```json
{
  "name": "My PWA",
  "short_name": "PWA",
  "description": "A sample Progressive Web App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000"
}
```

Here's a brief explanation of each property:

- `name`: The full name of your Progressive Web App.
- `short_name`: A shorter name for your PWA, used when there's limited space (e.g., on the home screen).
- `description`: A brief description of your PWA.
- `start_url`: The URL that the PWA should open when launched.
- `display`: The preferred display mode for the PWA. "standalone" is the most app-like experience, without browser interface elements.
- `background_color`: The background color of the

3. Make sure to reference it in your Head Code which can be found under the Project Settings, using a link tag:

```html
<link rel="manifest" href="/manifest.json" />
```

4. Deploy your application and you are now using the basic functionalities of Progressive Web Apps.

### Verify Web App Manifest on a Phone

Now when you have installed the manifest file, there are different ways to test it.
This is one of the ways it can be tested on a phone by following these steps:

1. Open the web app on your phone's browser using by going to your Noodl app URL.

2. Add the web app to your phone's home screen:

   - **Android (Chrome)**: Tap the vertical ellipsis (⋮) in the top-right corner of the browser, then select "Add to Home screen" or "Install App" from the menu. Confirm the action by tapping "Add" or "Install" when prompted.

   - **iOS (Safari)**: Tap the "Share" icon at the bottom of the browser (a square with an arrow pointing upwards), then scroll down and select "Add to Home Screen." Confirm by tapping "Add" in the top-right corner.

3. Close your browser and find the app icon on your phone's home screen.

4. Tap the app icon to launch the PWA. It should open in a standalone window without the browser interface elements, providing an app-like experience.

Please note that this method only checks if your web app can be added to the home screen and launched like a PWA. It doesn't evaluate the full PWA functionality or features such as offline support, push notifications or performance optimizations.
To thoroughly test your PWA, you should look at using Lighthouse in Chrome Developer Tools.
