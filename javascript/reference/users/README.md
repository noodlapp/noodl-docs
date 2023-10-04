---
hide_title: true
hide_table_of_contents: true
title: Noodl.Users
---

# Noodl.Users

The **Noodl.Users** object let's you access the current session user.

#### **`Noodl.Users.logIn(options)`**

This function will attempt to login to create a user session. After a successful login you can access the user object with `Noodl.Users.Current`

```javascript
// On the frontend you log in and access the user via Noodl.Users.Current
await Noodl.Users.logIn({
  username: "my-username",
  password: "my-password",
});

console.log(Noodl.Users.Current.UserId);

// When running in a cloud function it also returns the user object
const user = await Noodl.Users.logIn({
  username: "my-username",
  password: "my-password",
});

console.log(user.sessionToken);
```

#### **`Noodl.Users.signUp(options)`**

**Only available on the frontend**  
This function will attempt to sign up a new user, and if successful that user will become the current user session. Username, email and password are required options and properties is optional.

```javascript
await Noodl.Users.signUp({
  username: "my-username",
  email: "my-email",
  password: "my-password",
  properties: {
    SomeProperty: true,
  },
});
```

#### **`Noodl.Users.become(sessionToken)`**

**Only available on the frontend**  
This function will attempt to login a user with an existing session token. Session tokens can be created in cloud functions e.g. using the `impersonate` function. After a successful login you can access the user object with `Noodl.Users.Current`

```javascript
// Call this from a function node with Inputs.SessionToken
try {
  await Noodl.Users.become(Inputs.SessionToken);
} catch (e) {
  Outputs.Failure();
  throw e;
}

// You can now access the user
const userId = Noodl.Users.Current.UserId;

Outputs.Success();
```

#### **`Noodl.Users.impersonate(username,options)`**

**Only available in cloud functions**  
With this function you can get a session token for a user that you can later send to the client to log that user in. This does not require a password and must be run on a cloud function (since they all have full access to the database). You can provide a duration for the session, or it will expire after 24 hours as default. If successful this call will return a user object that contains a session token that you can return to the client and use with the `become` function.

**installationId** is an optional that is a unique id for the client if you don't want to share sessions between different clients. Most common is to generate a random id on the client and pass to the cloud function when you are logging in.

```javascript
try {
  const user = await Noodl.Users.impersonate("test@email.com", {
    duration: 1 * 60 * 60 * 1000, // have the session last 1 hour
    installationID: "xyz",
  });

  Outputs.SessionToken = user.sessionToken;
  Outputs.Success();
} catch (e) {
  Outputs.Failure();
  throw e;
}
```

#### **`Noodl.Users.Current`**

This function will return the current user object and properties if one exists.

```javascript
const user = Noodl.Users.Current;
if (user) {
  // A user is logged in
  console.log(user.UserId); // the user id of the current user

  console.log(user.Properties.SomeProperty);
} else {
  // No user session
}
```

#### **`Noodl.Users.Current.fetch()`**

This function will fetch that laters properties of the user object from the cloud database. It will throw an exception if the user session has expired.

```javascript
await Noodl.Users.Current.fetch();
```

#### **`Noodl.Users.Current.save()`**

This function will attempt to save the properties of the current user. If you have made changes to the **current()** user object you will need to call this function to write the changes to the backend.
If the `password` has been updated it will terminate all the sessions so the user has to login again.

```javascript
await Noodl.Users.Current.save();
```

#### **`Noodl.Users.Current.logOut()`**

**Only available on the frontend**  
This function will log out the current user and terminate the session.

```javascript
await Noodl.Users.Current.logOut();
```

#### **`Noodl.Users.on(eventName,callback)`**

**Only available on the frontend**  
You can use this function to listen for events related to the user service.

```javascript
Noodl.Users.on("sessionLost", () => {
  // This is called when the session has expired
});

Noodl.Users.on("loggedIn", () => {
  // This is called when a user has successfully logged in
});

Noodl.Users.on("loggedOut", () => {
  // This is called when a user has successfully logged out
});
```

#### **`Noodl.Users.off(eventName,callback)`**

**Only available on the frontend**  
You use this function to remove an event listener from a specific event.
