# AI Motion Agency Portfolio

Custom portfolio website for an agency/studio offering AI videos, logos, and digital design.

## Stack

- React 19
- Vite 8
- React Router (HashRouter for static hosting compatibility)
- Plain CSS with a custom neo-industrial visual system

## Pages

- Home
- Work
- About
- Contact

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Deploy To Hostinger (Static Hosting)

Because the app uses HashRouter, it works on shared hosting without special rewrite rules.

1. Run `npm run build`.
2. Open the generated `dist` folder.
3. In Hostinger hPanel, go to File Manager for your domain.
4. Upload all files inside `dist` into `public_html`.
5. If asked, replace existing files.
6. Visit your domain.

## Customize Content

- Update work cards and labels in `src/App.jsx`.
- Update colors/fonts/layout in `src/index.css`.
