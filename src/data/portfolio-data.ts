// ── Types ──
export interface Skill {
  name: string
  icon: string
  invert?: boolean
}

export interface SkillCategory {
  title: string
  subtitle: string
  icon: string
  colorClass: string
  category: 'webdev' | 'data'
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  icon: string
  colorClass: string
  gradientClass: string
  status: 'Live' | 'WIP' | 'Archived'
  techStack: string[]
  techColorClass: string
  demoUrl?: string
  githubUrl?: string
  image: string
  category: 'web' | 'data'
  highlights: string[]
  challenge: string
  solution: string
}

export interface Education {
  period: string
  title: string
  institution: string
  detail: string
  colorClass: string
  dotColorClass: string
  badgeColorClass: string
  isDashed?: boolean
}

export interface Experience {
  title: string
  company: string
  description: string
  year: string
  icon: string
  colorClass: string
  badgeColorClass: string
  gradientClass: string
  techStack: string[]
  responsibilities: string[]
  bulletColorClass: string
}

// ── Data ──
export const skillCategories: SkillCategory[] = [
  {
    title: 'Web Frontend',
    subtitle: 'UI/UX & Client-side',
    icon: 'Globe',
    colorClass: 'bg-zinc-700/20',
    category: 'webdev',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    title: 'Backend & Database',
    subtitle: 'Server, API & Data Storage',
    icon: 'Server',
    colorClass: 'bg-zinc-600/20',
    category: 'webdev',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', invert: true },
    ],
  },
  {
    title: 'Data Science & System',
    subtitle: 'Analytics, ML & Core Programming',
    icon: 'Brain',
    colorClass: 'bg-zinc-500/20',
    category: 'data',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    ],
  },
  {
    title: 'Tools, Cloud & AI',
    subtitle: 'Deployment, Version Control & Utilities',
    icon: 'Wrench',
    colorClass: 'bg-zinc-600/20',
    category: 'webdev',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
      { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Vercel', icon: '/vercel.png', invert: true },
      { name: 'Claude AI', icon: '/claudee.png' },
      { name: 'Draw.io', icon: '/draw.png' },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'SimBank',
    description: 'Simulator mobile banking PWA lengkap dengan fitur transfer, top-up, QRIS payment, savings goals, riwayat transaksi, dan notifikasi real-time. Dibangun dengan arsitektur full-stack modern.',
    icon: 'Landmark',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-400 via-zinc-500 to-zinc-700',
    status: 'Live',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    techColorClass: 'bg-white/[0.03] border border-white/[0.08] text-text-secondary',
    demoUrl: 'https://mobile-banking-simulator.vercel.app/',
    githubUrl: 'https://github.com/dimsdevv/mobile-banking-simulator',
    image: '/simbank_preview.png',
    category: 'web',
    highlights: [
      'Progressive Web App — bisa di-install langsung dari browser tanpa app store.',
      'QRIS payment simulator dengan flow scan, nominal, dan konfirmasi real-time.',
      'Savings goals — user bisa membuat tabungan berjangka dengan target nominal dan deadline.',
      'Notifikasi push real-time untuk setiap transaksi masuk/keluar.',
      'Dashboard analitik: ringkasan pengeluaran mingguan dan grafik arus kas.',
    ],
    challenge: 'Membangun simulasi banking yang terasa real tanpa integrasi payment gateway sesungguhnya. Flow transaksi harus kompleks (transfer, top-up, QRIS) namun tetap intuitif untuk first-time user.',
    solution: 'Menggunakan state machine untuk mengelola flow transaksi — setiap langkah (pilih tujuan, masukkan nominal, konfirmasi) diperlakukan sebagai state terpisah. Database PostgreSQL menyimpan semua data transaksi secara persisten, dan WebSocket mengirim notifikasi real-time ke client tanpa polling.',
  },
  {
    title: 'TaskFlow Genius',
    description: 'Aplikasi manajemen tugas (Kanban) berbasis Full-stack React dengan fitur Drag-and-Drop dan integrasi AI NLP untuk penentuan deadline otomatis.',
    icon: 'Rocket',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-500 via-zinc-600 to-zinc-700',
    status: 'Live',
    techStack: ['React.js', 'Node.js', 'Prisma', 'NLP'],
    techColorClass: 'bg-white/[0.03] border border-white/[0.08] text-text-secondary',
    demoUrl: 'https://taskflow-genius.vercel.app/',
    githubUrl: 'https://github.com/dimsdevv/taskflow-genius',
    image: '/taskflow_preview.png',
    category: 'web',
    highlights: [
      'Drag-and-drop Kanban board dengan sorting real-time antar kolom.',
      'Integrasi NLP — user cukup tulis deskripsi tugas, AI menentukan deadline otomatis.',
      'Filter dan search untuk menemukan task berdasarkan label, prioritas, atau tanggal.',
      'Real-time collaboration: perubahan task langsung terlihat tanpa refresh.',
      'Progress tracking — visualisasi persentase completion per board.',
    ],
    challenge: 'Integrasi NLP untuk auto-deadline tidak selalu akurat. Tugas dengan deskripsi ambigu seperti "meeting minggu depan" perlu diparse ke tanggal konkret — ini membutuhkan konteks bahasa yang cukup cerdas.',
    solution: 'Menggunakan hybrid approach: model NLP mengekstrak intent dari deskripsi, lalu rule-based logic menentukan tanggal berdasarkan reference date (hari ini). Hasilnya dikombinasikan — NLP mengklasifikasi urgency, rule engine mengkonversi relative time ke absolute date. Fallback manual tetap tersedia jika hasil kurang tepat.',
  },
  {
    title: 'BeanPay POS',
    description: 'Sistem POS kasir untuk kedai kopi. Dilengkapi manajemen meja realtime, pembayaran QRIS, Kitchen Display System (KDS), dan laporan.',
    icon: 'Coffee',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-600 via-zinc-500 to-zinc-400',
    status: 'Live',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Real-time'],
    techColorClass: 'bg-white/[0.03] border border-white/[0.08] text-text-secondary',
    demoUrl: 'https://dimsdevv.alwaysdata.net/',
    githubUrl: 'https://github.com/dimsdevv/beanpay-pos',
    image: '/beanpay_preview.png',
    category: 'web',
    highlights: [
      'POS interface — grid menu dengan kategori, search, dan quick-add ke order.',
      'Manajemen meja real-time — status meja (kosong/terisi/perlu dibersihkan) berubah otomatis.',
      'Kitchen Display System — pesanan masuk langsung ke layar dapur tanpa printer.',
      'Pembayaran QRIS dengan auto-generate QR code.',
      'Laporan harian: total omzet, item terlaris, dan rata-rata waktu proses per order.',
    ],
    challenge: 'Di jam sibuk, POS harus handle banyak order sekaligus tanpa lag. Kitchen display harus sinkron dengan kasir secara real-time — jika kasir menerima order baru, dapur harus langsung melihatnya.',
    solution: 'Menggunakan Server-Sent Events (SSE) untuk sinkronisasi real-time antara kasir, dapur, dan manajer. MySQL menangani semua data transaksi dengan indexed queries untuk performa. Grid layout POS dibangun dengan CSS Grid untuk rendering cepat — tidak ada library drag-and-drop, cukup native touch events untuk mobile.',
  },
  {
    title: 'Mortyxvoid Store',
    description: 'Platform e-commerce katalog produk dengan sistem keranjang belanja dinamis dan checkout responsif bergaya modern.',
    icon: 'ShoppingCart',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-400 via-zinc-500 to-zinc-600',
    status: 'Live',
    techStack: ['HTML', 'Tailwind', 'PHP', 'JS'],
    techColorClass: 'bg-white/[0.03] border border-white/[0.08] text-text-secondary',
    demoUrl: 'https://mortyxvoid.shop/',
    image: '/mortyxvoid_preview.png',
    category: 'web',
    highlights: [
      'Katalog produk dengan filter kategori, search, dan sort by price/popularity.',
      'Keranjang belanja dinamis — update jumlah item, subtotal, dan total tanpa reload.',
      'Checkout flow multi-step: alamat, metode pembayaran, konfirmasi.',
      'Responsive design — pengalaman belanja yang konsisten dari desktop hingga mobile.',
      'Product detail page dengan galeri gambar, deskripsi, dan rekomendasi.',
    ],
    challenge: 'E-commerce harus terasa cepat dan responsif — setiap delay di checkout bisa kehilangan customer. Keranjang belanja harus persist tanpa akun.',
    solution: 'Keranjang belanja menggunakan localStorage untuk persistence tanpa akun, dengan sync ke server saat checkout dimulai. Checkout flow multi-step dengan animation transisi antar step — user merasa seperti dalam proses yang kontinu, bukan form yang terpisah-pisah.',
  },
]

