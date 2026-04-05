---
title: "ILayoutView interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/ui-interfaces/ilayoutview"
release: 476.3
---

## On this page

- [Methods](#methods)

---

The `ILayoutView` interface provides access to a Layout View from the SDK. Note that this interface represents the editor view; the [ILayout](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/ilayout) interface provides the interface to the actual layout in the project model.

## Methods

**GetProject()**  
Return the [IProject](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/iproject) representing the project associated with this Layout View.

**GetLayout()**  
Return an [ILayout](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/ilayout) representing the layout in the project model that this Layout View is showing.

**GetActiveLayer()**  
Return an [ILayer](https://www.construct.net/make-games/manuals/addon-sdk/reference/model-interfaces/ilayer) representing the current active layer selected in this Layout View.

**GetZoomFactor()**  
Return the current zoom factor of the Layout View. For example 1 represents 100% zoom, 0.5 represents 50% zoom, etc.

**LayoutToClientDeviceX(x)**  
Convert from layout co-ordinates to device pixel co-ordinates in the layout view canvas. This is useful for rendering at device pixel sizes after calling `SetDeviceTransform()`.

**LayoutToClientDeviceY(y)**  
Convert from layout co-ordinates to device pixel co-ordinates in the layout view canvas. This is useful for rendering at device pixel sizes after calling `SetDeviceTransform()`.

**SetDeviceTransform(iRenderer)**  
Set the given [IWebGLRenderer](https://www.construct.net/make-games/manuals/addon-sdk/reference/graphics-interfaces/iwebglrenderer) to a device pixel co-ordinate transform. This means co-ordinates used for rendering are based on device pixel co-ordinates relative to the layout view canvas, rather than layout co-ordinates.

**SetDefaultTransform(iRenderer)**  
Set the given IWebGLRenderer to a layout co-ordinate transform. This is the default and should be restored after using `SetDeviceTransform()`.

**Refresh()**  
Schedules the layout view to be redrawn at the next animation frame. Avoid unnecessarily refreshing the layout view, such as refreshing on a timer, since this can waste battery life.
