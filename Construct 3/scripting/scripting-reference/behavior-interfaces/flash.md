---
title: "Flash behavior script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/behavior-interfaces/flash"
---

# Flash behavior script interface

## On this page
- [Example](#internalH1Link0)
- [Flash behavior events](#internalH1Link1)
- [Flash behavior APIs](#internalH1Link2)

---
The `IFlashBehaviorInstance` interface derives from [IBehaviorInstance](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/ibehaviorinstance) to add APIs specific to the [Flash behavior](https://www.construct.net/make-games/manuals/construct-3/behavior-reference/flash).

## Example
Below is a sample code snippet demonstrating flashing `inst` (assumed to be an instance with the Flash behavior) and logging to the console when the flash finishes.
```javascript
// Handle "flashend" event which logs to console when
// the flash has finished
inst.behaviors.Flash.addEventListener("flashend", e =>
{
console.log("Flash finished!");
});
// Start flashing with the Flash behavior for 2 seconds
inst.behaviors.Flash.flash(0.1, 0.1, 2);
```
Copy ## Flash behavior events
See [behavior instance event](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/behavior-instance-event) for standard behavior instance event object properties.

**"flashend"**  
Fired when a flash finishes.

## Flash behavior APIs
**flash(onTime, offTime, duration)**  
Start flashing for the given `duration` with the object shown visible for the `onTime` and invisible for the `offTime`, with all times in seconds.

**stop()**  
Stop any currently active flash effect, returning the object to a visible state.

**isFlashing**  
A read-only boolean indicating if the object is currently flashing.
