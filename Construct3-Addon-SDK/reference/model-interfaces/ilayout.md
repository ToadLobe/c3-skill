---
title: "ILayout interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/model-interfaces/ilayout"
release: 476.3
---

## On this page

- [Methods](#methods)

---

The `ILayout` interface represents a layout in the project model. Note that [ILayoutView](https://www.construct.net/make-games/manuals/addon-sdk/reference/ui-interfaces/ilayoutview) represents the editor view, but ILayout represents the layout in the project.

## Methods

**GetProject()**  
Return the associated [IProject](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/iproject).

**GetName()**  
Return the name of the layout.

**GetAllLayers()**  
Return an array of [ILayer](../../reference/model-interfaces/ilayer.md) representing all the layers on this layout.

**GetEventSheet()**  
Return the [IEventSheet](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/ieventsheet) assigned for this layout. Note that layouts do not have to have an event sheet assigned, so this can return `null`.
