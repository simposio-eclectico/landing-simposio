# Setup Instructions for Migrated Project

This project has been migrated from Vite to Astro and is configured to use pnpm. Follow these steps to complete the setup.

## Prerequisites

- Node.js 18 or higher
- pnpm (see instructions below)

## Step 1: Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
```

## Step 2: Remove old lock files

If you have npm lock files from the old setup, remove them:

```bash
rm -f package-lock.json
rm -rf node_modules
```

## Step 3: Install dependencies with pnpm

```bash
pnpm install
```

This will create a `pnpm-lock.yaml` file instead of `package-lock.json`.

## Step 4: Start development server

```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

## Step 5: Verify migration

- ✅ Animated logo rotates on homepage
- ✅ Navigation links work and routes are `/meme/`, `/audio/`, `/experimentos/`, `/acerca/`
- ✅ CSS styling is applied correctly
- ✅ Browser console has no errors

## Step 6: Build for production

```bash
pnpm run build
```

Output will be in the `dist/` directory.

## Troubleshooting

### "pnpm: command not found"
Make sure pnpm is installed globally:
```bash
npm install -g pnpm
```

### Port 3000 already in use
Change the port:
```bash
pnpm run dev -- --port 3001
```

### Old routes not working (e.g., `/routes/meme/`)
Routes have been simplified. Use `/meme/` instead of `/routes/meme/`.

## What's Different from the Old Setup

| Item | Old (Vite) | New (Astro) |
|------|-----------|-----------|
| Dev server port | 5173 | 3000 |
| Build tool | Vite | Astro |
| Package manager | npm | pnpm |
| Routes | `/routes/meme/` | `/meme/` |
| HTML entry | `index.html` | `src/pages/index.astro` |
| Page structure | Root-level + routes/ | src/pages/ only |

## Next Steps

After setup is complete:

1. Delete old directories (optional, for cleanup):
   ```bash
   rm -rf routes js css index.html
   ```

2. Commit the migration:
   ```bash
   git add .
   git commit -m "chore: migrate from Vite to Astro with pnpm"
   ```

3. Update deployment configuration to use `pnpm install && pnpm run build`

## Documentation

- See `CLAUDE.md` for development guidance
- See `MIGRATION_NOTES.md` for detailed changes
- See `README.md` for project overview
