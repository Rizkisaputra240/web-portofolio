export const personalInfo = {
  name: "DWI ANANDA RIZKI SAPUTRA",
  role: "Full-Stack Web Developer",
  tagline: "Building modern web products with thoughtful engineering",
  status: "Open for Opportunities",
  location: "Sukoharjo, Indonesia",
  bio: "Hi, I'm DWI ANANDA RIZKI SAPUTRA, a BNSP-certified Web Programmer and Informatics graduate from Universitas Duta Bangsa (GPA 3.54). Experienced in developing full-stack web applications with PHP, MySQL, and React, alongside data-driven workflows using Python. Passionate about building reliable digital systems that solve real operational needs.",
  email: "rizkibarker15@gmail.com",
  phone: "+62 895-1823-8826",
  github: "https://github.com/Rizkisaputra240",
  linkedin: "https://www.linkedin.com/in/dwianandarizkisaputra",
  resumeUrl: "#",
};

export const statsData = [
  { label: "Focus", value: "Modern Web Development" },
  { label: "Stack", value: "React, PHP, MySQL, Python" },
  { label: "Status", value: "Ready to Work / Open for Opportunities" },
  { label: "Projects", value: "Multiple Real-world Prototypes" },
];

export const aboutData = {
  introduction: [
    "Hi, I'm DWI ANANDA RIZKI SAPUTRA. I am an undergraduate Computer Science (Informatics) student at Universitas Duta Bangsa Surakarta with a GPA of 3.54 / 4.00, primarily focusing on Full-Stack Software Engineering.",
    "I possess hands-on experience designing and building end-to-end web information systems—from crafting responsive user interfaces and robust backend logic to managing structured relational databases and application deployment.",
  ],
  competencies: [
    {
      label: "Web Development",
      text: "Full-Stack Architecture, Frontend & Backend Logic, MySQL, RESTful APIs",
    },
    {
      label: "Workflows & Tools",
      text: "Git/GitHub, AI-Assisted Coding, Data Validation, UI/Graphic Design",
    },
    {
      label: "Data & Computing",
      text: "Python, Text Preprocessing & Cleansing, Applied ML Algorithms",
    },
  ],
  closing:
    "Adaptable and systematically driven, I consistently adhere to clean system standards. Actively open to freelance collaborations, tech internships, and full-time Full-Stack Developer / Software Engineer roles.",
};

export const techCategories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend & Database" },
  { id: "tools", name: "Data & Tools" },
];

export const techStackData = [
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    color: "from-cyan-500 to-blue-500",
    desc: "Modern component-based interfaces",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    color: "from-sky-400 to-teal-400",
    desc: "Responsive, consistent UI styling",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "Code2",
    color: "from-yellow-400 to-amber-500",
    desc: "Interactive browser experiences",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "Globe",
    color: "from-orange-500 to-red-500",
    desc: "Semantic web structure",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "Layers",
    color: "from-blue-500 to-indigo-500",
    desc: "Accessible layouts and visual systems",
  },
  {
    name: "PHP",
    category: "backend",
    icon: "Terminal",
    color: "from-indigo-400 to-purple-500",
    desc: "Reliable server-side applications",
  },
  {
    name: "MySQL",
    category: "backend",
    icon: "Database",
    color: "from-amber-500 to-orange-600",
    desc: "Relational data modeling",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    color: "from-green-500 to-emerald-600",
    desc: "Fast REST APIs and services",
  },
  {
    name: "Python",
    category: "tools",
    icon: "Cpu",
    color: "from-yellow-400 to-blue-500",
    desc: "Data Processing, NLP & Machine Learning",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    icon: "GitBranch",
    color: "from-orange-500 to-red-500",
    desc: "Version control and collaboration",
  },
  {
    name: "Machine Learning / NLP",
    category: "tools",
    icon: "Cpu",
    color: "from-violet-400 to-fuchsia-500",
    desc: "Model training, Text classification & CNN",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "Zap",
    color: "from-orange-400 to-amber-500",
    desc: "API testing and documentation",
  },
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack" },
  { id: "frontend", name: "Frontend / Web" },
  { id: "backend", name: "API & Backend" },
];

