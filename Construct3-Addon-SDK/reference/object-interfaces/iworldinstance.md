---
title: "IWorldInstance interface"
source: "https://www.construct.net/en/make-games/manuals/addon-sdk/reference/object-interfaces/iworldinstance"
---

# IWorldInstance interface

## On this page

- [Methods](#internalH1Link0)

---

The `IWorldInstance` interface represents an instance of a "world" type plugin in Construct. It derives from [IObjectInstance](iobjectinstance.md).

## Methods

**GetLayer()**  
Return the [ILayer](../model-interfaces/ilayer.md) this instance belongs to.

**GetLayout()**  
Return the [ILayout](../model-interfaces/ilayout.md) this instance belongs to.

**GetBoundingBox()**  
Returns an [SDK.Rect](../geometry-interfaces/rect.md) representing the bounding box of the instance in the layout.

**GetQuad()**  
Returns an [SDK.Quad](../geometry-interfaces/quad.md) representing the bounding quad of the instance in the layout.

**GetColor()**  
Returns an [SDK.Color](../geometry-interfaces/color.md) representing the premultiplied color of the instance. This combines the instance's color tint with its opacity in the alpha channel.

**SetOpacity(o)**  
**GetOpacity()**  
Set or get the alpha component of the instance's color, representing its opacity, in the 0-1 range.

**SetX(x)**  
**SetY(y)**  
**SetXY(x, y)**  
**GetX()**  
**GetY()**  
Set and get the position of this instance in layout co-ordinates.

**SetZElevation(z)**  
**GetZElevation()**  
Set and get the Z elevation (position on Z axis) of this instance. Note this is relative to the Z elevation of the layer the instance is on.

**GetTotalZElevation()**  
Get the total Z elevation of this instance, which is its own Z elevation added to the Z elevation of the layer it is on.

**SetAngle(a)**  
**GetAngle()**  
Set and get the angle of the instance, in radians.

**SetWidth(w)**  
**SetHeight(h)**  
**SetSize(w, h)**  
**GetWidth()**  
**GetHeight()**  
Set and get the size of the instance, in pixels.

**SetOriginX(x)**  
**SetOriginY(y)**  
**SetOrigin(x, y)**  
**GetOriginX()**  
**GetOriginY()**  
Set and get the current origin of the instance in the layout. Note this is normalized to a [0, 1] range, e.g. 0.5 is the middle.

**ApplyBlendMode(iRenderer)**  
Sets the current blend mode of the given [IWebGLRenderer](../graphics-interfaces/iwebglrenderer.md) according to the *Blend mode* property of the instance in Construct. This is only relevant if the plugin specifies that it supports effects. Use this in the `Draw()` method to set the correct blend mode.
