---
title: "IFamily script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ifamily"
---

# IFamily script interface

## On this page
- [Getting an IFamily](#internalH1Link0)
- [Family APIs](#internalH1Link1)

---
The `IFamily` script interface represents a family in the project, e.g. a family of Sprite object types created in the Project Bar. 
`IFamily` derives from [IObjectClass](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjectclass) which is a base class shared with object types ([IObjectType](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjecttype)). 

## Getting an IFamily
As with object types, references to the project's families are typically accessed through the [IRuntime](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/iruntime) interface `objects` property. For example `runtime.objects.Family1` would refer to the `IFamily` interface for the family *Family1*, assuming it was added to the project. 

## Family APIs
**getAllObjectTypes()**  
Returns an array of all the [IObjectType](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjecttype) members of this family.

***objectTypes()**  
Iterates over all the members of this family (as [IObjectType](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iobjecttype)).

**hasObjectType(objectType)**  
Returns a boolean indicating whether the specified `IObjectType` is a member of this family.
