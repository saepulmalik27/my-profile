# Project Overview: Monorepo Ecosystem

Dokumen ini memberikan gambaran umum tingkat tinggi (High-Level Overview) dari arsitektur Monorepo Turborepo yang dibangun untuk portfolio Saepul Malik.

## 🏗 Arsitektur Utama
Proyek ini menggunakan **Turborepo** dipadukan dengan **pnpm workspaces** untuk mengelola beberapa aplikasi (apps) dan *shared packages* dalam satu *repository* tunggal.

## 📦 Packages
### 1. `packages/ui` (The Design System)
*   **Fungsi:** Menjadi *Single Source of Truth* untuk desain visual seluruh ekosistem.
*   **Tech:** Tailwind CSS, Shadcn UI, Framer Motion, Design Tokens (Colors, Typography).
*   **Kelebihan:** Memastikan konsistensi tampilan (Bento Box, Bold & Colorful) di semua aplikasi.

## 🚀 Applications (Apps)
### 1. `apps/portfolio` (Main Gateway)
*   **Fungsi:** Wajah utama dari identitas digital. Berisi *resume*, *case studies*, dan pengenalan singkat.
*   **Tech:** Next.js (App Router), MDX untuk *case studies*.
*   **Highlight:** Menggunakan layout Bento Box interaktif dan menyematkan "AI Resume Assistant" langsung di beranda.

### 2. `apps/blog` (Technical Writing)
*   **Fungsi:** Platform untuk membagikan pemikiran teknis, tutorial, dan pengalaman selama 8 tahun bekerja.
*   **Tech:** Next.js (App Router), murni MDX untuk performa maksimal pembacaan statis.

### 3. `apps/dashboard` (Frontend Showcase)
*   **Fungsi:** Demonstrasi kemampuan merancang dan membangun UI/UX kompleks (seperti SaaS).
*   **Tech:** Next.js, Zustand (Client-side State Management), Recharts/Chart.js, dnd-kit (Drag & Drop).
*   **Highlight:** Interaksi tingkat lanjut tanpa hambatan *backend latency* karena menggunakan *mock data*.

### 4. `apps/3d-showcase` (Creative & Physics Showcase)
*   **Fungsi:** Menunjukkan eksplorasi visual tingkat tinggi dan latar belakang Fisika melalui simulasi di web.
*   **Tech:** Next.js, Three.js, React Three Fiber (R3F).

### 5. `apps/storybook` (Component Documentation)
*   **Fungsi:** Katalog hidup dari semua komponen yang ada di `packages/ui`.
*   **Tech:** Storybook (Next.js/React framework).
*   **Highlight:** Rekruter/Engineer lain dapat berinteraksi langsung dengan komponen UI (tombol, *card*, navigasi) secara terisolasi.
