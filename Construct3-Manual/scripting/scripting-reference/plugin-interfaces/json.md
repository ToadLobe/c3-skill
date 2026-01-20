---
title: "JSON script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/json"
---

# JSON script interface

## On this page
- [JSON APIs](#internalH1Link0)

---
The `IJSONInstance` interface derives from [IInstance](../object-interfaces/iinstance.md) to add APIs specific to the [JSON plugin](../../../plugin-reference/json.md). JSON can be conveniently modified from script alone, but this interface allows exchanging data between event sheets and code.

## JSON APIs
**getJsonDataCopy()**  
Return a copy of the JSON data held in the object.

> **Tip**  
> Note since this returns a copy of the data, changing the returned data will not affect the contents of the JSON object.

**setJsonDataCopy(o)**  
Set the JSON data held in the object.

> **Tip**  
> Note this takes a copy of the data, so changing the provided data after this call will not affect the contents of the JSON object.

> **Tip**  
> The provided data is validated and will throw an exception if it's not valid JSON.

**setJsonString(str)**  
Parses a string as JSON data and stores the result in the JSON object.

> **Tip**  
> This will throw an exception if the string is not valid JSON.

**toCompactString()**  
**toBeautifiedString()**  
Return the contents of the JSON object converted to a string, either in compact form (which is smaller and more efficient to store and send), or "beautified" (which uses line breaks and indentation to make the result more readable).
