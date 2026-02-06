# Guillermo Barreto | Portfolio

A personal portfolio built with React and Tailwind CSS. Use it to showcase
projects, skills, and contact information for recruiters or collaborators.

## Quick start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Update your content

- **Hero + contact details:** `src/components/Hero.jsx` and
  `src/components/Contact.jsx`.
- **Skills:** `src/components/Skills.jsx`.
- **Projects:** `src/data/projects.json`.
- **Resume:** place your PDF at `public/resume.pdf` to enable the download link.

## Deployment (fastest options)

### Netlify

1. Run `npm run build`.
2. Drag the `build/` folder into Netlify Drop, or connect your GitHub repo.
3. Set the build command to `npm run build` and the publish directory to `build`.

### Vercel

1. Import the repository into Vercel.
2. Framework preset: **Create React App**.
3. Build command: `npm run build` and output directory: `build`.

### GitHub Pages

1. Install the `gh-pages` package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

## Build for production

```bash
npm run build
```
