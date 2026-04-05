---
title: "Rank Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-objects/rank-object"
release: unknown
---

## On this page

- [The XP Rank Object](#example-rank)
- [Example Rank](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The XP Rank Object

This object represents an XP rank.  Ranks are achieved when the player reaches the required XP level.

## Example Rank

```none
{
  "id": "fabb6ad1-ad7d-472f-9996-386deef9dbc2",
  "atXP": 100000,
  "logos": [
    { ... },
    { ... }
  ],
  "formattedAtXP": "20,674",
  "title": "Four Star General",
  "description": "The most accomplished of all generals.",
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  }
}
```

## Object Properties

**id guid**
A unique ID for this rank.

**atXP int64**
The amount of XP required to reach this rank.

**logos Array<Picture>**
If this rank has a logo, a list of [picture objects](https://www.construct.net/game-services/manuals/game-services/common-objects/picture-object). Each picture object is the same logo, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256, 512` will be shown here along with the original logo size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original logo width.

**formattedAtXP string**
The amount of XP required to reach this rank formatted to the requested formatting culture, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**title string**
The title of this rank.

**description string**
The description of this rank.

**originalLanguage Language**
The language this ranks properties are written in.

**responseLanguage Language**
The language this ranks properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
