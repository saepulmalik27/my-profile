# UI Pages & Routing Architecture

Dokumen ini memetakan struktur halaman (Pages) dan komponen utama untuk setiap proyek di dalam monorepo.

## 1. `apps/portfolio` (Domain Utama: saepulmalik.my.id)
*   `/` **(Home):** Bento Grid layout. Berisi ringkasan profil, *skills*, tautan sosial, dan **Sel Chat AI**.
*   `/about`: Cerita perjalanan karir (Fisika ➡️ Fullstack ➡️ Frontend AI).
*   `/projects`: Daftar *Case Studies* (Grid list).
*   `/projects/[slug]`: Halaman detail *Case Study* yang di-render dari file MDX.
*   `/resume`: Penampil PDF internal atau halaman HTML murni yang dapat di-print dengan sempurna.

## 2. `apps/blog` (Subdomain: blog.saepulmalik.my.id)
*   `/` **(Blog Home):** Daftar artikel terbaru, fitur pencarian *client-side*, dan filter kategori.
*   `/tags/[tag]`: Menampilkan artikel berdasarkan tag (misal: `react`, `architecture`, `ai`).
*   `/blog/[slug]`: Halaman baca artikel penuh (MDX), dilengkapi fitur *table of contents* (TOC) otomatis di samping.

## 3. `apps/dashboard` (Subdomain: dashboard.saepulmalik.my.id)
*   `/` **(Analytics Overview):** *Dashboard* dengan berbagai *chart* interaktif (Bar, Line, Pie) menampilkan metrik fiktif.
*   `/kanban`: Halaman manajemen proyek ala Trello/Jira dengan fitur *drag-and-drop* mulus (State diatur oleh Zustand).
*   `/data-grid`: Tabel data kompleks dengan fitur *sorting, filtering, pagination*, dan *inline-editing*.

## 4. `apps/3d-showcase` (Subdomain: 3d.saepulmalik.my.id)
*   `/` **(Playground):** Halaman interaktif (mungkin simulasi gravitasi/partikel) yang bisa dimainkan pengguna dengan *mouse*.
*   `/models`: *Showcase render* objek 3D atau produk secara 360 derajat.

## 5. `apps/storybook` (Subdomain: ui.saepulmalik.my.id)
Diatur bukan berdasarkan halaman, melainkan berdasarkan *Atomic Design*:
*   **Atoms:** Buttons, Typography, Badges, Inputs.
*   **Molecules:** Chat Bubbles, Project Cards, Blog Cards, Alert Dialogs.
*   **Organisms:** Bento Grid Layout, Navigation Bar, Footer, Markdown Renderer.
