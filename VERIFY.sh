#!/bin/bash
# Verification script for Astro migration

echo "🔍 Verifying Astro Migration"
echo "============================"
echo ""

# Check Node version
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found"
    exit 1
fi
echo "✓ Node.js $(node -v)"

# Check pnpm
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm not found. Run: npm install -g pnpm"
    exit 1
fi
echo "✓ pnpm $(pnpm --version)"

# Check project structure
echo ""
echo "📁 Checking project structure..."

REQUIRED_DIRS=(
    "src/pages"
    "src/layouts"
    "src/components"
    "src/styles"
    "src/lib"
)

for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "  ✓ $dir"
    else
        echo "  ❌ $dir missing"
    fi
done

# Check key files
echo ""
echo "📄 Checking key files..."

REQUIRED_FILES=(
    "src/pages/index.astro"
    "src/pages/meme.astro"
    "src/pages/audio.astro"
    "src/pages/experimentos.astro"
    "src/pages/acerca.astro"
    "src/layouts/Layout.astro"
    "src/components/AnimatedLogo.astro"
    "src/components/Navigation.astro"
    "src/lib/zalgo.ts"
    "astro.config.mjs"
    "tsconfig.json"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ❌ $file missing"
    fi
done

# Check dependencies
echo ""
echo "📦 Checking dependencies..."

if [ -f "pnpm-lock.yaml" ]; then
    echo "  ✓ pnpm-lock.yaml exists"
elif [ -f "package-lock.json" ]; then
    echo "  ⚠️  package-lock.json exists (should use pnpm-lock.yaml)"
else
    echo "  ❌ No lock file found. Run: pnpm install"
fi

if [ -d "node_modules" ]; then
    echo "  ✓ node_modules exists"
else
    echo "  ❌ node_modules not found. Run: pnpm install"
fi

# Try to run dev server
echo ""
echo "🚀 Testing dev server..."
echo "  This will start the dev server on http://localhost:3000"
echo "  Press Ctrl+C to stop"
echo ""

if [ -f "node_modules/.bin/astro" ]; then
    echo "  ✓ Astro CLI found"
    echo ""
    echo "  Starting dev server..."
    pnpm run dev
else
    echo "  ❌ Astro CLI not found. Run: pnpm install"
    exit 1
fi
