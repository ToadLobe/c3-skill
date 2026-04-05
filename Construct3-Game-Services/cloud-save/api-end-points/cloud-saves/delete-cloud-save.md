---
title: "Delete a Cloud Save"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/delete-cloud-save"
release: unknown
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

Use this end point to delete a cloud save. Deletions are instant and permament.

If authenticating this request as a player, the authorised player can always delete blobs they've uploaded in their own player storage or a [game bucket](https://www.construct.net/game-services/manuals/game-services/cloud-save/api-objects/game-buckets).  Players cannot delete other players blobs.  If authenticating with your game's secret key, you can delete any blob.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/delete.json
```

## Authenticating The Request

This end point can be called by [signed in](https://www.construct.net/game-services/manuals/game-services/authentication/sign-in-flow) players, or with [secret key](https://www.construct.net/game-services/manuals/game-services/games/api-keys) authentication.

### Session Key Authentication

**sessionKey string Required**
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.



### Secret Key Authentication

**secret string Required**
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**blobID guid Required**
The ID of the cloud save blob you wish to delete.

## Success Response

Successful responses always return a `HTTP 200` status code.

```none
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

```none
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/delete-cloud-save",
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
