---
title: Request Example
hide_title: true
---

# Request Example

This demo component executes a request to your Supabase instance.

:::note
In itself, this component is not usable. It is just here to show you an example of how to create such a Request component based on the Supabase Client API.
:::

<div className="ndl-image-with-background xl">

![](/library/prefabs/supabase/request-example.png)

</div>

> Please note that [Supabase Client](/library/prefabs/supabase/components/setup-client/) needs to be set up in your app before you can properly make requests to Supabase.

## Making requests

The advanced nature of Supabase means that you need to write some code to make requests to your backend. Luckily their API is well documented, and can even be generated using the Noodl AI `/Function` command.

No matter if you write the calls yourself or generate them, it could be good to familiarize youself with their simple database functions. You can find them [here](https://supabase.com/docs/reference/javascript/select).

It is also a good idea to familiarize yourself with building custom Components in Noodl, as this will increase the requests reusability and maintainability. [This guide](/docs/guides/user-interfaces/components) teaches you how to build visual components, but the same concepts apply to logic components (that will be the most useful for Supabase requests).
