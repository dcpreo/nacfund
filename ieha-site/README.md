# materielart.tech

Next.js site for materielart.tech: platform for material art, creative practice, and artistic research.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX** (manifest, research, publications)
- **i18n**: ru, en, de, fr

## Structure

- `src/app/[locale]/` — locale-scoped pages (about, research, collection, publications, experts, events, contact, membership)
- `src/components/` — layout, UI, home, collection, compare, research
- `src/content/` — MDX + JSON (manifest, research, case-studies, publications, seed data, i18n)
- `src/lib/` — i18n, routes, seo, search, zod schemas
- `src/app/api/` — search, iiif-proxy (phase 2/3)

## Scripts

```bash
npm install
npm run dev
npm run build
npm run seed   # load artworks.seed.json (phase 1)
```

## Deploy on Netlify

1. Push the repo to GitHub/GitLab/Bitbucket
2. In [Netlify](https://app.netlify.com), create a new site and connect the repo
3. Build settings are pre-configured via `netlify.toml`:
   - Build command: `npm run build`
   - `@netlify/plugin-nextjs` handles Next.js deployment
4. Set custom domain: `materielart.tech` in Netlify domain settings
