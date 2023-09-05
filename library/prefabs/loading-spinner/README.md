---
title: Loading Spinner
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Loading Spinner

The loading spinner is a useful prefab for when you need to indicate that data is loading or a task is being peformed and you want to prevent accidental input from the user while they are waiting.

It's very easy to use, simply drag the **Loading Spinner** component to your node editor and connect a signal to **Show** when you want to display it and **Hide** when you are done and want it hidden.

<div className="ndl-image-with-background xl">

![](/library/prefabs/loading-spinner/loading-spinner-nodes-1.png)

</div>

Above you can see a typical use case in combination with the **Query Records** node, trigger the **Show** signal when you start the request to the cloud services and then **Hide** when it finishes (remember to capture both successful and failed requests).

<div className="ndl-video">
    <video width="100%" autoPlay muted loop src={useBaseUrl("/library/prefabs/loading-spinner/loading-spinner.mp4")}/>
</div>

A feature of the loading spinner is that you can do multiple consecutive **Show** signals and it will keep track of the count and then require the same amount of **Hide** signals to close. This is useful if you have parallel request to the backend and you want to make sure all requests have completed before you hide the spinner.




