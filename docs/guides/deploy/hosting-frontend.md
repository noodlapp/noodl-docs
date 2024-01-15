---
title: Self Hosting your Noodl frontend
hide_title: true
---

# Self hosting your Noodl frontend

## What you will learn in this guide

In this guide you will learn how to **Self Host** by deploying your Noodl App frontend to a local folder and then host it on either Google Cloud Platform or AWS.

## Deploying to Local Folder

Open up the deployment popup in Noodl to save a version of your frontend to a folder on your local machine, this folder will contain everything needed and you can simply upload the content to your hosting service.

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/hosting-frontend/noodl-deploy-to-folder.png)

</div>

Make sure you pick the backend you want to use for the deploy.

## Hosting your Frontend at GCP or AWS

- **Google Cloud Platform** If you would like use GCP to host the frontend you can follow this [guide](https://cloud.google.com/storage/docs/hosting-static-website). There you will create a bucket, a load balancer and a CDN.

- **Amazon Web Services** If you prefer to use AWS you can watch this [video](https://www.youtube.com/watch?v=BpFKnPae1oY&ab_channel=AmazonWebServices) it will explain how to create an S3 bucket and how to route traffic using the AWS DNS service, Route 53.
