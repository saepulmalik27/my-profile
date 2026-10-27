# Action Checklist: Sinkronisasi Kebutuhan Recruiter ke Portofolio & CV

> **Tujuan:** Checklist praktis untuk memastikan bahwa perbaikan CV, konten portofolio (`saepulmalik.dev`), dan aplikasi lamaran telah memenuhi kriteria seleksi recruiter secara tuntas.

---

## 1. Status Evaluasi Temuan Recruiter

Berdasarkan audit recruiter pada [`portfolio-feedback.md`](./portfolio-feedback.md), berikut adalah status penyelesaian gap yang teridentifikasi:

| # | Temuan Recruiter | Solusi / Standar yang Diharapkan | Prioritas | Status |
| :-: | :--- | :--- | :-: | :-: |
| 1 | **Data Logistik Kurang Lengkap** (Lokasi, Timezone, Work Authorization) | Tambahkan di header CV dan section About/Contact web: `Bogor, Indonesia (UTC+7)`, open to remote & onsite. | P1 | Selesai di header CV (`docs/cv/*`, `cv-content.md`, `general-cv.md`); web About/Contact belum |
| 2 | **Ketersediaan & Notice Period Tidak Ada** | Cantumkan ketersediaan: *Notice period 1 bulan* dan preferensi kerja (remote & onsite). | P1 | Selesai di header CV; web About/Contact belum |
| 3 | **Inkonsistensi Job Title** (*Senior Frontend Engineer* vs *Frontend Engineer*) | Selaraskan judul posisi di seluruh platform (CV, LinkedIn, Web Header, Career Cards) agar tidak menimbulkan persepsi *title inflation*. | P1 | Perlu verifikasi konsistensi |
| 4 | **Metrik Dampak Belum Terkuantisasi** (Hanya kata kerja kualitatif: "built", "maintained") | Tambahkan angka terukur: 350+ klien enterprise, ~35.000 user, otomasi QA dari 10% sampling ke 100%, efisiensi build/release. | P1 | Diimplementasikan di `cv-content.md` |
| 5 | **Studi Kasus Tanpa Bukti Visual** (Proyek B2B internal tanpa live public URL) | Tambahkan screenshot UI / GIF / rekaman singkat demo sistem untuk Inspigo For Business & Inspigo AI agar craft visual terbukti. | P2 | Sesuai roadmap konten |
| 6 | **GitHub Tidak Menampilkan Proyek Terkurasi** | Pin repositori proyek relevan atau buat catatan portofolio kode terbuka / showcase demo arsitektur mandiri. | P2 | Ongoing |
| 7 | **Klaim Sertifikasi AWS / AI** | Hindari mencantumkan klaim sertifikasi yang belum dimiliki; fokus pada bukti nyata implementasi pipeline AWS Bedrock/OpenAI. | P2 | Diverifikasi |

---

## 2. Checklist Verifikasi CV (Sebelum Dikirim ke Recruiter)

Gunakan checklist ini setiap kali mengirimkan CV ke lowongan kerja atau recruiter:

### A. Header & 1/3 Halaman Atas (First 7 Seconds)
- [ ] Nama lengkap & Target Job Title jelas dan sesuai lowongan (misal: *Frontend Engineer* atau *Full-Stack Developer*).
- [ ] Kontak lengkap: Email profesional, Nomor WhatsApp dengan `+62`, LinkedIn URL, Portfolio/GitHub URL.
- [ ] Lokasi: Kota, Negara (*Bogor, Indonesia*).
- [ ] Ketersediaan: Status kerja & *Notice Period* jelas.
- [ ] Professional Summary (maks. 3–4 baris) mencantumkan: total tahun pengalaman, spesialisasi utama, dan skala dampak.

### B. Pengalaman Kerja (Employment History)
- [ ] Perusahaan terkini memiliki konteks 1 baris mengenai industri & skala (misal: *B2B EdTech Platform, 350+ clients*).
- [ ] Tanggal menggunakan format standar `Bulan Tahun – Bulan Tahun` (misal: `Feb 2021 – Present`).
- [ ] 2 bullet point teratas pada pekerjaan terakhir langsung memuat metrik dampak terukur (bukan sekadar daftar tugas harian).
- [ ] Kalimat menggunakan kata kerja aksi (*Architected, Engineered, Automated, Reduced, Spearheaded*).

### C. Keahlian Teknis & Format Dokumen (ATS Safety)
- [ ] Menggunakan format *single column* yang bersih dan tidak menggunakan tabel grafis yang rumit.
- [ ] Tidak ada rating bintang atau persentase skill (*Skill bars* 80%/90% dihapus).
- [ ] Kategori teknologi dikelompokkan dengan rapi (*Frontend*, *Backend & Cloud*, *AI Integration*, dll.).
- [ ] Dokumen berukuran 1 halaman (atau maks 2 halaman) dalam format PDF yang teksnya bisa diseleksi (*searchable text*).
