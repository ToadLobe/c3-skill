---
title: "Session Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/session-object"
release: unknown
---

## On this page

- [Example Session](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Session

```none
{
  "playerID": "6841461b-815c-4603-81e8-b8f6274cba43",
  "playerName": "Guffing Viking",
  "avatars": [
    { ... },
    { ... }
  ],
  "expiry": "2026-04-05T05:41:40.1514586Z",
  "gameID": "7ddf0e6f-5a77-41af-9625-baf9d681ae70",
  "key": "80SB!,1VGBA+AE87WE;6_ZY{=|Z4Y!^ET^7..."
}
```

## Object Properties

**playerID guid**
The player ID this session belongs to.

**playerName string**
The publicly facing player name for this player.

**avatars Array<Picture>**
If player has an avatar, a list of [picture objects](https://www.construct.net/game-services/manuals/game-services/common-objects/picture-object). Each picture object is the same avatar, but provided in different sizes. Sizes available are based on widths, and the widths `16, 32, 64, 96, 128, 256` will be shown here along with the original avatar size if it doesn't match a width in this list.  Some sizes may not show if the width is less than the original avatar width.

**expiry datetime**
The expiry date time of this session.  Can be extended by calling [refresh session API end point](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/sessions/refresh-session).

**gameID guid**
The game ID this player belongs to.

**key string**
The session key for this player.  This should be kept private as it allows access to a players account.  Session keys are randomly generated strings `128` characters long.
