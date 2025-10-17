# Double Drive

Double Drive is a small local 2-player basketball mini-game built with a single HTML file (canvas + JS). This repository contains the full build and instructions to run it locally or host as a static site.

Controls
- Player 1: A/D = left/right, E = hold/release shoot (or block if no ball), Q = steal, R = dunk.
- Player 2: ←/→ = left/right, P = hold/release shoot, O = steal, I = dunk.

Quick start (local)
- Option A: Serve with npx
  - npx serve .
  - Open http://localhost:5000 (or the port reported by serve)
- Option B: Python built-in server
  - python -m http.server 8000
  - Open http://localhost:8000

How to turn this into a GitHub repository
1. Initialize locally:
   - git init
   - git add .
   - git commit -m "Initial commit — Double Drive"
2. Create the remote and push (using GitHub CLI):
   - gh repo create mathershub/Double-Drive --public --source=. --remote=origin --push
   OR create the repo on GitHub web and then:
   - git remote add origin git@github.com:mathershub/Double-Drive.git
   - git branch -M main
   - git push -u origin main

Enable GitHub Pages (optional)
- In the repository settings, go to Pages and set the source to the main branch (root) to host the game as a static site.

Notes & TODO
- The single-file build is intended to be self-contained for easy hosting (GitHub Pages, Netlify, etc.).
- If you want a development workflow (ES modules, bundling, build step), I can add a minimal Node setup / Rollup or Vite configuration.

If you'd like, I can:
- Create the GitHub repository for you (I can give exact gh commands to run).
- Add a tiny CI workflow (GitHub Actions) for automatic deploys to GitHub Pages.
- Split assets into a proper src/ and dist/ structure and add a dev server (Vite).

Tell me which next step you want and I’ll provide the exact commands or create the next files.