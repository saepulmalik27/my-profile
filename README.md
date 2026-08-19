# Saepul Malik's Portfolio

Welcome to the source code for my personal portfolio! This project is structured as a monorepo using [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/).

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
- `apps/portfolio`: The main Next.js portfolio application.
- `apps/storybook`: UI component documentation and testing environment.

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
