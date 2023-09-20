---
title: Noodl SDK Input and Output Types
hide_title: true
---

# Noodl SDK Input and Output Types

Here are some Typescript typings to fill in all the types, in the future this will be included directly with the SDK.

There are two ways to set the type on a Input or Output, either with the shortcut like this:

```ts
{
  // ...
  inputs: {
    myInput: "string",
    displayName: "My Input",
    group: "My Group",
    default: "My default input value",
  },
  // ...
}
```

Or with the full type where you can apply more options, like this:

```ts
{
  // ...
  inputs: {
    myInput: {
      name: "string",
      codeeditor: "plaintext",
      allowEditOnly: true
    },
    displayName: "My Input",
    group: "My Group",
    default: "My default input value",
  }
  // ...
}
```

## Types

The type can also be `*` (star) to be any type, removing all connection type restrictions in the editor.

```ts
type TypeEditor = "javascript" | "plaintext" | "graphql" | "css" | "html";

interface BuiltInType {
  name: string;
  codeeditor?: TypeEditor;
  /** Allow the Input to only be edited via the property panel */
  allowEditOnly?: boolean;
}

export interface ObjectType extends BuiltInType {
  name: "object";
}

export interface ArrayType extends BuiltInType {
  name: "array";
}

export interface StringType extends BuiltInType {
  name: "string";
}

export interface StringListType extends BuiltInType {
  name: "stringlist";
}

export interface NumberType extends BuiltInType {
  name: "number";
  units?: string[];
  defaultUnit?: string;
  marginPaddingComp?: string;
}

export interface BooleanType extends BuiltInType {
  name: "boolean";
}

export interface SignalType extends BuiltInType {
  name: "signal";
}

export declare type EnumListItem = {
  label: string;
  value: string;
};

export interface EnumType extends BuiltInType {
  name: "enum";
  enums: EnumListItem[];
}

export interface ColorType extends BuiltInType {
  name: "color";
}

export interface ImageType extends BuiltInType {
  name: "image";
}

export interface IconType extends BuiltInType {
  name: "icon";
}

export interface FontType extends BuiltInType {
  name: "font";
}

export interface TextStyleType extends BuiltInType {
  name: "textStyle";
}

export interface ComponentType extends BuiltInType {
  name: "component";
}

export interface DimensionType extends BuiltInType {
  name: "dimension";
}

export interface SourceType extends BuiltInType {
  name: "source";
}

export interface ResizingType extends BuiltInType {
  name: "resizing";
}

export interface VariableType extends BuiltInType {
  name: "variable";
}

export interface CurveType extends BuiltInType {
  name: "curve";
}

export interface QueryFilterType extends BuiltInType {
  name: "query-filter";
}

export interface QuerySortingType extends BuiltInType {
  name: "query-sorting";
}

export interface PagesType extends BuiltInType {
  name: "pages";
}

export interface ProplistType extends BuiltInType {
  name: "proplist";
}
```
