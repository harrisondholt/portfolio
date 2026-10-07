# Harrison Holt portfolio

A static, no-build portfolio site. One HTML file with inline CSS and a small inline script, self-hosted fonts, no trackers. It is designed for GitHub Pages.

## What is where

| Path | Purpose |
| --- | --- |
| `index.html` | The whole site. Design tokens are at the top of the `<style>` block. |
| `assets/` | Self-hosted fonts, favicon, social share image, resume PDF. |
| `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Pages and SEO plumbing. |
| `tools/` | Sources and a script that regenerate the resume PDF and share image. |
| `concepts/` | Early design drafts. Delete this folder once you are happy with the site. |

## Go live

1. **Settings, Pages:** deploy from branch `main`, folder `/ (root)`. The site appears at `https://harrisondholt.github.io/portfolio/`.
2. **Settings, Pages:** turn on **Enforce HTTPS** once it is available.
3. **Contact form:** get a free access key at [web3forms.com](https://web3forms.com) (it is emailed to you), then set `KEY` in the script at the bottom of `index.html`. Until you do, the form shows a polite "email me directly" message instead of pretending to send.
4. **Analytics:** create a free [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) site, paste its token into the commented snippet near the top of `index.html`, and remove the comment markers. It is cookieless, so no consent banner is needed.
5. **Search:** add the site in Google Search Console and submit `sitemap.xml`.
6. **Headshot:** save your photo as `assets/headshot.jpg` (4:5, about 1200 by 1500), then remove the comment markers around the `<img>` line in the hero. It covers the placeholder.

## Custom domain

1. Buy a domain at any registrar.
2. In Settings, Pages, enter it under **Custom domain**. GitHub adds a `CNAME` file for you.
3. At the registrar, add the DNS records GitHub lists for that page.
4. Find and replace `https://harrisondholt.github.io/portfolio/` with `https://your-domain/` in `index.html`, `sitemap.xml`, `robots.txt`, `404.html`, and `tools/resume.html`, then run the asset script below.

## Regenerate the resume PDF and share image

```
npm i playwright
node tools/build-assets.js
```

Edit `tools/resume.html` first. The PDF is generated from the Master Resume in your Interview Hub, with no phone number. To use your own PDF instead, save it over `assets/Harrison-Holt-Resume.pdf`.

## Notes

- Everything in a public repository is public, including history and every branch. Keep interview prep, STAR-story coaching notes, and personal data out of it.
- `robots.txt` is only honored at the root of a host. On a `/portfolio/` project URL the drafts are kept out of search by `noindex` tags instead.
- GitHub Pages cannot set HTTP headers. The security policy in `index.html` is a `<meta>` tag, which covers the important parts but not framing rules.
