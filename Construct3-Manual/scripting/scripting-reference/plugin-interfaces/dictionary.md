---
title: "Dictionary script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/dictionary"
---

# Dictionary script interface

## On this page
- [Dictionary APIs](#internalH1Link0)

---
The `IDictionaryInstance` interface derives from [IInstance](../object-interfaces/iinstance.md) to add APIs specific to the [Dictionary plugin](../../../plugin-reference/dictionary.md).

> **Tip**  
> The Dictionary object can only use strings as keys, and strings/numbers as values, since these are the only types supported by the plugin. Use your own independent JavaScript [Maps](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fMap) to use other types.

## Dictionary APIs
**getDataMap()**  
Return the [Map](https://www.construct.net/out?u=https%3a%2f%2fdeveloper.mozilla.org%2fen-US%2fdocs%2fWeb%2fJavaScript%2fReference%2fGlobal_Objects%2fMap) which is used as the underlying data storage for the Dictionary object. This allows access to add, change, remove and iterate items.

> **Warning**  
> Only use string keys, and only store number or string primitives as key values, or the plugin will cease to work correctly.
