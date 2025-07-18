# Cinebelgicano Productions - Andrés Lübbert Portfolio

A modern, responsive landing page showcasing filmmaker Andrés Lübbert's portfolio and services. Built with React, TypeScript, and Vite, featuring professional design and smooth animations.

## 🌐 Live Site

Visit the live website: [https://feed-dev.github.io/Andres-LandingPage/](https://feed-dev.github.io/Andres-LandingPage/)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all device sizes
- **Interactive Components**: Portfolio carousel, video gallery, and contact forms
- **Professional Showcase**: Awards, testimonials, and project highlights
- **Contact Integration**: Project inquiry forms and calendar booking
- **Fast Loading**: Optimized build with Vite and modern web technologies

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components built on Radix UI
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## 📋 Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Feed-dev/Andres-LandingPage.git
cd Andres-LandingPage
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint to check code quality
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting without making changes
- `yarn deploy` - Deploy to GitHub Pages manually (after building)

## 🌍 Deployment

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. **Push to Master Branch**: Any push to the `master` branch triggers automatic deployment
2. **GitHub Pages Setup**: Ensure GitHub Pages is enabled in repository settings with source set to "GitHub Actions"
3. **Live Site**: Changes will be automatically deployed to the live site

### Manual Deployment

For manual deployment to GitHub Pages:

```bash
# Build the project
yarn build

# Deploy to GitHub Pages
yarn deploy
```

### Repository Settings

To enable GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. The site will be available at `https://[username].github.io/Andres-LandingPage/`

## 📁 Project Structure

```
src/
├── components/
│   ├── generated/          # Auto-generated UI components
│   │   ├── CinebelgicanoHomepage.tsx
│   │   ├── FeaturedFilmsCarousel.tsx
│   │   ├── ImageGallerySlider.tsx
│   │   └── VideoGrid.tsx
│   └── ui/                 # Reusable shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── settings/               # Theme and configuration
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## 🎨 Customization

### Theme Configuration

Theme settings are managed in `src/settings/theme.ts`:

- Light/dark mode switching
- Container layout options (centered/full-width)
- Color scheme configuration

### Content Updates

Main content is located in:
- `src/components/generated/CinebelgicanoHomepage.tsx` - Main homepage content
- Update filmmaker information, services, portfolio items, and testimonials

### Styling

The project uses Tailwind CSS v4 with:
- Custom design system
- Responsive breakpoints
- Animation utilities
- shadcn/ui component styling

## 🔧 Development Notes

- **Path Aliases**: `@/*` resolves to `./src/*` for clean imports
- **TypeScript**: Strict type checking enabled
- **ESLint**: React-specific linting rules configured
- **Prettier**: Consistent code formatting
- **Build Output**: Generated in `dist/` directory
