# Noavex SMP Landing Page

Landing Page Minecraft modern, premium, cinematic, responsive, SEO-friendly, dan berperforma tinggi untuk server Minecraft Indonesia **Noavex SMP**.

Website ini dikembangkan menggunakan teknologi modern: **React, TypeScript, Vite, dan Tailwind CSS v4** dengan animasi transisi yang sangat halus menggunakan **Motion**.

## Fitur Utama Website

- **Desain Premium & Cinematic**: Tema *Dark Fantasy*, *Medieval*, dan *Hardcore Survival* dengan overlay abu layang (*floating ash*), kabut dinamis, dan efek *glassmorphism*.
- **Informasi Server Akurat**: Detail lengkap mengenai dua dunia survival (LifeSteal & AuraSkills), daftar perintah server yang rapi, panduan aturan (*rules*), serta alamat server Java & Bedrock Edition dengan salin IP instan.
- **Dinamis & Terintegrasi**: Informasi mengenai pengembang website diambil secara dinamis via API eksternal dari GitHub Gist.
- **SEO & Aksesibilitas Tinggi**: Semantic HTML5 lengkap, JSON-LD Schema (GameServer, Organization, WebSite, Breadcrumbs), preloading font, kepatuhan WCAG AA, dan sepenuhnya ramah navigasi keyboard.

## Struktur Folder Proyek

```bash
├── public/
│   ├── favicon.ico
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero_bg_*.jpg      # Cinematic medieval castle
│   │       └── server_logo_*.jpg  # Official-like shield logo
│   ├── components/
│   │   ├── CTA.tsx                # Call-to-Action section
│   │   ├── Commands.tsx           # Server command list
│   │   ├── DeveloperModal.tsx     # Dynamic dev info modal
│   │   ├── Features.tsx           # Server feature matrix grid
│   │   ├── Footer.tsx             # Three-column responsive footer
│   │   ├── Hero.tsx               # Splash screen with floating particles
│   │   ├── Navbar.tsx             # Transparent navigation header
│   │   ├── QuickInfo.tsx          # Key selling points highlights
│   │   ├── Rules.tsx              # Server regulations and warning card
│   │   ├── ServerAddress.tsx      # IP indicators for Java & Bedrock
│   │   └── ServerWorlds.tsx       # Dual survival worlds presentation
│   ├── App.tsx                    # Root component with layout orchestration
│   ├── index.css                  # Core styles and Tailwind Custom Theme
│   └── main.tsx                   # Entry point
├── vercel.json                    # Routing and headers configuration
└── package.json                   # Project dependencies
```

## Cara Menjalankan Secara Lokal

1. Pasang dependensi:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Bangun proyek untuk produksi:
   ```bash
   npm run build
   ```
4. Jalankan hasil bangunan produksi secara lokal:
   ```bash
   npm run preview
   ```

## Kontak Pengembang

Seluruh informasi kontak dan komunitas pengembang diambil secara dinamis via GitHub API, terpisah secara eksklusif dari informasi internal server Noavex SMP demi kenyamanan pengguna dan kredibilitas profesional.

---
*Website ini dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios maupun Noavex SMP.*
