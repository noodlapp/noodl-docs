---
hide_title: true
hide_table_of_contents: true
title: Noodl.Records
---

# Noodl.Records

With **Records** you can query, read and write records to the cloud database. All functions are **async** and will throw an exception if they fail.

```javascript
try {
  await Noodl.Records.delete(myRecord);
} catch (e) {
  console.log(e);
}
```

#### **`Noodl.Records.query(className,query,options)`**  
This is an **async** function that will query the database using the query that you provide and return the result or throw an exception if failed. The **query** parameter has the same format as the [advanced query](/nodes/data/cloud-data/query-records#advanced-filters) of the **Query Records** node.

```javascript
const results = await Noodl.Records.query("myClass", {
  Completed: { equalTo: true },
});
```

The result is an array of **Noodl.Object**. The **options** can be used to specify sorting, it also follows the same pattern as the advanced filters of the **Query Records** node.

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["createdAt"],
  }
);
```

You can also specify the limit for how many records to return as a maximum (defaults to 100) with the **limit** option, and if you want the returned records to start from a given index specify the **skip** option.

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["-createdAt"], // use - to sort descending
    skip: 50,
    limit: 200,
  }
);
```

If you are limiting your results or if you have more records that the maximum allowed returned count then you might want to know the total record count to enable pagination. You can do this with the **count** option. Note that this changes the returned value to an object with **results** and **count**.

```javascript
const res = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    sort: ["-createdAt"], // use - to sort descending
    skip: 50,
    limit: 200,
    count:true,
  }
);

console.log(res.results); // This is the array with results
console.log(res.count); // This is the total count that matches the query
```

If you have properties in the returned records that are pointers they will by default returned as a string containing the **Id** of the record that they are pointing to (if any). You can hovever choose to include the entire record by using the `include` option. In the example below immagine that we have a property that is a pointer called **Customer** that points to a customer record. By using the `include` options as shown below the returned records will now include the entire object and all properties instead of just the pointer value.

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {},
  {
    include: "Customer",
  }
);
```

You can also use dot notation to recursively include points wihtin included objects. In the example below we also include records pointed to by the `Author` property and within those objects also any records pointed to by the `Location` property.

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {},
  {
    include: "Customer,Author.Location",
  }
);
```

By default all properties are returned for all records in the result. This is sometimes not the preferred way since it can result in big responses if you are only looking for a few properties. You can use the `select` option to specify the names of the properties you want included in the result. The below example will only return the `Title`and `Body` properties in the result.

```javascript
const results = await Noodl.Records.query(
  "myClass",
  {
    Completed: { equalTo: true },
  },
  {
    select: "Title,Body",
  }
);
```

:::note
One important note, even though only a select few properties are returned from the cloud service they are merged with any existing properties in the record data model that have previously been fetched. Since all record objects are global to the Noodl application.
:::

#### **`Noodl.Records.count(className,query)`**  
This function returns the count of the number of records of a given class, optionally matching a query filter.

```javascript
// The number of records of myClass in the database
const count = await Noodl.Records.count("myClass");

// The number of myClass records in the database that match a query
const completedCount = await Noodl.Records.count("myClass", {
  Completed: { equalTo: true },
});
```

#### **`Noodl.Records.distinct(className,property,query)`**  
**Only available in cloud functions**  
This function returns an array of unique values for a given propery or all records in the database of a given class. Optionally you can suppoly a query filter.

```javascript
// The unique values of the "category" property of all records of myClass in the database.
const categories = await Noodl.Records.distinct("myClass", "category");

// The unique values of the "category" property of all records of myClass in the database that matches the query, e.g. that have the property Completed set to true.
const completedCount = await Noodl.Records.distinct("myClass", "category", {
  Completed: { equalTo: true },
});
```

#### **`Noodl.Records.fetch(objectOrId,options)`**  
Use this function to fetch the latest properties of a specific record from the cloud database. It will return the object / record.

```javascript
// If you use the a record ID you must also specify the class
const myRecord = await Noodl.Records.fetch(myRecordId, {
  className: "myClass",
});

// You can also fetch a record you have previously fetched or received from a
// query, to get the latest properties from the backend
await Noodl.Records.fetch(myRecord);
```

By default fetch will return pointer properties as the string **Id** of the object pointed to. But you can use the `include` option to specify that you want the content of the object to be returned instead.

```javascript
// By using include the request will return the pointed to object with all properties instead of
// just the string Id
await Noodl.Records.fetch(myRecord,{
  include:["Customer","Author"]
});
```

#### **`Noodl.Records.save(objectOrId,properties,options)`**  
Use this function to write an existing record to the cloud database. It will attempt to save all properties of the record / object if you don't specify the optional properties argument, if so it will set and save those properties.

