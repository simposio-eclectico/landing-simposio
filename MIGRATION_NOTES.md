# Migration from Vite to Astro

This document records the changes made when migrating from Vite to Astro, for future reference.

## What Changed

### Build Tool
- **From**: Vite 5.0.8
- **To**: Astro 4.10.0

### Package Manager
- **From**: npm
- **To**: pnpm 8.0+

### Project Structure
- **Old**: Root-level HTML files (`index.html`, `routes/*/index.html`)
- **New**: Astro pages in `src/pages/` (file-based routing)

### File Organization

| Old | New | Notes |
|-----|-----|-------|
| `index.html` | `src/pages/index.astro` | Home page with animated logo |
| `js/index.js` | `src/components/AnimatedLogo.astro` | Canvas animation extracted to component |
| `js/zalgo.js` | `src/lib/zalgo.ts` | Migrated to TypeScript for type safety |
| `css/*.css` | `src/styles/*.css` | Organized in styles directory |
| `routes/*/index.html` | `src/pages/*.astro` | File-based routing |

### HTML Migration
- Converted static HTML to `.astro` components
- Extracted common layout into `src/layouts/Layout.astro`
- Created reusable `Navigation.astro` component
- Removed manual stylesheet linking; imported in components

### CSS Changes
- Moved all stylesheets to `src/styles/`
- Page-specific styles imported in their respective `.astro` files
- No changes to CSS content; all styles preserved

### JavaScript Changes
- Canvas animation moved from `js/index.js` to `AnimatedLogo.astro` component
- Zalgo class converted to TypeScript (`src/lib/zalgo.ts`)
- Fixed loop condition in Zalgo encode from `for (let i in text)` to `for (let i = 0; i < text.length; i++)`
- Scripts now run as part of Astro component lifecycle

### Breaking Changes for Users
- Routes changed from `/routes/meme/` to `/meme/`
- All page URLs simplified (Astro file-based routing)
- No JavaScript frameworks or hydration by default

### Build Process
- **Old**: `npm run build` → outputs to `dist/`
- **New**: `pnpm run build` → outputs to `dist/`
- Both produce static HTML; Astro is even more optimized

### Development Server
- **Old**: `npm run dev` → http://localhost:5173 (Vite default)
- **New**: `pnpm run dev` → http://localhost:3000 (Astro default)

## Why Astro?

1. **Better for static sites** — Astro is purpose-built for static generation
2. **Less boilerplate** — File-based routing without additional config
3. **Component model** — `.astro` format is cleaner for HTML-heavy pages
4. **Zero JavaScript by default** — Only loads JS when needed (canvas animation)
5. **TypeScript support** — Utilities can use TS without framework overhead

## Deprecations
- `vite` dependency removed
- Old `routes/` directory can be deleted (kept for reference)
- Old `js/` and `css/` directories can be deleted (content migrated)
- Old `index.html` can be deleted (migrated to `src/pages/index.astro`)

## Testing the Migration

1. Install dependencies: `pnpm install`
2. Start dev server: `pnpm run dev`
3. Visit http://localhost:3000 and verify:
   - Animated logo appears and rotates
   - Navigation links work
   - All pages load correctly
   - CSS styling is applied
4. Build and preview: `pnpm run build && pnpm run preview`
5. Verify production build works identically

## Future Cleanup

Consider removing old directories in a separate commit:
```bash
rm -rf js css routes index.html
```

Keep this file for documentation purposes.
