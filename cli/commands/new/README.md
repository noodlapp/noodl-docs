---
title: CLI Command new
hide_title: true
---

# Command: new

Create a new Noodl module template.

### Example

```bash
# Create a React Module in the relative "./my-module" folder.
noodl-cli new react-lib ./my-module
```

### Available Templates

#### `react-lib`

Create a module with React and Logic Component support.

#### `lib`

Create a module with Logic Component support.

## Synopsis

```
noodl-cli new <template> <path> [--name <name>]
```

### Configuration

#### `name`

- Default: folder name
- Type: String
- Alias: `-n`

The module name.
