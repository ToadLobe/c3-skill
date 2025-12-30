---
title: "Timeline property track folder"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track-folder"
---

# Timeline property track folder

## On this page
- [Adding Property Track Folders](#internalH1Link0)
- [Property Track Folder Properties](#internalH1Link1)

---
In the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar), property track folders are represented as a row with an icon of a folder.
These are used to organize elements in a [track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track), and don't have any impact in the playback of the [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline). A property track folder can have nested [property tracks](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track) as well as other property track folders. They can be moved to and from property track folders or the root of the corresponding track by dragging and dropping. Property track folders can not be moved outside their corresponding track.
When adding [effect](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/effects) parameters or [behavior](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/objects/behaviors) properties to a timeline, the created property tracks will be placed inside a special property track folder which is automatically given the name of the effect or behavior. The folder can not be renamed and only accepts property tracks which refer to the same effect or behavior.
It is worth noting that the only specific property of a property track folder is the **Name**. Every other property in it doesn't have a direct impact on the folder itself and exists only as a convenience to make modifications in all of the items within it.

## Adding Property Track Folders
Property track folders can be added to the root of a track by right-clicking a track and selecting **Add subfolder**. They can also be created as sub folders by right-clicking another property track folder.

## Property Track Folder Properties
**Name**  
The name of the property track folder.

**Animation mode**  
**Result mode**  
**Ease**  
**Path mode**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

**Enabled**  
**Locked**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the property track folder level will apply the change to every sub-element.
