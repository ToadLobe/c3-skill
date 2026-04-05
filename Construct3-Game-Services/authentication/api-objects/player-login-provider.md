---
title: "Player Login Provider Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-objects/player-login-provider"
release: unknown
---

## On this page

- [Example Player Login Provider](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Player Login Provider

```none
{
  "playerID": "68a0bbc4-97a2-41cc-aff4-034cec286fd5",
  "username": "TomGullen1",
  "provider": "UsernamePassword",
  "avatarURL": "https://avatar.discord.com/...",
  "signIns": 24,
  "firstSignIn": "2026-04-05T05:41:40.1204367Z",
  "lastSignIn": "2026-04-05T05:41:40.1224446Z",
  "patreonMetaData": { ... }
}
```

## Object Properties

**playerID guid**
The player ID this login provider belongs to.

**username string**
If the login provider is `UsernamePassword` this players username will be returned in the response.

**provider string**
The provider. Will be one of `UsernamePassword`, `Apple`, `BattleNet`, `Discord`, `Email`, `Facebook`, `Github`, `Google`, `ItchIO`, `Microsoft`, `Patreon`, `Reddit`, `Steam`, `X`, `Yandex`.

**avatarURL string**
If the login provider has an avatar for this user, the URL for it will be shown here.  The URL will be an external URL, not on any CGS domains.

**signIns int32**
The number of successful sign ins this player has had with this player account using this login provider.

**firstSignIn datetime**
The date and time of their first sign in with this login provider.

**lastSignIn datetime**
The date and time of their last successful sign in with this login provider.

**patreonMetaData PatreonMetaData**
If this login provider is Patreon, specific data about their memberships will show here.
