---
title: "Timeline controller script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/timeline-controller"
release: 476.3
---

## On this page

- [Timeline controller APIs](#timeline-controller-apis)

---

The `ITimelineControllerObjectType` interface derives from [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to add APIs specific to the [Timeline Controller plugin](https://www.construct.net/make-games/manuals/construct-3/plugin-reference/timeline-controller).

Note this class derives from the object class interface, not the instance interface. Typically it is used through `runtime.timelineController` instead of the named object.

## Timeline controller APIs

**play(timeline, tags)**  
Start playback of a timeline specified by a string of its name. The tags to associate with this playback are optional, and can be specified as a space-separated string, or an array of strings. The method returns an [ITimelineState](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itimelinestate) representing the playback state of the timeline.

**setInstances(instances, trackId)**  
Set one or more instances to be used for the next timeline playback. The `instances` parameter can be either an `IWorldInstance` or an array of `IWorldInstance` in order to set multiple instances. The instances can be different to the ones used in the editor. The instance will be set to the track with the corresponding `trackId`, specified as a string. The `trackId` is also optional: if omitted it uses the first track in the timeline. It can also be used repeatedly omitting the `trackId` to keep setting the tracks in the timeline in sequence. When the timeline is played it will then affect the specified instances instead of the ones used in the editor. This method is equivalent to the *Set instance* action; for more information see the [Timeline Controller manual entry](https://www.construct.net/make-games/manuals/construct-3/plugin-reference/timeline-controller).

***allTimelines()**
Iterates all [ITimelineState](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itimelinestate) representing all the currently playing timelines.

***timelinesByTags(tags)**
Iterates [ITimelineState](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/itimelinestate)s matching the specified tags, which can be specified as either a space-separated string, or an array of strings.
