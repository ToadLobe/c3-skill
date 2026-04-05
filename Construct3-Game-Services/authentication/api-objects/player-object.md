---
title: "Player Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/player-object"
release: 476.3
---

## On this page

- [Example Player](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Player

```json
{
  "id": "0d861228-c0ea-4b44-85f8-0993dc3861f7",
  "created": "2026-04-05T07:11:41.8939911Z",
  "playerName": "Chuckling Warrior",
  "avatars": [
    { ... },
    { ... }
  ],
  "lastActive": "2026-04-05T07:11:41.8959981Z"
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
