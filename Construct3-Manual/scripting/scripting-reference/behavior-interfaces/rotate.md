---
title: "Rotate behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/rotate"
release: 476.3
---

## On this page

- [Rotate behavior APIs](#rotate-behavior-apis)

---

The `IRotateBehaviorInstance` interface derives from [IBehaviorInstance](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) to add APIs specific to the [Rotate behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/rotate).

## Rotate behavior APIs

**speed**  
Set or get the rotation speed in radians per second. Positive values rotate clockwise and negative values rotate counter-clockwise.

**acceleration**  
Set or get the rotation acceleration rate in radians per second per second.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
