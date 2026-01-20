---
title: "IBehaviorType script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviortype"
---

# IBehaviorType script interface

## On this page
- [IBehaviorType APIs](#internalH1Link0)

---
The `IBehaviorType` interface represents a behavior added to an object class. For example if SpriteA and SpriteB both have the Bullet behavior added to them, then there are two behavior types, one for each object type. 

## IBehaviorType APIs
**runtime**  
A reference back to the [IRuntime interface](../iruntime.md).

**behavior**  
A reference to the [IBehavior](ibehavior.md) of the associated behavior.

**name**  
A read-only string of the behavior type name.
