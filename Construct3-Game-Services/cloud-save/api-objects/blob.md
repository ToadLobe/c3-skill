---
title: "Cloud Save Blob Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/cloud-save/api-objects/blob"
release: 476.3
---

## On this page

- [Example Blob](#example-blob)
- [Object Properties](#object-properties)

---

This object can be rated by players.  Read about [how ratings work](https://www.construct.net/game-services/manuals/game-services/ratings/concepts).

## Example Blob

```json
{
  "id": "a486a811-6640-44fb-8d4b-cdf2ea982e55",
  "key": "savegame.1",
  "bucket": { ... },
  "player": { ... },
  "created": "2026-04-05T07:11:42.0781249Z",
  "sizeBytes": 1024,
  "downloadURL": "https://cloudsave.construct.net/download...",
  "ratingStatus": { ... },
  "pictures": [
    { ... },
    { ... }
  ],
  "pictureSizeBytes": 22,
  "name": "My save game"
}
```

## Object Properties

**id guid**  
A unique record ID for this cloud save blob.

**key string**  
A unique key for this cloud save.

**bucket Bucket**  
If cloud save belongs in a [game bucket](https://www.construct.net/game-services/manuals/game-services/cloud-save/api-objects/game-buckets), the game bucket object will be shown here.

**player Player**  
If cloud save was created by a player, the associated player object will be shown here.

**created datetime**  
The date this cloud save was originally created.

**sizeBytes int32**  
The size in bytes of the cloud save blob.

**downloadURL string**  
The URL to download the cloud save blob from.

**ratingStatus RatingStatus**  
The [rating status](https://www.construct.net/game-services/manuals/game-services/ratings/api-objects/rating-status-object) of this object.

**pictures Array<Picture>**  
If this cloud save object has an associated picture, an array of [picture objects](https://www.construct.net/game-services/manuals/game-services/common-objects/picture-object) will be returned here. Each picture object is the same associated picture, but in different available sizes. Sizes available are based on widths, and the widths 16, 32, 64, 128, 256, 512, 1024 and 2048 will be shown here along with the original picture size if it is different to this predetermined list. Some widths may not show if the original picture width is smaller than any of the available widths.

**pictureSizeBytes int64?**  
If this cloud save object has an associated picture, the size of the original uploaded picture in bytes.

**name string**  
The publicly facing name for this cloud save.
