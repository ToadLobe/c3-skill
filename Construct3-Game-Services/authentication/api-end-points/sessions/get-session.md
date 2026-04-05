---
title: "Get a Session"
source: "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/sessions/get-session"
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

Retrieves the signed in players current [session object](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object).  This returns useful information about the current player that you may want to display in your game.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://auth.construct.net/getsession.json
```

## Authenticating The Request

This end point is for [signed in](https://www.construct.net/game-services/manuals/game-services/authentication/sign-in-flow) players only.

**sessionKey string Required**
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

## Success Response

Successful responses always return a `HTTP 200` status code.

```none
{
  "success": true,
  "session": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**
If the request was successfull or not.

**session Session**
The session returned from the request.

**formattingCulture string**
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```none
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/authentication/api-end-points/sessions/get-session",
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
