---
title: "Link Login Provider"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-login-provider"
release: unknown
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#success-response)
- [Request Parameters](#response-properties)
- [Success Response](#failure-response)
- [Failure Response](#response-properties)

---

## Overview

If a player is signed in, you can link another [login provider](https://www.construct.net/game-services/manuals/game-services/authentication/login-providers) to this player which gives them more ways to [sign-in](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/sign-in) to their account.  Only one account per provider is permitted for player accounts - for example you can't tie multiple Steam accounts to the same player account.

The provider `UsernamePassword` is not supported for link requests.  Use the [set username password](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/set-username-password) end point instead to set a new username/password or update the users username/password.

When you request a link, the parameter `redirectToURL` will be returned.  Make the player visit this URL (for example in a new popup window).  Then, with the `pollToken` parameter you can periodically call the [link poll](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-poll) end point.  Once the user completes the sign in process from `redirectToURL`, this end point will tell you that the link request completed succesfully, expired or requires further action.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/link.json
```

## Authenticating The Request

This end point is for [signed in](https://www.construct.net/game-services/manuals/game-services/authentication/sign-in-flow) players only.

**sessionKey string Required**
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**provider string Required**
The [login provider](https://www.construct.net/game-services/manuals/game-services/authentication/login-providers) you wish to link (case insensitive) to this players account.  Must be one of `Apple`, `BattleNet`, `Discord`, `Facebook`, `Github`, `Google`, `ItchIO`, `Microsoft`, `Patreon`, `Reddit`, `Steam`, `X`, `Yandex`.  For `UsernamePassword`, use the [Set Username and Password](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/set-username-password) end point.  For `Email` use the [Set Email Address](https://www.construct.net/game-services/manuals/game-services/authentication/api-end-points/players/set-email-address) end point.

## Success Response

Successful responses always return a `HTTP 200` status code.

```none
{
  "success": true,
  "pollToken": "f278120e-69d4-4409-8a21-a0c73aaefb3f",
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
  "errorMessage": "You already have Discord as a sign-in method.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/login-providers/link-login-provider",
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
