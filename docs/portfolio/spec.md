## Problem Statement

The user, a Web Developer with 8 years of experience, needs a portfolio website to showcase their career journey, skills, and past projects. The existing static PDF CV alone is not enough to demonstrate the user's advanced technical capabilities. Furthermore, to prove true "Senior/Enterprise" level expertise, the user wants to showcase complex frontend architectures, AI integrations, 3D WebGL, and component-driven development practices (Storybook) in a unified, professional ecosystem.

## Solution

A Monorepo (Turborepo) ecosystem that houses a highly interactive, visually striking portfolio website alongside dedicated showcase applications. The entire ecosystem will share a centralized Design System ("Bold & Colorful" aesthetic, "Bento Box" grid layout). The architecture will feature Next.js (App Router), Tailwind CSS, Shadcn UI, Framer Motion, and MDX. Dedicated apps will be deployed on separate Vercel subdomains to demonstrate isolated but connected deployments.

## User Stories

1. As a recruiter, I want to quickly understand the developer's core skills and total years of experience on the main portfolio page.
2. As an Engineering Manager, I want to view detailed case studies (via MDX) and explore a centralized Storybook instance, so that I can verify the developer's component-driven UI/UX approach.
3. As a CTO, I want to explore the "Dashboard & Project Management" showcase, so that I can see tangible proof of complex state management (Zustand) and UI performance without needing a backend.
4. As a CTO, I want to interact with the "3D Demo" showcase, so that I can validate the developer's WebGL/Three.js capabilities and physics background.
5. As an employer, I want to chat with the "AI Resume Assistant" (embedded in the Bento Grid), so that I can see real-world RAG and Vercel AI SDK integration.
6. As a reader, I want to read technical articles and tutorials on a dedicated Blog site, so that I can learn from the developer's 8 years of experience.
7. As the developer, I want to manage all these distinct projects in a single Turborepo, so that I can share the `@acme/ui` components and maintain a single source of truth for the design system.
8. As the developer, I want the deployment process to be automated via Vercel subdomains (e.g., `blog.domain.com`, `dashboard.domain.com`), so that each showcase has its own clean entry point.

## Implementation Decisions

- **Architecture:** Monorepo using Turborepo and pnpm workspaces.
- **Repository Structure:**
  - `apps/portfolio`: Main Next.js App Router (Bento Grid, AI Chatbot).
  - `apps/blog`: Next.js App for technical writing and articles (powered by MDX).
  - `apps/dashboard`: Next.js App for interactive Kanban/Analytic Dashboard showcase (Mock data + Zustand).
  - `apps/3d-showcase`: Next.js App for Three.js / WebGL experiments.
  - `apps/storybook`: Dedicated Storybook application for the design system.
  - `packages/ui`: Shared UI primitives (Tailwind config, Shadcn components, Design tokens).
- **Core Framework:** Next.js with App Router.
- **Styling:** Tailwind CSS + Shadcn UI (Centralized in `packages/ui`).
- **Animation Engine:** Framer Motion (dynamic & fluid).
- **Content Management:** Local Markdown/MDX files for the main portfolio and the blog application.
- **Showcase Data Management:** Pure Client-side/Mock Data (JSON) + Zustand to keep showcases fast and frontend-focused without database overhead.
- **Hosting/Deployment:** Vercel (Independent deployments per app using Subdomains).

## Testing Decisions

- **Focus:** Testing will verify external behavior, user journeys, and visual performance, avoiding tests on strict implementation details.
- **E2E Testing:** Use Playwright or Cypress to ensure navigation, grid layout rendering, and critical interactions work correctly across all apps.
- **Component Testing:** Use Jest + React Testing Library for custom interactive components in `packages/ui`.
- **Performance Audits:** Automated Lighthouse CI testing to ensure high scores on Desktop and Mobile.

## Out of Scope

- A full custom headless CMS (Sanity, Contentful) setup.
- Real backend databases (Supabase, PostgreSQL) for the showcases.
- E-commerce or payment gateways.

## Wow Factor: AI Resume Assistant ("Chat with Me")

- **Feature Definition:** An interactive AI chatbot trained explicitly on the developer's CV and project experience. It acts as a virtual assistant that recruiters can interview.
- **UX/UI Decision:** The chat interface will be seamlessly embedded as a dedicated "Cell" within the main Bento Box Grid of the `apps/portfolio`.
- **Technical Stack (Proposed):** Vercel AI SDK, combined with OpenAI or Bedrock API. Context retrieval (RAG) can be implemented via system prompts containing the MDX resume data.
