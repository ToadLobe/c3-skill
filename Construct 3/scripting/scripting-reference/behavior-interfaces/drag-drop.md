---
title: "Drag & Drop behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/drag-drop"
---

# Drag & Drop behavior script interface

## On this page
- [Drag & Drop behavior events](#internalH1Link0)
- [Drag & Drop behavior APIs](#internalH1Link1)

---
The `IDragDropBehaviorInstance` interface derives from [IBehaviorInstance](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) to add APIs specific to the [Drag & Drop behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/drag-drop).

## Drag & Drop behavior events
See [behavior instance event](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/behavior-instance-event) for standard behavior instance event object properties.

**"dragstart"**  
Fired when the object starts being dragged.

**"drop"**  
Fired when the object is dropped after being dragged.

## Drag & Drop behavior APIs
**axes**  
Set or get a string indicating if the dragging is locked to a specific axes, which must be one of `"horizontal"`, `"vertical"` or `"both"`.

**drop()**  
Call while dragging to force the object to be dropped.

**isDragging**  
A read-only boolean indicating if the object is currently being dragged.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