export const projectsData = [
  {
    id: "hoodie-dwie-ecommerce",
    title: "Hoodie Dwie E-Commerce",
    category: "frontend",
    featured: true,
    subtitle:
      "Responsive e-commerce storefront for browsing products and managing a simple shopping flow.",
    description:
      "A clean product catalog interface with responsive layouts, reusable UI components, and a focused customer shopping experience.",
    longDescription:
      "Hoodie Dwie E-Commerce demonstrates a polished frontend implementation for a small apparel business, from product discovery through cart-oriented interactions.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/Rizkisaputra240/hoodie-dwie-ecommerce.git",
    image: "/Hoodie Dwie.jpg",
    highlights: [
      "Mobile-first product browsing",
      "Reusable product and cart UI patterns",
      "Responsive layout for desktop and mobile",
    ],
  },
  {
    id: "sima-bps-intern-management",
    title: "SIMA BPS Intern Management System",
    category: "fullstack",
    featured: true,
    subtitle:
      "Web-based information management system for organizing internship administration and operational data.",
    description:
      "A full-stack management platform that digitalizes intern registration, monitoring, documentation, and reporting workflows for BPS Surakarta.",
    longDescription:
      "SIMA BPS replaces fragmented administrative processes with structured web workflows, database-backed records, and role-aware management views.",
    tags: ["PHP", "MySQL", "JavaScript", "CRUD", "System Design"],
    githubUrl:
      "https://github.com/Rizkisaputra240/Sistem-Manajemen-Mahasiswa-Magang.git",
    image: "/Sistem Manajemen Mahasiswa Magang.png",
    highlights: [
      "Structured internship records and status tracking",
      "Database-backed administrative workflows",
      "Operational reporting and documentation support",
    ],
  },
  {
    id: "poli-kia-healthcare",
    title: "Poli KIA Healthcare Service Portal",
    category: "fullstack",
    featured: true,
    subtitle:
      "Healthcare service portal designed to support patient-facing information and clinic administration.",
    description:
      "A full-stack web application for presenting Poli KIA services, organizing service information, and improving access to healthcare workflows.",
    longDescription:
      "The portal combines accessible frontend pages with server-side data management to make maternal and child health service information easier to discover and maintain.",
    tags: ["PHP", "MySQL", "JavaScript", "Healthcare UI"],
    githubUrl:
      "https://github.com/Rizkisaputra240/Sistem-Informasi-Pelayanan-Poli-KIA-Berbasis-Web.git",
    image: "/Poli KIA.png",
    highlights: [
      "Clear healthcare service navigation",
      "Structured clinic information management",
      "Responsive interface for public access",
    ],
  },
  {
    id: "bps-employee-permission",
    title: "BPS Employee Permission System",
    category: "fullstack",
    featured: false,
    subtitle:
      "Internal web system for recording and managing employee entry and exit permissions.",
    description:
      "A full-stack administrative application that centralizes employee permission requests and supports more traceable office operations.",
    longDescription:
      "The system provides structured permission records and management views to help an organization verify, document, and review employee movements.",
    tags: ["PHP", "MySQL", "JavaScript", "Admin Dashboard"],
    githubUrl:
      "https://github.com/Rizkisaputra240/Sistem-Informasi-Perizinan-Keluar-Masuk-Karyawan-Berbasis-Web.git",
    image: "/Karyawan Berbasis.png",
    highlights: [
      "Centralized permission records",
      "Administrative review workflow",
      "Searchable operational data",
    ],
  },
  {
    id: "public-grievance-portal",
    title: "Public Grievance Web Portal",
    category: "fullstack",
    featured: false,
    subtitle:
      "Public-facing complaint submission and tracking platform built for civic communication.",
    description:
      "A PHP and MySQL web portal that enables citizens to submit grievances and helps administrators organize incoming reports.",
    longDescription:
      "The application creates a clearer communication channel between citizens and administrators through structured complaint forms, persistent records, and review-oriented workflows.",
    tags: ["PHP", "MySQL", "JavaScript", "Civic Tech"],
    githubUrl:
      "https://github.com/Rizkisaputra240/pengaduan-masyarakat-php-mysql.git",
    image: "/web pengaduan masyarakat.png",
    highlights: [
      "Citizen complaint submission flow",
      "Persistent MySQL-backed reports",
      "Administrative complaint management",
    ],
  },
  {
    id: "scholarship-information-app",
    title: "Scholarship Information Mobile App",
    category: "frontend",
    featured: false,
    subtitle:
      "Mobile interface for discovering and reviewing scholarship opportunities.",
    description:
      "A Flutter application focused on presenting scholarship information in a simple, accessible, and mobile-friendly experience.",
    longDescription:
      "The app organizes scholarship opportunities into a focused mobile browsing experience, helping students review relevant information from a single interface.",
    tags: ["Flutter", "Dart", "Mobile UI", "Responsive Design"],
    githubUrl:
      "https://github.com/Rizkisaputra240/scholarship-information-app-flutter.git",
    image: "/Informasi Beasiswa.png",
    highlights: [
      "Mobile-first scholarship browsing",
      "Clear information hierarchy",
      "Flutter-based interface implementation",
    ],
  },
  {
    id: "civic-public-complaint-app",
    title: "Civic Public Complaint App",
    category: "fullstack",
    featured: false,
    subtitle:
      "Application-based public complaint system for structured civic reporting.",
    description:
      "A full-stack civic application that helps users submit community complaints while giving administrators a system for organizing follow-up.",
    longDescription:
      "This project extends public complaint workflows into an application experience, with structured reporting data and a backend designed for operational handling.",
    tags: ["PHP", "MySQL", "Application Design", "Civic Tech"],
    githubUrl:
      "https://github.com/Rizkisaputra240/Sistem-Informasi-Pengaduan-Masyarakat-Berbasis-Aplikasi.git",
    image: "/pengaduan masyarakat.png",
    highlights: [
      "Structured community reporting",
      "Backend-connected complaint records",
      "Designed for administrative follow-up",
    ],
  },
  {
    id: "restaurant-pos-system",
    title: "Restaurant POS System",
    category: "backend",
    featured: false,
    subtitle:
      "Desktop point-of-sale system for restaurant transactions and operational records.",
    description:
      "A VB.NET and MySQL point-of-sale application supporting order processing, transaction records, and basic restaurant operations.",
    longDescription:
      "The Restaurant POS System models a practical transactional workflow, connecting a desktop interface to MySQL data for more consistent restaurant administration.",
    tags: ["VB.NET", "MySQL", "Point of Sale", "Database"],
    githubUrl:
      "https://github.com/Rizkisaputra240/restaurant-pos-vbnet-mysql.git",
    image: "/Restaurant POS System.png",
    highlights: [
      "Order and transaction workflow",
      "MySQL-backed operational data",
      "Desktop interface for restaurant staff",
    ],
  },
  {
    id: "fruit-quality-classification-cnn",
    title: "Fruit Quality Classification CNN",
    category: "backend",
    featured: false,
    subtitle:
      "Computer vision prototype for classifying fresh and spoiled fruit images.",
    description:
      "A Python-based machine learning project using a convolutional neural network to classify fruit quality from image data.",
    longDescription:
      "The project explores an image classification pipeline, from preparing visual data to training a CNN model that distinguishes fresh fruit from spoiled fruit.",
    tags: ["Python", "CNN", "Machine Learning", "Computer Vision"],
    githubUrl:
      "https://github.com/Rizkisaputra240/fruit-classification-cnn.git",
    image: "/Klasifikasi Buah Segar dan Busuk.png",
    highlights: [
      "Image-based fruit quality classification",
      "CNN model experimentation",
      "Python data and training workflow",
    ],
  },
  {
    id: "bps-intern-logbook-nlp",
    title: "BPS Intern Logbook NLP Classifier",
    category: "backend",
    featured: false,
    subtitle: "NLP prototype for classifying internship logbook text.",
    description:
      "A Python natural language processing project that classifies internship logbook content to support more organized document analysis.",
    longDescription:
      "This prototype applies text preprocessing and classification techniques to internship logbook entries, demonstrating practical NLP for institutional documentation.",
    tags: ["Python", "NLP", "Text Classification", "Data Processing"],
    githubUrl: "https://github.com/Rizkisaputra240/projek-klasifikasi.git",
    image: "/bps.png",
    highlights: [
      "Text preprocessing pipeline",
      "Logbook content classification",
      "Applied NLP for institutional data",
    ],
  },
];

