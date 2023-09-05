---
title: Javascript in Cloud Functions
hide_title: true
---

# Javascript in Cloud Functions

Not all nodes are available to cloud functions but in terms of writing Javascript the **Function** and **Expression** nodes are available. However there are some caveats, most notably when deployed cloud functions are not running in a browser they are running in the cloud and they have a much more limited runtime environment. This means that you cannot access most of the browser APIs, the cloud runtime is limited to:

- **Core Javascript Objects and Functions** The Javascript language contains a set of core objects and functions that are all available to the cloud runtime. More info [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

- **The Noodl API** A subset of the Noodl API is available to cloud functions. Read more about the Noodl APIs [here](/javascript/overview). Some of the functions and objects are labeled **Only available on the frontend** and some are labeled as **Only available in cloud functions**, the rest are shared between frontend and cloud functions.

## Fetch

A subset of the **Fetch API** available on the browser also works in cloud functions, which is very useful for making HTTP requests to external services.

**`fetch(url,options)`**  
The **Fetch API** first takes the endpoint of the HTTP request and then an object with options. Here are a few examples, first making a simple POST request to an endpoint:

```javascript
const res = await fetch("https://some-endpoint",{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify({
        someParameters:"hello"
    })
})

if(res.ok) {
    Outputs.Success()
}
else Outputs.Failure()
```

## The Request Object

In Javascript in your cloud functions you can access the request object containing data on the current request being handled.

```javascript
const request = Noodl.Objects.Request;

request.UserId // Contains the user if of the user that called the cloud function, if authenticated
request.Authenticated // Will be true if this call is authenticated
request.Parameters // An object with the parameters of the current cloud function request
request.Headers // An object with the HTTP headers of the current cloud function request
```





