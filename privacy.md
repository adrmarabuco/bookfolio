<div align="center">
  <img src="icon128.png" width="96" alt="BookFolio logo" />
  <h1>BookFolio — Privacy Policy</h1>
  <p><em>Last updated: July 2026</em></p>
</div>

---

> **Summary:** BookFolio does not collect, transmit, or share any personal data. Everything stays on your device, inside your Chrome profile.

---

## What BookFolio is

BookFolio — Bookmark Navigator turns the bookmarks already in your Chrome profile into a navigation system: a new tab dashboard, a side panel, omnibox search, and a right-click "Save to BookFolio" menu. It lets you organize bookmarks with colors, folder emoji, named groups, and pinned favorites.

## Data we do not collect

BookFolio does **not** collect, store, transmit, or share:

- Personal information of any kind
- Browsing history or visited URLs
- Bookmark content or metadata sent to any external server
- Analytics, telemetry, or usage statistics
- Cookies or tracking identifiers

There are no external servers, no accounts, no sign-in, and no network requests made by BookFolio beyond loading favicons from Chrome's own internal cache.

## Data stored locally

BookFolio stores the following data **exclusively within your Chrome profile** using the browser's built-in `chrome.storage` API. This data never leaves your device unless you use Chrome Sync — in which case it follows Chrome's own sync policy, not BookFolio's.

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
| Panel visibility (Open Tabs, Recently Closed) | `storage.sync` | Remember whether these panels are shown or hidden |

## Permissions used

| Permission | Why it is needed |
|---|---|
| `bookmarks` | Read, display, add, rename, move, and delete bookmarks at the user's request |
| `storage` | Save user preferences and customizations locally within Chrome |
| `tabs` | Read the active tab URL to pre-fill the quick-add form; power the Open Tabs panel and per-domain badge; open multiple bookmarks as background tabs when using "Open all" |
| `tabGroups` | Respect existing Chrome tab groups when opening or switching tabs from the dashboard |
| `sessions` | Show the Recently Closed panel and let you restore a closed tab, using Chrome's own local session list |
| `contextMenus` | Add the "Save to BookFolio" right-click menu for the current page or a link |
| `sidePanel` | Provide the side panel navigation and search surface |
| `favicon` | Display website icons next to bookmarks using Chrome's internal favicon cache |

## Third-party services

BookFolio does not integrate with, send data to, or load resources from any third-party service or analytics provider. **No external network requests are made.**

## Children's privacy

BookFolio does not knowingly collect any information from anyone, including children under the age of 13. The extension has no data collection mechanism whatsoever.

## Changes to this policy

If this policy is updated, the new version will be published at this URL with a revised "Last updated" date. Continued use of the extension after a policy update constitutes acceptance of the updated policy.

## Contact

Questions about this privacy policy: **[adrianomal@gmail.com](mailto:adrianomal@gmail.com)**

---

<div align="center">
  <sub>BookFolio — Bookmark Navigator · <a href="https://chromewebstore.google.com/detail/bookfolio-%E2%80%94-bookmark-navi/hkjmdpnpkdghjokbimhkdnepholjbfjo">Chrome Web Store</a></sub>
</div>
