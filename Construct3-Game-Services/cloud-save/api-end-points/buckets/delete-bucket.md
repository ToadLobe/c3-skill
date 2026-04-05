---
title: "Delete a Bucket"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/delete-bucket"
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

This end point allows you to delete an existing [bucket](https://www.construct.net/game-services/manuals/game-services/{Replacements.CloudSaves.Objects.Bucket%257).  Deleting a bucket will also delete all the [cloud save blobs](https://www.construct.net/game-services/manuals/game-services/{Replacements.CloudSaves.Objects.Blob%257) in the bucket.  Deletion is irreversible and permanent.

## Request URL

All parameters in the request must be sent as a `POST` HTTP request.  Make all requests to the following URL:

```none
https://cloudsave.construct.net/deletebucket.json
```

## Authenticating The Request

This end point is for [secret key](https://www.construct.net/game-services/manuals/game-services/games/api-keys) authenticated requests only.  Signed in players cannot call this end point.

**secret string Required**
Your games [secret API key](https://www.construct.net/game-services/manuals/game-services/games/api-keys).

 ## Request Parameters

**gameID guid Required**
The ID of the game you are making this request against.  You can find the ID of your game in your [Construct Game Services (CGS) account](https://www.construct.net/en/game-services/account).

**bucketID guid Required**
The ID of the bucket you wish to delete.

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
  "helpURL": "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-end-points/buckets/delete-bucket",
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
