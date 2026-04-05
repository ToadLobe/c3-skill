---
title: "IP Shadow Ban Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/ip-shadow-ban"
release: unknown
---

## On this page

- [Example Shadow Banned IP](#object-properties)
- [Object Properties](#internalH1Link1)

---

## Example Shadow Banned IP

```none
{
  "country": "GB",
  "dateBanned": "2026-04-05T07:11:42.1938971Z",
  "ipHash": 2181339444
}
```

## Object Properties

**country string**
If the country of the underlying IP is known, the ISO 3166-1 alpha-2 country code for the IP will be shown in this property.

**dateBanned datetime**
The date the ban was created.

**ipHash int32**
The hashed IP address of the IP that is shadow banned.
