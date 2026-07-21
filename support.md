---
layout: default
title: "BookFolio Support"
description: "Install BookFolio, learn the essential bookmark workflows, restore Chrome’s default new tab, or contact support."
page_class: default
permalink: /support/
---

<section class="page-hero">
  <div class="shell page-hero-inner">
    <p class="eyebrow"><span></span> BookFolio support</p>
    <h1>Find your way <em>faster.</em></h1>
    <p>Quick guidance for installing BookFolio, navigating bookmarks, creating groups, and getting help.</p>
  </div>
</section>

<div class="prose-shell" markdown="1">

## Install and get started

1. [Open BookFolio in the Chrome Web Store]({{ site.chrome_web_store_url }}).
2. Select **Add to Chrome** and review Chrome’s installation prompt.
3. Open a new tab. Your existing Chrome bookmark hierarchy will appear in BookFolio—no import is required.
4. Use the sidebar to open folders, or select the search field to find a bookmark by title or URL.

<div class="support-grid">
  <article class="support-card">
    <h3>Search from the address bar</h3>
    <p>Type <strong>bf</strong>, press <strong>Space</strong> or <strong>Tab</strong>, then enter a bookmark name or URL. Choose a result to open it.</p>
  </article>
  <article class="support-card">
    <h3>Open the side panel</h3>
    <p>Select the BookFolio toolbar icon and open the side panel. You can also use <strong>Ctrl+Shift+F</strong> on Windows or <strong>Cmd+Shift+F</strong> on macOS to jump to search.</p>
  </article>
  <article class="support-card">
    <h3>Create a group</h3>
    <p>Open the Groups area in BookFolio, create a named group, and add related bookmarks. Groups can combine links from different folders.</p>
  </article>
  <article class="support-card">
    <h3>Open several links</h3>
    <p>Use <strong>Open all</strong> on a folder or group to open its bookmarks together. BookFolio asks for confirmation before opening a large set of tabs.</p>
  </article>
</div>

## Restore Chrome’s default new tab

To temporarily restore the default new-tab page, open `chrome://extensions`, find BookFolio, and switch the extension off. Switch it on again whenever you want the BookFolio dashboard back.

To remove the extension, select **Remove** on the same Chrome extensions page. BookFolio works with Chrome’s native bookmarks; disabling or removing the extension does not itself delete the bookmarks stored in your Chrome profile.

## Troubleshooting

### The dashboard does not appear

Confirm that BookFolio is enabled at `chrome://extensions`. If another extension also replaces the new-tab page, Chrome may allow only one of them to control that page at a time.

### Address-bar search does not start after typing bf

Type `bf`, then press **Space** or **Tab** before entering your query. If it still does not activate, confirm that BookFolio is enabled and reload Chrome.

### The side panel is not available

Make sure Chrome is up to date and BookFolio is enabled. Pinning BookFolio to the toolbar makes its side-panel entry easier to reach.

### A bookmark change is not visible

Reload the BookFolio tab. Because the extension uses Chrome’s native bookmark structure, changes made in Chrome’s bookmark manager should appear in BookFolio as well.

## Report a problem

When reporting an issue, please include:

- What you expected to happen
- What happened instead
- The steps that reproduce the issue
- Your Chrome version and operating system
- A screenshot with personal bookmark names or account details removed

Do not send exported bookmark files, passwords, private URLs, or other sensitive information.

<div class="contact-card">
  <h2>Still need help?</h2>
  <p>Email <a href="mailto:{{ site.support_email }}">{{ site.support_email }}</a>. The currently published Chrome Web Store version is <strong>1.2.0</strong>.</p>
  <p><a href="{{ site.chrome_web_store_url }}">Chrome Web Store</a> · <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a></p>
</div>

</div>
