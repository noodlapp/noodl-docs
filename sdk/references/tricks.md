---
title: Noodl SDK Tricks
hide_title: true
---

# Module Tricks

Here are a few tricks that can be used inside core nodes.

## Next Frame

```js
this.context.scheduleNextFrame(function () {
  // called on the next frame, `this` can be used here.
});
```

## Inputs updated

```js
this.scheduleAfterInputsHaveUpdated(function () {
  // Called when all the inputs has been updated.
});
```
