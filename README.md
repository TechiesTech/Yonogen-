# YOLOgen Consultant

A React and Vite website for YOLOgen's study, travel, work, and migration consultancy.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Run locally

```sh
npm ci
npm run dev
```

The development server is available at `http://localhost:3000`.

## Verify and build

```sh
npm run lint
npm run build
```

The production-ready static site is written to `dist/`. Deploy the contents of
that directory to a static host configured to serve `index.html` for application
routes. No Gemini API key or server-side runtime is required to build the site.

The callback form submits to the configured Google Apps Script endpoint, and
images and fonts are served by external providers; verify those services and
their production access before launch.
