---
title: "ISDKDOMPluginBase addon SDK interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkdompluginbase"
---

# ISDKDOMPluginBase addon SDK interface

## On this page
- [ISDKDOMPluginBase APIs](#internalH1Link0)

---
The `ISDKDOMPluginBase` interface is used in the runtime as a base class for DOM plugins (that create a HTML element) in the addon SDK. It derives from [ISDKPluginBase](https://www.construct.net/make-games/manuals/construct-3/scripting/scripting-reference/addon-sdk-interfaces/isdkpluginbase). 

## ISDKDOMPluginBase APIs
**_addElementMessageHandler(handler, func)**  
**_addElementMessageHandlers(arr)**  
Add a message handler to receive messages posted by `PostToRuntimeElement()` in [DOMElementHandler](https://www.construct.net/en/make-games/manuals/addon-sdk/runtime-reference/base-classes/domelementhandler). `handler` must match the string passed to `PostToRuntimeElement()`. `func` accepts two arguments: the associated instance, and an optional object with extra details passed to `PostToRuntimeElement()`. Typically this function just forwards the handler to an instance method, e.g. `this._addElementMessageHandler("click", (inst, e) => inst._onClick(e));`. The `_addElementMessageHandlers` variant accepts an array of `[handler, callback]` which is convenient when adding multiple handlers.
