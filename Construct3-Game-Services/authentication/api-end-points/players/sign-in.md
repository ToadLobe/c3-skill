---
title: "Sign In"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/sign-in"
release: unknown
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#request-parameters)
- [Request Parameters](#success-response)
- [Success Response](#response-properties)
- [Failure Response](#failure-response)

---

## Overview

Sign in a player to your game with a specified [login provider](https://www.construct.net/game-services/manuals/game-services/authentication/login-providers).  If a sign in is successful but the third party login provider account they signed in with is not currently associated with any player in your game, a new player will be created with this sign in method attached for future sign ins.

If signing in with `UsernamePassword`, a response will immediately be returned indicating if the sign in was succesful or not and a new [session object](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) will be returned if the sign in was succesful.

If signing in with another login provider, a `redirectToURL` will be returned.  Make the player visit this URL (for example in a new popup window).  Then, with the `pollToken` parameter you can periodically call the [sign in poll](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in-poll) end point.  Once the user completes the sign in process from `redirectToURL`, this end point will tell you that if the sign in request completed succesfully and return their newly created [session object](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/signin.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**provider string Required**
The [login provider](https://www.construct.net/game-services/manuals/game-services/authentication/login-providers) you wish to sign in with (case insensitive).  Must be one of `UsernamePassword`, `Apple`, `BattleNet`, `Discord`, `Email`, `Facebook`, `Github`, `Google`, `ItchIO`, `Microsoft`, `Patreon`, `Reddit`, `Steam`, `X`, `Yandex`

**username string Sometimes required**
If signing in with `UsernamePassword`, the username the player is signing in with. If specified, you must also specify `password`.

**password string Sometimes required**
If signing in with `UsernamePassword`, the password the player is signing in with. If specified, you must also specify `username`.

**emailAddress string Sometimes required**
If signing in with `Email`, the verified email address of the account the player is signing in with.  If the provided email address doesn't exist or is not verified the same generic error will be shown.

**expiryMins uint32**
If sign in succeeds, how long until the newly created session expires.  You can extend the session expiry using the [refresh session](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/sessions/refresh-session) end point.  The default value is `1440` minutes.

## Success Response

Successful responses always return a `HTTP 200` status code.

```none
{
  "success": true,
  "pollToken": "888ade42-1290-48c9-bf18-180888543a85",
  "redirectToURL": "https://...",
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**
If the request was successfull or not.

**pollToken guid**
A polling token to get the status of the user action.  For [sign in requests](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in) use this poll token on the [sign in poll](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in-poll) end point.  For [link requests](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-login-provider) use this poll token on the [link poll](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-poll) end point.

**redirectToURL url (string)**
The URL to the external third party login provider to complete the sign-in or link request.  This property will be null for the Email sign in method as no redirect is required.

**formattingCulture string**
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```none
{
  "success": false,
  "errorMessage": "The username/password you provided are invalid.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/players/sign-in",
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
