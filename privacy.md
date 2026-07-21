---
layout: default
title: "Privacy Policy — BookFolio"
description: "How BookFolio handles Chrome bookmarks, browser permissions, local preferences, and optional Chrome Sync."
page_class: default
permalink: /privacy/
---

<section class="page-hero">
  <div class="shell page-hero-inner">
    <p class="eyebrow"><span></span> Last updated July 20, 2026</p>
    <h1>Privacy, in <em>plain language.</em></h1>
    <p>BookFolio works with the information already stored in your Chrome profile. This page explains what the extension can access, what it stores, and why.</p>
  </div>
</section>

<div class="prose-shell" markdown="1">

> **In brief:** BookFolio does not require an account and does not use advertising or analytics trackers. It does not operate an external server that receives your bookmarks or browsing history.

## What BookFolio is

BookFolio — Visual Bookmark Manager turns the bookmarks already in your Chrome profile into a navigation system: a new-tab dashboard, side-panel access, address-bar search, and a right-click “Save to BookFolio” menu. It also lets you organize bookmarks with colors, folder emoji, named groups, and pinned links.

## Information BookFolio does not collect

BookFolio does not collect or send the following information to a server operated by BookFolio:

- Personal information
- Browsing history or visited URLs
- Bookmark content or metadata
- Analytics, telemetry, or usage statistics
- Cookies or advertising identifiers

BookFolio has no account or sign-in system and does not use advertising or analytics trackers.

## Data stored in your Chrome profile

BookFolio uses Chrome’s built-in `chrome.storage` API to remember preferences and extension features. Some settings use `storage.sync`, which means Chrome may sync them between browsers when Chrome Sync is enabled in your profile. That synchronization is provided and governed by Google Chrome, not by a BookFolio server.

| What is stored | Storage type | Purpose |
|---|---|---|
| Theme, view mode, sidebar state, and background type | `storage.sync` | Remember display preferences |
| Color labels for bookmarks or folders | `storage.sync` | Keep the color-coding you assign |
| Emoji icons for folders | `storage.sync` | Keep the emoji you assign |
| Pinned bookmark IDs | `storage.sync` | Remember pinned shortcuts |
| Bookmark group names and member IDs | `storage.sync` | Keep user-created groups |
| Recently visited bookmark IDs | `storage.local` | Show device-specific recent items |
| Custom background image | `storage.local` | Display your chosen new-tab background |
| Onboarding state | `storage.local` | Remember completed or dismissed guidance |
| Panel visibility | `storage.sync` | Remember which optional panels are visible |

The bookmarks themselves remain part of Chrome’s native bookmark structure. Chrome may separately sync bookmarks according to your Chrome profile settings and Google’s policies.

## Permissions used {#permissions}

Each permission supports a visible extension feature:

| Permission | Why it is needed |
|---|---|
| `bookmarks` | Display, search, create, rename, move, and delete bookmarks when you request those actions |
| `storage` | Save extension preferences and customizations in your Chrome profile |
| `tabs` | Support the Open Tabs panel, active-page actions, the per-site badge, and opening bookmark groups |
| `tabGroups` | Work with existing Chrome tab groups when opening or switching tabs |
| `sessions` | Display recently closed tabs and restore one when requested |
| `contextMenus` | Add the “Save to BookFolio” action to Chrome’s right-click menu |
| `sidePanel` | Provide bookmark navigation and search in Chrome’s side panel |
| `favicon` | Display website icons using Chrome’s favicon capability |

## External services

BookFolio does not operate an external server that receives your bookmarks or browsing history. Website icons are displayed through Chrome’s favicon capability. Optional Chrome Sync is handled by Chrome according to the settings and policies associated with your browser profile.

## Children’s privacy

BookFolio is not designed to collect personal information from anyone, including children under 13. It has no BookFolio account system, advertising, or analytics tracker.

## Changes to this policy

If this policy changes, the revised version will be published at this URL and the “Last updated” date will be changed. Material changes will be reflected in the extension’s privacy disclosures when applicable.

## Contact

Questions about this privacy policy can be sent to [adrianomal@gmail.com](mailto:adrianomal@gmail.com).

[View BookFolio in the Chrome Web Store]({{ site.chrome_web_store_url }}) · [Get support]({{ '/support/' | relative_url }})

</div>
