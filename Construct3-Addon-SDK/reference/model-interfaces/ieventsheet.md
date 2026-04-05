---
title: "IEventSheet interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/ieventsheet"
release: 476.3
---

## On this page

- [Methods](#methods)

---

The `IEventSheet` interface represents an event sheet in the project model.

> **Tip**  
> Since events can be nested underneath each other, they are represented as a tree. `GetRoot()` returns the root node of the tree.

## Methods

**GetProject()**  
Return the associated [IProject](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/iproject).

**GetName()**  
Return the name of the event sheet.

**GetRoot()**  
Return the root node of the event sheet. This is an [IEventParentRow](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/ieventparentrow) representing the top level of the event sheet.
