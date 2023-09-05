---
title: Building User Interfaces
hide_title: true
---
# Building User Interfaces in Noodl

The user interface in your Noodl App are all the things that your users will interact with on your screen. Lists, buttons, checkboxes, etc.

In Noodl, you build these using **Visual Nodes**, i.e. the blue nodes in your node graph. Visual nodes represents something that can be seen on a screen. In contrast, logical nodes, for example representing a query to the database or a condition to be evaluated are not directly visible on the screen.

The visual nodes can also be grouped together in hierarchies mainly to define how they are relate to each other in the layout on the screen. By putting two **Buttons** as children of the same **Group** you can for example hide both these **Buttons** by hiding the **Group**. The order of the visual nodes also generally tells which order they will be rendered on the screen. Nodes later in the tree will be rendered on top of nodes earlier in the tree, if they happen to occupy the same space in the tree. (However this can be overridden using the **zIndex** property.)

As you can understand, for a large App, the visual tree can quickly become very large. That's why you typically create **Components** of subtrees that capture a specific functionality. The components can in themselves contain more components. Components are also a great way to re-use UI in many places in your app and create a design system greatly reducing time to build UI.

The visual nodes can also be styled and customized heavily from a visual perspective. Also the visualization aspect of a visual node can be saved and re-used using the style variants system. Many visual nodes also have multiple visual states. For example a Button will typically change appearance when the user hovers over it, clicks it or if the button is disabled. Using the visual states system or the **States** node, you can finetune in detail how you UI will react visibly to ser interactions.

All of this and more is covered in this part of the guide.

