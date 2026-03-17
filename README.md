# Personal Website

Justin Leong's personal portfolio website — built with SvelteKit, Tailwind CSS v4, and deployed to GitHub Pages.

## 🚀 Live Site

Deployed automatically to GitHub Pages on every push to `main`.

## 🛠️ Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | SvelteKit (static adapter) |
| Package manager | Bun (CI) / npm (local) |
| Styling | Tailwind CSS v4 |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Deployment | GitHub Actions → GitHub Pages |

## 📁 Project Structure

```
portfolio/          ← SvelteKit app
├── src/
│   ├── lib/data.ts         ← All profile/content data
│   └── routes/             ← Pages: /, /about, /experience, /projects, /contact
├── static/
│   ├── resume.pdf
│   └── images/profile.jpg
└── build/                  ← Static output (git-ignored)
```

## 💻 Local Development

```bash
cd portfolio
npm install
npm run dev
```

## 🏗️ Production Build

```bash
cd portfolio
npm run build   # outputs to portfolio/build/
```

## 🚢 Deployment

This site deploys automatically to GitHub Pages when a commit is pushed to `main`.

**One-time repository setup:**
1. Go to repo → Settings → Pages
2. Source: **GitHub Actions** (NOT "Deploy from a branch")
3. Ensure repo is **Public**
4. Actions → General → Allow all actions

**Manual trigger:** GitHub → Actions → "Build & Deploy to GitHub Pages" → Run workflow

## 📋 Source Material

| File | Purpose |
|------|---------|
| `Justin Leong _ LinkedIn.html` | LinkedIn profile snapshot |
| `Justin_s_Resume_3_17_25__Software_Focus_.pdf` | Resume (also served at `/resume.pdf`) |

