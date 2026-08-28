#!/bin/bash
# Quick start script for Simposio Ecléctico after migration

echo "🚀 Simposio Ecléctico - Quick Start"
echo "===================================="
echo ""

# Check Node version
NODE_VERSION=$(node -v)
echo "✓ Node.js: $NODE_VERSION"

# Install pnpm if not available
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

PNPM_VERSION=$(pnpm --version)
echo "✓ pnpm: $PNPM_VERSION"

# Remove old npm lock files
if [ -f "package-lock.json" ]; then
    echo "🧹 Removing old npm lock file..."
    rm package-lock.json
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  pnpm run dev      - Start development server (http://localhost:3000)"
echo "  pnpm run build    - Build for production"
echo "  pnpm run preview  - Preview production build"
echo ""
