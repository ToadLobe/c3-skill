---
title: "Timeline property track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track"
---

# Timeline property track

## On this page
- [Adding Property Tracks](#internalH1Link0)
- [Property Track Properties](#internalH1Link1)

---
In the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar), property tracks are represented as a row with an icon of the corresponding property being affected by the [track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track) they belong to.
A property track represents the property of an instance that can be interpolated and is nested inside a parent track. Property tracks can refer to common [instance](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instances) properties, [instance variables](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instance-variables), [effect](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/effects) parameters, [behavior](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/behaviors) properties and [plugin](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/plugins) properties.
A track can have many property tracks in its hierarchy, one for each property of the instance the [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline) will be affecting. A property track can exist at the root of a track or nested inside [property track folders](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track-folder). They can be moved to and from property track folders or the root of the parent track by dragging and dropping. They can not be moved outside of their parent track.

## Adding Property Tracks
Property tracks are added automatically when:

- A new track is added to a timeline.
- A keyframe for a new property is added.

To add an empty property track, right-click a track or property track folder and select **Add properties**.

## Property Track Properties
**Name**  
The name of the property track. This can not be changed it takes the same name as the property being modified.

**Animation mode**  
**Result mode**  
**Ease**  
**Path mode**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

**Visible**  
**Enabled**  
**Locked**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the property track level will apply the change to every sub-element.
