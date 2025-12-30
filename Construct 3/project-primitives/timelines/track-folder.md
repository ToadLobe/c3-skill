---
title: "Timeline track folder"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track-folder"
---

# Timeline track folder

## On this page
- [Adding Track Folders](#internalH1Link0)
- [Track Folder Properties](#internalH1Link1)

---
In the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar), track folders are represented as a row with an icon of a folder.
These are used to organize elements in a [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline), and don't have any impact in the playback. A track folder can have nested [tracks](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track) as well as other track folders. They can be moved to and from track folders or the root of the timeline by dragging and dropping.
It is worth noting that the only specific property of a track folder is the **Name**. Every other property in it doesn't have a direct impact on the folder itself and exists only as a convenience to make modifications in all of the items within it.

## Adding Track Folders
Track folders can be added to the root of a timeline by doing any of the following:

- Right-clicking any section of the bar which doesn't correspond to any other element of a timeline and selecting `Track › Add subfolder`.
- Using the split menu of the Timeline Bar <kbd>+</kbd> toolbar button, and selecting `Track › Add subfolder`.

A track folder can be created directly as a subfolder by right-clicking another track folder.

## Track Folder Properties
**Name**  
The name of the track folder.

**Animation mode**  
**Result mode**  
**Ease**  
**Path mode**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

**Visible**  
**Enabled**  
**Locked**  
**Show UI Elements**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the track folder level will apply the change to every sub-element.
