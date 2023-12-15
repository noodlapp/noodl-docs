---
title: Setting up a backend on Amazon Web Services
hide_title: true
---

# Setting up a backend on Amazon Web Services

This guide will cover how to start up a Noodl backend on AWS using the Noodl backend docker image. You will need an AWS account setup. The service you will be using is called **App Runner**. Start by going to the console for that service.

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-1.png)

</div>

There you can create a new service.

<div className="ndl-image-with-background m">

![](/docs/guides/deploy/using-an-external-backend/aws-2.png)

</div>

When setting up the new service you need to specify that the image is to be fetched from the container registry.

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-3.png)

</div>

The image URL to use is:

```bash
public.ecr.aws/noodl/noodl-self-hosted-cloud-services:latest
```

You can choose if you want to manually control when you redeploy and instance. This is needed if the Noodl backend image is updated and you want to apply the updates to your service. You can also choose to automatically track changes. When you are done click **Next**.

On the next screen you provide a **name** for your service and you can change settings for service. For the most part you can keep the standard settings but a few needs to be changed.

- **Port** The port of the application needs to be set to **3000**

You also need to provide a few environment variables to the instance. You do this using the **Add environment variable** button.

<div className="ndl-image-with-background xl">

![](/docs/guides/deploy/using-an-external-backend/aws-4.png)

</div>

The following variables are needed:

- **APP_ID** You can choose this yourself, you need to provide it in the Noodl editor when connecting to your backend.
- **MASTER_KEY** This you be a password that you need to keep safe. With this password you get full access to your backend, this is also needed to connect to your backend from Noodl.
- **DATABASE_URI** This is the database url that you got when setting up the MongoDB database in the previous step. This can also be a Postgres url.

- **PUBLIC_SERVER_URL** (Optional) This is needed if you want to support file uploads and downloads, in that case you might need to go back here and update this environment variable after you have received the URL in the next step. This variable should be the public url where your clour services can be reached, starting with `https://`.

With that in place you can move on to reviewing your settings and deploying your service. It might take a few minutes to completely setup you new service.

Once the service is up and running the last step is to find the URL of the service. You can find it by navigating to the service details page. It will look something like this:

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/using-an-external-backend/aws-5.png)

</div>

With that URL, master key and app id in hand, [go back](/docs/guides/deploy/using-an-external-backend#connect-your-application-to-the-self-hosted-backend) to the self hosting guide.

# File storage

If you want to support file upload and download, you need to specify the **PUBLIC_SERVER_URL** environment variable as noted above. By default the files will be stored in the database of your application, but if you instead want to use an S3 bucket for storage you need to create a bucket, and policy, you can find instructions on that [here](http://docs.parseplatform.org/parse-server/guide/#configuring-s3adapter). Then specify these additional environment variables:

- **S3_ACCESS_KEY** The AWS access key for a user that has the required permissions. Required.
- **S3_SECRET_KEY** The AWS secret key for the user. Required.
- **S3_BUCKET** The name of your S3 bucket. Needs to be globally unique in all of S3. Required.
- **S3_REGION** (Optional) The AWS region to connect to. Default: ‘us-east-1’
- **S3_BUCKET_PREFIX** (Optional)Create all the files with the specified prefix added to the filename. Can be used to put all the files for an app in a folder with ‘folder/’.
- **S3_DIRECT_ACCESS** (Optional)Whether reads are going directly to S3 or proxied through your Parse Server. If set to true, files will be made publicly accessible, and reads will not be proxied. Default: false
