---
title: Workspace Modules
hide_title: true
---

# Workspace Modules

:::danger

Currently, the new Noodl CLI doesn't have support to upload to a workspace, it is supported in the older version of the Noodl CLI, for example, version `0.7.2`.

:::

## Using the old Noodl CLI

To find the workspace id and access key.

Open the [Noodl console](https://console.noodl.net/) and manage a workspace, if you are admin you will have access to the **Access Key**. The workspace id can be found in the URL on that page, for example `https://console.noodl.net/#/workspaces/g58p2h` have the **workspace id** `g58p2h`.

Run this in the same folder where you have `module.json`.

```bash
$ noodl-cli push <workspace-id>/<access-key>
```
