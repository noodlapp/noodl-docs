---
title: Records Relationships
hide_title: true
---
# Record Relationships

## What you will learn in this guide

In this guide we will look into relationships between different **Records** in the database. This could for example be a _pointer_ stored in a **Record** that points to another **Record**. It could also be a "Many to Many" relationship where an **Record** can have a list of _pointers_ to other **Records**.

This is very useful when you deal with _relational data_, for example if you have a Post **Class** in your database, and you want to keep track of all the **Users** (another **Class**) that liked that post, a **Post** record can store relations to those Users in a property.

## Overview

We will first look at **Pointers**, i.e. a _One-to-many_ relationship. Then we will look at **Relations**, i.e. _Many-to-many relationshipts_.

It's recommended that you have some experience working with Backends, Databases and **Records** to get most out of this guide, so if you haven't already, going through the following guides before is recommended.

-   [Creating a Backend](/docs/guides/cloud-data/creating-a-backend)
-   [Creating a Class](/docs/guides/cloud-data/creating-a-class)
-   [Creating Records](/docs/guides/cloud-data/creating-new-database-records)

## Relationships between Records

If we imagine an App where we have a couple of different **Classes**, say a _Post_ Class that contains blog posts and a _Comment_ Class with comments on these post. The **Records** in these classes need to be related and we need to be able to query these relations.

## Pointers - One-to-many relationships

The most simple relationship is a **Pointer**. This type of relationship is often referred to as a _One-to-many_ relationship. For example, a blog _Post_ will have many *Comment*s, but each _Comment_ only belong to one _Post_. To create this kind of relationship we use a property of a special kind called a **Pointer**.

A **Pointer** property can reference another **Record** of a certain Class via it's _Id_. In this case we want to reference the _Post_ that is the owner of a _Comment_. So in the _Comment_ class we create a property, let's call it `Owner`, and give it a _Pointer_ type and specify that it should point to _Post_ records.

?> This is called a _backward_ relationship, i.e. the _Comment_ points back to the _Post_. If you want to find all _Comments_ for _Post_ you will simply look for all _Comments_ pointing back to the _Post_ you are interested in.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/create-pointer.png)

</div>

Now to set the pointer you can pass in the **id** of a **Post** Record. You could for example do this when you create a new _Comment_ **Record** . It's important the the **Record** you point to is of the right type. In this case a _Post_.

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/insert-pointer.png)

</div>

Later, if you want to retrieve all the _Comments_ for a _Post_ you simply use a **Query Records** node and ask for all **Comments** where the **Owner** property points to the specific comment.

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-pointer-1.png)

</div>

The specific **id** we are looking for, we provide through an input.

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-pointer-2.png)

</div>

You can inspect your relationships in the data browser, if you go ahead and open the _Dashboard_ for the cloud services and find the _Comment_ Class. There you can see the record _Id_ that the pointer currently points to, and you can click it to jump to that particular record.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/comments-owner.png)

</div>

## Relation - Many-to-many relationships

Let's say that we introduce a new **Class** called _Group_, and a _Post_ can be part of many different *Group*s. In this case we cannot use the backwards pointing mechanism from the previous example. One single pointer from the _Post_ to the _Group_ would not work, since a _Post_ can be part of many _Groups_. Instead we need to use a concept called **Relation**. You need to start by creating a new property of the _Group_ **Record** that have the type _Relation_ and like pointers you need to specify the _Type_ and give it a name.

?> So in this case it becomes a _forward_ reference, the _Group_ has the relation property.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/create-relation.png)

</div>

It can be a bit tricky in the beginning to get the hang of relations. One way to look at it is this: In this example, A _Group_ have a list of pointers to all its _Posts_ that belongs to it. So a specific _Group_ can easily find its _Posts_ by following these pointers. The inverse question, a _Post_ who wants to know which _Groups_ it belongs to (it can be more than one!) can query for all _Groups_ that have a pointer in its list that's pointing at them.

When you have a _Relation_ property on a **Record** you need to use the nodes [Add Record Relation](/nodes/data/cloud-data/add-record-relation) and [Remove Record Relation](/nodes/data/cloud-data/remove-record-relation) to manage them. In these nodes you need to provide the **id** of the **Record** that has the relation property (Group in our case) and the **id** of the **Record** you want to add or remove to the relationship.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/record-relation-1.png)

</div>

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/record-relation-2.png)

</div>

In the same manner as with _Pointers_ you can go to the _Dashboard_ of the cloud services and find the relations of your models in the table. You can click _View relation_ to get a table of the relations for this particular model.

<div className="ndl-image-with-background">

![](/docs/guides/cloud-data/record-relations/view-relation.png)

</div>

Finally you need to be able to query the relations. You have two cases:

1. Either you want to find all _Post_ that are related to a _Group_. The you should create a **Query Records** of the class _Post_ (you want _Posts_ back from the query). You can then set up the filter according to the image below

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-data/record-relations/query-relation-1.png)

</div>

Note that you have to specify the name of the relation property in the class having the property (_Group_ in this case) as well.

2. If you want to make the inverse query, that is you want to ask for all _Groups_ that relates to a post, you create a **Query Records** node with the class _Group_ (you want _Groups_ back from the query). have a _Post_ **Record** (you have the _Id_ of a _Post_ **Record**) and you want to find all *Group*s that it belongs to you would use this javascript query in a **Query Records** that is set to the **Group** class.

```javascript
where({
    posts: { pointsTo: Inputs.PostId },
})
```

As you can see above you must also make sure that you use the correct relation field, in this case _posts_ on the _Group_ collection.
