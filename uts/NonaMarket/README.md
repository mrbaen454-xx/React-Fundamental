# NOVA MARKET

## Deskripsi

NOVA MARKET adalah sebuah Dashboard Koleksi Produk yang modern dan responsif, dibangun untuk memenuhi tugas Ujian Tengah Semester (UTS) Anda. 
Aplikasi ini menampilkan daftar kurasi produk gaya hidup premium dengan fitur pencarian, filterisasi, dan pengurutan (*sorting*) yang handal. 
Pengguna dapat melihat informasi produk secara mendetail, mengatur daftar keinginan (*wishlist*), menggunakan keranjang belanja (*shopping cart*), serta melacak statistik *dashboard* secara *real-time*—semuanya dikelola dengan mulus menggunakan *React State* luring tanpa memerlukan API atau *database* eksternal.

## Fitur

- **Statistik Dashboard**: Perhitungan dinamis untuk total produk, stok yang tersedia, produk yang habis, jumlah *wishlist*, dan kategori unik.
- **Koleksi Produk**: Menampilkan daftar produk realistis dengan gambar resolusi tinggi, lencana status, dan detail lengkap.
- **Pencarian (Search)**: Pencarian *real-time* berdasarkan nama produk yang mengabaikan huruf besar/kecil (*case-insensitive*).
- **Filter Canggih**: Menyaring produk berdasarkan kategori, ketersediaan stok, daftar keinginan (*wishlist*), dan batas *rating* minimum.
- **Pengurutan (Sorting)**: Mengurutkan produk berdasarkan nama (A-Z/Z-A), harga (Termurah/Termahal), dan *rating* (Tertinggi/Terendah).
- **Shopping Cart (Keranjang Belanja)**: Sistem keranjang *slider* yang elegan, lengkap dengan pengaturan kuantitas (yang dibatasi oleh stok asli produk), hapus item, dan perhitungan kalkulasi *subtotal/total* Rupiah otomatis.
- **Wishlist**: Tandai produk sebagai favorit (*love*) dan kelompokkan produk-produk tersebut pada area/seksi khusus.
- **Modal Detail Produk**: Jendela pop-up (*modal*) mendalam untuk produk lengkap dengan deskripsi, status stok, serta tombol aksi.
- **Desain Responsif (Mobile Compact)**: Tata letak (*layout*) super padat dan rapi di seluruh layar (*mobile*, tablet, dan desktop) didukung penuh oleh komponen kelas dunia *Tailwind CSS*.
- **Efek Smooth Scroll**: Pengguliran halaman yang super lembut dan premium berkat implementasi teknologi *Lenis Scroll*.

## Teknologi yang Digunakan

- React 19 (Hooks: `useState`, `useMemo`, `useEffect`)
- Vite
- Tailwind CSS v4
- JavaScript (ES6+)
- Lucide React (Ikon)
- Lenis (Animasi Scrolling)
- pnpm

## Instalasi

Pastikan Anda telah memasang **Node.js** dan **pnpm** pada sistem komputer Anda.

```bash
pnpm install
```

## Cara Menjalankan

Untuk menyalakan *server* pengembangan secara lokal:

```bash
pnpm dev
```
