---
title: "Channel Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel"
release: 476.3
---

## On this page

- [The Broadcast Channel Object](#example-channel)
- [Example Channel](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Broadcast Channel Object

You can have multiple Broadcast Channels, and each Channel can contain multiple Broadcast Messages.  Channels are a way of grouping messages into categories, for example you might have a channel for "Game Updates & News" and another channel for "Events & Promotions".

## Example Channel

```json
{
  "id": "7e1b0203-78ab-4330-b99c-f3a5c546b32c",
  "name": "Game Updates & News",
  "description": "The latest updates and news from Space Blaster dev team!",
  "created": "2025-09-22T14:30:02.437",
  "formattedCreated": "9/22/2025 2:30:02 PM",
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "broadcasts": 23,
  "formattedBroadcasts": "23",
  "lastBroadcast": "2025-09-24T14:30:02.437",
  "formattedLastBroadcast": "9/24/2025 2:30:02 PM",
  "allowRatings": true,
  "anyUnreadMessages": true,
  "dimensionlessMaxRatingValue": 4,
  "ratingDimensions": {
    "key1": { ... },
    "key2": { ... }
  },
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  }
}
```

## Object Properties

**id guid**  
A unique ID for this channel.

**name string Translatable**  
A publicly facing name for this channel.

**description string Translatable**  
A publicly facing description for this channel.

**created datetime**  
The date and time this channel was first created.

**formattedCreated string**  
The date and time this channel was first created, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**responseLanguage Language**  
The language the channels properties are returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.

**broadcasts int32**  
The total number of broadcast messages currently available in this channel.

**formattedBroadcasts string**  
The total number of broadcast messages currently available in this channel, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**lastBroadcast datetime?**  
The date and time of the last broadcast published to this channel.

**formattedLastBroadcast string**  
The date and time of the last broadcast published to this channel, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**allowRatings bool**  
If this channel supports rating of messages.

**anyUnreadMessages bool**  
Indicates if this channel contains any unread messages by the current requester.  Read about the [unread status](https://www.construct.net/game-services/manuals/game-services/broadcasts/concepts#internalH1Link2).

**dimensionlessMaxRatingValue uint8**  
If ratings are allowed for messages in this channel, this property shows what the maximum rating value for dimensionless ratings is.  The minuimum allowed rating value is always `0`.

**ratingDimensions Dictionary<string, RatingDimension>**  
If ratings are allowed for messages in this channel, this property shows all available [rating dimensions](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-dimension-object) that can be rated.

**originalLanguage Language**  
The language this channels properties (name and description) are written in.
