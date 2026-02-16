#!/bin/bash
# deploy.sh — quick commit + push

set -e

if [ -z "$1" ]; then
  echo "usage: ./deploy.sh \"commit message\""
  exit 1
fi

echo "🚀 deploying..."
git add .
git commit -m "$1" --allow-empty
git push origin main

echo "✅ live at: https://bitcon2000.github.io/bitcon-demos/"
