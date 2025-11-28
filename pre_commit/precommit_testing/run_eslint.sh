#!/usr/bin/env bash
set -e

# Subshell to avoid changing current directory
(
  cd frontend/my-react-app || exit 1

  echo "Running Prettier on JS/TS files..."
  npx prettier --write "**/*.{js,jsx,ts,tsx}"

  echo "Running ESLint --fix on JS/TS files..."
  npm run lint:fix
)

# Re-stage all JS/TS files in the React project so pre-commit sees the fixes
# git add frontend/my-react-app/**/*.{js,jsx,ts,tsx}

echo "Prettier + ESLint fixes applied and staged."
