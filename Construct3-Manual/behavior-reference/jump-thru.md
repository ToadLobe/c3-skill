---
title: "Jump-thru behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/jump-thru"
---

# Jump-thru behavior

## On this page
- [Jump-thru properties](#internalH1Link0)
- [Jump-thru conditions](#internalH1Link1)
- [Jump-thru actions](#internalH1Link2)

---
The **Jump-thru behavior** allows the [Platform behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/platform) to stand on the object, and jump on to it from underneath. This differs from the [Solid behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/solid), which the Platform behavior can stand on, but not jump on to from underneath. The image below illustrates the difference.
Note the Jump-thru behavior **does not support slopes**. Any slopes in your game should use the Solid behavior instead.

![Jump-thru vs. Solid behaviors](https://construct-static.com/images/v1721/uploads/articleuploadobject/0/images/976/jumpthru-solid.png)

### Scripting
When using JavaScript or TypeScript coding, the features of this behavior can be accessed via the [IJumpthruBehaviorInstance script interface](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/jump-thru).

## Jump-thru properties
**Enabled**  
Set whether the behavior is initially enabled or disabled. If disabled, the object no longer acts as if it is a Jump-thru, and the Platform behavior will always fall through it.

## Jump-thru conditions
**Is enabled**  
True if the behavior is currently enabled. This can be changed by the *Enabled* property or the *Set enabled* action.

## Jump-thru actions
**Set enabled**  
Enable or disable the Jump-thru behavior for this object.
