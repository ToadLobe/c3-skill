---
title: "Shadow Caster behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/shadow-caster"
release: 476.3
---

## On this page

- [Shadow Caster behavior APIs](#shadow-caster-behavior-apis)

---

The `IShadowCasterBehaviorInstance` interface derives from [IBehaviorInstance](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) to add APIs specific to the [Shadow Caster behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/shadow-caster).

## Shadow Caster behavior APIs

**height**  
Set or get the simulated height of the object, which adjusts the length of shadow it casts.

**tag**  
Set or get a string with a tag for this shadow caster. This is used to match the object with different [Shadow Light](https://www.construct.net/make-games/manuals/construct-3/plugin-reference/shadow-light) objects, depending on their properties.

**isEnabled**  
A boolean indicating if the behavior is enabled. If disabled, the behavior no longer has any effect on the object.
