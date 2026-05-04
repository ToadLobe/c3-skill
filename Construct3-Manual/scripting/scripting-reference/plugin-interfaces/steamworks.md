---
title: "Steamworks script interface"
source: "https://www.construct.net/en/make-games/addons/1105/steamworks/documentation"
release: 476.3
---

The **Steamworks** plugin allows integrating a project with Steam. Supported on Windows WebView2, macOS WKWebView, and Linux CEF exports. Access via `runtime.objects.Steamworks` (object class, not instance).

Requires Steam to be installed and running. Use `isAvailable` to check before calling any API.

## Setup notes

- Set the Steam **App ID** in the plugin's properties and enable **Development mode** during development. App ID `480` ("Space war") can be used if you don't have one yet.
- Disable Development mode before publishing — it suppresses Steam's "restart if necessary" behavior.
- On Windows, export with **Export for Steam** checked (improves overlay support).
- On Linux, install Steam from steampowered.com directly (not Ubuntu app center).

## Steam Cloud

Steam Auto-Cloud works with the File System plugin. The picker tag mappings are:

| Steam Auto-Cloud root   | File System picker tag   |
| ----------------------- | ------------------------ |
| `App Install Directory` | `"<app>"`                |
| `WinMyDocuments`        | `"<documents>"`          |
| `WinAppDataLocal`       | `"<local-app-data>"`     |
| `WinAppDataRoaming`     | `"<roaming-app-data>"`   |
| `WinSavedGames`         | `"<saved-games>"`        |
| `MacHome`               | `"<profile>"`            |
| `MacAppSupport`         | `"<local-app-data>"`     |
| `MacDocuments`          | `"<documents>"`          |
| `LinuxHome`             | `"<profile>"`            |
| `LinuxXdgDataHome`      | `"<local-app-data>"`     |

`steamId64Bit` corresponds to the `{64BitSteamID}` variable in Steam Auto-Cloud special path values.

Example — syncing a per-user save file on Windows:
- Steam Auto-Cloud root: `WinMyDocuments`, path: `mygame/{64BitSteamId}`
- File System: picker tag `"<documents>"`, folder path `"mygame/" & Steam.SteamID64Bit & "/file.json"`

On macOS/Linux, `"<current-app-data>"` corresponds to `MacAppSupport`/`LinuxXdgDataHome` with a subdirectory named the project ID (e.g. `net.construct.kiwistory`).

## Steamworks APIs

### User info

**isAvailable**\
Boolean indicating if Steam features are available.

**isRunningOnSteamDeck**\
Boolean indicating if the game is running on a Steam Deck.

**personaName**\
The current user's Steam persona (display) name as a string.

**accountId**\
The current user's Steam account ID as a number.

**steamId64Bit**\
The current user's Steam ID in its full 64-bit representation. This is a **string** as it may exceed JavaScript number precision.

**staticAccountKey**\
The current user's Steam static account key as a string.

**appOwnerAccountId**\
**appOwnerSteamId64Bit**\
**appOwnerStaticAccountKey**\
Same as above but for the app owner (may differ from current user, e.g. with Family Sharing).

**playerSteamLevel**\
The user's Steam level as a number.

**appId**\
The current Steam app ID as a number.

**steamUILanguage**\
**currentGameLanguage**\
Strings for the current Steam UI language and current game language.

**getAvailableGameLanguages()**\
Returns an array of strings representing available languages.

### Overlay

**showOverlay(optionStr)**\
Show the Steam overlay. `optionStr` must be one of: `"friends"`, `"community"`, `"players"`, `"settings"`, `"official-game-group"`, `"stats"`, `"achievements"`.

**showOverlayURL(url, modal)**\
Show the Steam overlay with a web page at the given URL. Pass `true` for `modal` to make it modal.

**showOverlayInviteDialog(lobbyIdStr)**\
Show the Steam invite dialog overlay. `lobbyIdStr` must be a Steam lobby ID as a full 64-bit string.

Note: the in-game overlay is supported on Windows and Steam Deck. It is not supported on macOS or Linux (Steam shows fallback UI instead).

### Achievements

**async unlockAchievement(achievement)**\
Unlock an achievement by string ID. Returns a Promise resolving with `true` on success, `false` on failure.

**async clearAchievement(achievement)**\
Reset/clear an achievement by string ID. Returns a Promise resolving with `true` on success, `false` on failure.

### DLC

**async checkDlcInstalled(appIdArray)**\
Check if DLC is installed for an array of app IDs. Returns a Promise resolving with `true` on success. After resolving, call `isDlcInstalled()` to check individual results.

**isDlcInstalled(appId)**\
Synchronously returns a boolean for whether a specific DLC app ID is installed. Only valid after `checkDlcInstalled()` has completed for that app ID.

**installDlc(appId)**\
Initiate DLC installation for the given app ID.

**uninstallDlc(appId)**\
Initiate DLC uninstallation for the given app ID.

### Authentication

**getAuthTicketForWebApi(identity)**\
Retrieve an auth ticket from the Steamworks API. Pass the identity of the remote service that will verify the ticket, or an empty string if none. Returns a Promise resolving with an object: `{ authTicket, ticketHexStr }`.

**authTicket**\
**ticketHexStr**\
The values from the last `getAuthTicketForWebApi()` call.

**cancelAuthTicket(authTicket)**\
Cancel a previously obtained authentication ticket.

### Rich Presence

**setRichPresence(key, value)**\
Set a Rich Presence key/value for the current user (shared automatically to friends playing the same game). Pass an empty string for `value` to remove the key. Common key: `"status"`.

**clearRichPresence()**\
Clear all rich presence keys for the current user.

### Misc

**triggerScreenshot()**\
Activate the Steam screenshot feature. Requires the overlay to be active.
