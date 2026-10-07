# bigolbearstudios.github.io

The Big Ol' Bear Studios website, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321 and on your LAN (e.g. http://10.0.0.166:4321)
npm run build     # static output in dist/
npm run preview   # serve the production build on the LAN
```

## Where things live

| What | Where |
| --- | --- |
| Nav tabs, books, store locations, portfolio URL, contact email | `src/data/site.ts` |
| Pages | `src/pages/` |
| Shared header/footer/layout | `src/components/`, `src/layouts/Base.astro` |
| Colors & fonts | `src/styles/global.css` |
| Logo & images | `public/images/` |

### Add a tab "willy nilly"

Add an entry to `nav` in `src/data/site.ts` with `underConstruction: true`:

```ts
{ label: 'Merch', href: '/merch', underConstruction: true, teaser: 'Shirts soon.' },
```

That's it: an under-construction page is generated at `/merch`. When the real page is ready,
create `src/pages/merch.astro` and remove the flag.

### Add a $10 Adventure

Add an entry to `books` in `src/data/site.ts`. A product page is generated at
`/ten-dollar-adventures/<slug>`. Drop a cover image in `public/images/books/` and set
`cover: '/images/books/<file>.jpg'`. Until then, a placeholder cover is drawn.

Books marked `debug: true` are fake layout-testing entries: they show up in `npm run dev` but are
left out of the production build, so they never appear on the hosted site. `workingTitle: true`
adds a "title under construction" badge.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages. One-time setup: in the repo, go to **Settings → Pages → Build and deployment →
Source** and choose **GitHub Actions**.
