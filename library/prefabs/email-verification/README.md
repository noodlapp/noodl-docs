---
title: Email Verification
hide_title: true
---

# Email Verification

This prefab contains a set of cloud functions that can help you add support for user email verification and a reset password flow by sending the user emails with links containing secret tokens. You can find a more thorough guide [here](/docs/guides/cloud-logic/email-verification).

When you clone the prefab your project will get the following cloud functions:

<div className="ndl-image-with-background l">

![](/library/prefabs/email-verification/email-verification-1.png)

</div>

## Settings

Before you can use the functions you must provide a few configuration parameters. These prefabs use [SendGrid](/library/prefabs/sendgrid) as an email service, to use them you need to sign up and get an account (it's free to test).

Look [here](/docs/guides/cloud-logic/email-verification#settings) for a description of how to prepare the configuration, and check out the [Config](/nodes/data/cloud-data/config) node for more information on config parameters.

## Sign up project template

The best way to learn more about email verification and password reset is to try the **Sign up project template** and read the [guide](/docs/guides/cloud-logic/email-verification)

<div className="ndl-image-with-background l">

![](/docs/guides/cloud-logic/email-verification/signup-template.png)

</div>

