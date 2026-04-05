---
title: "Player Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/player-object"
release: unknown
---

## On this page

- [Example Player](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Player

```none
{
  "id": "e934cff0-95c7-4157-b17c-cf9458134a7c",
  "created": "2026-04-05T05:41:40.0911058Z",
  "playerName": "Chuckling Warrior",
  "avatars": [
    { ... },
    { ... }
  ],
  "lastActive": "2026-04-05T05:41:40.0931121Z"
}
```

## Object Properties

**id guid**
A unique ID for this player.

**created datetime**
The date and time this player was first registered in the game.

**playerName string**
The publicly facing player name for this player.

**avatars Array<Picture>**
If player has an avatar, a list of [picture objects](https://www.construct.net/game-services/manuals/game-services/common-objects/picture-object). Each picture object is the same avatar, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256` will be shown here along with the original avatar size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original avatar width.

**lastActive datetime?**
The date and time UTC this player last interacted with these services.
