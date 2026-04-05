---
title: "Get XP"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/xp/get-xp"
release: 476.3
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#session-key-authentication)
- [Request Parameters](#secret-key-authentication)
- [Success Response](#success-response)
- [Failure Response](#response-properties)

---

## Overview

Returns a players current XP, along with a rank if one exists.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://xp.construct.net/get.json
```

## Authenticating The Request

This end point can be called by [signed in](https://www.construct.net/game-services/manuals/game-services/authentication/sign-in-flow) players, or with [secret key](https://www.construct.net/game-services/manuals/game-services/games/api-keys) authentication.

### Session Key Authentication

**sessionKey string Required**  
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.



### Secret Key Authentication

**secret string Required**  
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

**playerID guid Required**  
The player ID you wish to make this request against.

 ## Request Parameters

**gameID guid Required**  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**culture string Optional**  
Optionally specify a [supported culture code](https://www.construct.net/game-services/manuals/game-services/culture) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "xp": 20674,
  "formattedXP": "20,674",
  "rank": { ... },
  "nextRank": { ... },
  "formattingCulture": "en-us",
  "leaderboardScoreID": 20674
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**xp int64**  
This players current XP.

**formattedXP string**  
This players current XP formatted to the requested formatting culture, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**rank XPRank**  
This players current XP rank if one exists.

**nextRank XPRank**  
The next rank this player will unlock.

**formattingCulture string**  
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

**leaderboardScoreID guid?**  
This players current XP.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/xp/get-xp",
  "shouldRetry": false
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**errorMessage string**  
An error message with more detailed information on why the request failed.

**helpURL url (string)**  
A link to documentation which should provide help with the error.

**shouldRetry bool**  
Should the client wait a short period of time and retry the request.  Usually this is false, but returns true if the request failed due to rate limiting.
