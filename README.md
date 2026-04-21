# Mert Caliskanyurek - Personal Website

My personal portfolio website showcasing projects, tech stack, and professional journey.

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router](https://reactrouter.com/) (HashRouter)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)

## Features

- **Hero Section** - Introduction and call-to-action
- **Projects Showcase** - Portfolio of work with case studies
- **Tech Arsenal** - Skills and technologies
- **Timeline** - Professional journey and milestones
- **SaaS Mindset** - Product development philosophy

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Preview production build
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # shadcn/ui components
│   └── *.tsx      # Page sections
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Route pages
└── main.tsx       # Entry point
```

## Deployment

Deployed to GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`).
