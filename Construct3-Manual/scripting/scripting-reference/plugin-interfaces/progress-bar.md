---
title: "Progress Bar script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/progress-bar"
release: 476.3
---

## On this page

- [Progress Bar events](#progress-bar-events)
- [Progress Bar APIs](#progress-bar-apis)

---

The `IProgressBarInstance` interface derives from [IDOMInstance](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance) to add APIs specific to the [Progress Bar plugin](https://www.construct.net/make-games/manuals/construct-3/plugin-reference/progress-bar).

## Progress Bar events

See [instance event](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/instance-event) for standard instance event object properties.

**"click"**  
Fired when the progress bar is clicked.

## Progress Bar APIs

**progress**  
Set or get the current progress value, from 0 to the maximum.

**maximum**  
Set or get the maximum progress value, at which the progress bar is shown full indicating a completed operation.

**setIndeterminate()**  
Set the progress bar in to an "indeterminate" state, intended to indicate that it is working, but the progress is unknown.

> **Tip**  
> In indeterminate mode the progress and maximum values are both set to 0.

**tooltip**  
The string used as the tooltip for the progress bar.
