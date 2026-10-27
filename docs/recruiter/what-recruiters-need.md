# Apa yang Sebenarnya Dibutuhkan HR / Recruiter dari Sebuah CV?

Riset: 27 Oktober 2026. Konteks: CV untuk peran frontend/fullstack developer dan IT PM / delivery,
terutama di Indonesia (bank/BUMN seperti BRI, fintech, startup).

## Cara membaca dokumen ini

Setiap klaim diberi label tingkat bukti:

- **[DATA]**: angka dari studi atau survei yang metodologinya bisa dicek (tetap ada catatan
  keterbatasannya).
- **[VENDOR]**: dokumentasi resmi vendor ATS. Ini akurat untuk *cara kerja fitur*, tapi tidak
  memberi tahu seberapa sering perusahaan benar-benar menyalakan fitur itu.
- **[KLAIM-VENDOR]**: angka dari perusahaan yang menjual layanan CV atau ATS. Ada kepentingan komersial.
- **[REGULASI]**: teks hukum atau peraturan Indonesia.
- **[OPINI]**: praktik umum atau pendapat praktisi, tanpa data kuat.

Tingkat keyakinan ditulis sebagai **Tinggi / Sedang / Rendah**.

---

## 1. Ringkasan singkat

1. **Penyaringan pertama memang cepat, tapi angka "6 detik" itu lemah.** Angka 6 detik (2012) dan
   7,4 detik (2018) berasal dari studi internal Ladders, perusahaan yang menjual jasa penulisan CV.
   Studi 2012 hanya melibatkan 30 recruiter, dan studi 2018 tidak menyebut ukuran sampelnya. Pola
   yang bisa dipegang: recruiter memindai **jabatan, perusahaan, tanggal, dan pendidikan** lebih
   dulu. (Keyakinan: Sedang)
2. **"75% CV ditolak ATS" adalah mitos tanpa sumber.** Angka ini berasal dari materi penjualan
   Preptel (sekitar 2012), perusahaan yang tutup pada 2013, dan tidak pernah disertai metodologi.
   (Keyakinan: Tinggi bahwa angkanya tidak terdukung)
3. **ATS tidak menolak CV karena "format jelek".** Penolakan otomatis yang terdokumentasi berasal
   dari **pertanyaan knockout di formulir lamaran** (izin kerja, lokasi, lama pengalaman, dan
   sejenisnya) yang dikonfigurasi oleh perusahaan. Format yang buruk membuat **parsing gagal**,
   sehingga data kamu tidak muncul di pencarian atau ranking. Akibatnya bukan penolakan langsung.
   (Keyakinan: Tinggi)
4. **Ranking berbasis AI kini nyata** (Greenhouse Talent Matching, Workday HiredScore). Sistem ini
   mencocokkan CV hasil parsing dengan skill, jabatan, dan kualifikasi dasar di lowongan. Menurut
   dokumentasinya, keputusan akhir tetap di tangan manusia. (Keyakinan: Tinggi untuk cara kerja;
   Rendah untuk tingkat adopsi di Indonesia)
5. **Filter yang terlalu kaku memang membuang kandidat yang layak.** Ini didukung data survei
   HBS/Accenture (2021): 88% employer mengakui kandidat high-skill yang layak tersaring keluar.
   Hampir separuh menyaring otomatis jeda kerja lebih dari 6 bulan. (Keyakinan: Sedang, karena
   survei di AS/UK/Jerman)
6. **Isi yang dicari:** jabatan dan perjalanan karier yang jelas, skill yang relevan dengan
   lowongan, dan **bukti dampak yang terukur** (rumus XYZ Laszlo Bock). (Keyakinan: Sedang-Tinggi)
7. **Indonesia:** foto, tanggal lahir, agama, dan status pernikahan **tidak perlu** kecuali diminta.
   SE Menaker M/6/HK.04/V/2025 melarang diskriminasi rekrutmen, termasuk batas usia dan syarat
   "berpenampilan menarik", dan UU PDP mewajibkan pengumpulan data yang terbatas dan spesifik.
   (Keyakinan: Tinggi untuk isi regulasi; Sedang untuk praktik di lapangan)

---

## 2. Bagaimana recruiter menyaring CV (manusia)

### 2.1 Studi eye-tracking Ladders: apa yang benar-benar diukur

**Studi 2012, "Keeping an eye on recruiter behavior"** [DATA, dengan catatan berat]

- Sumber utama: PDF Ladders (salinan di Boston University),
  <https://www.bu.edu/com/files/2018/10/TheLadders-EyeTracking-StudyC2.pdf>. Ladders, 2012. Laporan
  dasarnya: *Eye Tracking Online Metacognition: Cognitive Complexity and Recruiter Decision Making*,
  Will Evans, Ladders, 2012.
- Metodologi: **30 recruiter profesional selama 10 minggu**.
- Temuan: keputusan awal "fit/no fit" diambil dalam **sekitar 6 detik**. Recruiter sendiri mengaku
  menghabiskan 4 sampai 5 menit per CV.
