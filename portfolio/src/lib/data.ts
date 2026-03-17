// src/lib/data.ts
// All structured portfolio content for Justin Leong

export const profile = {
  name: 'Justin Leong',
  headline: 'Software Developer | Machine Learning (PyTorch, TensorFlow) | Exploring AI & Deep Learning',
  subheadline: "Master's Student at University of California, Irvine",
  location: 'San Ramon, CA',
  openToWork: true,
  openToWorkRoles: ['Software Engineer', 'Computer Engineer', 'System Engineer', 'AI Engineer'],
  summary: `I'm a software engineer and master's student at UC Irvine specializing in Machine Learning. With a background in Computer Engineering from UIUC and hands-on experience in data pipelines, AI research, and embedded systems, I build solutions that sit at the intersection of hardware and intelligent software.`,
  linkedin: 'https://www.linkedin.com/in/justin-leong-datmango',
  github: 'https://github.com/DatMango',
  email: 'justinleong3187@gmail.com',
  phone: '925-678-0183',
  resumeUrl: '/resume.pdf',
  profileImage: '/images/profile.jpg',
} as const;

export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
  type?: string;
}

export const experience: Experience[] = [
  {
    company: 'UCI M.Eng Capstone Project (sponsored by Advantest)',
    title: 'Software Engineer — Project Leader',
    startDate: 'Jan 2026',
    endDate: 'Present',
    location: 'Irvine, CA',
    type: 'Academic / Industry',
    bullets: [
      'Designed and implemented scalable, automated data pipelines for ingesting and analyzing production data from semiconductor test infrastructure via SQL, C#, Azure, Power BI, and .NET',
      'Led group of 5 to leverage AI/ML techniques, extracting actionable insights from production data utilizing Python',
      'Created dashboard for executive stakeholders with trend analysis and predictive indicators',
    ],
  },
  {
    company: 'University of California, Irvine',
    title: 'Research Assistant',
    startDate: 'Nov 2025',
    endDate: 'Present',
    location: 'Irvine, CA',
    type: 'Research',
    bullets: [
      'Contributed to Ph.D student\'s research on air quality detection using hyperspectral imaging (HSI) and AI architectures, including vision-language models (VLMs) and HSI transformers',
      'Performed data preprocessing, feature extraction, and model training on HSI datasets using deep learning',
    ],
  },
  {
    company: 'Illini EV Concept',
    title: 'Software Developer',
    startDate: 'Oct 2023',
    endDate: 'May 2025',
    location: 'Champaign, IL',
    type: 'Academic',
    bullets: [
      'Built and maintained inventory database of 100+ items and purchase order system processing thousands of monthly orders with automated inventory updates',
      'Developed Python and Excel tools enabling budget tracking and purchase controls across sub-teams',
      'Migrated inventory system to Python and MySQL, improving scalability, performance, and data integrity',
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  notes?: string;
  coursework?: string[];
}

export const education: Education[] = [
  {
    institution: 'University of California, Irvine',
    degree: 'Master of Engineering',
    field: 'Electrical Engineering & Computer Science — Machine Learning Specialization',
    startYear: 'Sep 2025',
    endYear: 'Jun 2026',
    coursework: [
      'Machine Learning',
      'ML for Signal Processing',
      'Languages and Compilers for Hardware Accelerators',
      'Network Science and Data Analytics',
    ],
  },
  {
    institution: 'University of Illinois Urbana-Champaign',
    degree: 'Bachelor of Science (Honors, Dean\'s List)',
    field: 'Computer Engineering',
    startYear: 'Aug 2021',
    endYear: 'May 2025',
    coursework: [
      'Applied ML',
      'Artificial Intelligence',
      'Algorithms & Complexity',
      'Parallel Programming',
      'Database Systems',
      'Computer Systems Engineering',
      'Digital Systems Laboratory',
      'Data Science',
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  startDate: string;
  endDate: string;
  githubUrl?: string;
  liveUrl?: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    name: 'Antweight Battlebot',
    description: 'A fully custom 2-lb antweight battlebot with pneumatic weapon system, built from the ground up with custom PCB and 3D-printed chassis.',
    techStack: ['C/C++', 'ESP32', 'CAD', 'PCB Design', 'KiCad', '3D Printing'],
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    bullets: [
      'Built an antweight battlebot (2 lbs) from scratch with over 100 lines of code and a pneumatic weapon system',
      'Coordinated team of 3 to design PCB, solder components, and program the microcontroller',
    ],
  },
  {
    name: 'Operating System',
    description: 'A Unix-inspired operating system built entirely from scratch in x86 assembly and C, implementing a full kernel with virtual memory, file system, and multi-terminal support.',
    techStack: ['x86 Assembly', 'C', 'QEMU', 'Docker', 'Git'],
    startDate: 'Jan 2024',
    endDate: 'May 2024',
    bullets: [
      'Created an operating system from scratch with over 1,000 lines of code',
      'Established kernel-level functionality: interrupt handling, paging, RTC/virtualization, system calls, file system, and 3+ terminal capabilities',
    ],
  },
  {
    name: 'Oldenburg Roads Network',
    description: 'Graph algorithms implementation on a real-world large-scale road network dataset, benchmarking A*, BFS, and MST algorithms.',
    techStack: ['C++', 'Docker', 'Git'],
    startDate: 'Aug 2022',
    endDate: 'Dec 2022',
    bullets: [
      'Implemented A* search on a large-scale road network dataset to compute shortest path using heuristic-based optimization',
      'Designed and evaluated graph algorithms (A*, BFS, Kruskal\'s MST) on real-world spatial data, improving pathfinding efficiency and analyzing network structure',
    ],
  },
];

export const skills = {
  languages: ['C/C++', 'Python', 'JavaScript', 'Java', 'SQL (MySQL, MongoDB)', 'SystemVerilog', 'x86 Assembly', 'HTML/CSS', 'ReactJS', 'NodeJS'],
  ml: ['PyTorch', 'TensorFlow', 'Keras', 'CUDA', 'NumPy', 'SciPy', 'Pandas', 'PySpark', 'PIL'],
  tools: ['Git', 'Docker', 'Linux', 'Google Cloud Platform', 'VS Code', 'Azure', 'Power BI', '.NET', 'Vivado (Xilinx)', 'KiCad', 'CAD', 'Spark'],
  databases: ['MySQL', 'MongoDB'],
};
