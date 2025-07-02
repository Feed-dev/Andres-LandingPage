# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite landing page project for Cinebelgicano Productions, showcasing filmmaker Andrés Lübbert's portfolio and services. The project uses modern web technologies including Tailwind CSS v4, shadcn/ui components, and Framer Motion for animations.

## Development Commands

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production (runs TypeScript check then Vite build)
- `yarn lint` - Run ESLint to check code quality
- `yarn preview` - Preview production build locally
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting without making changes
- `yarn deploy` - Deploy to GitHub Pages manually (after building)

## Architecture

### Project Structure
- `src/App.tsx` - Main application component with theme management
- `src/components/generated/` - Auto-generated UI components (main homepage content)
- `src/components/ui/` - Reusable shadcn/ui components
- `src/settings/` - Theme configuration and TypeScript types
- `src/lib/utils.ts` - Utility functions including cn() for class merging

### Key Technologies
- **React 19** with TypeScript for UI framework
- **Vite** for build tooling and development server
- **Tailwind CSS v4** with @tailwindcss/vite plugin for styling
- **shadcn/ui** component library built on Radix UI primitives
- **Framer Motion** for animations and transitions
- **Lucide React** for icons

### Component Architecture
The main homepage is rendered through `CinebelgicanoHomepage.tsx` which includes:
- Hero section with filmmaker portrait and professional credentials
- Services overview with feature cards
- Portfolio carousel and video gallery components
- Industry recognition and testimonials
- Contact form with project inquiry functionality

### Theme System
Theme management is handled in `src/settings/theme.ts` with support for:
- Light/dark mode switching via CSS classes
- Centered or full-width container layouts
- Theme settings applied in `App.tsx`

### Path Aliases
- `@/*` resolves to `./src/*` for clean imports throughout the codebase

## Development Notes

- Uses ESLint for linting with React-specific rules
- Prettier configured for consistent code formatting
- TypeScript configured with strict settings across app and node contexts
- All UI components follow shadcn/ui patterns with proper TypeScript interfaces
- The project includes generated components that appear to be from an external tool or service

## GitHub Pages Deployment

The project is configured for deployment to GitHub Pages at: `https://feed-dev.github.io/Andres-LandingPage/`

### Automated Deployment
- GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys on pushes to `master` branch
- Requires GitHub Pages to be enabled in repository settings with source set to "GitHub Actions"

### Manual Deployment
1. Install dependencies: `yarn install`
2. Build the project: `yarn build`
3. Deploy to GitHub Pages: `yarn deploy`

### Configuration
- Vite base path is set to `/Andres-LandingPage/` in `vite.config.ts` for proper GitHub Pages routing
- Build output is generated in `dist/` directory