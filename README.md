# BookFolio website

Official static website for [BookFolio — Visual Bookmark Manager](https://chromewebstore.google.com/detail/bookfolio-%E2%80%94-bookmark-navi/hkjmdpnpkdghjokbimhkdnepholjbfjo).

The site is built with Jekyll and is compatible with GitHub Pages. It has no analytics, external fonts, client-side framework, or runtime dependency beyond a small mobile-navigation script.

## Pages

- `/` — product homepage
- `/privacy/` — privacy policy and permission explanations
- `/support/` — installation, core workflows, troubleshooting, and contact

## Local development

Ruby and Bundler are required for the local Jekyll build.

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/bookfolio/`.

## GitHub Pages

The production URL configured in `_config.yml` is:

```text
https://adrmarabuco.github.io/bookfolio/
```

In the GitHub repository settings, configure Pages to deploy from the `main` branch and the repository root, then enable HTTPS.

## Product screenshots

Use screenshots from the current extension build only. Remove personal bookmark names, emails, accounts, and private URLs before adding files under `assets/images/`. Keep the same theme and visual treatment across the image set.
