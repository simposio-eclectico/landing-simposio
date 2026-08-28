# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static site for **Simposio Ecléctico**, an open-source artist collective. Built with Astro and using pnpm for dependency management. The site features an animated rotating circular logo and multiple route pages with custom styling.

## Development Commands

- **`pnpm install`** — Install dependencies with pnpm (faster and more efficient than npm)
- **`pnpm run dev`** — Start the Astro dev server with hot module replacement. The site will be available at `http://localhost:3000`
- **`pnpm run build`** — Create a production build in the `dist/` directory. Output is static HTML, optimized and minified
- **`pnpm run preview`** — Serve the production build locally to test the final output before deployment
- **`pnpm astro add`** — Add integrations and dependencies via Astro CLI

## Project Structure

- **`src/`** — Source directory
  - **`pages/`** — Route pages (auto-generated routes in Astro)
    - `index.astro` — Home page with animated logo
    - `meme.astro`, `audio.astro`, `experimentos.astro`, `acerca.astro` — Collection pages
  - **`layouts/`** — Shared layout components
    - `Layout.astro` — Main layout wrapper with meta tags and global styles
  - **`components/`** — Reusable Astro components
    - `AnimatedLogo.astro` — Rotating circular text animation
    - `Navigation.astro` — Navigation menu (used on all pages)
  - **`styles/`** — Global and page-specific CSS
    - `global.css` — Base styles and typography
    - `pages.css` — Layout styles for route pages
    - `meme.css`, `acerca.css` — Page-specific styling
  - **`lib/`** — Utility functions and classes
    - `zalgo.ts` — Zalgo text effect class (TypeScript); encodes/decodes text with Unicode diacritics
- **`public/`** — Static assets (images, fonts, etc.)
- **`astro.config.mjs`** — Astro configuration
- **`tsconfig.json`** — TypeScript configuration
- **`package.json`** — Dependencies and scripts (uses pnpm)

## Architecture Notes

**Astro File-based Routing**:
- Pages in `src/pages/` automatically become routes (e.g., `pages/meme.astro` → `/meme/`)
- Uses `.astro` file format (HTML-like with frontmatter for server-side logic)
- Static site generation by default; all HTML is pre-rendered at build time

**Animated Logo** (`AnimatedLogo.astro`):
- Canvas-based rotating circular text ("SIMPOSIO ECLECTICO")
- Renders with kerning and rotation calculations
- Uses `requestAnimationFrame` for smooth 60 FPS animation
- Only on homepage; component abstracts animation logic

**Zalgo Text Effect** (`lib/zalgo.ts`):
- TypeScript class applying Unicode combining diacritics (codes 768–865) for visual distortion
- Configurable: `top`, `middle`, `bottom`, `maxHeight`, `randomization`
- Methods: `encode(text, options)` and `decode(text)`
- Importable utility for text manipulation across components

**Component Structure**:
- `Layout.astro` handles all meta tags, fonts, and shared structure
- Page-specific CSS imported directly in page components
- Navigation component reused across all pages

## Technology Stack

- **Framework**: Astro 4.10+ (static site generator)
- **Package Manager**: pnpm 8.0+ (faster, more reliable than npm)
- **Runtime**: Node.js 18 (see `.nvmrc`)
- **Language**: Astro (HTML-like) + TypeScript for utilities
- **Styling**: Plain CSS (scoped per component in Astro)
- **Build**: Astro's built-in Vite-based bundler

## Environment

- Node 22 pinned in `.nvmrc`
- pnpm configured in `package.json` (packageManager field)
- No external UI framework dependencies; vanilla HTML/CSS/JS
- TypeScript available for utilities but not required

## Build Output

- Production builds output to `dist/` directory (git-ignored)
- Static HTML files generated for each page at build time
- Assets (images, CSS) optimized and hashed for caching
