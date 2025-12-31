---
title: "Timeline property keyframe"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-keyframe"
---

# Timeline property keyframe

## On this page
- [Property Keyframe](#internalH1Link0)
- [Adding Property Keyframes](#internalH1Link1)

---

## Property Keyframe
In the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar), property keyframes are represented by a mark in the same row as the property track they belong to.
Property keyframes hold the values the [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline) uses when it is playing. They are at the end of the timeline hierarchy so any changes made at this level will only affect the property keyframe itself.
A [property track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track) can have many different property keyframes, one for each position in the timeline with values that must be reached when animating. Unlike [master keyframes](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/master-keyframe), property keyframes cannot be moved and must have a parent master keyframe. If a property keyframe's time is changed by either dragging it or changing the value in the [Properties Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/properties-bar), a new master keyframe will be created at the new position along with new property keyframes to go with it.

## Adding Property Keyframes
Property keyframes can be created following the same method to create master keyframes, since property keyframes will be created for each property track at a given position in the timeline.
To create property keyframes for specific property tracks, follow these steps:

- Turn on **Edit mode** by pressing the **Edit** button in the Timeline Bar toolbar.
- Move the current time marker to the position in the timeline where you want to create property keyframes. This can be done by either clicking on the time ruler or by dragging the red line.
- Make changes to the [instances](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instances) you want to animate.
- Right-click on the property track you wish to add a property keyframe to and select **Set keyframes**.

If multiple property tracks are selected when using the **Set keyframes** option, property keyframes will be created for all of them.
Either method will always create a master keyframe along with the property keyframes.

### Property Keyframe Properties
**Index**  
The index of the property keyframe in its property track. It can not be changed. This value is updated if the keyframe's position in the timeline changes.

**Name**  
The name of the property track this property keyframe belongs to. This cannot be changed since it takes the same name as the property being modified.

**Value**  
The value the property keyframe holds. This can be either numeric, text, boolean or color. Depending on the result mode in use this will be Relative or Absolute.

**Time**  
The position of the property keyframe in the timeline. Since property keyframes cannot really be moved, changing this value will create a new master keyframe at the new position with new property keyframes to go with it. This can be updated from the Properties Bar or by dragging the keyframe in the Timeline Bar.

**Enabled**  
**Result mode**  
**Ease**  
**Path mode**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines).

### Unique properties to angle values
**Direction**  
Allows you to choose which direction the angle will take to arrive at it's final value. By default Construct will attempt to take the shortest path but it can be forced to rotate clockwise or anti-clockwise by changing this property.

**Revolutions**  
The amount of additional 360 degree turns the angle should take before arriving at it's final value.