```javascript
Noodl.Objects[myRecordId].SomeProperty = "hello";

// If you use the record id to save, you need to specify the classname explicitly
// by specfiying null or undefinded for properties it will save all proporties in
// the record
await Noodl.Records.save(myRecordId, null, { className: "myClass" });

// Or use the object directly
await Noodl.Records.save(Noodl.Objects[myRecordId]);

// Set specified properties and save only those to the backned
await Noodl.Records.save(myRecord, {
  SomeProperty: "hello",
});
```

#### **`Noodl.Records.increment(objectOrId,properties,options)`**  
This function will increment (or decrease) propertis of a certain record saving it to the cloud database in a race condition safe way. That is, normally you would have to first read the current value, modify it and save it to the database. Here you can do it with one operation.

```javascript
// Modify the specified numbers in the cloud
await Noodl.Records.increment(myRecord, {
  Score: 10,
  Life: -1,
});

// Like save, you can use a record Id and class
await Noodl.Records.save(myRecordId, { Likes: 1 }, { className: "myClass" });
```

Using the options you can also specify access control as described in this [guide](/docs/guides/cloud-data/access-control), this let's you control which users can access a specific record. The access control is specified as below:

```javascript
await Noodl.Records.save(myRecord, null, {
  acl: {
    "*": { read: true, write: false }, // "*" means everyone, this rules gives everyone read access but not write
    "a-user-id": { read: true, write: true }, // give a specific user write access
    "role:a-role-name": { read: true, write: true }, // give a specific role write access
  },
});
```

#### **`Noodl.Records.create(className,properties,options)`**  
This function will create a new record in the cloud database and return the **Noodl.Object** of the newly created record. If it's unsuccessful it will throw an exception.

```javascript
const myNewRecord = await Noodl.Records.create("myClass", {
  SomeProperty: "Hello",
});

console.log(myNewRecord.SomeProperty);
```

You can use the **options** agrument to specify access control rules as detailed under **Noodl.Records.save** above.

#### **`Noodl.Records.delete(objectOrId,options)`**  
Use this function to delete an existing record from the cloud database.

```javascript
// If you specify the id of a record to be deleted, you must also provide the
// class name in the options
await Noodl.Records.delete(myRecordId, { className: "myClass" });

// Or use the object directly (provided it was previously fetched or received via a query)
await Noodl.Records.delete(Noodl.Objects[myRecordId]);
```

#### **`Noodl.Records.addRelation(options)`**  
Use this function to add a relation between two records.

```javascript
// You can either specify the Ids and classes directly
await Noodl.Records.addRelation({
  className: "myClass",
  recordId: "owning-record-id",
  key: "the-relation-key-on-the-owning-record",
  targetRecordId: "the-id-of-the-record-to-add-a-relation-to",
  targetClassName: "the-class-of-the-target-record",
});

// Or if you already have two records that have been previously fetched or returned from a
// query
await Noodl.Records.addRelation({
  record: myRecord,
  key: "relation-key",
  targetRecord: theTargetRecord,
});
```

#### **`Noodl.Records.removeRelation(options)`**  
Use this function to remove a relation between two records.

```javascript
// You can either specify the Ids and classes directly
await Noodl.Records.removeRelation({
  className: "myClass",
  recordId: "owning-record-id",
  key: "the-relation-key-on-the-owning-record",
  targetRecordId: "the-id-of-the-record-to-remove-a-relation-to",
  targetClassName: "the-class-of-the-target-record",
});

// Or if you already have two records that have been previously fetched or returned from a
// query
await Noodl.Records.removeRelation({
  record: myRecord,
  key: "relation-key",
  targetRecord: theTargetRecord,
});
```

#### **`Noodl.Records.aggregate(className,aggregates,query)`**  
**Only available in cloud functions**  
This function will compute a set of aggregates based on properties in the records. It can be limited with a query. You can use the following aggregate functions:

- `sum` Compute the sum of a number property access matching records.
- `min` Compute the minimum value of a number property access matching records.
- `max` Compute the maximum value of a number property access matching records.
- `avg` Compute the average value of a number property access matching records.

```javascript
// This will compute two averages on all records of myClass, TotalCost will be the sum of all Cost properties, and AverageSalary will be the average of all Salary properties
const categories = await Noodl.Records.aggregate("myClass", {
  TotalCost: { sum: "Cost" },
  AverageSalary: { avg: "Salary" },
});

// This will compute and return the maximum and minimum age for records with Category equal to Remote
const completedCount = await Noodl.Records.aggregate(
  "myClass",
  {
    MinAge: { min: "Age" },
    MaxAge: { max: "Age" },
  },
  {
    Category: { equalTo: "Remote" },
  }
);
```
