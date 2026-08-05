# Development Roadmap (Wayfinder Map)

Dokumen ini merinci langkah-langkah pengembangan (*Actionable Tickets*) untuk mewujudkan ekosistem monorepo ini, dari tahap inisialisasi hingga *deployment*.

## Phase 1: Foundation (The Monorepo, Code Quality & UI)
*   **Task 1.1:** Inisialisasi Turborepo dengan pnpm (`npx create-turbo`).
*   **Task 1.2:** Setup **Code Quality & Git Hooks** (Husky, lint-staged, Prettier, ESLint, TypeScript `tsc --noEmit`).
*   **Task 1.3:** Setup **GitHub Actions** untuk CI/CD Pipeline (otomatis run linter dan type-check di setiap Pull Request).
*   **Task 1.4:** Setup `packages/ui` dengan Tailwind CSS dan Shadcn UI (termasuk konfigurasi tema *Bold & Colorful*).
*   **Task 1.5:** Setup `apps/storybook` dan pastikan komponen awal (misal: Button, Card) bisa diakses di Storybook.

## Phase 2: Content Engine & Portfolio Core
*   **Task 2.1:** Setup Next.js App Router di `apps/portfolio` dan `apps/blog`.
*   **Task 2.2:** Integrasi MDX Parsing (misal menggunakan `next-mdx-remote` atau Contentlayer/Velite) di *packages* terpisah atau langsung di aplikasi terkait.
*   **Task 2.3:** Membangun UI Bento Grid di `apps/portfolio` menggunakan komponen dari `packages/ui`.
*   **Task 2.4:** Menyusun konten statis (CV, bio, teks dasar) ke dalam UI.

## Phase 3: The Wow Factor (AI Integration)
*   **Task 3.1:** Setup Vercel AI SDK di `apps/portfolio`.
*   **Task 3.2:** Integrasi dengan API Model (OpenAI / AWS Bedrock).
*   **Task 3.3:** Merancang *System Prompt* yang menyuntikkan data CV (RAG sederhana).
*   **Task 3.4:** Membangun *UI Chat Cell* di dalam Bento Grid dan menghubungkannya dengan state *streaming* dari Vercel AI.

## Phase 4: Frontend Showcases (Dashboard & 3D)
*   **Task 4.1:** Membangun arsitektur state dengan Zustand di `apps/dashboard`.
*   **Task 4.2:** Integrasi *chart library* dan *dnd-kit* untuk Kanban board.
*   **Task 4.3:** Setup Three.js / React Three Fiber di `apps/3d-showcase`.
*   **Task 4.4:** Membangun minimal 1 interaksi fisika / 3D model viewer yang responsif.

## Phase 5: Polish & Performance
*   **Task 5.1:** Menambahkan transisi dan animasi kompleks menggunakan Framer Motion di semua aplikasi (terutama Portfolio).
*   **Task 5.2:** Audit SEO, Accessibility (A11y), dan Lighthouse Score (Target: 95+).

## Phase 6: Deployment & CI/CD
*   **Task 6.1:** Konfigurasi Vercel Projects (Satu repo GitHub dihubungkan ke 5 proyek Vercel yang berbeda).
*   **Task 6.2:** Setup *Custom Subdomains* (`blog.`, `dashboard.`, `3d.`, `ui.`) di DNS management.