export const contactInfo = [
  {
    title: "Direct Email",
    value: "rizkibarker15@gmail.com",
    description:
      "Best channel for project inquiries and full-time opportunities",
    actionText: "Send Mail",
    href: "mailto:rizkibarker15@gmail.com",
    icon: "Mail",
  },
  {
    title: "WhatsApp / Phone",
    value: "+62 895-1823-8826",
    description: "Available Mon - Fri, 09:00 - 18:00 (GMT+7)",
    actionText: "Chat on WhatsApp",
    href: "https://wa.me/6289518238826",
    icon: "MessageSquare",
  },
  {
    title: "Location",
    value: "Sukoharjo, Indonesia",
    description: "Open to on-site, hybrid, or full remote opportunities",
    actionText: "View Timezone",
    href: "#",
    icon: "MapPin",
  },
];

export const educationData = [
  {
    institution: "Universitas Duta Bangsa Surakarta",
    program: "Bachelor of Computer Science (Informatics)",
    gpa: "3.54 / 4.00",
    period: "SEPTEMBER 2022 – OCTOBER 2026",
    year: "Graduating 2026",
    logo: "/UDBLOGO.jpg",
    bullets: [
      "Core coursework: Software Engineering, Web Development, Database Systems, and Machine Learning.",
      "Built and deployed multiple academic web applications and data processing pipelines.",
      "Engaged in academic research, scientific publication, and developed NLP text classification models using Python.",
    ],
  },
];

