---
title: "Effect instance script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ieffectinstance"
---

# Effect instance script interface

## On this page
- [Examples](#internalH1Link0)
- [Effect APIs](#internalH1Link1)

---
The `IEffectInstance` script interface represents the parameters for a single effect on a [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance), [ILayer](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout/ilayer) or [ILayout](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/layout-interfaces/ilayout). It is typically accessed through the `effects` property.

## Examples
See the [Scripting effect parameters](https://editor.construct.net/#open=scripting-effect-parameters) example for a demonstration of using the `setParameter()` method to modify effect parameters.

## Effect APIs
**index**  
The zero-based index of this effect, which is its index in the `effects` array.

**name**  
A read-only string of the effect name.

**isActive**  
A boolean indicating whether this effect is enabled or not. Inactive effects act the same as the effect being deleted, but the effect can later be reactivated if it is needed again. Note making effects inactive if they are not needed improves performance.

**setParameter(index, value)**  
**getParameter(index)**  
Set or get an effect parameter by the zero-based parameter index. Most parameters use a number as the value. Note however that color parameters are represented by an array with three elements, i.e. `[r, g, b]`. The R, G and B values are normalized to floats in the [0, 1] range.
