---
title: "Create a Channel"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/create-channel"
release: 476.3
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

This end point allows you to create a [broadcast channel](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel).  Once you've created a channel, you can then start to [create messages](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-end-points/messages/create-message).

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://broadcasts.construct.net/createchannel.json
```

## Authenticating The Request

This end point is for [secret key](https://www.construct.net/game-services/manuals/game-services/games/api-keys) authenticated requests only.  Signed in players cannot call this end point.

**secret string Required**  
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

 ## Request Parameters

**gameID guid Required**  
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**name string Required**  
The name of the channel you want to create.  Must be at least `1` character long and no more than `64` characters long.  Channel names do not need to be unique.

**description string**  
A description of the channel.  Cannot exceed more than `256` characters long.

**language string**  
The language ISO this channels name and description are written in.  Must be one of `AR`, `BG`, `CS`, `DA`, `DE`, `EL`, `EN`, `ES`, `ET`, `FI`, `FR`, `HE`, `HU`, `ID`, `IT`, `JA`, `KO`, `LT`, `LV`, `NB`, `NL`, `PL`, `PT`, `RO`, `RU`, `SK`, `SL`, `SV`, `TH`, `TR`, `UK`, `VI`, `ZH`.   Defaults to your games language if not specified.

**allowRatings bool Required**  
If players can rate messages published in this channel or not.

**requestedLanguage Language Optional**  
Optionally specify a [language](https://www.construct.net/game-services/manuals/game-services/languages) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture string Optional**  
Optionally specify a [supported culture code](https://www.construct.net/game-services/manuals/game-services/culture) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```json
{
  "success": true,
  "channel": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**  
If the request was successfull or not.

**channel BroadcastChannel**  
The channel object returned from the request.

**formattingCulture string**  
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```json
{
  "success": false,
  "errorMessage": "You've reached the maximum allowed channels for this game.",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-end-points/channels/create-channel",
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
