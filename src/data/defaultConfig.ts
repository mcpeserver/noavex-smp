import { ServerConfig } from '../types';

export const defaultServerConfig: ServerConfig = {
  serverName: "Noavex SMP",
  tagline: "Dua Dunia, Dua Petualangan",
  heroSubtitle: "Dua Dunia, Dua Petualangan. Pilih dunia yang sesuai dengan gaya bermainmu dan mulai perjalananmu sekarang.",
  socials: {
    discord: "https://discord.gg/9KUN2byKRM",
    website: "https://community.randev.com"
  },
  ips: {
    java: {
      ip: "noavexsmp.xyz",
      port: "Default"
    },
    bedrock: {
      ip: "noavexsmp.xyz",
      port: "25665"
    }
  },
  worlds: [
    {
      id: "dunia1",
      badge: "Dunia 1",
      title: "Survival Hardcore",
      sub: "Sistem LifeSteal",
      description: "Sistem pertarungan brutal yang menantang mekanika bertarungmu. Setiap mengalahkan musuh, kapasitas jantungmu bertambah. Setiap kali kamu mati, kapasitas jantungmu berkurang. Uji insting bertahan hidupmu dalam ekosistem pertempuran tak berampun.",
      type: "lifesteal",
      bullets: [
        "Sistem Pertempuran LifeSteal Aktif",
        "Kumpulkan Jantung Tambahan dari Musuh",
        "Zona Survival Hardcore yang Menegangkan"
      ]
    },
    {
      id: "dunia2",
      badge: "Dunia 2",
      title: "Survival RPG",
      sub: "Sistem AuraSkills",
      description: "Dunia imersif yang memadukan kebebasan survival dengan kedalaman elemen bermain peran (RPG). Tingkatkan level keahlian bertarung, menambang, memanah, atau bertani untuk membuka stat khusus, kemampuan pasif yang kuat, dan kemampuan aktif yang spektakuler.",
      type: "auraskills",
      bullets: [
        "Statistik & Atribut RPG Dinamis",
        "AuraSkills Leveling yang Mendalam",
        "Eksplorasi Dunia Tanpa Batas"
      ]
    }
  ],
  quickInfo: [
    {
      type: "lifesteal",
      title: "LifeSteal",
      description: "Sistem pertarungan sengit di mana membunuh pemain lain mencuri nyawa mereka, dan kematian mengurangi maksimal nyawamu."
    },
    {
      type: "auraskills",
      title: "AuraSkills",
      description: "Rasakan kedalaman mekanika RPG sesungguhnya dengan peningkatan kemampuan, stat khusus, dan skill pasif yang mematikan."
    },
    {
      type: "multiplatform",
      title: "Java & Bedrock",
      description: "Dukungan penuh multiplatform sehingga pemain dari PC (Java) dan HP/Konsol (Bedrock) dapat bermain bersama secara lancar."
    },
    {
      type: "dualworld",
      title: "Dua Dunia Survival",
      description: "Pilih petualanganmu antara dunia hardcore berbasis LifeSteal atau dunia RPG berbasis AuraSkills yang menantang."
    }
  ],
  features: [
    { name: "2 Dunia Survival", type: "Globe" },
    { name: "Nether & The End Terpisah", type: "Flame" },
    { name: "RTP Setiap Dunia", type: "Shuffle" },
    { name: "Smart Respawn", type: "RotateCcw" },
    { name: "Sistem LifeSteal", type: "Heart" },
    { name: "Craft Heart", type: "Hammer" },
    { name: "Revive Beacon", type: "Sparkles" },
    { name: "AuraSkills", type: "Award" },
    { name: "Home GUI", type: "Home" },
    { name: "TPA GUI", type: "Send" },
    { name: "Ender Chest Besar", type: "Archive" },
    { name: "Angkat Block & Mob", type: "Hand" },
    { name: "Simple Voice Chat", type: "Mic" },
    { name: "Death Grave", type: "Skull" },
    { name: "Koordinat Kematian", type: "MapPin" },
    { name: "SkinRestorer", type: "User" },
    { name: "Sistem Rank", type: "Crown" },
    { name: "Custom World Generation", type: "Mountain" },
    { name: "Trade Recycle", type: "Repeat" },
    { name: "Infinite Trades", type: "Infinity" },
    { name: "Java & Bedrock Support", type: "Laptop" }
  ],
  commands: [
    { cmd: "/dunia1", desc: "Masuk ke Dunia LifeSteal" },
    { cmd: "/dunia2", desc: "Masuk ke Dunia AuraSkills" },
    { cmd: "/rtp", desc: "Teleportasi acak secara aman (Random Teleport)" },
    { cmd: "/home", desc: "Membuka menu daftar lokasi rumah yang tersimpan" },
    { cmd: "/sethome", desc: "Menandai lokasi koordinat rumah saat ini" },
    { cmd: "/tpa", desc: "Mengirim permintaan teleportasi ke pemain lain" },
    { cmd: "/guide", desc: "Membuka buku panduan informasi lengkap server" }
  ],
  rules: [
    { num: "01", title: "Jangan toxic berlebihan", desc: "Hargai sesama pemain. Provokasi taktis diperbolehkan, namun pelecehan, diskriminasi, dan makian kotor berlebihan tidak akan ditoleransi." },
    { num: "02", title: "Dilarang griefing", "desc": "Dilarang keras merusak rumah, mencuri aset, atau menghancurkan tatanan konstruksi milik pemain lain tanpa kesepakatan pertempuran." },
    { num: "03", title: "Tidak boleh membuat base di area AFK Fishing", desc: "Area AFK Fishing adalah fasilitas umum. Membuat base pribadi atau mengklaim wilayah tersebut untuk diri sendiri dilarang keras." },
    { num: "04", title: "Dilarang menggunakan X-Ray", desc: "Penggunaan mod, texture pack, atau script X-Ray untuk melacak letak bijih tambang berharga akan dideteksi oleh sistem anti-cheat." },
    { num: "05", title: "Dilarang menggunakan Client Hack", desc: "Segala jenis client modifikasi ilegal yang memberikan keuntungan pertempuran (seperti Killaura, Fly, Speed) dilarang keras." },
    { num: "06", title: "Dilarang menggunakan Cheat", desc: "Penggunaan cheat dalam bentuk apa pun yang merusak keadilan bermain di server Noavex SMP akan ditindak tegas." },
    { num: "07", title: "Tidak boleh membunuh pemain yang baru bergabung", desc: "Pemain baru memiliki hak perlindungan masa transisi. Membunuh pemain yang baru pertama kali masuk server dilarang demi keadilan." }
  ],
  warningText: "Tim pengawas Noavex SMP menggunakan sistem anti-cheat terintegrasi dengan deteksi log ketat. Pelanggaran peraturan berupa penggunaan X-Ray, Cheat, maupun Client Hack akan dikenakan hukuman BAN PERMANEN tanpa kompromi."
};
