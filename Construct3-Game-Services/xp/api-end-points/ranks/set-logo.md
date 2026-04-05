---
title: "Set Rank Logo"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/ranks/set-logo"
release: unknown
---

## On this page

- [Overview](#request-url)
- [Request URL](#authenticating-the-request)
- [Authenticating The Request](#file-data)
- [Request Parameters](#success-response)
- [File Data](#response-properties)
- [Success Response](#failure-response)
- [Failure Response](#response-properties)

---

## Overview

This end point allows you to set a logo for an existing [XP rank](https://www.construct.net/game-services/manuals/game-services/xp/api-objects/rank-object).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://xp.construct.net/setranklogo.json
```

## Authenticating The Request

This end point is for [secret key](https://www.construct.net/game-services/manuals/game-services/games/api-keys) authenticated requests only.  Signed in players cannot call this end point.

**secret string Required**
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**rankID guid Required**
The ID of the rank you want to set the logo for.

**logo string**
The base64 encoded logo picture data. You must specify this, `logoURL` or `logoData`.

**logoURL url (string)**
The absolute URL of the logo. You must specify this, `logo` or `logoData`.

## File Data

This request additionally supports the posting of files.  These files should be sent as `multipart/form-data,` with the corresponding keys.

**logoData multipart/form-data**
The binary data for the logo. You must specify this, `logo` or `logoURL`.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/ranks/set-logo",
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
