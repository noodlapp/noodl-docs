---
title: CLI Command project list
hide_title: true
---

# Command: project list

Clone a Noodl project via git.

:::tip

For this to work it is required that git is install on the machine.

:::

## Synopsis

```
noodl-cli project clone <project-id> <path> [--username <username>] [--password <password>] [--shell <shell>]
```

### Configuration

#### `username`

- Default: undefined
- Type: String

Noodl username.

#### `password`

- Default: undefined
- Type: String

Noodl password.

#### `shell`

- Default: undefined
- Type: String

Pass a different shell to git clone.
