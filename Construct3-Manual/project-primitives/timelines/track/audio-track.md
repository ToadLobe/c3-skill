---
title: "Audio Track"
source: "https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track/audio-track"
---

# Audio Track

## On this page
- [Adding Audio Tracks](#internalH1Link0)
- [Audio Track Properties](#internalH1Link1)

---
An audio track is a special kind of [track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/track) which can be used to trigger audio playback from a [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline).
Audio tracks can have two types of [property tracks](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track), the main audio source one and another one to control it's volume. A [timeline](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/timeline) can have as many as needed.
While the audio playback is connected to the corresponding timeline, it is not exclusively controlled by it. If a value is provided in the **Tag** property of the [audio source property track](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines/property-track/audio-source), then the [Audio plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/audio) can be used to further control playback.

## Adding Audio Tracks
To add an audio track to a timeline follow any of these methods:

- Use the split button of the <kbd>+</kbd> button in the [Timeline Bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/timeline-bar) toolbar and choose the option `Track › Audio audio`.
- Right-click some Timeline Bar empty space and select `Track › Add audio`.
- Drag & Drop from either from the **Sound** or **Music** folders in the [Project bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/project-bar) into the [Timeline bar](https://www.construct.net/en/make-games/manuals/construct-3/interface/bars/tilemap-bar).

The audio track itself doesn't have much functionality in on itself, instead it is the audio source property track, which holds the more specific properties. Look into that for more details.

## Audio Track Properties
**Name**  
Must be unique in the timeline.

**Animation mode**  
**Result mode**  
**Ease**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). These properties follow an inheritance pattern.

> **Tip**  
> These properties only affect the corresponding volume property track of an audio track.

**Enabled**  
**Locked**  
See the section on common timeline element properties in [Timelines](https://www.construct.net/en/make-games/manuals/construct-3/project-primitives/timelines). Changing these at the track level will apply the change to every sub-element.

**Track ID**  
Audio tracks don't use this property.
