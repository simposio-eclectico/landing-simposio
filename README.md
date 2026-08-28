# Simposio Ecléctico

A static site for **Simposio Ecléctico**, an open-source artist collective. Built with [Astro](https://astro.build) for optimal performance and simplicity.

## Features

- ✨ **Animated Logo** — Rotating circular text animation on the homepage
- 📄 **Multi-page Structure** — Clean navigation between meme gallery, audio, experiments, and about
- ⚡ **Fast & Static** — Pre-rendered HTML at build time with zero JavaScript overhead
- 🎨 **Minimal Design** — Plain CSS, no frameworks; pure vanilla HTML/CSS/JS
- 📦 **pnpm Managed** — Faster, more efficient package management

## Quick Start

### Prerequisites

- Node.js 22 (or 18+)
- pnpm (install globally: `npm install -g pnpm`)

### Installation

```bash
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
pnpm run dev
```

Open `http://localhost:3000` in your browser.

### Build

Create a production build:

```bash
pnpm run build
```

The static site will be generated in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

```
src/
├── pages/              # Route pages (auto-routed by Astro)
│   ├── index.astro     # Home page
│   ├── meme.astro      # Meme gallery
│   ├── audio.astro     # Audio section
│   ├── experimentos.astro
│   └── acerca.astro    # About page
├── layouts/
│   └── Layout.astro    # Main layout wrapper
├── components/
│   ├── AnimatedLogo.astro    # Rotating text animation
│   └── Navigation.astro      # Navigation menu
├── styles/
│   ├── global.css      # Global styles
│   ├── pages.css       # Page layout styles
│   └── [page].css      # Page-specific styles
└── lib/
    └── zalgo.ts        # Unicode text distortion utility

public/                # Static assets
dist/                  # Build output (generated)
```

## Key Components

### AnimatedLogo
Renders a rotating circular text animation using the canvas API. Located in `src/components/AnimatedLogo.astro`.

### Zalgo Text Effect
TypeScript utility for applying Unicode combining diacritics to text. Import from `src/lib/zalgo.ts`:

```typescript
import { Zalgo } from '../lib/zalgo';

const zalgo = new Zalgo({ maxHeight: 10, randomization: 50 });
const distorted = zalgo.encode('Hello');
```

## Styling

Styles are organized by scope:
- **`global.css`** — Base typography, reset, and mobile-first defaults
- **`pages.css`** — Layout for pages with header/nav/main sections
- **`[page].css`** — Page-specific overrides (meme.css, acerca.css)

All CSS is plain vanilla with no preprocessor. Astro scopes component styles automatically.

## Deployment

The `dist/` directory contains static HTML files ready to deploy to any static host:

- Netlify, Vercel, GitHub Pages
- Traditional web servers (Nginx, Apache)
- CDNs with static site hosting

## Technology

- **Astro 4.10+** — Static site generator
- **pnpm** — Fast package manager
- **TypeScript** — For utilities and type safety
- **Plain CSS** — No build-time processing

## License

Open source. See LICENSE file for details.

## Resources

- [Astro Documentation](https://docs.astro.build)
- [pnpm Documentation](https://pnpm.io)
- GitHub: [simposio-eclectico](https://github.com/simposio-eclectico)
