---
title: Develop with ChatGPT
hide_title: true
---

# Develop with ChatGPT

ChatGPT is a great tool that is used daily to generate code by developers all over the world. However (being a language model and not a programming engine) it does come with its own set of quirks and limitations. In this guide we will look at tips, tricks and strategies for how to get around them, and see why ChatGPT is a great pairing with Noodl.

> This guide is about how to use [http://chat.openai.com](http://chat.openai.com) as part of the development process.

## When to ChatGPT

One of the lesser known limitations of ChatGPT is that it works with a tiny token memory. The details are technical, and not too interesting in the context of this guide, so we won't go in on it too much. Really, the only thing you need to know is that ChatGPT has the memory of a goldfish, and will start forgetting things (including its own train of thought) pretty quickly if you feed it too much information.

This makes ChatGPT bad at handling large scale application code with many different moving parts. Using ChatGPT to code an application from scratch requires you to know how to program an application from scratch so that you can make up for all the mistakes the AI makes.

Another implication of the tiny memory is that it limits the amount of instructions we can provide. ChatGPT gives the best solutions when you are very descriptive with what you want to achieve, and a full application requires a lot of describing.

The best way to get good code from ChatGPT is really to break up your application into smaller modular pieces, generating those with AI, and gluing them together yourself.

This is where Noodl shines. Since one of the base concepts of Noodl is to break your application into smaller reusable components, we dont have to ask ChatGPT to generate a whole app for us. We can just ask it to do the boring, tedious or more complicated functions. This still requires a little bit of programming know-how, but thanks to Noodls seamless combination of visual and text-based programming you don't have to know how to write complex apps at scale and can instead focus on understanding the functionality at hand.

:::note

While this guide is generally about ChatGPT you will get a lot more out of it if you already have some experience with Noodl. It might be a good idea to check out the [Fundamentals](/docs/getting-started/fundamentals) guide, or do the interactive tutorials in the Noodl editor first.

:::

### TL;DR:

ChatGPT is great at generating code for Function and Script nodes, helping you connect to API's, work with external libraries, aggregating data or figuring out chunks of your app.

It's a good idea to modularize your functions into separate Function nodes, or combine multiple Function nodes in series in a component. This allows ChatGPT to shine in a smaller scope while allowing for great reusability within Noodl.

ChatGPT is also great as a search engine that you can have a conversation with. The ChatGPT model is trained on data up until 2021, so while it's not good for researching current events, it is very powerful with more general development patterns that can easily be translated into Noodl graphs.

Sidenote: We have been experimenting with generating full Noodl Node graphs, but due to the limited memory it's not too good at memorizing current documentation.

## Priming for code generation

If we want to use ChatGPT for code generation we have to be prepared to modify the code it gives us. That is just the current state of the AI. However, we can minimize the need for modifications if we start the chat with some instructions, giving ChatGPT a bit of context so that it understands what a Noodl function looks like, some rules for what it can/can't do and how to create inputs and outputs to the node. This is called a _primer_, and here is one that we have been experimenting with:

````markdown
Hi ChatGPT. Here are your instructions. You must follow all of them.

- You will be writing Noodl functions.
- An input in a Noodl function must follow the format "Inputs.InputName".
- An input in a Noodl function is only read, never written to.
- An output in a Noodl function must follow the format "Outputs.OutputName = value".
- A variable in a Noodl function never stores an output.
- Sending a signal from a Noodl function must follow the format "Outputs.SignalName()".
- Signals can not be passed values. All output values must be set as a Noodl function output.
- Inputs and Outputs in a Noodl function are global.
- Noodl functions do not use import statements.
- Noodl functions do not use export statements.
- Noodl functions can use recources from a CDN.
- Noodl functions can access API endpoints with "fetch".
- Define constants as Noodl function inputs.
- A Noodl function follows this format:

```js
const inputName = Inputs.InputName;

// Check if the input has a value, otherwise return
if (!inputName) return;

// Perform the function logic
```

Reply "Okidoki" if the instructions are clear, otherwise ask me to clarify
````

This primer has given us great results so far - in many cases the snippets have worked with no modifications at all. Don't shy away from modifying it or trying a different approach though. ChatGPT is a complex technology, and new techniques and strategies are constantly being discovered. If you find something interesting, please don't shy away from sharing it with the community over at our [Discord server](https://discord.com/invite/23xU2hYrSJ).

## Tips and tricks for prompting code

### Benefits of a primer

Using the primer above lets us use very sloppy prompts, while still getting a useful result:

![](/docs/getting-started/ai-assisted-dev/chat-gpt/sloppy-prompt.png)

Due to the primer, this result can be copied stright into a Function node without any modifications. Here is how it looks in a node graph with all the inputs and outputs:

<div class="ndl-image-with-background xl">

![](/docs/getting-started/ai-assisted-dev/chat-gpt/sloppy-prompt-connected.png)

</div>

All we needed to provide was an API key. Amazing!

### Adding detail

The example above is very simple. The more complex functionality we want, the more specific we need to be. ChatGPT has a lot of imagination, and it's a good idea to leave it as little room for interpretation as possible.

![](/docs/getting-started/ai-assisted-dev/chat-gpt/detailed-prompt.png)

This was my third attempt. In the first one I asked it to _prompt the user for their location_. It then gave me a soultion using the `Window.prompt()` method. This opens up a system dialog with a text input where the user can type in the `latitude` and `longitude` themselves. It bears noting that the last time `Window.prompt()` was used in a serious project, the smartphone was still a new and revolutionary invention.

In the second attempt I asked it to _get the users location_. Then it just assumed that the `latitude` and `longitude` was a part of the `user` object. Not specific enough.

The third attempt looks perfect, at least at a first glance. The users location is now gotten automatically.

The location was not the only issue though. If we take a closer look at the code we see that there are some places where ChatGPT didn't follow the prompt. We asked it to send an `Outputs.UserFailed()` if `user.firstName` or `user.lastName` where missing. Instead it sends the `UserFailed` signal if it cant find a user of the right ID. It also sends `MapboxData` and `FullName` separately. It _almost_ does what we told it. Discrepancies like this can happen anywhere in the generated code, so it's always a good idea to look over the code you get.

These off-prompt moments are not only a bad thing though. As an example, we didn't ask ChatGPT to exit the function using `return` when after sending the `UserFailed` signal, but it was clever enough to assume that we didn't want the function to continue running without a user.

### Partial rewrites

If we find that parts of the code doesn't fit us, we can always ask ChatGPT to iterate on it.

![](/docs/getting-started/ai-assisted-dev/chat-gpt/iterate-prompt.png)

It now exits the function when it should, and outputs the data properly. There are still unnecessary checks made for `firstName` and `lastName` when building the `fullName`. They will not throw any errors, or mess up the function in any other way, and the performance hit is so small that it can be ignored, but if we want to keep the code clean we can just manually remove those two lines.

### Iterative prompting

If we want even more control we can prompt our function in smaller steps. Let's generate a function that does a device generalisation based on the viewport width.

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-1.png)

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-2.png)

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-3.png)

