---
title: UI Controls and data
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl'
import ImportButton from '/src/components/importbutton'

# UI Controls and data
<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/ui-controls-and-data/final-crud.mp4")}/>
    <ImportButton zip="/docs/guides/data/ui-controls-and-data/final-crud-1.zip" name="CRUD Example" thumb="/docs/guides/data/ui-controls-and-data/final-crud-thumb.png" />
</div>

## What you will learn in this guide

In the guides up to this point we have often connected UI Controls, such as **Text Inputs**, to data. In this guide we will present a few patterns that is commonly used to connect data to UI controls.

## Connecting UI Controls to data

A very common pattern is that we want a UI Control to write to some sort of data node (**Variable**, **Object** etc) when it is updated. All UI Controls that allow for some sort of data input has both an input and an output for the data. For instance, the [Text Input](/nodes/ui-controls/text-input) has both an input and output called **Text**, and the [Slider](/nodes/ui-controls/slider) has an input and output called **Value**.

The output is used to write the data to some sort of data node. Most UI Controls have a **Changed** signal output that is triggered when the user has interacted with the control. This should be used as a trigger to an action that writes data. The most simple one being shown below. When the slider is updated we write the current value to a **Variable**.
 
<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/slider-set-variable.png)

</div>

This is the most basic pattern at it will make sure the **Variable** named *Volume* is updated when the slider is dragged. However, if the *Volume* variable is updated somewhere else, the slider is not updated to refelect that change. For that we can connect the **Variable** to the slider **Value** input as well. Like below:

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/slider-hooked-up.png)

</div>

This can be useful to create truly reactive user interfaces. Take the simple example below, where you have both a **Text Input** and a **Slider** that are both controlling the volume. The slider updates as soon as the user interacts with it, and the text input when it's blurred (looses focus) or when you press enter.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/slider-and-text-input.png)

</div>

Hooking you controls up likes this will keep them in sync when interacting with them. Check out the result below:

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/ui-controls-and-data/slider-and-text-input.mp4")}/>
</div>

## Forms

Many times you want to use a form, or simply a set of UI Controls, to view and edit the data in an **Object**. You could create a component that has an input for the **object id** of the object it should edit and then use the pattern above, but instead we want to save when a button is clicked. Let's say we want to create the simple form below:

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/form-1.png)

</div>

We will keep the information about a user (full name etc) in an **Object** and we can edit the object using the following simple component. Here you can see that the **Object Id** is provided as an input to this component. An **Object** node is used to "read" the data and connect it to the UI Controls, this will populate them with the correct data for the object when the **Object Id** changes. The properties are then written to the object when the **Save** button is clicked using the **Set Object Properties** node.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/form-2.png)

</div>

## Create, Read, Update & Delete

A very common pattern in web apps is CRUD (Create, Read, Update & Delete) user interfaces. This is you have a list of objects and you want to be able to create, read, update and delete these objects. Let's extend out form into a full CRUD user interface.

To begin with, we'll add a few small things to our **Form** component that we created above. First we will expose the **Mounted** property on the root **Group** node as an input. This will allow us to control the visibility of the form when using it in our CRUD interface.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-1.png)

</div>

Secondly, we will add a cancel button and send both the save button and cancel button **Clicked** signals as outputs from this component.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-2.png)

</div>

Then we end up with this. This is now our **Form** visual component. It will be used both for editing and creating new objects.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-3.png)

</div>

Now lets start on a new component, let's call this one **Members List**. Imaging the we want to manage a list of members with their name, if they want our marketing email and their general awesomeness. First we create the members list. We won't cover things like repeaters in detail in this guide, check out the [list](/docs/guides/data/list-basics) guide.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-4.png)

</div>

We have a [Repeater](/nodes/ui-controls/repeater) node that is connected to an [Array](/nodes/data/array/array-node) that we have given the **Id** "Members". This array will be empty to start with. We also have a button that we will later use to show the create form. We also need a **Member Item** that the repeater will use as template.

In the **Member Item** component, we simply show the full name of the object, and we include a delete button.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-5.png)

</div>

Now, let's add the form component to our **Members List** component to support creating new members. This is what that looks like:

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-6.png)

</div>

Let's review the different parts here:

* We created a [States](/nodes/utilities/logic/states) node and gave it three different states, **Create**, **Update** and **List**. These states will be used to toggle the visibility of our different parts of the user interface. We also made sure it starts in the **List** state.

* When the **Add member** button is clicked, a **Create New Object** node is triggered. In this node we set the default properties of the new member object. That means that the newly created object will start with these properties.

* When the **Create New Object** is done the states node is switched to **Create** state and the **Id** of the newly created object is passed to the **Object Id** input of the **Form** component that we created before.

* The **At List** and **At Create** outputs from the states node is used to control the visibility of the member list and the create form. So that changing the state of the **States** node will show the correct component.

* Finally, when the **Save** signal is sent from the **Form** component (the user has clicked the save button) the object is inserted into the **Members** array.

Phew, now we have the create part in place. Let's add the read and update part as well. For that we will just first add a small thing to the **Member Item** component. We will send an event with the [Send Event](/nodes/events/send-event) node when the text label is clicked, and we will pass along the object **Id** of the clicked object.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-7.png)

</div>

We simply called the event **Edit**, now we can receive the event in the **Members List** using the [Receive Event](/nodes/events/receive-event) node component and use it to toggle the **States** node to **Edit** state. As you can see we also added another instance of the **Form** component at the bottom of the **Members List** component and we hooked it up to the **States** node to control it's visibility.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-8.png)

</div>

Now that we have both create, read and update in place this is what we end up with in the **Members List** component.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-9.png)

</div>

Now we just have one final thing left, and that is to hook up the delete button in the **Member Item** component. That is pretty easy to do, we simple connect the **Click** signal to an **Remove Object From Array** making sure the we specify the array id **Members** that we used in the **Members List** component (so we are changing the right array) and then provide the object **Id** to remove as well.

<div className="ndl-image-with-background l">

![](/docs/guides/data/ui-controls-and-data/crud-10.png)

</div>

And there we go, now we have create the a fully functional CRUD user interface:

<div className="ndl-image-with-background xl">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/docs/guides/data/ui-controls-and-data/final-crud.mp4")}/>
    <ImportButton zip="/docs/guides/data/ui-controls-and-data/final-crud-1.zip" name="CRUD Example" thumb="/docs/guides/data/ui-controls-and-data/final-crud-thumb.png" />
</div>