export const PROJECTS = [
  {
    id: 'semadi-properties',
    number: '01',
    title: 'Semadi Properties',
    subtitle: 'Commercial Asset Management Platform & Executive Dashboard',
    category: 'Commercial Platform & Dashboard',
    badge: 'Enterprise Platform',
    accentColor: '#C5A880',
    year: '2026',
    overview: 'A complete commercial real estate ecosystem uniting property portfolio analytics, unit occupancy tracking, tenant management, and automated client leasing proposals.',
    tags: ['React 19', 'Executive Dashboard', 'Commercial UI', 'Leasing Proposals', 'Data Modeling'],
    stats: [
      { label: 'Role', value: 'Lead Architecture & UI' },
      { label: 'Asset Density', value: 'Multi-Tenant Commercial' },
      { label: 'Core Engine', value: 'Analytics + Proposals' },
    ],
    architecture: [
      {
        title: 'Property Performance Dashboard',
        description: 'Engineered high-density visual monitors allowing asset managers to track rental yields, occupancy percentages, lease expiries, and tenant maintenance tickets in real time.'
      },
      {
        title: 'Standardized Commercial Proposal Engine',
        description: 'Architected structured client leasing playbooks and proposal generators to streamline negotiations and turnaround times with prospective commercial tenants.'
      },
      {
        title: 'Relational Lease & Tenancy Schema',
        description: 'Structured relational data models organizing lease lifecycles, payment status, unit square meterage, and emergency maintenance routing.'
      }
    ],
    links: {
      preview: '/semadi-preview.html',
      dashboard: '/semadi-dashboard.html',
      source: 'local:semadi-properties'
    }
  },
  {
    id: 'ni',
    number: '02',
    title: 'Ni',
    subtitle: 'High-Fashion Motion Experience & Digital Showcase',
    category: 'Creative Frontend & Motion',
    badge: 'Featured Experience',
    accentColor: '#0033a0',
    year: '2026',
    overview: 'An intimate, high-fashion editorial digital sanctuary crafted with fluid liquid glassmorphism, responsive bento archives, an interactive gift vault, and custom typography.',
    tags: ['React 19', 'Framer Motion v12', 'WebGL & Three.js', 'Bento Architecture'],
    stats: [
      { label: 'Motion Engine', value: 'Framer Motion 12' },
      { label: 'Frame Budget', value: '60 FPS Target' },
      { label: 'Design System', value: 'Liquid Glassmorphism' },
    ],
    architecture: [
      {
        title: 'Physics-Based Spring Micro-Interactions',
        description: 'Implemented subtle 60fps gesture animations, interactive sealed letters, and floating optical pill controls that make the interface tactile and responsive.'
      },
      {
        title: 'Curated Bento Grid Architecture',
        description: 'Designed an editorial multi-media vault that gracefully reflows between mobile viewports and ultra-wide cinematic desktop displays.'
      },
      {
        title: 'Atmospheric Shader Mesh & Ambient Depth',
        description: 'Paired distinctive typography with subtle canvas particle depth and backdrop blur layers to create an elevated brand presence.'
      }
    ],
    links: {
      website: 'https://ni-interactive.vercel.app',
      demo: '#',
      source: 'local:ni'
    }
  },
  {
    id: 'buddy-learning',
    number: '03',
    title: 'Buddy Learning LMS',
    subtitle: 'Centralized Tutoring Operations, Financial Automation & Enterprise Analytics',
    category: 'EdTech Platform & Proposed LMS',
    badge: 'Proposed LMS Specification',
    accentColor: '#F8991D',
    year: '2026',
    overview: 'A comprehensive software platform proposal, operational implementation plan, and technical architecture for an AI-integrated Learning Management System transforming manual scheduling and spreadsheets into a high-concurrency automated digital ecosystem.',
    tags: ['Next.js 19', 'FastAPI (Python)', 'PostgreSQL RDS', 'AWS S3 Vault', 'POPIA Compliant'],
    stats: [
      { label: 'Portals', value: '4 Dedicated Roles' },
      { label: 'Backend', value: 'FastAPI Async Engine' },
      { label: 'Status', value: 'Proposed Specification' },
    ],
    architecture: [
      {
        title: '4-Role Multi-Tenant Architecture',
        description: 'Distinct specialized portals for Learner Hub (gamified streaks & XP), Tutor Terminal (drag-and-drop availability & lesson logging), Sponsor Suite (cohort ROI metrics), and Admin Command Center.'
      },
      {
        title: 'Dynamic Invoicing & Tutor Payout Cron',
        description: 'FastAPI asynchronous billing engine managing automated recurring client invoices, lesson hour verification, and automated tutor remuneration calculations.'
      },
      {
        title: 'AI Progress & Session Summaries',
        description: 'Integrated LLM API pipeline generating automated lesson recaps, key takeaways, and homework assignments with POPIA-compliant data encryption.'
      }
    ],
    links: {
      proposal: '#',
      comingSoon: true,
      source: 'local:buddy-learning'
    }
  }
];

export const CAPABILITIES = [
  {
    category: 'Frontend & 3D Interactive Media',
    summary: 'Building high-performance, fluid user interfaces and interactive 3D digital experiences with clean architectural patterns.',
    skills: [
      { name: 'React 19 & Next.js (App Router)', detail: 'Server-side rendering, modular role-based portals, and state-driven web applications' },
      { name: 'Three.js (WebGL) & Framer Motion', detail: 'Liquid glassmorphism, 60fps spring transitions, and interactive 3D canvas experiences' },
      { name: 'Vanilla CSS Architecture & HTML5', detail: 'Zero-bloat custom design tokens, sub-16ms touch responsiveness, and mobile-first layout systems' },
      { name: 'UI/UX Prototyping & Design Systems', detail: 'Visual brand identity, experimental typography, and accessible component libraries' }
    ]
  },
  {
    category: 'Software Engineering & Architecture',
    summary: 'Applying rigorous computer science principles, object-oriented design, and algorithmic problem-solving to robust software systems.',
    skills: [
      { name: 'C++ & Qt Framework', detail: 'Object-oriented systems, custom data structures (stacks, queues), and desktop GUI engineering' },
      { name: 'Python Engineering & Automation', detail: 'FastAPI async pipelines, automated billing crons, and data-processing scripts' },
      { name: 'OOA/OOD & System Modeling', detail: 'UML class diagrams, state machines, and relational architecture using Dia and Draw.io' },
      { name: 'Algorithms & Data Structures', detail: 'Memory optimization, algorithmic matching, and computational complexity analysis' }
    ]
  },
  {
    category: 'Databases, Cloud & AI Systems',
    summary: 'Architecting scalable data persistence, secure cloud storage, and intelligent AI-augmented workflows.',
    skills: [
      { name: 'Relational Database Design (SQL / PostgreSQL)', detail: 'Multi-tenant relational schemas, ACID transactions, and indexing strategies' },
      { name: 'AI & Prompt Engineering', detail: 'NotebookLM study systems, Wolfram computational learning, and LLM API integrations' },
      { name: 'AWS & Cloud Asset Management', detail: 'AWS S3 object storage vaults, CDN delivery, and secure container deployment' },
      { name: 'Technical Documentation & Proposals', detail: 'Comprehensive project dossiers, cost breakdowns, and developer commercial playbooks' }
    ]
  }
];
