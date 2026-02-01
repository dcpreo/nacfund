# Deploy Kunst Gruppe Bureau Website

## Option 1: GitHub Pages (automated)

1. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**

2. **Push to `main`** (or run the workflow manually from the Actions tab):
   ```bash
   git add .github netlify.toml index.html artmedia.html
   git commit -m "Add deploy workflow and site"
   git push origin main
   ```

3. After the workflow runs, the site will be at:
   **https://\<your-username>.github.io/nacfund/**

4. **Custom domain (e.g. nacfund.org):** In **Settings → Pages**, add your custom domain and configure DNS as instructed.

---

## Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in.
2. **Add new site → Deploy manually** (or connect your GitHub repo).
3. Drag and drop the folder containing `index.html` and `artmedia.html`, or connect the repo and set:
   - **Publish directory:** `.` (root)
   - **Build command:** (leave empty)
4. Deploy. Use **Site settings → Domain management** to add a custom domain.

Or from the command line (after `npm i -g netlify-cli` and `netlify login`):
```bash
netlify deploy --prod --dir .
```

---

## Option 3: Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo.
2. **Root Directory:** leave as repo root (or the folder that has `index.html`).
3. **Build command:** leave empty. **Output directory:** `.` or leave default.
4. Deploy. Add a custom domain under **Settings → Domains**.

Or from the command line:
```bash
npx vercel --prod
```

---

## Files included in deploy

- **index.html** – Kunst Gruppe Bureau site
- **artmedia.html** – Artmedia Agency page

The GitHub Actions workflow deploys only these files (in `_site`) to avoid publishing other project folders.
