# Syed Zeeshan Mehmood — Portfolio

A deployment-ready personal portfolio built with React, Vite and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to GitHub Pages

This repository already includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

### 1. Create a GitHub repository

For a normal project repository, for example:

```text
portfolio
```

Or use `symeh.github.io` if you want the portfolio at the root of your GitHub Pages domain.

### 2. Push the project

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/symeh/YOUR-REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

On GitHub:

`Repository → Settings → Pages → Build and deployment → Source → GitHub Actions`

You do not need to manually upload `dist/`. Every push to `main` automatically builds and deploys the site.

### 4. Open the deployed site

For a repository named `portfolio`:

```text
https://symeh.github.io/portfolio/
```

For a repository named `symeh.github.io`:

```text
https://symeh.github.io/
```

The Vite configuration uses a relative asset base (`./`), so the same build works under a GitHub Pages project URL.

## Socials

- GitHub: https://github.com/symeh
- LeetCode: https://leetcode.com/u/syd2489
- Email: syedzeeshan198237@gmail.com

## Profile details included

- Software Trainee — Intelizign Lifecycle Services — Sep 2025 to Present
- Polarion ALM Developer — Labyrinth Global Solutions — Aug 2024 to Sep 2025
- Polarion ALM Developer Intern — Labyrinth Global Solutions — Jun 2024 to Aug 2024
- Bachelor of Engineering, Computer Science — Osmania University

## Featured work

- E-Waste Bridge
- PM Internship Recommendation Engine — SIH Problem Statement 25034
- Polarion Engineering Toolkit
- Spring Boot Learning API
