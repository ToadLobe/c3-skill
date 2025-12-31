---
title: "Value Track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track/value-track"
---

# Value Track

## On this page
- [Adding Value Tracks](#internalH1Link0)
- [Value Track Properties](#internalH1Link1)

---
A value track is a special kind of [track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track) which is not tied to any [instance](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instances).
Because they are not tied to any instance the value they interpolate doesn't immediately affect anything, instead it needs to be queried at runtime using the [Timeline plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/timeline-controller) before it can be used.
They are a little bit harder to use, but offer great flexibility in what they can be used for.
Value tracks can only have a single [properly track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track) and a [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline) can have as many as needed.

## Adding Value Tracks
To add a value track to a timeline follow any of these methods:

- Use the split button of the <kbd>+</kbd> button in the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar) toolbar and choose the option `Track › Add value`.
- Right-click some Timeline Bar empty space and select `Track › Add value`.

## Value Track Properties
**Name**  
Must be unique in the timeline. Can be used to query the value of the track at runtime.

**Animation mode**  
**Ease**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

**Enabled**  
**Locked**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the track level will apply the change to every sub-element.

**Track ID**  
An optional identifier to query the value of the track at runtime.
