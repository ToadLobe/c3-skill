---
title: "Common expressions"
source: "https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/common-features/common-expressions"
---

# Common expressions

## On this page
- [Angle](#internalH1Link0)
- [Appearance](#internalH1Link1)
- [Hierarchy](#internalH1Link2)
- [Misc](#internalH1Link3)
- [Size & Position](#internalH1Link4)
- [Time](#internalH1Link5)
- [Z Order](#internalH1Link6)
- [Template](#internalH1Link7)

---
The following [expressions](../../project-primitives/events/expressions.md) are common to several plugins.

## Angle
**Angle**  
The object's current angle, in degrees. 0 degrees is facing right and angles increment clockwise.

## Appearance
**ColorValue**  
A number representing the color property of the instance. This can be used with the *Set color* action to set an object's color to match another object.

**Opacity**  
The object's current opacity (semitransparency), from 0 (transparent) to 100 (opaque).

## Hierarchy
These expressions are available for plugins that support the *scene graph* feature, allowing objects to be connected together so they move, rotate and scale as if they were one large object.

**ChildCount**  
Return the number of children currently attached to this object (with the *Add child* action) in the hierarchy. This is 0 if the object has no children.

**AllChildCount**  
Return the number of children currently attached to this object (with the *Add child* action) in the hierarchy, including all descendants. This is 0 if the object has no children
**ParentUID**  
The unique ID (UID) of this object's parent in the hierarchy. If this object has no parent, it returns -1.

## Misc
**AsJSON**  
Save the object state to a string of data in JSON format, and return it. This can be downloaded or otherwise stored, and later the state of the object restored using the *Set from JSON* action.

**Count**  
The number of [instances](../../project-primitives/objects/instances.md) of the [object type](../../project-primitives/objects/object-types.md).

**PickedCount**  
The number of instances meeting the event's conditions. For example, if the event has the condition "Mouse is over Sprite", *Sprite.PickedCount* will return the number of Sprite instances that the mouse is over.

**ObjectTypeName**  
The name of the object type for the given object. For example *Sprite.ObjectTypeName* will return "Sprite". When used as a family expression, this returns the name of the actual object type, never the name of the family itself.

**IID**  
Return the instance's index ID (IID). See [instances](../../project-primitives/objects/instances.md).

**UID**  
Return the instance's unique ID (UID). See [instances](../../project-primitives/objects/instances.md).

**Tags**  
Get all the current instance tags as a space-string.

**TagsCount**  
Get the number of tags an instance has.

**TagAt**  
Get the tag at a zero-based index.

## Size & Position
**BBoxLeft**  
**BBoxRight**  
**BBoxTop**  
**BBoxBottom**  
Return the layout co-ordinates of the object's axis-aligned bounding box. This is the smallest unrotated box that completely encloses the object, taking in to account any rotation or stretching.

**BBoxMidX**  
**BBoxMidY**  
Return the layout co-ordinates of the mid-point of the object's axis-aligned bounding box. This is not necessarily the same position as the object origin, such as if the origin is not exactly in the middle.

**Width**  
**Height**  
Return the size of the object in pixels.

**ImagePointX(nameOrNumber)**  
**ImagePointY(nameOrNumber)**  
**ImagePointZ(nameOrNumber)**  
Return the position of one of the object's image points from its currently displaying animation frame in layout co-ordinates. Either the image point's name or its number can be passed. Note that when using a number, 0 refers to the origin, so the first image point is number 1.

**X**  
**Y**  
Return the object's position in the layout, in pixels. The origin (0,0) is at the top-left of the layout and the Y axis increments downwards.

## Time
**dt**  
Return delta-time according to the object's own timescale. See [Delta-time and framerate independence](https://www.construct.net/tutorials/delta-time-framerate-2) for more information.

## Z Order
**LayerName**  
The name of the layer the instance is currently on.

**LayerNumber**  
The zero-based index of the layer the instance is currently on.

**ZElevation**  
Return the current elevation on the Z axis for the instance relative to its layer. This is not affected by the layer's Z elevation.

**TotalZElevation**  
Return the instance's Z elevation added to the layer's Z elevation, providing the total Z elevation the instance appears at.

**ZIndex**  
Get the zero-based index of the Z order of this instance within its current layer. 0 is the bottom instance, increasing up to the top instance.

## Template
**TemplateName**  
The name of the template used to create this instance. Returns an empty string if no template was used.
