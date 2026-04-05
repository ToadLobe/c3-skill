---
title: "Bonus Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-objects/bonus-object"
release: unknown
---

## On this page

- [The XP Bonus Object](#example-bonus)
- [Example Bonus](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The XP Bonus Object

This object represents an bonus for a period of time.  A bonus has a modifier (eg 1.5x) which means that any XP earnt during the bonus period is multiplied by 1.5x.

## Example Bonus

```none
{
  "id": "7761cae0-e571-42a2-ae01-901dce37e7f8",
  "startDate": "2026-04-05T07:11:42.5934173Z",
  "formattedStartDate": "KRQtV",
  "endDate": "2026-04-05T07:11:42.5934173Z",
  "formattedEndDate": "KRQtV",
  "title": "Double XP weekend!",
  "description": "This weekend only, earn 2x XP!  Let's go!",
  "modifier": 2,
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
A unique ID for this bonus.

**startDate datetime**
The date and time this bonus starts.

**formattedStartDate string**
The date and time this bonus starts formatted to the requested culture, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**endDate datetime**
The date and time this bonus ends.

**formattedEndDate string**
The date and time this bonus ends formatted to the requested culture, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**title string**
The title of this bonus.

**description string**
The description of this bonus.

**modifier decimal**
The XP modifier for this bonus.

**originalLanguage Language**
The language this ranks properties are written in.

**responseLanguage Language**
The language this ranks properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.
