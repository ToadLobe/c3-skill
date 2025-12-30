---
title: "Timeline track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track"
---

# Timeline track

## On this page
- [Adding Tracks](#internalH1Link0)
- [Track Properties](#internalH1Link1)

---
In the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar), a track is represented as a row with an icon of the corresponding [instance](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/instances).
Tracks can be moved to and from [track folders](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track-folder) or the root of the [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline) by dragging and dropping. A timeline can have many different tracks in its hierarchy, one for each instance added to it.

## Adding Tracks
To add a track to a timeline follow any of these methods:

- Use the <kbd>+</kbd> button in the Timeline Bar toolbar to bring up a dialog from which to choose instances to add to the timeline.
- Drag & drop instances from the [Layout View](https://www.construct.net/en/make-games/manuals/construct-3/interface/layout-view) into the bar.
- Right-click some instances in the Layout View and select `Timeline › Add to timeline`.
- Right-click some Timeline Bar empty space and select `Track › Add instances`.

## Track Properties
**Name**  
The name of the track. This can not be changed and is automatically generated from the object name and the instance UID.

**Animation mode**  
**Result mode**  
**Ease**  
**Path mode**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

**Visible**  
**Enabled**  
**Locked**  
**Show UI Elements**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the track level will apply the change to every sub-element.

**Track ID**  
An optional identifier to be used in tandem with the **Set Instance** action. See the [Timeline plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/timeline-controller) section of the manual for more details.