- Hampir **80% waktu** dihabiskan untuk 6 data: **nama, jabatan dan perusahaan saat ini, jabatan dan
  perusahaan sebelumnya, tanggal mulai dan selesai jabatan saat ini dan sebelumnya, serta
  pendidikan**. Selebihnya recruiter hanya memindai kata kunci yang cocok dengan lowongan ("pattern
  matching").
- Di profil online, **19% waktu habis untuk menatap foto profil**. Laporan itu juga menyebut bahwa
  data yang tidak relevan, seperti usia, gender, dan ras, bisa membiaskan penilaian.
- **Catatan kritis:** laporan ini ditutup dengan iklan jasa penulisan CV Ladders ("Click here to
  learn more about TheLadders resume re-writing services"). Sampelnya kecil, tidak ada peer review,
  dan isinya membandingkan profil Ladders dengan LinkedIn (pesaingnya). Perlakukan sebagai **studi
  pemasaran berbasis data**, bukan riset akademik.

**Studi 2018 (Eye-Tracking Study 2018)** [DATA, dengan catatan berat]

- Sumber utama: PDF Ladders,
  <https://www.theladders.com/static/images/basicSite/pdfs/TheLadders-EyeTracking-StudyC2.pdf>.
  Ladders, 2018. Situs aslinya diblokir Cloudflare saat diakses, jadi saya membaca salinan Wayback
  Machine (snapshot 12 Okt 2026).
- Temuan: rata-rata penyaringan awal **7,4 detik**. Recruiter paling lama melihat **jabatan (job
  title)**. CV terbaik punya layout sederhana, header seksi yang jelas, jabatan yang di-*bold* dengan
  bullet pencapaian di bawahnya (pola baca F/E), ringkasan di bagian atas, dan font yang jelas.
- CV terburuk: tampilan penuh, kalimat panjang, **banyak kolom**, sedikit ruang kosong, dan
  **keyword stuffing**. Ladders menyarankan agar kata kunci muncul *dalam konteks*.
- Aturan dua halaman masih berlaku untuk kandidat berpengalaman, tetapi waktu baca di halaman 2
  sangat bergantung pada seberapa menarik halaman 1.
- **Catatan kritis:** bagian metodologi **tidak menyebut jumlah recruiter maupun jumlah CV**.

**Kesimpulan untuk mitos "6 atau 7 detik":** jangan dikutip sebagai fakta universal. Angkanya berasal
dari dua studi vendor dengan sampel kecil atau tidak diungkap. Pola yang konsisten dan masuk akal
adalah ini: **pemindaian awal itu singkat dan fokus pada jabatan, perusahaan, tanggal, dan
pendidikan.** Jadi informasi itu harus paling mudah ditemukan. (Keyakinan: Sedang)

### 2.2 Apa yang dicari dari isi CV

- **Bukti dampak yang terukur.** Laszlo Bock (waktu itu SVP People Operations Google) menulis rumus
  **"Accomplished [X] as measured by [Y] by doing [Z]"**. Contohnya: "Responsible for negotiating
  service contracts" diubah menjadi "Negotiated 30% ($500k) reduction in costs ... by designing and
  using results from an online auction of multiple vendors". Sumber: Laszlo Bock, *My Personal
  Formula for a Winning Resume*, LinkedIn Pulse, 29 Sep 2014,
  <https://www.linkedin.com/pulse/20140929001534-24454816-my-personal-formula-for-a-better-resume>.
  [OPINI dari praktisi yang sangat kredibel] (Keyakinan: Sedang-Tinggi)
- **Skill yang bisa diverifikasi.** Laporan LinkedIn *Future of Recruiting 2025* (survei 1.271
  profesional rekrutmen, Sep 2024, ditambah data platform) menemukan bahwa 93% profesional talent
  acquisition menilai pengukuran skill yang akurat itu krusial untuk kualitas rekrutmen.
  Perusahaan yang paling banyak memakai pencarian berbasis skill 12% lebih mungkin mendapat
  "quality hire". Lowongan berbayar yang tidak mensyaratkan gelar naik dari 22% (2020) ke 26%
  (2023). Sumber: LinkedIn Talent Solutions, 2025,
  <https://business.linkedin.com/talent-solutions/resources/future-of-recruiting>. [DATA/KLAIM-VENDOR,
  karena LinkedIn juga menjual produk rekrutmen] (Keyakinan: Sedang)
- **Atribut yang dicari employer (lulusan baru, AS).** Survei NACE *Job Outlook 2025* (237
  responden, Agu sampai Sep 2024): hampir 90% employer mencari bukti **problem-solving** di CV,
  sekitar 80% mencari **kerja tim**, dan lebih dari 70% mencari komunikasi tertulis, inisiatif, etos
  kerja, dan skill teknis. Sumber: NACE, Des 2024,
  <https://naceweb.org/talent-acquisition/candidate-selection/what-employers-seek-on-a-resume>, dan
  press release Jan 2025,
  <https://naceweb.org/about-us/press/the-attributes-employers-look-for-on-new-grad-resumes-and-how-to-showcase-them>.
  [DATA] **Relevansi terbatas:** surveinya untuk lulusan baru di AS, bukan kandidat 8 tahun di
  Indonesia. Yang bisa dipakai: soft skill sebaiknya **dibuktikan lewat contoh** di bullet, bukan
  sekadar didaftar.
- **Indonesia, AI dan portofolio.** Liputan laporan Jobstreet by SEEK 2025 (survei lebih dari 1.200
  praktisi rekrutmen/HR) menyebut **71% perusahaan di Indonesia mempertimbangkan pengetahuan AI
  kandidat**, dan bahwa portofolio serta micro-credential makin dihargai dibanding gelar saja.
  Sumber: Fortune IDN, 2025,
  <https://www.fortuneidn.com/news/jobstreet-tren-perekrutan-diprediksi-naik-pada-semester-ii-2025-00-6cmtl-tqzg4n/amp>.
  [DATA dari sumber sekunder; laporan aslinya tidak berhasil diakses] (Keyakinan: Sedang-Rendah)

---

## 3. Bagaimana ATS mem-parsing, mencari, dan me-ranking CV

### 3.1 Parsing: CV diubah menjadi field terstruktur

- **Greenhouse** [VENDOR]: parsing bisa gagal karena **file lebih dari 2,5 MB**, **CV berupa
  gambar**, **grafik, layout multi-kolom, informasi di header/footer atau text box**, dan data
  placeholder. Kalau gagal, CV "hanya dilampirkan" dan data harus diisi manual. Parsing parsial juga
  perlu dikoreksi manual. Sumber: Greenhouse Support, *Unsuccessful resume parse*,
  <https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse> (diakses
  2026). (Keyakinan: Tinggi)
- **Lever** [VENDOR]: format yang didukung adalah Word, PDF, RTF, HTML, dan ODF. **Gambar (JPG/PNG)
  tidak bisa di-parse**. Tes cepatnya: kalau teks di dokumen tidak bisa di-*highlight*, kemungkinan
  besar file itu tidak bisa di-parse. Batas ukurannya 10 MB. Sumber: Lever Help Center,
  *Understanding Resume Parsing*, <https://help.lever.co/hc/en-us/articles/20087345054749>.
  **Halaman ini tidak bisa saya buka langsung** (error CSS/anti-bot), jadi isinya diambil dari
  cuplikan indeks pencarian. (Keyakinan: Sedang)
- **Konsekuensinya:** parsing yang gagal **tidak sama dengan ditolak**. Masalahnya, data kamu tidak
  masuk ke field yang dipakai untuk pencarian, filter, dan AI matching, sehingga kamu "tidak
  terlihat" atau masuk antrean manual.

### 3.2 Knockout atau pre-screening: satu-satunya penolakan otomatis yang terdokumentasi jelas

- **Greenhouse** [VENDOR]: *Auto-Reject* "uses custom application questions to screen and reject
  candidates based on their responses" dan bisa mengirim email penolakan. Ada juga *Auto-Advance*
  dan *Auto-Tag*. Aturan ini bekerja atas **jawaban pertanyaan formulir, bukan isi CV**. Tersedia di
  paket Plus/Pro. Sumber: Greenhouse Support, *Application Rules Overview*,
  <https://support.greenhouse.io/hc/en-us/articles/203105595-Application-Rules-Overview>.
  (Keyakinan: Tinggi)
- **Oracle Recruiting Cloud** [VENDOR]: "Disqualification questions require a score so that
  candidates ... are entered in the selection process or are **automatically disqualified**." Satu
  jawaban dengan skor negatif sudah cukup untuk mendiskualifikasi. Sumber: Oracle Docs, *Guidelines
  for Scoring Questions*,
  <https://docs.oracle.com/en/cloud/saas/talent-management/faimh/guidelines-for-scoring-questions.html>.
  Taleo (produk Oracle yang lebih lama) punya mekanisme serupa: kandidat bisa langsung dikeluarkan
  bila tidak memberi jawaban yang disyaratkan, lihat
  <https://docs.oracle.com/en/cloud/saas/taleo-enterprise/20b/otrec/candidate-prescreening.html>.
  (Keyakinan: Tinggi)
- **Workday** [VENDOR]: contoh di admin guide memakai kuesioner "Basic Screening" (Ya/Tidak dan
  pilihan ganda, misalnya *Legal Work Eligibility*) pada tahap screen "so that only eligible
  candidates are progressed to the next stage." Sumber: Workday Admin Guide, *Create a
  Questionnaire*,
  <https://doc.workday.com/admin-guide/en-us/manage-workday/business-processes/questionnaires/questionnaire-video-examples/collect-information-from-job-applicants/create-a-questionnaire.html>.
  Halaman itu tidak merinci apakah kandidat yang tidak lolos otomatis ditolak. (Keyakinan: Sedang)
- **Implikasi praktis:** jawaban di formulir (lokasi, ekspektasi gaji, lama pengalaman, sertifikasi,
  bersedia WFO, dan sejenisnya) **lebih menentukan** penolakan otomatis daripada desain CV. Jawab
  dengan jujur dan konsisten dengan CV.

### 3.3 Ranking dengan AI (generasi baru)

- **Greenhouse Talent Matching** [VENDOR]: tim rekrutmen membuat "kalibrasi" dari job description
  (skill, pengalaman industri, opsional lama pengalaman dan jabatan). CV yang sudah di-parse lalu
  dikelompokkan menjadi *Strong / Good / Partial / Limited match / Needs manual review*. Preview CV
  menyorot "exact keyword matches" dan "similar keyword matches". Fitur ini **"does not
  automatically advance or reject candidates"**. CV yang tidak bisa diproses AI masuk ke *Needs
  manual review*. Sumber: Greenhouse Support, *Talent Matching*,
  <https://support.greenhouse.io/hc/en-us/articles/41396009937307-Talent-Matching>. Menurut ringkasan
  indeks pencarian, Greenhouse juga menyebut bahwa daftar istilah yang lebih panjang tidak selalu
  menaikkan skor, jadi menjejalkan kata kunci tidak efektif. Kalimat ini tidak saya temukan saat
  membuka halamannya langsung. (Keyakinan: Tinggi untuk mekanisme; Sedang untuk catatan keyword
  stuffing)
- **Workday HiredScore Spotlight** [VENDOR]: memberi nilai A/B/C/D. Sejak rilis Agustus 2026, sebuah
  LLM menilai **setiap kualifikasi lowongan terhadap CV hasil parsing**. Kandidat yang memenuhi
  **semua kualifikasi dasar (basic qualifications) mendapat A/B**. Kualifikasi preferensi membedakan
  A dari B. Ada tampilan "Fit & Gap" untuk recruiter. Fitur ini opt-in (pilot). Sumber: Workday
  HiredScore Release Notes, 5 Agu 2026,
  <https://doc.workday.com/hiredscore/en-us/workday-hiredscore/hiredscore-release-notes/2026/august/wednesday--5th-august.html>.
  (Keyakinan: Tinggi)
- **Implikasinya:** ATS modern membaca **makna**, tidak hanya string persis. Tetap saja, cara paling
  aman adalah **menulis kualifikasi dasar lowongan secara eksplisit** di CV (misalnya "React",
  "Next.js", "5+ tahun", "Scrum", "stakeholder management"), dengan bukti di bullet pengalaman.
- **Bias AI** [DATA]: University of Washington (Wilson & Caliskan, AIES 2024) menguji 3 model
  embedding open-source pada 554 CV dan 571 job description. Model lebih memilih nama yang
  diasosiasikan dengan kulit putih pada 85% kasus. Ini simulasi, bukan pipeline ATS sungguhan.
  Sumber: <https://www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/>, 2024.
  Relevansinya untuk Indonesia: ini satu argumen lagi untuk **tidak mencantumkan** data demografis
  yang tidak diminta.

### 3.4 Seberapa luas ATS dipakai

- Survei HBS/Accenture (2020 sampai 2021, AS/UK/Jerman): **63%** employer memakai RMS/ATS (AS 75%,
  Jerman 54%, UK 58%). **Lebih dari 90%** pengguna RMS memakainya untuk memfilter atau me-ranking awal
  kandidat middle-skill (94%) dan high-skill (92%). Sumber: Fuller, Raman, Sage-Gavin, Hines,
  *Hidden Workers: Untapped Talent*, Harvard Business School & Accenture, Sep 2021,
  <https://www.hbs.edu/managing-the-future-of-work/Documents/research/hiddenworkers09032021.pdf>.
  PDF-nya dibaca lewat Wayback Machine. [DATA] (Keyakinan: Sedang)
- Angka "99% Fortune 500 memakai ATS" yang dikutip laporan itu berasal dari **Jobscan**, vendor alat
  optimasi CV. [KLAIM-VENDOR]
- AI di HR: SHRM *2025 Talent Trends* (2.040 profesional HR, Feb 2025) mencatat 43% organisasi
  memakai AI di fungsi HR. Dari organisasi tersebut, 51% memakainya untuk rekrutmen, termasuk
  screening CV. Sumber: SHRM, 2025, <https://www.shrm.org/topics-tools/research/2025-talent-trends>.
  Saya hanya membaca ringkasan dan press release, bukan laporan lengkapnya. [DATA] (Keyakinan:
  Sedang)
- **Indonesia:** saya **tidak menemukan data primer** tentang tingkat adopsi ATS atau AI screening
  di Indonesia. Startup dan fintech sering memakai ATS global (Greenhouse, Lever, Workable) atau
  platform lokal. Bank dan BUMN biasanya memakai portal e-recruitment dengan formulir terstruktur.
  [OPINI] (Keyakinan: Rendah)

---

## 4. Mitos yang perlu diluruskan

| Mitos | Status | Asal-usul dan bukti |
|---|---|---|
| "75% CV ditolak ATS sebelum dilihat manusia" | **Tidak terdukung** | Ditelusuri ke materi penjualan **Preptel** (penjual jasa optimasi CV) sekitar 2012. Perusahaan itu tutup 2013 tanpa pernah menerbitkan metodologi atau sampel. Angka ini lalu menyebar lewat artikel yang saling mengutip (Forbes 2014, CIO 2018, CNBC 2019). Materi asli Preptel **tidak bisa diakses**. Penelusurannya dikreditkan ke Christine Assaf (HRtact/HiringThing). Ringkasan sekunder: <https://www.f1jobs.io/resources/blog/ats-resume-service-75-percent-rejection-myth>. (Keyakinan: Tinggi bahwa angka tidak punya dasar; Sedang untuk detail kronologi) |
| "ATS menolak CV karena formatnya" | **Sebagian salah** | Dokumentasi vendor menunjukkan penolakan otomatis berasal dari **jawaban knockout** (Greenhouse, Oracle). Format buruk menyebabkan **parsing gagal**, bukan penolakan (Greenhouse). |
| "Recruiter hanya membaca 6 atau 7 detik" | **Dilebih-lebihkan** | Studi vendor Ladders (n=30 pada 2012; n tidak diungkap pada 2018). Yang diukur adalah *keputusan awal*. Ladders 2018 juga menyebut recruiter yang tertarik membaca halaman 2 sama lamanya dengan halaman 1. |
| "Tidak ada yang tersaring secara keliru, jadi ATS itu netral" | **Salah** | HBS/Accenture 2021: **88%** employer setuju kandidat high-skill yang layak tersaring keluar karena tidak cocok persis dengan kriteria (94% untuk middle-skill). **Hampir separuh** menyaring otomatis CV dengan jeda kerja lebih dari 6 bulan. Catatan: ini **persepsi** employer, bukan pengukuran langsung. |
| "Jejalkan semua keyword" | **Kontraproduktif** | Ladders 2018 mencatat keyword stuffing sebagai ciri CV terburuk. Greenhouse Talent Matching mencocokkan istilah serupa, bukan menghitung jumlah. |
| "CV harus 1 halaman" | **Tergantung** | Ladders 2018: 2 halaman wajar untuk kandidat berpengalaman. Jobstreet Indonesia (2018) menyarankan 1 halaman, tapi konteksnya bursa kerja umum (<https://www.antaranews.com/berita/728563/strategi-melamar-kerja-dari-jobstreet>). [OPINI] |

---

## 5. Konteks hukum dan budaya Indonesia

- **UU No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP)** [REGULASI], diundangkan 17 Okt 2022
  dengan masa transisi 2 tahun (Pasal 74). Sumber teks: JDIH Kemenkeu,
  <https://jdih.kemenkeu.go.id/download/46c17b53-4a45-411c-9b76-c6799e5769fc/UU_Nomor_27_Tahun_2022%20Perlindungan%20Data%20Pribadi.pdf>.
  - Pasal 4 ayat (3): **agama dan status perkawinan** termasuk data pribadi **umum**, bukan
    spesifik. Data **spesifik** mencakup data kesehatan, **biometrik**, catatan kejahatan, dan
    keuangan pribadi.
  - Penjelasan Pasal 4 ayat (2) huruf b: data biometrik adalah data "yang memungkinkan identifikasi
    unik terhadap individu, **seperti gambar wajah** atau data daktiloskopi." Apakah foto di CV
    otomatis tergolong data spesifik masih soal tafsir. Yang jelas, foto termasuk data yang sensitif
    bila diproses untuk identifikasi. (Keyakinan tafsir: Rendah-Sedang)
  - Pasal 16 ayat (2): pengumpulan data harus "terbatas dan spesifik, sah secara hukum, dan
    transparan". Kewajiban ini ada di **pengendali data (perusahaan)**, tetapi prinsipnya mendukung
    praktik **minimisasi data** di CV.
  - Saran praktis: jangan cantumkan NIK/KTP, alamat lengkap, tanggal lahir, agama, status
    pernikahan, foto, atau kondisi kesehatan di CV kecuali diminta. Cukup cantumkan kota.
- **SE Menaker No. M/6/HK.04/V/2025 tentang Larangan Diskriminasi dalam Proses Rekrutmen Tenaga
  Kerja** (28 Mei 2025) [REGULASI]: melarang diskriminasi atas dasar apa pun, termasuk **batas usia**
  dan **syarat berpenampilan menarik**. Batas usia hanya boleh bila karakteristik pekerjaan benar-benar
  memengaruhi kemampuan kerja dan tidak menghilangkan kesempatan kerja. Sumber: Hukumonline, 2025,
  <https://www.hukumonline.com/berita/a/menaker-terbitkan-se-larangan-diskriminasi-dalam-proses-rekrutmen-kerja-lt68371ba32ebf7>.
  **Catatan:** surat edaran bukan peraturan yang mengikat secara hukum. Kajian DPR menilai masih
  perlu produk hukum yang lebih kuat (<https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVII-12-II-P3DI-Juni-2025-2433.pdf>).
  Dalam praktik, formulir BUMN/bank mungkin masih menanyakan usia. (Keyakinan: Tinggi untuk isi SE;
  Sedang untuk penegakannya)
- **UU 13/2003 Ketenagakerjaan, Pasal 5 dan 6** [REGULASI]: setiap tenaga kerja berhak atas
  kesempatan dan perlakuan yang sama tanpa diskriminasi. Rujukan sekunder: Hukumonline,
  <https://www.hukumonline.com/berita/a/pemerintah-ingatkan-penghapusan-diskriminasi-ketenagakerjaan-lt5c82bc2b00e0d>.
  Teks resmi di peraturan.bpk.go.id tidak saya buka langsung.
- **Kebiasaan lokal** [OPINI]: CV Indonesia dulu lazim memuat pas foto, TTL, agama, dan status
  menikah. Media dan platform karier lokal kini menyarankan **tidak mencantumkannya kecuali
  diminta** (CNBC Indonesia 2022,
  <https://www.cnbcindonesia.com/lifestyle/20220307114103-33-320551/ingat-ya-4-hal-ini-seharusnya-tidak-ada-di-cv-kamu>;
  Dealls, <https://dealls.com/pengembangan-karir/status-pernikahan-di-cv>). Ladders 2012 juga
  mencatat foto menyedot perhatian (19% waktu pada profil online) dan data seperti usia dan gender
  bisa membiaskan penilaian.
- **Data lokal yang kurang:** saya tidak menemukan laporan resmi Glints atau Kalibrr tentang perilaku
  screening CV. Laporan Jobstreet HCB 2024 (1.180 profesional TA, Sep 2023) lebih membahas gaji dan
  benefit (<https://id.jobstreet.com/about/news/article/hcb-report-2024>). Jadi bagian "apa yang
  dicari recruiter Indonesia" sebagian besar masih bergantung pada data global.

---

## 6. Apa yang membuat CV ditolak (diurutkan dari bukti terkuat)

1. **Gagal knockout di formulir** (lokasi, izin kerja, lama pengalaman, sertifikasi wajib, gaji). [VENDOR, Tinggi]
2. **Tidak memenuhi kualifikasi dasar yang eksplisit**, termasuk yang tidak tertulis di CV meski
   sebenarnya dimiliki. Workday memisahkan tier A/B dan C/D berdasarkan kualifikasi dasar; HBS
   menunjukkan filter kredensial yang kaku. [VENDOR/DATA, Tinggi]
3. **Jeda kerja lebih dari 6 bulan tanpa penjelasan** di sebagian perusahaan yang menyalakan filter
   itu. [DATA HBS, Sedang]
4. **Parsing gagal** karena CV berupa gambar atau scan, multi-kolom, text box, info penting di
   header/footer, atau file terlalu besar. CV jadi tidak terlihat di pencarian. [VENDOR, Tinggi]
5. **Sulit dipindai**: jabatan dan tanggal tidak menonjol, paragraf panjang, padat. [DATA Ladders, Sedang]
6. **Tidak ada bukti dampak**, hanya daftar tugas. [OPINI kredibel, Sedang]
7. **Inkonsistensi** (jabatan, tahun pengalaman, atau kontak berbeda antara CV, LinkedIn, dan
   portofolio) yang memicu kecurigaan title inflation. [OPINI, Sedang; lihat juga
   `docs/recruiter/portfolio-feedback.md` poin 3]

---

## 7. Checklist praktis: CV dev / PM untuk recruiter Indonesia + ATS

**Format (agar ter-parse dan mudah dipindai)**

- [ ] PDF berbasis teks (bisa di-*highlight*) atau .docx. Bukan scan atau gambar. Ukuran di bawah 2,5 MB.
- [ ] Satu kolom. Tanpa tabel, text box, atau ikon untuk informasi penting. Kontak **di body**, bukan
      di header/footer dokumen.
- [ ] Judul seksi standar: *Summary/Profile, Experience, Skills, Education, Certifications, Projects*.
- [ ] Jabatan **bold**, lalu perusahaan, lalu **bulan-tahun mulai sampai selesai**. Bullet pendek di bawahnya.
- [ ] 1 sampai 2 halaman. Halaman 1 memuat semua yang paling relevan.

**Header**

- [ ] Nama, **jabatan target** yang sesuai lowongan, email, satu nomor HP yang aktif, LinkedIn, GitHub, portofolio.
- [ ] **Kota/lokasi dan preferensi kerja** (misalnya "Jakarta/Bogor · Open to hybrid/remote"),
      karena lokasi sering jadi filter knockout.
- [ ] **Tanpa** foto, tanggal lahir, agama, status menikah, NIK, atau alamat lengkap, kecuali diminta.

**Isi**

- [ ] Ringkasan 2 sampai 3 baris: peran, total tahun pengalaman (konsisten di semua dokumen), spesialisasi, dan 1 bukti dampak.
- [ ] Bullet berformat XYZ: *hasil + ukuran + cara*. Pakai angka nyata (jumlah klien/pengguna,
      persen waktu yang dihemat, frekuensi rilis, ukuran tim).
- [ ] **Kualifikasi dasar lowongan ditulis eksplisit** dengan istilah yang sama dengan lowongan
      (misalnya "React.js", "Next.js", "REST API", "Jest"), dan muncul **dalam konteks** di bullet,
      tidak hanya di daftar skill.
- [ ] Untuk peran **IT PM/delivery**: scope (jumlah proyek, stakeholder, ukuran tim), metodologi
      (Scrum/Kanban/Waterfall), alat (Jira, dan sebagainya), manajemen risiko/rilis, anggaran atau
      timeline bila ada, dan sertifikasi (PMP, PSM, CAPM, ITIL) bila ada.
- [ ] Untuk peran **dev**: stack, arsitektur, kualitas (testing, CI/CD, keamanan), performa, dan
      tautan ke kode/demo.
- [ ] Pendidikan dengan tahun. Sertifikasi dengan tahun.
- [ ] Jeda lebih dari 6 bulan dijelaskan dalam satu baris (freelance, studi, keluarga).

**Formulir lamaran**

- [ ] Jawab pertanyaan knockout dengan jujur dan **konsisten dengan CV** (tahun pengalaman, lokasi,
      gaji, ketersediaan).

---

## 8. Panduan praktis (digabung dari versi sebelumnya)

Bagian ini berasal dari versi awal dokumen ini (panduan praktis). Sebagian besar isinya adalah
**[OPINI]** praktisi rekrutmen. Bila bertentangan dengan bagian 1–7, ikuti bagian 1–7 yang bersumber.
Dua koreksi penting terhadap versi lama:

- Angka **7,4 detik** dan pola **F** bukan fakta umum; keduanya dari studi internal Ladders dengan
  keterbatasan besar (lihat 2.1).
- ATS **tidak** otomatis menolak CV karena format berantakan; format buruk membuat parsing gagal sehingga
  CV sulit ditemukan. Penolakan otomatis yang terdokumentasi berasal dari jawaban pertanyaan knockout
  di formulir (lihat 3.2).

### 8.1 Data Krusial yang Wajib Ada (*The Non-Negotiables & Dealbreakers*)

Jika data ini hilang atau ambigu, recruiter sering kali memilih *pass* ke kandidat berikutnya karena tidak punya waktu untuk mengejar konfirmasi manual:

| Kategori | Data yang Dibutuhkan Recruiter | Mengapa Krusial? |
| :--- | :--- | :--- |
| **Lokasi & Domisili** | Kota, Negara, & Timezone (misal: *Jakarta, Indonesia / UTC+7*) | Memastikan kecocokan jam kerja tim dan aturan pajak/legalitas ketenagakerjaan. |
| **Work Arrangement** | *Open to Remote*, *Hybrid (Jakarta)*, atau *Relocation* | Menghindari tawaran pekerjaan onsite yang tidak cocok dengan preferensi kerja Anda. |
| **Notice Period** | *Available immediately*, *1 month notice*, atau *2 months notice* | User sering butuh pengganti cepat. Jika recruiter tidak tahu kapan Anda bisa join, mereka ragu merekomendasikan. |
| **Kontak Lengkap** | Email profesional, WhatsApp (+62), LinkedIn URL, Live Portfolio/GitHub | Kemudahan menghubungi kandidat dalam waktu cepat. |
| **Konsistensi Job Title** | Judul posisi jelas & standar industri (misal: jabatan yang benar-benar dipegang, misalnya *Frontend Engineer*) | Menghindari kebingungan antara judul di CV, LinkedIn, dan portofolio (menghindari kesan *title inflation*). |
| **Tenure / Tanggal Kerja** | Format konsisten: `Bulan Tahun – Bulan Tahun` (misal: `Feb 2021 – Present`) | Recruiter menghitung durasi kerja dalam hitungan detik untuk mengevaluasi stabilitas karier. |

---

### 8.2 Pembuktian Kompetensi: Dari "Daftar Tugas" Menjadi "Impact Terukur"

Kesalahan paling umum pelamar adalah menuliskan daftar tugas (*task-based*). Recruiter dan Hiring Manager mencari **pencapaian (*achievement-based*)** menggunakan standar industri seperti formula **Google X-Y-Z**:

$$\text{Accomplished [X], as measured by [Y], by doing [Z]}$$

##### Contoh Transformasi Kalimat

> Angka di contoh "kuat" berikut adalah **ilustrasi**. Pakai hanya angka yang benar dan bisa dipertanggungjawabkan saat wawancara.

* ❌ **Lemah (Task-based):**
  > *"Responsible for developing frontend features and integrating with AI APIs."*
* ✅ **Kuat (Impact-based & Quantified):**
  > *"Built Inspigo AI's RAG pipeline (S3 → Pinecone, OpenAI + Bedrock fallback) and owned the streaming chat UX, handling thousands of daily queries across 350+ enterprise clients."*

* ❌ **Lemah (Task-based):**
  > *"Created forms and charts for admin dashboard using React."*
* ✅ **Kuat (Impact-based & Quantified):**
  > *"Architected a reusable config-driven form system (React Hook Form + Zod) and reporting dashboard (Recharts), adopting it across 100% of internal CMS modules."*

* ❌ **Lemah (Task-based):**
  > *"Handled CI/CD deployment and security scanning."*
* ✅ **Kuat (Impact-based & Quantified):**
  > *"Automated deployment pipeline via GitHub Actions and weekly SAST/DAST security scans, reducing release cycle time by 60% and eliminating manual SSH deployments."*

---

### 8.3 Konteks Perusahaan: Jangan Biarkan Recruiter Menebak

Recruiter tidak mengetahui semua nama startup atau perusahaan lokal. Berikan konteks 1 baris mengenai model bisnis dan skalanya:

* **Format yang disukai:**
  > **PT Inspigo Inovasi Indonesia** (B2B EdTech & Corporate Learning Platform, 350+ Enterprise Clients)  
  > *Frontend Engineer* | *[Bulan] 2021 – Present*

Konteks ini secara instan memberitahu recruiter bahwa Anda terbiasa menangani produk B2B berskala enterprise.

---

### 8.4 Apa yang Dibutuhkan Recruiter untuk "Menjual" Anda ke Hiring Manager?

Saat recruiter merekomendasikan kandidat ke hiring manager, mereka menulis **Candidate Submission Note** (ringkasan pitch). Struktur CV yang baik memungkinkan recruiter menyusun submission note ini hanya dengan melihat 1/3 halaman atas CV Anda:

```markdown
#### Contoh Submission Note Recruiter:
- **Nama Kandidat:** Saepul Malik
- **Target Posisi:** sesuai lowongan (Frontend / Full-Stack)
- **Pengalaman Total:** 8 Tahun (3 tahun Fullstack PHP/Vue/Postgres, 5 tahun React/Next.js & AI)
- **Kekuatan Utama:**
  1. Spesialis arsitektur UI multi-tenant & scalable design system (350+ klien enterprise).
  2. Berpengalaman nyata merilis fitur AI berbasis LLM & RAG (OpenAI, Bedrock, streaming UX).
  3. Latar belakang analitis kuat (Fisika, IPB) dengan kepemilikan end-to-end dari frontend hingga CI/CD.
- **Lokasi & Ketersediaan:** Bogor, Indonesia (Open to remote & onsite), Notice period: 1 bulan.
```

---

### 8.5 Hal yang Harus DIHAPUS dari CV (Anti-Patterns & Red Flags)

1. **Progress Bar / Rating Bintang untuk Skill:**
   * Contoh: *React 90%, Docker 70%, Python 85%*.
   * **Mengapa salah:** Angka ini subjektif, tidak memiliki standar objektif, terlihat amatir, dan membuat ATS bingung. Cukup sebutkan nama teknologinya.
2. **Ringkasan Profil yang Klise / Mengawang-awang:**
   * Contoh: *"Passionate team player with strong work ethic and visionary mindset."*
   * Ganti dengan ringkasan profesional yang padat fakta (pengalaman berapa tahun, spesialisasi apa, pencapaian skala apa).
3. **Data Pribadi yang Tidak Perlu:**
   * Agama, status perkawinan, alamat jalan rumah lengkap/RT/RW, atau nomor identitas nasional (KTP/NIK).
4. **Layout Kolom Ganda yang Kompleks untuk Teks Utama:**
   * Kolom ganda yang dibuat dengan tabel atau frame grafis sering kali dibaca terbalik atau terpotong oleh parser ATS lama. Format *single column* atau *clean linear layout* adalah format paling aman.
5. **Daftar Seluruh Tools yang Cuma Pernah Dilihat Sekali:**
   * Cantumkan hanya teknologi yang menjadi *daily-driver* atau yang Anda siap diskusikan secara mendalam saat wawancara teknis.

---

## 9. Status CV yang sudah ada (per 27 Oktober 2026)

Sudah diperbaiki di `docs/cv/cv-content.md`, `docs/applications/general-cv.md`,
`docs/applications/bibit-fullstack-cv.md`, dan `docs/applications/frontend-developer-v1-cv.md`:

- Nomor HP tunggal: **+62 895-2733-4546**.
- Pengalaman ditulis eksplisit: **8 tahun software engineering, 5 tahun terakhir fokus frontend**
  (React/Next.js), setelah 3 tahun full-stack.
- Header: **Bogor, Indonesia · Open to remote & onsite · 1-month notice**.
- Headline disesuaikan per lamaran (CV Bibit sekarang "Full-Stack Developer").

Masih terbuka:

1. **CV dev belum memakai angka dampak**: bullet di `frontend-developer-v1-cv.md` dan `bibit-fullstack-cv.md`
   masih kualitatif. Angka nyata (~350 klien enterprise, ~35.000 pengguna) bisa dipakai ulang bila relevan.
2. **Tanggal hanya tahun** (2021 – Present). Format bulan-tahun membantu parser menghitung durasi. [OPINI, Sedang]
3. Beberapa CV per lamaran di `docs/applications/` masih menulis "4+ years" fokus React; untuk lamaran
   berikutnya pakai "5".
4. **CV PM untuk BRI** ditunda. Catatan untuk nanti: kualifikasi dasar seperti "memimpin tim 20–40
   orang" kemungkinan menjadi knockout atau penentu tier C/D di ATS berbasis kualifikasi; keyword PM
   (Scrum, risk management, stakeholder, release planning, vendor) perlu muncul eksplisit dengan bukti.
5. **Sebelum dikirim, cek hasil PDF**: teks bisa di-*highlight* dan kontak tidak masuk header/footer.

---

## 10. Sumber yang tidak bisa dijangkau langsung


- Situs Ladders (theladders.com): diblokir Cloudflare. PDF 2018 dibaca dari Wayback Machine, PDF 2012 dari salinan BU.
- Materi asli Preptel (asal "75%"): tidak tersedia. Yang ada hanya penelusuran sekunder.
- Lever Help Center: halaman tidak terbuka. Isi diambil dari cuplikan indeks pencarian.
- Laporan lengkap Jobstreet 2025, LinkedIn *Future of Recruiting 2023*, dan SHRM 2025 Talent Trends
  (versi penuh): hanya ringkasan resmi atau liputan yang terbaca.
- Laporan Glints/Kalibrr tentang screening CV: tidak ditemukan.
