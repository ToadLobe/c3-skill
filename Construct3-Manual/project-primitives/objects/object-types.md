---
title: "Object types"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/object-types"
---

# Object types
**Object types** are a central part of game design in Construct. Object types define a 'class' of an object. For example, *TrollEnemy* and *OgreEnemy* could be different object types of the Sprite [plugin](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/plugins). They have different animations and events can be applied separately to make them look and act differently, despite the fact they are both Sprite objects.
There can be multiple [instances](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/instances) of an object type in a project. For example, you may wish for there to be four *TrollEnemy* objects awaiting the player in a game. These four **instances** share the same animations, images, behaviors, instance variables and events. (In the case of instance variables, each instance stores its own unique value, e.g. for health, and behaviors work independently for each instance too.)

**Object types** do not themselves have a position, angle or size. These are properties of the **instances** of the object type. The [Project Bar](https://www.construct.net/make-games/manuals/construct-3/interface/bars/project-bar) displays the object types in the project, but not the instances. You can also add, rename and delete object types from the Project Bar.
[Events](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events) are made to apply to an object type. The event then filters the instances that meet the condition. For example, the event "Bullet collides with Alien" is an event that applies to all instances of the *Bullet* and *Alien* object types. However, when the event runs, the actions only apply to the specific *instances* involved in the collision. For more information see [How events work](https://www.construct.net/make-games/manuals/construct-3/project-primitives/events/how-events-work).
Object types can also be grouped together in to [Families](https://www.construct.net/make-games/manuals/construct-3/project-primitives/objects/families)  `[Paid plans only]` . This can help avoiding repeating the same events for different object types.
