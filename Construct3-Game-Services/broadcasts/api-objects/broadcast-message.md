---
title: "Message Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/broadcasts/api-objects/broadcast-message"
release: 476.3
---

## On this page

- [The Broadcast Message Object](#example-message)
- [Example Message](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Broadcast Message Object

A broadcast message is published to a broadcast channel.  Messages can contain any form of text, including HTML or BB code.

This object can be rated by players.  Read about [how ratings work](https://www.construct.net/game-services/manuals/game-services/ratings/concepts).

## Example Message

```json
{
  "id": "061cd393-d48a-44d5-85e5-8f4e14d23589",
  "channelID": "ff78c8bb-5bbb-4be6-839e-c554a27ea803",
  "date": "2025-09-22T14:30:02.437",
  "formattedDate": "9/22/2025 2:30:02 PM",
  "title": "New October features and news from the team.",
  "text": "We’re thrilled to announce Eclipse Dawn, our upcoming sci-fi RPG launching in Spring 2026. Step into a vast open universe where you’ll explore shattered worlds, uncover ancient secrets, and shape your own destiny. With deep character progression, branching storylines, and an emphasis on player-driven choices, Eclipse Dawn is built to immerse you in a living galaxy filled with allies, rivals, and cosmic threats. Stay tuned for gameplay reveals and community updates soon!",
  "textLength": 7261,
  "formattedTextLength": "7,261",
  "excerpt": "We’re thrilled to announce Eclipse Dawn, our upcoming sci-fi RPG launching in Spring 2026...",
  "reads": 2011,
  "formattedReads": "2,011",
  "uniqueReads": 1044,
  "formattedUniqueReads": "1,044",
  "updates": 0,
  "formattedUpdates": "0",
  "lastUpdate": null,
  "formattedLastUpdate": "",
  "isUnread": true,
  "originalLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "responseLanguage": {
    "iso": "EN",
    "englishName": "English"
  },
  "ratingStatus": { ... }
}
```

## Object Properties

**id guid**  
A unique ID for this message.

**channelID guid**  
The ID of the [channel](https://www.construct.net/game-services/manuals/game-services/broadcasts/api-objects/broadcast-channel) this message belongs to.

**date datetime**  
The date and time this message was published.

**formattedDate string**  
The date and time this message was published, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**title string Translatable**  
The title of this message.

**text string Translatable**  
The content of the message.  Messages can be any form of text, plain, HTML or marked up with BB code.  This property is only returned if you are retrieving the message from the [get message](https://www.construct.net/game-services/manuals/game-services/##b.GetMessage##) end point, otherwise the excerpt property will be returned.

**textLength int32**  
The length of the returned text in characters.

**formattedTextLength string**  
The length of the returned text in characters, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**excerpt string Translatable**  
Returns the first 100 characters of the full broadcast message.  If the message text exceeds this length 3 dots (...) will be appended to the end of this value indicating there is more to read.

**reads int32**  
Total number of times this message has been read by the player base.

**formattedReads string**  
Total number of times this message has been read by the player base, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**uniqueReads int32**  
A count of how many unique players have read this message.  A player can be a guest or a signed in user, this value is incremented based on the players IP address.

**formattedUniqueReads string**  
A count of how many unique players have read this message.  A player can be a guest or a signed in user, this value is incremented based on the players IP address, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**updates int16**  
How many times the message text or title has been modified since it was first published.

**formattedUpdates string**  
How many times the message text or title has been modified since it was first published, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**lastUpdate datetime?**  
The date and time the message text or title was last updated.

**formattedLastUpdate string**  
How many times the message text or title has been modified since it was first published, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**isUnread bool**  
Indicates if this message is unread by the current requester.  Read about the [unread status](https://www.construct.net/game-services/manuals/game-services/broadcasts/concepts#internalH1Link2).

**originalLanguage Language**  
The language this message is written in.

**responseLanguage Language**  
The language this message is returned in - this will differ from original language if the request asks for content to be returned in a different language and the plan supports translations.

**ratingStatus RatingStatus**  
The [rating status](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-status-object) of this object.
