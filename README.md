# Portfolio Website

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean design optimized for showcasing your work and experience.

## Quick Start

### Prerequisites
- Node.js 16+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/snehil21/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Customization

Edit your portfolio content in `src/data/portfolio.ts`:
- Update personal information in `HERO_DATA`
- Add your experience in `EXPERIENCES`
- Include your skills in `SKILLS`
- Showcase projects in `PROJECTS`
- Customize about section with `ABOUT_DATA`
- Add competitive programming stats in `COMPETITIVE_PROGRAMMING_STATS`

Update UI text and labels in `src/data/sections.ts`

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Dark/Light mode toggle
- 📱 Fully responsive design
- ⌨️ Command palette (Cmd+K)
- 🎯 Multiple pages (Home, About, Experience, Projects, Contact)
- 🔗 Direct GitHub integration
- ⚡ Fast performance with Vite

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vite
- React Router v6

## Deployment

Deploy to Vercel, Netlify, or GitHub Pages:

```bash
npm run build
# Then follow your hosting provider's deployment instructions
```
