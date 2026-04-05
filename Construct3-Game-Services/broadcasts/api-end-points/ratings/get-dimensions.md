---
title: "Get Rating Dimensions"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/ratings/get-dimensions"
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

This end point allows you to retrieve all existing [rating dimensions](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-dimension-object) current setup on a [channel](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel).

We strongly recommend you read about [rating concepts](https://www.construct.net/game-services/manuals/game-services/ratings/concepts) to understand how dimensions in ratings work.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/channelgetratingdimensions.json
```

## Authenticating The Request

No authentication is required for this request type.

## Request Parameters

**gameID guid Required**  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**thingID guid Required**  
The ID of the [channel](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel) you're fetching [rating dimensions](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-dimension-object) from.

**requestedLanguage Language Optional**  
Optionally specify a [language](https://www.construct.net/game-services/manuals/game-services/languages) for returning translatable properties into this language.  If not specified, your games default language will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "dimensions": [
    { ... },
    { ... }
  ],
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**dimensions Array<RatingDimension>**  
The returned dimensions from the request.

**formattingCulture string**  
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/ratings/get-dimensions",
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