export const experienceData = [
  {
    company: "Badan Pusat Statistik Kota Surakarta (BPS-Statistics)",
    role: "IT & Data Entry Intern",
    period: "August 2025 - December 2025",
    logo: "/BPSLOGO.png",
    bullets: [
      "System Development: Designed and developed a web-based management information system (SIMA) to digitalize agency workflow and operational data processes.",
      "Data Management: Maintained, verified, and structured operational databases to ensure high accuracy and data integrity.",
      "Visual Communication: Crafted digital graphic assets, reports, and informational media for institutional documentation.",
    ],
    skills: [
      "Full-Stack Development",
      "Database Management",
      "Data Entry",
      "Graphic Design",
    ],
  },
];

export const certificatesData = [
  {
    name: "Junior Web Programmer Competency Certification",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi) - LSP Telematika",
    year: " Jun 2026 · Valid thru Jun 2029",
    image: "/Junior Web Programmer.jpeg",
    credentialId: "TIK.002 000285 2026",
    description:
      "Certified national professional competency in designing, developing, and testing scalable web applications adhering to Indonesian industrial software standards.",
    credentialUrl: "#",
  },
  {
    name: "Solo Techno On Ramadhan 2.0: AI & Cybersecurity",
    issuer: "Solo Technopark (Solo Techno Incubator)",
    year: "2026",
    image: "/sertif solo.png",
    credentialId: "139/STP/Trn.STOR-2.0/03/2026",
    description:
      "Completed intensive technical tracks covering Digital Foundations, Cybersecurity, AI Frameworks, and participated in hands-on AI Automation Hackathons.",
    credentialUrl: "#",
  },
  {
    name: "International Guest Lecture: Mathematical Foundations of Machine Learning",
    issuer: "Universitas Sebelas Maret (UNS) x Khalifa University UAE",
    year: "2024",
    image: "/Sertifikat Kuliah Tamu.png",
    credentialId: "120.1/UN27.09.3.1/PK.01.03/2024",
    description:
      "Explored linear algebra core mechanics, mathematical pattern recognition, and algorithm modeling foundations for modern Machine Learning architectures.",
    credentialUrl: "#",
  },
  {
    name: "AI for Web Programming: Building Modern Web Interfaces",
    issuer: "HMPTI Universitas Duta Bangsa Surakarta",
    year: "2024",
    image: "/Webinar AI for Web Programming.png",
    credentialId: "HMPTI168317891799577",
    description:
      "Learned best practices for leveraging AI tools into frontend development workflows to craft responsive and intuitive web interfaces.",
    credentialUrl: "#",
  },
  {
    name: "AI for Developers: Rapid Coding & Workflow Optimization",
    issuer: "Faculty of Computer Science, Universitas Duta Bangsa",
    year: "2025",
    image: "/AI Untuk Programmer Rapid Coding.png",
    credentialId: "723/UDB.D1/A.36-KM/VI/2025",
    description:
      "Mastered accelerated code construction, automated debugging methods, and engineering productivity enhancements utilizing modern AI dev tools.",
    credentialUrl: "#",
  },
];

export const publicationsData = [
  {
    type: "CONFERENCE PAPER",
    year: "2024",
    title:
      "Analisis Pengaruh Sistem Keamanan Informasi Perbankan pada Nasabah Pengguna Internet Banking BRI",
    publisher:
      "Seminar Nasional Teknologi Informasi dan Bisnis (SENATIB) · ISSN: 2962-1968",
    authors:
      "Reynaldi Kurniawan, Tigar Riski Septiono, Dwi Ananda Rizki Saputra (Corresponding Author)",
    description:
      "Analyzed information security governance and operational risk mitigation for BRI Internet Banking services, assessing digital transaction reliability, customer data protection, and trust-building strategies.",
    url: "https://ojs.udb.ac.id/Senatib/article/view/4644/3101",
  },
];