Note that I asked for `widths` but it gave me heights as well! Let's clear that up.

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-4.png)

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-5.png)

Here I realize that I made two mistakes. First of all, I was hoping for ChatGPT to be a bit clever and assume that I meant to check for a value inside of the desktop range. Instead it tries to match an exact width, which will fail if the browser is resized. The second error was to output a `IsDesktop` boolean. If we check for ranges with the given sizes, there will be a gap between desktop and mobile. Let's make a lazy fix.

![](/docs/getting-started/ai-assisted-dev/chat-gpt/chain-prompt-6.png)

Now, this is not a perfect function by far. Good thing is that this prompting could go on and on, until we have a function that gives us perfect detection. Just remember the goldfish token memory, and that you might need to reprime the AI after a while.

## Refreshing ChatGPT's memory

If you notice that you start getting answers that stray too far off from things you have told ChatGPT earlier, it is a good idea to reprime the memory. This can be easily done by starting a new chat and sending the primer again. After that you can paste in the function you are working with, together with new instructions on how how you want the function to be modified.

## Research assistant

Another interesting use apart from generating code is to use it for research. Finding relevant information can be complicated, especially for more abstract concepts. ChatGPT is great for giving you a kickstart:

![](/docs/getting-started/ai-assisted-dev/chat-gpt/research-4.png)

In the same way we can easily ask follow-up questions:

![](/docs/getting-started/ai-assisted-dev/chat-gpt/research-1.png)

![](/docs/getting-started/ai-assisted-dev/chat-gpt/research-2.png)

![](/docs/getting-started/ai-assisted-dev/chat-gpt/research-3.png)

(This might not be the best example if there are any newer API's than 2021, or if anyone of them updated ther pricing, etc. It works for the most part though!)

## Age of exploration

While a lot is known about ChatGPT, there are still a lot of dark spots on the AI-map. New strategies, primers, tips and tricks are invented and uncovered every day. If you have found something that we havent touched upon here and feel like sharing it, please hop on in to the #chat-gpt channel on the [Discord server](https://discord.com/invite/23xU2hYrSJ). Exploration is more fun together, and we all stand on the shoulders of each other in this exciting new step within technology.
