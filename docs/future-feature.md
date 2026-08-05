# Future Features (Not Yet Specified / Fog of War)

Bagian ini mendokumentasikan ide-ide fitur lanjutan yang berada di luar *scope* versi 1.0 (MVP), namun sangat menarik untuk dieksplorasi di masa depan ketika fondasi proyek sudah stabil.

## 1. Portfolio App
*   **Multi-language (i18n):** Mendukung Bahasa Indonesia dan Bahasa Inggris yang bisa di-toggle otomatis berdasarkan *locale* browser pengguna atau tombol manual.
*   **Dynamic Theming:** Tema website yang berubah otomatis berdasarkan waktu (Pagi: Terang/Playful, Malam: Gelap/Neon).
*   **AI Voice Output:** Chatbot AI tidak hanya membalas dengan teks, tapi bisa "berbicara" menggunakan TTS (Text-to-Speech) API.

## 2. Blog App
*   **View Counter & Reactions:** Integrasi database sangat ringan (seperti Redis via Upstash) untuk menyimpan jumlah pembaca dan fitur "Like/Clap" ala Medium di setiap artikel.
*   **Newsletter Subscriptions:** Form *capture* email menggunakan API pihak ketiga (Resend/Mailchimp) untuk mengumpulkan audiens setia.

## 3. Dashboard Showcase
*   **Multiplayer / Real-time Collaboration:** Integrasi WebSockets atau *CRDTs* (seperti Yjs atau Liveblocks) agar dua recruiter yang membuka Kanban board di komputer berbeda bisa melihat kursor satu sama lain dan memindahkan *card* secara *real-time*.
*   **Local Storage Persistence:** Menyimpan status Kanban board atau konfigurasi tabel di browser pengunjung sehingga tidak *reset* saat di-*refresh*.

## 4. 3D Showcase
*   **WebXR / VR Support:** Memungkinkan pengguna kacamata VR (seperti Meta Quest) untuk "masuk" ke dalam portfolio 3D Anda langsung dari browser.
*   **Audio Reactivity:** Objek 3D yang bergetar atau berubah bentuk merespons suara (musik atau input mikrofon pengguna).

## 5. UI Component Library
*   **npm Publish:** Mempublikasikan `packages/ui` ke npm public (sebagai `@saepulmalik/ui`) agar developer lain di seluruh dunia bisa melakukan `npm install` dan menggunakan Design System Anda.
