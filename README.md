# Portofolio Ahmad Zaidan

Situs portofolio pribadi satu halaman dengan tema hitam putih, animasi scroll, dan efek bayangan kursor. Dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework.

![Tampilan portofolio](portofolio.jpg)

## Fitur

- **Animasi scroll:** bar progres di atas halaman, judul section yang muncul per kata, dan konten yang muncul saat terlihat.
- **Bayangan kursor:** cahaya transparan yang mengikuti kursor, dengan cincin kecil yang membesar saat kursor berada di atas link. Otomatis nonaktif di layar sentuh.
- **Tema hitam atau putih:** tombol ganti tema di pojok kanan atas, pilihan tersimpan di browser.
- **Konten dari data:** nama, keahlian, dan proyek diisi dari satu objek di `script.js`, jadi tidak perlu mengubah HTML.
- **Responsif:** tampil rapi di laptop maupun ponsel.
- **Ramah aksesibilitas:** mendukung pengaturan *reduce motion* dan navigasi keyboard.

## Teknologi

- HTML5
- CSS3 (CSS variables, grid, flexbox)
- JavaScript (ES2020)
- [Phosphor Icons](https://phosphoricons.com/) lewat CDN
- Google Fonts: Bricolage Grotesque dan Instrument Sans

## Struktur folder

```
.
├── index.html
├── style.css
├── script.js
├── portofolio.jpeg   # foto profil
└── README.md
```

## Menjalankan di komputer

1. Unduh atau *clone* repositori ini.
   ```bash
   git clone https://github.com/USERNAME/NAMA-REPO.git
   ```
2. Buka folder proyek, lalu klik dua kali `index.html`.

Tidak perlu instalasi apa pun. Koneksi internet hanya dibutuhkan untuk memuat ikon dan font.

## Mengubah isi

Buka `script.js` dan edit tiga bagian di bagian atas file:

| Bagian | Isinya |
| --- | --- |
| `profile` | Nama, kampus, jurusan, email, dan minat |
| `skills` | Daftar keahlian dengan level 1 sampai 3 |
| `projects` | Daftar proyek: tahun, judul, deskripsi, tag, dan link |

Untuk mengganti foto, simpan fotomu dengan nama `portofolio.jpeg` di folder yang sama dengan `index.html`.

## Deploy dengan GitHub Pages

1. Buka repositori di GitHub, lalu pilih **Settings** > **Pages**.
2. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu satu sampai dua menit. Situsmu tersedia di `https://USERNAME.github.io/NAMA-REPO/`.

## Kontak

- Email: Legendalkaff@gmail.com
- LinkedIn:https://www.linkedin.com/in/ahmad-zaidan-55a4b9353/
- GitHub: @sunnydarthh (https://github.com/sunnydarthh)

## Lisensi

Dibuat untuk keperluan portofolio pribadi. Silakan jadikan inspirasi, dan mohon tidak menyalin isi atau data pribadi tanpa izin.
