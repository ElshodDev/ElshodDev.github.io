# elshod.me

Personal site of **Elshod Ibodullayev** — junior .NET developer in Tashkent.
Live at **[elshod.me](https://elshod.me)** (served by GitHub Pages from this repository).

## What's here

| File | Purpose |
|---|---|
| `index.html` | The whole site: hero, work, skills, about, contact |
| `styles.css` | Design tokens (dark/light), layout, responsive rules, print styles |
| `script.js` | Language switching (EN / UZ / RU), theme toggle, mobile menu, live GitHub line, contact form |
| `fonts/` | Self-hosted web fonts (SIL OFL): Instrument Serif, Prata (Cyrillic), Manrope, JetBrains Mono |
| `og.png`, `favicon.svg` | Social preview image and site icon |
| `404.html`, `robots.txt`, `sitemap.xml`, `CNAME` | Hosting and SEO plumbing |

No build step, no framework, no dependencies: edit a file, commit, and GitHub Pages redeploys.

## Editing content

* **Text in three languages** lives in the `T` object at the top of `script.js`. Every element with a
  `data-i18n="key"` attribute in `index.html` is filled from there, so change the English default in
  the HTML *and* the matching key in `script.js` (`en`, `uz`, `ru`).
* **Projects** are the `<article class="project">` blocks in `index.html`. Copy one to add another.
* **Skills** are plain `<li>` tags inside the `.skills` list.
* **Contact form** posts to Formspree (`ENDPOINT` in `script.js`).
* **Theme colours** are CSS variables at the top of `styles.css` (`[data-theme="dark"]` / `[data-theme="light"]`).

## Local preview

Fonts are loaded with `@font-face`, which browsers block over `file://`, so serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Links

* GitHub: [@ElshodDev](https://github.com/ElshodDev)
* LinkedIn: [elshod-ibodullayev](https://www.linkedin.com/in/elshod-ibodullayev-338940379/)
* Telegram: [@Elshod_Developer](https://t.me/Elshod_Developer)
* Featured project: [Mulkchi](https://github.com/ElshodDev/Mulkchi) — real-estate platform for Uzbekistan
