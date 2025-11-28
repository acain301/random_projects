#!/usr/bin/env bash
set -e

backend_files=()

for file in "$@"; do
    if [[ "$file" == backend/*.py ]]; then
        backend_files+=("$file")
    fi
done

if [ ${#backend_files[@]} -eq 0 ]; then
    exit 0
fi

echo "Ruff formatting files:"
printf '%s\n' "${backend_files[@]}"

# Auto-fix all issues
ruff check --fix "${backend_files[@]}"

# # Re-stage the files
# git add "${backend_files[@]}"
