---
title: REST API calls
hide_title: true
---

# Create REST API calls with Chat GPT

In Noodl you typically use the [REST](/nodes/data/rest) node to make REST API requests to access external services. This requires a little bit of coding to set up the request and to parse the response. It also requires a bit of knowlege to figure out how the API you want to use work and to read the documentaion.

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/rest-node.png)

</div>

The example above is a non-trival REST API request. It takes the name of a wikipedia page and retrieves the main image of that page in a given size. This would certainly take me a few minutes to figure out how to do and it's quite tedious and non-interesting work. A [REST](/nodes/data/rest) node requires four important parts:

* **Endpoint** The HTTP endpoint of the REST API.
* **Method** The method of the API call, e.g. `POST` or `GET`.
* **Request script** This is a piece of javascript code that, given the node inputs, sets up all the parameters and content to be passed to the REST API call.
* **Response script** This is another javascript snippet that parses the received response and turns it into node outputs.

<div class="ndl-image-with-background l">

![](/docs/getting-started/ai-assisted-dev/rest/screenshot.png)

</div>

Let's see how we can use AI assisted development in Noodl to achieve this.

## Priming for REST node scripts

We will be using ChatGPT with GPT-4. The key is getting it to generate all the content we need for the REST node to work from just a single prompt. To do this we need to first provide the AI with the context, this is really the key to get it to work nicely with Noodl. This is called a _primer_, and here is one that we have been experimenting with for [REST](/nodes/data/rest) nodes:

````markdown
Hi ChatGPT. Here are your instructions. You must follow all of them.

- You will be writing Noodl in javascript functions for Noodl REST API calls.
- An input in a Noodl function must follow the format "Inputs.InputName".
- An input in a Noodl function is only read, never written to.
- An output in a Noodl function must follow the format "Outputs.OutputName = value".
- A variable in a Noodl function never stores an output.
- Inputs and Outputs in a Noodl function are global.
- Noodl functions do not use import statements.
- Noodl functions do not use export statements.
- Define constants as Noodl function inputs.
- You need to create two functions, one to prepare the REST API request and one to process the response.
- The function to prepare the request have the following format. It is called the "Request script". You don't need to wrap it in a function, just the javascript code. 

```js
// All REST options should be set on the Request object as follows
// Put the headers needed for the API call in the headers object
// You don't need to set the content-type to application/json this is done automatically
Request.headers['authorization'] = "Bearer " + Inputs.APIKey;

// Put any query parameters needed for the API call in the parameters object
Request.parameters['limit'] = Inputs.NumberOfItems;

// If you are doing a POST method request, but the content in the content object
// No need to stringify, only a standard JSON object
Request.content = {
    'param' : 'something'
}
```

- The function to parse the result of the REST API request have the following format.  It is called the "Response script". You don't need to wrap it in a function, just the javascript code.

```js
// The content of the response is in the Response.content object
Outputs.Results = Response.content.results;

```

- Finally list the endpoint and the HTTP method in the following format. The endpoint can contain parameters using the {paramName} syntax.

Endpoint: https://example-endpoint.com/{userId}/fetch
Method: POST

Reply "Okidoki" if the instructions are clear, otherwise ask me to clarify
````

Copy and pasting this primer into ChatGPT GPT-4 and then following up with this prompt:

```
given a wikipedia page name, get the main image of that page
```

The nice little robot now gives us everything we need to prepare the REST node. After a quick description we get the request and response scripts we need:

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-1.png)

</div>

We can simply copy and paste those into the corresponding properties of the REST node. Next we get the **Endpoint** and **Method** nicely listed for us. We also copy these parameters into REST node properties. It even provides us with a little bit of explaination of how to set up the inputs and how to use the outputs of the node.

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-2.png)

</div>

We can now hook up the REST node as shown in the example above and simply put in a Wikipedia page name and provide a size of the image and we get the resulting URL back that we can connect to an image node.

## Refining your answer

Sometimes you will get an answer back that may be correct but you don't know exactly what the result is. You can always hook it up in Noodl and just test it, view the outputs and see if the result matches your expectations. Or you can simply ask Chat GPT. In this example I asked it to create a spotify API integration, the prompt was:

```
get the songs of a playlist using the spotify API
```

It provided me with everything I needed to copy and paste into the REST node.

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-3.png)

</div>

But I wasn't sure about what the content of the output was, so I asked:

```
What is the format of an object in the songs output?
```

And it give me a rought outline of the object along with a few examples. 

If you find that the inputs and outputs are not to your liking, or that it did not exactly do what you were asking for simply try providing it more context and ask it to change the code.

## Providing context

The ChatGPT models were trained on data up to 2021 so it's clearly missing some more recent APIs, such as actually it's own API. But you can provide context when asking it to generate code for you.

```
using this api https://platform.openai.com/docs/api-reference/chat/create I want to provide messages as an array of string and get the response back
```

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-4.png)

</div>

It gives you a nice piece of code, but after copy&pasting it into my REST node and testing it on an exampt, it does not give the expected result. In this case I just get an array of `undefined`, thats weird. Lets see what ChatGPT thinks about that.

```
I just got an array of undefined back 
```

It fixes the problem and gives you a new updated function. This works much better. That is pretty astounding!

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/rest/gpt-5.png)

</div>

Sometimes the REST call will fail and generate an HTTP error. If the error is not shown on the REST node you can find the error in the web debugger. If you are on the frontend click on the debug icon at the top bar:

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/debug-1.png)

</div>

If you are in a cloud function, open the debugger for the cloud function runtime:

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/debug-2.png)

</div>

In the debugger look for the **Network** tab:

<div class="ndl-image-with-background m">

![](/docs/getting-started/ai-assisted-dev/rest/network.png)

</div>

Any failed calls will generally be highlighted in red, you can find your endpoint and look at the response from the request. See if you can find an error message and let ChatGPT know about the error and try to have it fix it.

Have fun playing with Noodl and AI assisted development and let us know of your discoveries in the Discord community!








