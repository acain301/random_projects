#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# ------------------------------
# DEV ENVIRONMENT INSTALLER — TOAST
# ------------------------------
# Pre-commit linting & formatting script
# Fails fast if venv missing, required tools missing, or .toml not found
# ------------------------------

CUSTOM_EXIT_CODE=15
REQUIRED_TOOLS=(ruff pytest-cov nodeenv pytest)

# ANSI color codes
RED=$'\033[1;31m'
YELLOW=$'\033[1;33m'
GREEN=$'\033[1;32m'
RESET=$'\033[0m'

# ------------------------------
# Display initial banner
# ------------------------------

display_banner() {
    cat <<'EOF'
# =========================================================
#  ██╗██╗  ██╗ ██████╗ ██████╗ 
#  ██║██║  ██║██╔═══██╗██╔══██╗
#  ██║███████║██║   ██║██████╔╝
#  ██║██╔══██║██║   ██║██╔═══╝ 
#  ██║██║  ██║╚██████╔╝██║     
#  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     
#
#                DEV ENVIRONMENT INSTALLER — TOAST
# =========================================================

EOF
}

# ------------------------------
# Check for active virtual environment
# ------------------------------

check_venv() {
    if [[ -z "$VIRTUAL_ENV" ]]; then
        cat <<EOF >&2
${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  PRE-COMMIT BLOCKED: No virtual environment active
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}

${YELLOW}Please activate your venv before committing:

    source .venv/bin/activate${RESET}

EOF
        exit "$CUSTOM_EXIT_CODE"
    fi
}

# ------------------------------
# Check for .toml file and required tools
# ------------------------------

check_tools() {
    # Directory where the script resides
    local script_dir
    script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    # Target directory relative to script
    local search_dir="$script_dir/../server/toast-py/"

    # Fail if directory does not exist
    if [[ ! -d "$search_dir" ]]; then
        echo "${RED}❌ Required directory not found: $search_dir${RESET}" >&2
        exit "$CUSTOM_EXIT_CODE"
    fi

    # Find the first .toml file in the directory
    local toml_dir
    toml_dir=$(find "$search_dir" -type f -name "*.toml" -exec dirname {} \; | head -n 1)

    if [[ -z "$toml_dir" ]]; then
        echo "${RED}❌ Could not find any .toml file in $search_dir${RESET}" >&2
        exit "$CUSTOM_EXIT_CODE"
    else
        echo "📂 Found .toml file in: $toml_dir"
        echo "➡️  Navigate there before installing dependencies:"
        echo "    cd \"$toml_dir\""
    fi

    # Check required tools
    local missing=0
    for tool in "${REQUIRED_TOOLS[@]}"; do
        if ! command -v "$tool" >/dev/null 2>&1; then
            echo "❌ Missing required tool: $tool" >&2
            missing=1
        fi
    done

    if [[ "$missing" -eq 1 ]]; then
        echo "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}" >&2
        echo "⚠️  PRE-COMMIT BLOCKED: Missing development tools" >&2
        echo "${YELLOW}Install tools in your active venv: pip install -e .['test','style']${RESET}" >&2
        exit "$CUSTOM_EXIT_CODE"
    fi
}

# ------------------------------
# Run local linting & formatting scripts
# ------------------------------

run_lint_and_format() {
    echo "✔ Running formatting script..."
    if [[ -x "./format.sh" ]]; then
        ./format.sh || exit "$CUSTOM_EXIT_CODE"
    else
        echo "⚠️  format.sh not found or not executable." >&2
        exit "$CUSTOM_EXIT_CODE"
    fi

    echo "✔ Running backend lint/format script..."
    if [[ -x "./lint_format_backend.sh" ]]; then
        ./lint_format_backend.sh || exit "$CUSTOM_EXIT_CODE"
    else
        echo "⚠️  lint_format_backend.sh not found or not executable." >&2
        exit "$CUSTOM_EXIT_CODE"
    fi

    echo "✔ Linting and formatting completed successfully."
}

# ------------------------------
# Main script
# ------------------------------

main() {
    display_banner
    check_venv
    check_tools
    run_lint_and_format
}

main

