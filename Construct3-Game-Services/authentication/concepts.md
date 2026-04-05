---
title: "Authentication Concepts"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/concepts"
release: 476.3
---

## On this page

- [What is the Authentication Service?](#registering-players)
- [Registering Players](#internalH1Link1)

---

## What is the Authentication Service?

When you [create a game](https://www.construct.net/game-services/manuals/game-services/games/create-game), you will need to [register players](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/register-player) or allow players to [sign in](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in) the game before they can interact with features in other services that require a player account.

Once a player is registered or signed in, a session key will be returned for this player.  Passing this session key into other services allows this player to interact with other Construct Game Services.  **The session key is private to this player and should never be shared or exposed.**

All players have a unique **player ID** which is a [guid](https://www.construct.net/game-services/manuals/game-services/data-types#internalH1Link1).  Players also have a **player name** which can be displayed publicly.  If a player signs in with a username and password it should be noted that the **username** is different to the **player name** and is only used to authenticate the sign in.

## Registering Players

There are two ways to register players:

- Specific call to the [register player](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/register-player) end point
- [Signing in a player](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in) with a supported [login provider](https://www.construct.net/game-services/manuals/game-services/authentication/login-providers)

If you register a player manually and **don't** provider a username and password, if the session key expires or is lost this player account will be unrecoverable.  It is advised if possible to encourage the player to set a username/password, or [link to a login provider](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-login-provider) at some point to ensure they can use this newly created account.

When a player [signs in](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in) with a login provider, a new player will be registered if this player has not previously signed into your game.  If the player has previously signed in with this login provider, a new session key will be generated which ties them to their already established player ID.
