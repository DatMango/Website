# Repository Setup Guide

One-time manual steps to enable GitHub Pages deployment.

## 1. Enable GitHub Pages via GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Leave **Custom domain** blank unless you have one

## 2. Ensure Repository is Public

Free GitHub Pages requires the repo to be public.

- Settings → General → Danger Zone → **Change repository visibility** → Public

## 3. Confirm Actions are Enabled

- Settings → Actions → General → **Allow all actions and reusable workflows**

## 4. Trigger First Deploy

Push any commit to `main`, or:
- Go to **Actions** tab
- Select "Build & Deploy to GitHub Pages"
- Click **Run workflow** → **Run workflow**

## 5. Verify the Deployment

After ~60 seconds:
- Go to Settings → Pages
- Your site URL will be shown (e.g., `https://dlin2028.github.io/Website/`)

## Notes

- If deploying to a project page (`/repo-name/` path), set `BASE_PATH` in the workflow env and in `svelte.config.js`. Currently set to `''` for root deployment.
- The deploy workflow uses OIDC (no secret tokens needed).
