# Saepul Malik's Portfolio

Welcome to the source code for my personal portfolio! This project is structured as a monorepo using [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/).

## Features & Highlights

- **Interactive 3D Home Scene:** A fully walkable bedroom built with React Three Fiber, featuring interactive objects (like a monitor that reveals the rest of the site) and a distinct "Two Lights" visual theme.
- **AI Chatbot Widget:** A persistent, site-wide floating assistant powered by the Vercel AI SDK (DeepSeek). It's grounded in the site's own structured content to answer questions about my experience and skills.
- **Unified Content Model:** Work history, skills, and about-me prose are managed as structured TypeScript files in `apps/portfolio/content/`, while project case studies are written in MDX. This data drives both the UI and the AI chatbot's system prompt.
- **Wayfinder Maps:** Project architecture and content decisions are transparently documented using local markdown maps located in `docs/wayfinder/`.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics:** [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **AI Integration:** [Vercel AI SDK](https://sdk.vercel.ai/) (DeepSeek)
- **Monorepo Tooling:** [Turborepo](https://turbo.build/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Project Structure

This monorepo includes the following apps and packages:

### Apps
- `apps/portfolio`: The main Next.js portfolio application containing the 3D scene, content engine, and AI integration.
- `apps/storybook`: UI component documentation and testing environment for shared components.

### Packages
- `packages/ui`: A shared React UI component library.
- `packages/eslint-config`: Shared ESLint configurations used throughout the monorepo.
- `packages/typescript-config`: Shared `tsconfig.json` configurations.

## Getting Started

### Prerequisites
Ensure you have Node.js (>=18) and `pnpm` installed on your machine.

### Installation
1. Clone the repository and navigate into the directory.
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

To start the development server for all apps and packages, run:
```bash
pnpm dev
```

To run only the portfolio app:
```bash
pnpm turbo run dev --filter=portfolio
```
The portfolio app will be available at [http://localhost:3000](http://localhost:3000).

### Build

To build all apps and packages for production:
```bash
pnpm build
```

## Available Scripts

From the root directory, you can run:

- `pnpm dev`: Starts the development server for all apps.
- `pnpm build`: Builds all apps and packages.
- `pnpm lint`: Runs ESLint checks across the project.
- `pnpm format`: Formats code using Prettier.
- `pnpm check-types`: Runs TypeScript type checking.
