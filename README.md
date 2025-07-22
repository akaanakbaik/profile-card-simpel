# Kartu Profil Interaktif

Proyek ini adalah implementasi kartu profil interaktif yang dirancang dengan HTML, CSS, dan JavaScript murni. Tujuannya adalah untuk menyajikan informasi pribadi secara dinamis dan menarik, dengan efek visual modern seperti *glassmorphism* dan animasi yang halus. Desainnya responsif, memastikan tampilan optimal di berbagai perangkat, mulai dari desktop hingga perangkat seluler.

## Fitur Utama

- **Desain Modern & Responsif**: Tampilan *glassmorphism* yang menarik dengan efek blur, serta adaptasi sempurna untuk desktop dan mobile.
- **Navigasi Multi-Bagian**: Beralih antar bagian profil (Profil, Perjalanan, Teman, Kontak) dengan transisi yang mulus.
- **Animasi Dinamis**: Efek ketik pada teks, animasi mengambang pada gambar profil, dan efek partikel latar belakang.
- **Informasi Lengkap**: Menampilkan detail pribadi, riwayat perjalanan/pengalaman, daftar teman, dan informasi kontak.
- **Integrasi Media Sosial**: Tautan langsung ke platform media sosial.
- **Audio Latar Belakang**: Opsi untuk memutar musik latar belakang dengan kontrol putar/jeda.
- **Scrollable Content**: Bagian dengan konten panjang (seperti 'Perjalanan Saya' dan 'Teman Saya') dapat di-scroll tanpa menampilkan scrollbar yang mengganggu.

## Struktur Proyek

Proyek ini terdiri dari tiga file utama:

- `index.html`: Struktur dasar halaman web yang mendefinisikan tata letak dan konten.
- `style.css`: Berisi semua aturan CSS untuk styling, responsivitas, dan efek visual.
- `script.js`: Mengandung logika JavaScript untuk interaktivitas, animasi, dan pengelolaan data dinamis.

## Cara Mengubah Data Profil

Semua data profil utama dapat dengan mudah diubah melalui objek `profileData` yang terletak di awal file `script.js`. Anda dapat memodifikasi nilai-nilai berikut:

```javascript
const profileData = {
  name: "Aka",
  tagline: "ini sebenarnya buat apa ya?",
  age: "15 tahun",
  origin: "Sumatra Barat",
  school: "MTsN 2 Pasaman Barat",
  quotes: "Hanya seorang manusia biasa yang mengharapkan kehangatan tulus dari seseorang.",
  roles: ["Pelajar", "Developer", "Pemula", "hehehe 🗿"],
  journey: [
    { year: "2022", description: "Menemukan Hobi Baru\nMulai menjelajahi dunia JB dan Hosting" },
    { year: "2023", description: "Fokus di JB & Hosting\nMeskipun JB kecil-kecilan dan jualan panel" },
    { year: "2024", description: "era jb dan awal developer\nnama jb ku mulai tinggi tetapi karena ingin fokus sekolah saya istirahat jb dan belajar pemograman javascript sebagai awal dan kembangkan bot wa" },
    { year: "2025", description: "Fokus ke pemograman kecil\nkembangkan bot wa dan dalami ngoding website, belajar secara otodidak" },
    { year: "2026", description: "asah pemograman dan fokus sekolah\nterus mengembangkan bot wa, buat projek web kecil dan lebih fokus sekolah" }
  ],
  friends: [
    { name: "Habibi", description: "teman rl terbaik" },
    { name: "hydra", description: "teman baik online, dev bot wa dan leluhur" },
    { name: "youso", description: "teman online baik,pengembang berbakat dan sesepuh" },
    { name: "kyz", description: "teman online baik, pembuat dan developer bot furina ai" },
    { name: "raol", description: "teman online, kang open source code" }
  ],
  contact: {
    location: "Sumatera Barat, Indonesia",
    phone: "+6281266900392",
    email: "furinabyaka@gmail.com"
  }
};
```

Cukup ubah nilai string atau array di dalam objek `profileData` ini sesuai dengan informasi yang ingin Anda tampilkan. Pastikan format data tetap sama (misalnya, untuk `journey` dan `friends`, tetap gunakan array objek dengan properti `year`/`name` dan `description`).

## Cara Menjalankan Secara Lokal

Untuk melihat proyek ini di komputer lokal Anda:

1.  **Unduh atau Kloning Repositori**: Jika Anda mendapatkan kode dari GitHub, gunakan perintah berikut:
    ```bash
    git clone https://github.com/akaanakbaik/profile-card-simpel.git
    cd profile-card-simpel
    ```
    Jika Anda mengunduh file secara langsung, ekstrak arsip ke folder pilihan Anda.
2.  **Buka File `index.html`**: Cukup buka file `index.html` menggunakan browser web pilihan Anda (misalnya Google Chrome, Mozilla Firefox, Microsoft Edge). Anda dapat melakukannya dengan mengklik dua kali file tersebut atau menyeretnya ke jendela browser.

## Deployment (Hosting Gratis)

Proyek ini adalah aplikasi web statis, yang berarti dapat di-deploy dengan sangat mudah ke berbagai layanan hosting statis gratis. Berikut adalah beberapa opsi populer yang direkomendasikan:

-   **Vercel**: Sangat mudah digunakan, integrasi GitHub yang mulus, dan performa cepat. Cukup hubungkan repositori GitHub Anda, dan Vercel akan otomatis mendeploy setiap kali ada perubahan.
-   **Netlify**: Mirip dengan Vercel, menawarkan deployment otomatis dari GitHub, GitLab, atau Bitbucket, serta fitur-fitur tambahan seperti fungsi serverless.
-   **GitHub Pages**: Jika kode Anda sudah ada di repositori GitHub, Anda bisa mengaktifkan GitHub Pages langsung dari pengaturan repositori. Ini adalah cara termudah untuk menghosting proyek statis langsung dari GitHub.
-   **Firebase Hosting**: Menawarkan hosting cepat dan aman untuk aplikasi web statis dan dinamis. Membutuhkan sedikit konfigurasi awal dengan Firebase CLI.

**Langkah-langkah Umum Deployment:**

1.  **Buat Akun**: Daftar di salah satu layanan hosting di atas (jika belum punya).
2.  **Hubungkan Repositori (Opsional, Direkomendasikan)**: Jika kode Anda ada di GitHub, hubungkan repositori Anda ke layanan hosting. Ini akan mengaktifkan deployment otomatis.
3.  **Unggah File**: Jika tidak menggunakan integrasi repositori, unggah seluruh folder proyek (`index.html`, `style.css`, `script.js`, dan aset lainnya seperti gambar/audio jika ada) ke layanan hosting. Layanan tersebut akan secara otomatis mendeteksi file `index.html` sebagai titik masuk utama.
4.  **Akses URL**: Setelah deployment berhasil, layanan hosting akan memberikan URL publik di mana website Anda dapat diakses.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

**Catatan Atribusi:**

Source code asli dari proyek ini dibuat oleh **Dims Own SSA Team**. Proyek ini adalah *remake* dan pengembangan lebih lanjut oleh **Aka**.

---

