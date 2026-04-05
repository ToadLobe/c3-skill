---
title: "Change Player Name"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/change-player-name"
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

   Use this end point to change a players player name if they have one set.  The player name is the publiclly facing name you can display to other players.


   If the player is [restricted](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/set-player-restrictions) from changing their player name with the `Change Player Name` restriction, the name can only be changed if the request is authenticated with a secret key.


   In your [CGS account](https://www.construct.net/en/game-services/account) you are able to maintain a list of banned player name words.  If any of these words are found in the requested player name, the name will be rejected and an error returned.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/changeplayername.json
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

**playerName string Required**  
The new player name you wish to set.  Name must be at least `1` character long and cannot exceed `50` characters in length.  The name will also be rejected if it looks like it is an email address.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**formattingCulture string**  
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/change-player-name",
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