export const education: Education[] = [
  {
    period: '2022 – Sekarang',
    title: 'S1 Sistem Informasi',
    institution: 'Institut Teknologi Nasional (Itenas), Bandung',
    detail: 'Fokus: Software Engineering, Database Systems, Data Science',
    colorClass: 'text-zinc-300 bg-zinc-500/10',
    dotColorClass: 'bg-zinc-400',
    badgeColorClass: 'text-zinc-300 bg-zinc-500/10',
  },
  {
    period: '2019 – 2022',
    title: 'SMK Rekayasa Perangkat Lunak',
    institution: 'Jurusan RPL — Web & Software Development',
    detail: 'Dasar HTML/CSS, PHP, MySQL, dan logika pemrograman',
    colorClass: 'text-zinc-400 bg-zinc-600/10',
    dotColorClass: 'bg-zinc-500',
    badgeColorClass: 'text-zinc-400 bg-zinc-600/10',
  },
  {
    period: 'Sedang Berjalan',
    title: 'Otodidak: Data Science',
    institution: 'Python · Pandas · NumPy · Matplotlib · Scikit-learn',
    detail: 'Kursus online, dataset Kaggle, proyek personal',
    colorClass: 'text-zinc-500 bg-zinc-700/10',
    dotColorClass: 'bg-zinc-600',
    badgeColorClass: 'text-zinc-500 bg-zinc-700/10',
    isDashed: true,
  },
]

