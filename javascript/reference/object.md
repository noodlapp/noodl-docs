---
hide_title: true
hide_table_of_contents: true
title: Noodl.Object
---

# Noodl.Object

Allows access to [Object](/nodes/data/object/object-node) from Javascript. You can learn more about objects and how you use them in your Noodl applications [here](/docs/guides/data/objects).

#### **`Noodl.Object.get(id)`**

Returns the object with the specified id. This function will return a new empty object if the id is
not previously used. If you want to check if an object exists use the `Noodl.Object.exists` function.
This is the same as accessing the object through `Noodl.Objects`.

#### **`Noodl.Object.create(data)`**

This function will create a new object and return it.
The properties of the object will be that of the supplied data. A special case is
the id attribute that will become the id of the object and not part of the object properties.
E.g. the code below will create an object with two properties and the id set to 'A'.

```javascript
Noodl.Object.create({
  id: "A",
  myProp1: 10,
  myProp2: "Hello",
  myProp3: Noodl.Object.create({ anotherProp: 15 }),
});
```

If no id is provided the newly created object will get a unique id assigned.
As illustrated in the example above object properties can contain references to other objects.

#### **`Noodl.Object.exists(id)`**

Returns true if an object with the specified Id has been created with a call to Noodl.Object.get or Noodl.Object.create.

#### **`object.on(event,listener)`**

#### **`object.off(event,listener)`**

Add and remove an event listener from the object.
Supported events:

- `change` - any property of the object is changed
- `add` - the object is added to a array
- `remove` - the object is removed from a array.

Example usage:

```javascript
myObject.on("change", function (args) {
  // property with name args.name was changed
  // new value in args.value
  // old value in args.old
});

myObject.on("add", function (args) {
  // object was added to the array args.array
});

myObject.on("remove", function (args) {
  // object was removed from the array args.array
});
```

#### **`object.getId()`**

Returns the Id of the object.

#### **`object.set(name,value,options)`**

Sets a property of the object. The name and value of the property should be provided to the function.

`myObject.set('myProp1',44)`

This is equal to just setting the property of the object directly:

`myObject.myProp1 = 44`

Optionally, dot notation can be used to set a sub property.
If a property of the object is another object, then you can set a property of the object
e.g. `myProp3.anotherProp`. To enable this you must supply the options `{resolve:true}`.

`myObject.set('myProp3.anotherProp',50,{resolve:true})`

#### **`object.setAll(data)`**

This function performs a set on all properties of the specified object.
This is equal to calling set for all properties of the data object.
Updating the `id` property is not supported, and will be ignored.

```js
// Create a Noodl object
Noodl.Object.create({
  id: "unique",
  valueA: 1,
  valueB: 2,
});

// This object, Noodl.Objects["unique"]
// will now contain {valueA: 1, valueB: 2}

// When calling setAll
Noodl.Objects["unique"].setAll({
  valueA: 3,
});

// The object will now be:
// {valueA: 3, valueB: 2}
```

#### **`object.fill(value)`**

This function sets all the current properties to the new value, except of the id.

```js
// Create a Noodl object
Noodl.Object.create({
  id: "unique",
  valueA: 1,
  valueB: 2,
});

// This object, Noodl.Objects["unique"]
// will now contain {valueA: 1, valueB: 2}

// When calling setAll
Noodl.Objects["unique"].fill(5);

// The object will now be:
// {valueA: 5, valueB: 5}
```

#### **`object.get(name,options)`**

Returns the value of the property with the specified name.
As in the set function the dot notation can be used if the object has another object as a property,
if the options {resolve:true} is supplied.

`myObject.get('myProp3.anotherProp',{resolve:true})`

This is equal to reading the property directly:

`myObject.myProp3.anotherProp`
