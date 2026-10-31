# Nitesh Kumar: Portfolio (Main)

> A personal developer portfolio with animated backgrounds and a dark/light theme.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

## Overview

Personal portfolio of Nitesh Kumar showing about, skills, projects and a contact form. The site is a work in progress and is improved regularly.

**Live site:** https://niteshkumar656.netlify.app/

## Features

- Hero, About, Skills, Projects and Contact sections
- Animated background and theme toggle
- Contact form delivered through EmailJS
- Reusable project and skill cards

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui (Radix UI) |
| Routing | React Router |
| Email | EmailJS (`@emailjs/browser`) |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm (or pnpm/bun)

### Install and run

```bash
git clone https://github.com/Knitesh026/niteshportfolio-main.git
cd niteshportfolio-main
npm install
npm run dev
```

The app runs at `http://localhost:8080` by default.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint the code |

## Project structure

```
src/
├── components/
│   ├── home/        Hero, About, Skills, Projects, Contact
│   ├── layout/      Navbar, Footer
│   └── ui/          shadcn primitives, ProjectCard, SkillCard, ThemeToggle
└── pages/
```

## Deployment

Build with `npm run build` and deploy the output to any static or Node host such as Netlify or Vercel.

## License

All rights reserved.
