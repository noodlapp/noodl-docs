---
title: Continuous Deployment
hide_title: true
---

# Continuous Deployment

The Noodl CLI have commands that can be used to interact with your Noodl projects.

:::note

These commands require authentication.

:::

## Clone Noodl Project

The project clone command `noodl-cli project clone` will call `git clone`, expecting that `git` is already installed on the machine.

```bash
$ noodl-cli project clone \
    --workspace-id <workspace-id> \
    --project-id <project-id> \
    --path <path>
```

## Build Noodl Project

```bash
$ noodl-cli build \
    --projectDir <project-path> \
    --outFile <path/file.zip>
```
