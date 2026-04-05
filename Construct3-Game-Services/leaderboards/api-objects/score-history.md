---
title: "Score History Object"
source: "https://www.construct.net/en/game-services/manuals/game-services/leaderboards/api-objects/score-history"
release: unknown
---

## On this page

- [The Score History Object](#example-score-history)
- [Example Score History](#object-properties)
- [Object Properties](#internalH1Link2)

---

## The Score History Object

When you retrieve the history for a score, it returns an array of score history objects. These are very similar to the score object, but contain slightly less information.

Score history objects represent a snapshot in time of the scores rankings and score value.

## Example Score History

```none
{
  "date": "2026-04-05T07:11:42.3628591Z",
  "score": 20110,
  "formattedScore": "20,110",
  "rank": 1770,
  "ordinal": "th",
  "formattedRank": "1,770th",
  "countryRank": 673,
  "countryOrdinal": "rd",
  "formattedCountryRank": "673rd"
}
```

## Object Properties

**date datetime**
The date this score history object represents.

**score int64**
The score value at this date.

**formattedScore string**
The score formatted under the score format specifications for this leaderboard, rendered using the requested locale, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**rank int32**
The global rank of this score at this date.

**ordinal string**
The ordinal for the global rank of this score.

**formattedRank string**
The global rank of this score rendered using the requested locale, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).

**countryRank int32**
The country rank of this score at this date. This property will not be shown if country scores are disabled in the leaderboard settings.

**countryOrdinal string**
The ordinal for the global country rank of this score. This property will not be shown if country scores are disabled in the leaderboard settings.

**formattedCountryRank string**
The country rank of this score rendered using the requested locale. This property will not be shown if country scores are disabled in the leaderboard settings, formatted to the specified [requested culture](https://www.construct.net/game-services/manuals/game-services/culture).
