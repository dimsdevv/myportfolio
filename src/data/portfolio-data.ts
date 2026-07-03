// ── Types ──
export interface Skill {
  name: string
  icon: string
  invert?: boolean
}

export interface SkillCategory {
  title: string
  subtitle: string
  emoji: string
  colorClass: string
  category: 'webdev' | 'data'
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  emoji: string
  colorClass: string
  gradientClass: string
  status: 'Live' | 'WIP' | 'Archived'
  techStack: string[]
  techColorClass: string
  demoUrl?: string
  githubUrl?: string
  image: string
  category: 'web' | 'data'
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
  emoji: string
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
    emoji: '🌐',
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
    emoji: '⚙️',
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
    emoji: '🐍',
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
    emoji: '🛠️',
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
    emoji: '🏦',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-400 via-zinc-500 to-zinc-700',
    status: 'Live',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    techColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    demoUrl: 'https://mobile-banking-simulator.vercel.app/',
    githubUrl: 'https://github.com/dimsdevv/mobile-banking-simulator',
    image: '/simbank_preview.png',
    category: 'web',
  },
  {
    title: 'TaskFlow Genius',
    description: 'Aplikasi manajemen tugas (Kanban) berbasis Full-stack React dengan fitur Drag-and-Drop dan integrasi AI NLP untuk penentuan deadline otomatis.',
    emoji: '🚀',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-500 via-zinc-600 to-zinc-700',
    status: 'Live',
    techStack: ['React.js', 'Node.js', 'Prisma', 'NLP'],
    techColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    demoUrl: 'https://taskflow-genius.vercel.app/',
    githubUrl: 'https://github.com/dimsdevv/taskflow-genius',
    image: '/taskflow_preview.png',
    category: 'web',
  },
  {
    title: 'BeanPay POS',
    description: 'Sistem POS kasir untuk kedai kopi. Dilengkapi manajemen meja realtime, pembayaran QRIS, Kitchen Display System (KDS), dan laporan.',
    emoji: '☕',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-600 via-zinc-500 to-zinc-400',
    status: 'Live',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Real-time'],
    techColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    demoUrl: 'https://dimsdevv.alwaysdata.net/',
    githubUrl: 'https://github.com/dimsdevv/beanpay-pos',
    image: '/beanpay_preview.png',
    category: 'web',
  },
  {
    title: 'Mortyxvoid Store',
    description: 'Platform e-commerce katalog produk dengan sistem keranjang belanja dinamis dan checkout responsif bergaya modern.',
    emoji: '🛒',
    colorClass: 'bg-zinc-600/20',
    gradientClass: 'from-zinc-400 via-zinc-500 to-zinc-600',
    status: 'Live',
    techStack: ['HTML', 'Tailwind', 'PHP', 'JS'],
    techColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    demoUrl: 'https://mortyxvoid.shop/',
    image: '/mortyxvoid_preview.png',
    category: 'web',
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
    title: 'Magang Web Developer',
    company: 'Pesantren · Internship Ponpes',
    description: 'Pengembangan web full-stack untuk sistem manajemen internal',
    year: '2022',
    emoji: '🕌',
    colorClass: 'bg-zinc-500/15',
    badgeColorClass: 'bg-zinc-500/10 border-zinc-500/20 text-zinc-300',
    gradientClass: 'from-zinc-400 to-zinc-600',
    techStack: ['PHP', 'MySQL', 'HTML/CSS', 'Bootstrap'],
    responsibilities: [
      'Membangun sistem informasi berbasis web menggunakan HTML, CSS, PHP, dan MySQL.',
      'Merancang antarmuka yang responsif dan ramah pengguna untuk pengelolaan data santri.',
      'Berkoordinasi langsung dengan staf pesantren untuk analisis kebutuhan sistem.',
    ],
    bulletColorClass: 'text-zinc-400',
  },
  {
    title: 'Mahasiswa Pengembang',
    company: 'Itenas · Proyek Akademik & Personal',
    description: 'Membangun aplikasi web dan mengeksplorasi konsep data science',
    year: '2022 – Sekarang',
    emoji: '🎓',
    colorClass: 'bg-zinc-600/15',
    badgeColorClass: 'bg-zinc-600/10 border-zinc-600/20 text-zinc-400',
    gradientClass: 'from-zinc-500 to-zinc-700',
    techStack: [],
    responsibilities: [
      'Mengerjakan proyek mata kuliah berbasis web dan analisis data.',
      'Eksplorasi data menggunakan Python: cleaning, visualisasi, dan analisis sederhana.',
      'Membangun proyek-proyek personal untuk memperkuat portofolio.',
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
  { emoji: '🎯', title: 'Berorientasi Detail', desc: 'Kode bersih adalah kewajiban' },
  { emoji: '📊', title: 'Berbasis Data', desc: 'Keputusan didukung analisis' },
  { emoji: '🚀', title: 'Pembelajar Cepat', desc: 'Cepat adaptasi teknologi baru' },
  { emoji: '🤝', title: 'Kolaboratif', desc: 'Berkembang di dalam tim' },
]
