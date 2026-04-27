# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website built with React 19, Vite 7, and Tailwind CSS 4. Deployed to GitHub Pages.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Architecture

**Entry Point:** `src/main.jsx` renders `<App>` into `#root`

**App Structure:** Single-page portfolio with scroll-based navigation. `App.jsx` composes these sections in order:
- `Header` - Fixed navigation with scroll-aware background (transparent → gradient), mobile hamburger menu
- `Home` - Hero section with typing animation, floating background bubbles, profile image
- `About` - Bio section with image and animated background elements
- `Skill` - Circular progress charts for 6 skills (HTML, CSS, JS, React, Tailwind, MUI)
- `Project` - Grid of 4 projects with images and external links
- `Contact` - Contact form + info (email, phone, location)
- `Footer` - Social links and copyright

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Custom animations defined inline via `<style>` tags in components (spin, bounce variants, blink, fadeIn).

**Routing:** Uses anchor links (`#home`, `#about`, etc.) for section navigation. Note: Header logo links to `/home` but no React Router is configured.

**Key Dependencies:**
- `framer-motion` - Available but not currently used
- `react-router-dom` - Imported but not used (no routing implemented)
- `react-icons` - Used throughout for social icons and UI elements

## Configuration

- `vite.config.js`: Base path set to `/portfolio/` for GitHub Pages
- `eslint.config.js`: ESLint 9 with react-hooks and react-refresh plugins
- `tailwind.config.js`: Empty (Tailwind v4 uses CSS-first configuration)
