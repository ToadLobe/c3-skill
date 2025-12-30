---
title: "Array script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/array"
---

# Array script interface

## On this page
- [Array APIs](#internalH1Link0)

---
The `IArrayInstance` interface derives from [IInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iinstance) to add APIs specific to the [Array plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/array). 

> **Tip**  
> The Array object can only store strings and numbers, since these are the only types Construct uses in expressions. Use normal JavaScript arrays to store other types.

## Array APIs
**width**  
**height**  
**depth**  
Retrieve the current dimensions of the array.

**setSize(w, h = 1, d = 1)**  
Set the size of the array in up to three dimensions. For one or two dimensional arrays, the later parameters can be omitted as they default to 1. (Note passing 0 for any dimension will create an array with zero elements that cannot store any data.) If the array grows, new elements have the value 0. If the array shrinks, elements are removed.

**getAt(x, y = 0, z = 0)**  
Retrieve an element from the array at the given X, Y and Z co-ordinates. For one or two dimensional access, the later parameters can be omitted as they default to 0.

**setAt(val, x, y = 0, z = 0)**  
Set an element in the array at the given X, Y and Z co-ordinates. `val` must be a number or string. For one or two dimensional arrays, the later parameters can be omitted as they default to 0.
