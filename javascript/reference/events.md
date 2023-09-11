---
hide_title: true
hide_table_of_contents: true
title: Noodl.Events
---

# Noodl.Events

**Only available on the frontend**  
This is the Noodl event emitter, you can use it to receive and send events from your scripts. You can learn more about events in the [guide](/docs/guides/business-logic/events).

<div className="ndl-image-with-background xl">

![](/javascript/reference/events/events.gif)

</div>

#### **`Noodl.Events.emit(eventName, data)`**

Send an event. Works well together with _Event Receivers_.

```javascript
Noodl.Events.emit("event name", {
  value: "hello",
  someOtherValue: 100,
});
```

#### **`Noodl.Events.on(eventName, callback(data))`**

#### **`Noodl.Events.once(eventName, callback(data))`**

Receive an event. Works together with _Event Senders_

```javascript
Noodl.Events.on("event name", function (eventData) {
  console.log(eventData.value);
});
```

#### **`Noodl.Events.off(eventName, callback(data))`**

Remove an event handler.

```javascript
function onEventName(eventData) {
  console.log(eventData.value);
}

Noodl.Events.on("event name", onEventName);
Noodl.Events.off("event name", onEventName);
```

## Features

### Listen to Page Router navigation

Here is an example of how you can listen to the Page Router navigation events.

```js
Script.Outputs = {
  Navigated: "signal",
};

function onNavigated({
  // The name of the router for example 'Main'.
  routerName,
  // The relative path on this page router.
  // To get the fullpath, use `window.location.pathname`.
  path,
  title,
  // The component name for example '/Pages/MyPage'.
  // (this is a page in the 'Pages' folder)
  component
}) {
  Script.Outputs.Navigated();
}

Script.Signals.DidMount = function () {
  Noodl.Events.on("NoodlApp_Navigated", onNavigated);
};

// OnDestroy is called when the Script node is unmounted.
// Where we do some cleanup to remove the event listener.
Script.OnDestroy = function () {
  Noodl.Events.off("NoodlApp_Navigated", onNavigated);
};
```
