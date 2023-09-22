## Encoding Parameters in the URL

The [Page Inputs](/nodes/navigation/page-inputs) node is used to send parameters between Pages by encoding them in the URL. This is useful for example if you want certain input parameters to be available at a page, no matter the state of the app. The user may for example press __Refresh__ in the browser. Since the parameters are encoded in the URL they will still be available in the **Page** through a **Page Inputs** node.
Another case for encoding parameters in the URL is for users to be able to share a link, with a full route to a specific place in your app, with specific parameters set.

There are two types of parameters **Path Parameters** and **Query Parameters**. There can only be one **Path Parameter** while you can have any number of **Query Parameters**.

### Path Parameter

A **Path Parameter** is added to the route of the page at the end. For example a **Page** with **URL Path** `mypage` with a path parameter defined, will expect the next part of the route to be the value of that parameter. The route `mypage/monkey` will result in the **Path Parameter** of the **Page** to get the value `monkey`. Using **Path Parameter** is a convenient way to encode a specific data entry to be prepopulated in a **Page**. As an example the **Path Parameter** could be the **Id** of a **Record**.

### Query Parameter

A **Query Parameter** are encoded using `?parameter=value;` notation in the URL. You can have any number of **Query Parameters**.