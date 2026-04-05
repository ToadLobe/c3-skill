---
title: "Get Bonus"
source: "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/bonuses/get-bonus"
release: 476.3
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

Returns a [XP Bonus](https://www.construct.net/game-services/manuals/game-services/xp/api-objects/bonus-object) by it's ID.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://xp.construct.net/getbonus.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID guid Required**  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**bonusID guid Required**  
The ID of the bonus you're retrieving.

**culture string Optional**  
Optionally specify a [supported culture code](https://www.construct.net/game-services/manuals/game-services/culture) for rendering various properties.  If not specified, the culture code from your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "ranks": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**ranks Array<XPRank>**  
All ranks ordered in ascending order by XP requirement.

**formattingCulture string**  
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/xp/api-end-points/bonuses/get-bonus",
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
