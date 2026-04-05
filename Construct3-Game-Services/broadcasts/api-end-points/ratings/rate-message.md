---
title: "Rate Message"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/ratings/rate-message"
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

This end point allows players to rate [messages](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-message).  You can [create rating dimensions](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-end-points/ratings/create-dimension) to allow players to vote on different aspects of this message - although the most common scenario for rating a broadcast message is a yes/no rating to represent likes and dislikes.


You can re-submit ratings to over-write their existing rating so long as it doesn't exceed the settings in your game that determine when ratings are locked from being updated.  If only one rating dimension is being re-submitted, an error will throw if the rating is now locked.  If multiple are being submitted, the ratings that are now locked will silently fail and the unlocked ones will be overwritten.

We strongly recommend you read about [rating concepts](https://www.construct.net/game-services/manuals/game-services/ratings/concepts) to understand how ratings work.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/rate.json
```

## Authenticating The Request

This end point is for [signed in](https://www.construct.net/game-services/manuals/game-services/authentication/sign-in-flow) players only.

**sessionKey string Required**
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**thingID guid Required**
The ID of the [message](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-message) the player is rating.

**value string Required**
For dimensionless ratings, simply provide the `byte` value of the rating in string format, for example: `4`.  For rating on [rating dimensions](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-dimension-object), provide a CSV list of dimension ID's and rating values, for example: `mydimension=6,anotherdimension=0`.

If a rating value exceeds the max allowed rating the rating value will be changed to the max allowed rating.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/ratings/rate-message",
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
