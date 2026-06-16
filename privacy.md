<div align="center">
  <img src="folio-grande.png" width="96" alt="Folio logo" />
  <h1>Folio — Privacy Policy</h1>
  <p><em>Last updated: June 2026</em></p>
</div>

---

> **Summary:** Folio does not collect, transmit, or share any personal data. Everything stays on your device, inside your Chrome profile.

---

## What Folio is

Folio is a Chrome extension that replaces the new tab page with a visual bookmark management workspace. It reads and displays the bookmarks already stored in your Chrome browser and lets you organize them with colors, groups, and pinned favorites.

## Data we do not collect

Folio does **not** collect, store, transmit, or share:

- Personal information of any kind
- Browsing history or visited URLs
- Bookmark content or metadata sent to any external server
- Analytics, telemetry, or usage statistics
- Cookies or tracking identifiers

There are no external servers, no accounts, no sign-in, and no network requests made by Folio beyond loading favicons from Chrome's own internal cache.

## Data stored locally

Folio stores the following data **exclusively within your Chrome profile** using the browser's built-in `chrome.storage` API. This data never leaves your device unless you use Chrome Sync — in which case it follows Chrome's own sync policy, not Folio's.

| What is stored | Storage type | Purpose |
|---|---|---|
| Theme, view mode, sidebar state, background type | `storage.sync` | Remember display preferences across sessions |
| Color labels per bookmark or folder | `storage.sync` | Persist color-coding the user assigns |
| Emoji icons per folder | `storage.sync` | Persist emoji the user assigns to folders |
| Pinned bookmark IDs | `storage.sync` | Remember which bookmarks are pinned to the top strip |
| Bookmark group names and member IDs | `storage.sync` | Persist user-created groups for one-click open-all |
| Recently visited bookmark IDs | `storage.local` | Show a recents strip — device-specific, never synced |
| Custom background photo | `storage.local` | Store the user-uploaded image for the new tab background |
| Onboarding state (welcomed, tips dismissed) | `storage.local` | Avoid showing the welcome modal or tips after dismissal |

## Permissions used

| Permission | Why it is needed |
|---|---|
| `bookmarks` | Read, display, add, rename, move, and delete bookmarks at the user's request |
| `storage` | Save user preferences and customizations locally within Chrome |
| `tabs` | Read the active tab URL to pre-fill the quick-add form; open multiple bookmarks as background tabs when using "Open all" |
| `favicon` | Display website icons next to bookmarks using Chrome's internal favicon cache |

## Third-party services

Folio does not integrate with, send data to, or load resources from any third-party service or analytics provider. **No external network requests are made.**

## Children's privacy

Folio does not knowingly collect any information from anyone, including children under the age of 13. The extension has no data collection mechanism whatsoever.

## Changes to this policy

If this policy is updated, the new version will be published at this URL with a revised "Last updated" date. Continued use of the extension after a policy update constitutes acceptance of the updated policy.

## Contact

Questions about this privacy policy: **[your@email.com](mailto:your@email.com)**

---

<div align="center">
  <sub>Folio — New Tab Bookmark Manager · <a href="https://chrome.google.com/webstore">Chrome Web Store</a></sub>
</div>
