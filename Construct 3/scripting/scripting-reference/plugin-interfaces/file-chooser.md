---
title: "File Chooser script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/file-chooser"
---

# File Chooser script interface

## On this page
- [File Chooser events](#internalH1Link0)
- [File Chooser APIs](#internalH1Link1)

---
The `IFileChooserInstance` interface derives from [IDOMInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/idominstance) to add APIs specific to the [File Chooser plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/file-chooser). 

## File Chooser events
See [instance event](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/interfaces/instance-event) for standard instance event object properties. 
**"change"**  
Fired when a file or set of files has been chosen from the input control.

## File Chooser APIs
**click()**  
Acts as if the file chooser was clicked, which brings up the system file picker. This allows the button to be completely customized, as the actual File Chooser object can be moved offscreen, and a custom sprite or other object used to activate the `click()` method instead. 

> **Tip**  
> The browser may only allow this method in a user gesture (e.g. mouse click).

**clear()**  
Reset the control to its initial state with no selection, clearing any prior picked file.

**getFiles()**  
Return an array of [File](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fAPI%2fFile) objects representing the currently chosen files.