export const experiences: Experience[] = [
  {
    title: 'Web Developer Intern',
    company: 'Pesantren Digitalisasi · Magang',
    description: 'Merancang dan mengembangkan sistem informasi manajemen internal berbasis web dari nol',
    year: '2022',
    icon: 'Building',
    colorClass: 'bg-zinc-500/15',
    badgeColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    gradientClass: 'from-zinc-400 to-zinc-600',
    techStack: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    responsibilities: [
      'Mengembangkan sistem informasi berbasis web (full-cycle: requirement gathering hingga deployment) menggunakan PHP, MySQL, dan Bootstrap.',
      'Mendesain UI yang responsif untuk pengelolaan data santri, jadwal, dan keuangan pesantren.',
      'Berkolaborasi langsung dengan staf non-teknis untuk mengubah kebutuhan operasional menjadi fitur web yang fungsional.',
    ],
    bulletColorClass: 'text-zinc-400',
  },
  {
    title: 'Software Engineering Student',
    company: 'Institut Teknologi Nasional (Itenas)',
    description: 'Mengerjakan proyek akademik dan personal yang mengasah kemampuan full-stack & data',
    year: '2022 – Sekarang',
    icon: 'GraduationCap',
    colorClass: 'bg-zinc-600/15',
    badgeColorClass: 'bg-zinc-600/10 border-zinc-600/20 text-zinc-400',
    gradientClass: 'from-zinc-500 to-zinc-700',
    techStack: [],
    responsibilities: [
      'Mengembangkan proyek-proyek mata kuliah berbasis web: mulai dari perancangan database, backend API, hingga antarmuka responsif.',
      'Mempelajari dan menerapkan analisis data menggunakan Python (Pandas, NumPy, Matplotlib) pada dataset real.',
      'Membangun portofolio personal secara konsisten dengan proyek-proyek yang menyelesaikan masalah nyata — dari POS kasir hingga simulator mobile banking.',
    ],
    bulletColorClass: 'text-zinc-500',
  },
]

export const heroTechBadges = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', invert: true },
]

export const aboutHighlights = [
  { icon: 'Code2', title: 'Berorientasi Detail', desc: 'Kode bersih dan struktur yang mudah dipelihara' },
  { icon: 'BarChart3', title: 'Berbasis Data', desc: 'Keputusan teknis didukung oleh data dan analisis' },
  { icon: 'Layers', title: 'Arsitektur Terukur', desc: 'Memilih solusi yang scalable dan mudah dikembangkan' },
  { icon: 'ShieldCheck', title: 'Kualitas & Keandalan', desc: 'Fokus pada hasil yang stabil dan dapat dipercaya' },
]
