# Zerava Filmboard
**Awal Sederhana Kelak Jadi Sinema.**

Starter React + TypeScript + Vite dengan UI responsif, dark/light mode, logo Zerava, feed demo, direktori anggota demo, production board demo, Film Academy demo, dan workflow deploy GitHub Pages.

## Jalankan di PC
1. Install Node.js LTS: https://nodejs.org
2. Ekstrak project, buka folder ini di VS Code.
3. Terminal:
```bash
npm install
npm run dev
```
4. Buka URL localhost yang ditampilkan.

## Upload ke GitHub
Buat repository bernama `zerava-filmboard`, lalu jalankan dari terminal folder project:
```bash
git init
git add .
git commit -m "Initial Zerava Filmboard"
git branch -M main
git remote add origin https://github.com/USERNAME/zerava-filmboard.git
git push -u origin main
```
Ganti USERNAME dengan username GitHub kamu.

## Aktifkan GitHub Pages
1. Repository → Settings → Pages.
2. Source pilih **GitHub Actions**.
3. Push branch `main`; workflow `.github/workflows/deploy.yml` akan build dan deploy.
4. URL: `https://USERNAME.github.io/zerava-filmboard/`.
5. Jika nama repo berbeda, ubah `base` di `vite.config.ts` menjadi `'/NAMA-REPOSITORY/'`. Saat menjalankan lokal, buka URL dengan path `/zerava-filmboard/` yang ditampilkan Vite.

## Backend (fitur online)
GitHub Pages hanya hosting frontend statis. Akun, profil publik, database, server/channel, chat realtime, upload foto/video, notifikasi dan proyek kolaboratif perlu backend seperti Supabase.
- Buat project di https://supabase.com.
- Isi `.env.local` berdasarkan `.env.example` untuk tes lokal.
- Untuk Pages: Settings → Secrets and variables → Actions, tambahkan `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` sebagai repository secrets.
- Jangan pernah menaruh `service_role` key di frontend.
- Google OAuth perlu diaktifkan di Supabase Auth serta URL callback provider.

## Status starter
UI dan interaksi demo sudah disediakan. Feed saat ini tersimpan di localStorage browser, bukan tersinkron antaranggota. Data anggota/proyek/materi adalah contoh. Login, Google OAuth, CRUD server, DM/group chat, upload media, notifikasi realtime, editor screenplay/storyboard, call sheet, anggaran, dan RLS produksi perlu integrasi backend dan pengujian sebelum peluncuran publik.
