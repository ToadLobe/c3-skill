---
title: "Bound to Layout behavior"
source: "https://www.construct.net/en/make-games/manuals/construct-3/behavior-reference/bound-to-layout"
---

# Bound to Layout behavior
The **Bound to Layout behavior** simply prevents an object leaving the edge of the layout. It is most useful on objects which move around but should not leave the layout area.
It has no conditions, actions or expressions, just the following property:
**Bound by**
Set to *Edge* to prevent any part of the object leaving the layout. The object will stop at the position shown below:

![Bound to Layout behavior edge setting](https://construct-static.com/images/v1721/uploads/articleuploadobject/0/images/974/boundtolayout-edge.png)

Set to *Origin* to only prevent the object's origin leaving the layout. The result depends on where the origin is placed on the object, but with a centred origin the object will stop in a position similar to the image shown below:

![Bound to Layout behavior origin setting](https://construct-static.com/images/v1721/uploads/articleuploadobject/0/images/975/boundtolayout-origin.png)
