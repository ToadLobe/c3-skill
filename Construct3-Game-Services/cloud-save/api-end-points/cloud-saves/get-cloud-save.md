---
title: "Get a Cloud Save"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/get-cloud-save"
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

Use this end point to return a single cloud save object.


When retrieving a blob by using the `key` parameter, the following requirements must be met:



- If the blob exists in a bucket, the `bucketID` parameter must be specified.
- If the blob exists in a players account, the request must be authenticated with a session key, or if using a secret key the player ID must also be passed.



## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/getcloudsave.json
```

## Authenticating The Request

The type of authentication that is required depends on who owns the blob, and where the blob is stored.

- For cloud save blobs in `PublicRead` or `PublicReadWrite` buckets, no authentication is required.
- For cloud save blobs in `Private` buckets, authentication by secret API key is required.
- For cloud save blobs in a players account, authentication by secret API key or the players session key is required.

### Session Key Authentication

**sessionKey string Optional**
The [session key](https://www.construct.net/game-services/manuals/game-services/authentication/api-objects/session-object) of the player you're making the request against.



### Secret Key Authentication

**secret string Optional**
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**blobID guid Sometimes required**
The ID of the cloud save blob you wish to retrieve. You must specify this or `key`.

**key string Sometimes required**
The key of the cloud save blob you wish to retrieve. You must specify this or `blobID`.

**bucketID guid Sometimes required**
If fetching a cloud save blob by `key` that exists in a bucket, you must specify the bucket ID.

**requestedLanguage Language Optional**
Optionally specify a [language](https://www.construct.net/game-services/manuals/game-services/languages) for returning translatable properties into this language.  If not specified, your games default language will be used.

**culture string Optional**
Optionally specify a [supported culture code](https://www.construct.net/game-services/manuals/game-services/culture) for rendering various properties.  If not specified, the `requestedLanguage` default culture code will be used.

## Success Response

Successful responses always return a `HTTP 200` status code.

```none
{
  "success": true,
  "blob": { ... },
  "formattingCulture": "en-us"
}
```

### Response Properties

**success bool**
If the request was successfull or not.

**blob Blob**
The blob object returned from the query.

**formattingCulture string**
If some return values are [culture specific](https://www.construct.net/game-services/manuals/game-services/culture), this property indicates what culture the values have been rendered as.

## Failure Response

Unsuccessful responses always return `HTTP 4xx` status codes.

```none
{
  "success": false,
  "errorMessage": "Your request failed due to...",
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/cloud-saves/get-cloud-save",
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
