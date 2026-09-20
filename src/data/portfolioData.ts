// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.
// Personalized for Sunder Kumar.

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
    College?: {
      name: string;
      Degree: string;
      Percentage: string;
      Duration: string;
      location: string;
    };
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  demo?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

export interface CommunityEvent {
  name: string;
  location: string;
  themes: string[];
  team?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Sunder Kumar",
  headline:
    "Computer Science Student | Java & Spring Boot | Full Stack Development | AI & Automation",
  summary:
    "Computer Science student at Sindh Madressatul Islam University who builds practical software through academic, personal and freelance projects. Focused on Java, Spring Boot, REST APIs, Spring Data JPA, SQL and layered application architecture, with hands-on experience in JavaScript, React, Node.js, AI applications and automation. Interested in building reliable software, learning modern engineering practices and starting a professional career as a Java/software developer.",
  education: {
    degree: "Bachelor of Computer Science",
    institution: "Sindh Madressatul Islam University",
    affiliation: "Sindh Madressatul Islam University, Karachi",
    cgpa: "3.73/4.0",
    graduation: "Spring 2027",
    College : {
      name : "The Scholar College Umerkot",
      Degree : "Intermediate in Pre-Engineering",
      Percentage : "82%",
      Duration : "2020 - 2022",
      location : "Umerkot, Pakistan",
    },
  },
  email: "skmalhi157@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunder-kumar-841068279",
  github: "https://github.com/Sunder-Kumar",
  location: "Karachi, Pakistan",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Freelance Web Developer",
    organization: "Independent / Freelance",
    period: "2025 – Present",
    mode: "Remote",
    points: [
      "Develops responsive web applications and custom features using React.js, JavaScript, Node.js and modern web technologies",
      "Builds and integrates REST APIs, implements frontend enhancements and resolves bugs to improve application functionality",
      "Works with clients to understand requirements, deliver solutions and maintain code using Git and GitHub",
    ],
    logo: "/assets/experience/logos/Developer.jpg",
  },
  {
    role: "Campus Ambassador",
    organization: "Pakdigit Solutions",
    period: "2024 – Present",
    mode: "Campus",
    points: [
      "Represents Pakdigit Solutions within the university community and helps promote technology-focused initiatives",
      "Supports student engagement, outreach and participation in programs and community activities",
      "Connects students with opportunities related to technology, learning and professional development",
    ],
    logo: "/assets/experience/logos/ambassador.jpg",
  },
  {
    role: "Campus Ambassador",
    organization: "SuperComp'24",
    period: "2024",
    mode: "Campus",
    points: [
      "Promoted SuperComp'24 activities and encouraged student participation in the university community",
      "Supported event outreach and communication among students",
    ],
    logo: "/assets/experience/logos/ambassador.jpg",
  },
  {
    role: "Open Source Contributor",
    organization: "GitHub Open Source Projects",
    period: "2025 – Present",
    mode: "Remote",
    points: [
      "Contributes to software projects through Git and GitHub workflows",
      "Works with branches, commits, pull requests and collaborative development practices",
      "Uses open-source projects to strengthen practical software engineering skills",
    ],
    logo: "/assets/experience/logos/contributor.jpg",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "anonymous-safety-intelligence",
    name: "Anonymous Safety Intelligence",
    status: "Completed",
    category: "AI / Security",
    purpose:
      "AI-driven safety intelligence platform designed for anonymous incident reporting, real-time threat detection, emergency SOS triggers, and interactive security dashboard management.",
    github: "https://github.com/Sunder-Kumar",
    stack: ["React", "Node.js", "Python", "AI", "Tailwind CSS", "REST API"],
    facts: [
      "Real-time safety threat monitoring and analytics dashboard",
      "Anonymous incident reporting with instant classification",
      "Emergency SOS trigger notification workflow",
      "User-friendly security control settings and privacy controls",
    ],
    screenshots: [
      { label: "Hero Overview", src: "/assets/projects/anonymous-safety-intelligence/hero.png" },
      { label: "Dashboard View", src: "/assets/projects/anonymous-safety-intelligence/dashboard.png" },
      { label: "SOS Trigger", src: "/assets/projects/anonymous-safety-intelligence/sos-button.png" },
      { label: "Control Settings", src: "/assets/projects/anonymous-safety-intelligence/settings.png" },
    ],
  },
  {
    id: "community-pulse-ai",
    name: "Community Pulse AI",
    status: "Live",
    category: "AI / Analytics",
    purpose:
      "Intelligent community analytics platform utilizing AI to analyze engagement sentiment, predict community trends, and deliver interactive real-time data visualization.",
    github: "https://github.com/Sunder-Kumar",
    stack: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "OpenRouter API"],
    facts: [
      "Real-time community sentiment and engagement tracking",
      "Interactive data analytics and trend visualization dashboard",
      "Scalable microservices system architecture",
      "Automated workflow pipeline for insight generation",
    ],
    screenshots: [
      { label: "Hero Overview", src: "/assets/projects/community-pulse-ai/hero.png" },
      { label: "Dashboard View", src: "/assets/projects/community-pulse-ai/dashboard.png" },
      { label: "System Architecture", src: "/assets/projects/community-pulse-ai/architecture.png" },
      { label: "Workflow Diagram", src: "/assets/projects/community-pulse-ai/workflow.png" },
    ],
  },
  {
    id: "contriflow",
    name: "ContriFlow",
    status: "Open Source",
    category: "Developer Tools",
    purpose:
      "Developer-focused workflow tool created to streamline open-source contribution workflows, automate Git/GitHub branch management, and enhance developer productivity.",
    github: "https://github.com/Sunder-Kumar/contriflow",
    stack: ["JavaScript", "Node.js", "CLI", "GitHub API", "Octokit", "Git"],
    facts: [
      "Command-line developer contribution workflow tool",
      "GitHub API & Octokit integration for PR and commit automation",
      "Simplified open-source repository interaction",
      "Designed for high practical developer efficiency",
    ],
    screenshots: [
      { label: "Hero Overview", src: "/assets/projects/contriflow/hero.png" },
      { label: "Working Interface", src: "/assets/projects/contriflow/working.png" },
    ],
  },
  {
    id: "pride-month-2025",
    name: "Pride Month 2025: Celebrate with Code",
    status: "Open Source",
    category: "Frontend / Web",
    purpose:
      "A vibrant, fully responsive landing page celebrating Pride Month 2025 built with React, TypeScript, and Tailwind CSS. Features upcoming events, interactive LGBTQ+ history timeline, and community resource directory.",
    github: "https://github.com/Sunder-Kumar/pride-month-2025",
    stack: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Vite",
      "shadcn/ui",
    ],
    facts: [
      "Vibrant Hero Section with animated Pride colors background",
      "Events Showcase displaying upcoming Pride Month events with cards",
      "Interactive Timeline highlighting key LGBTQ+ rights milestones",
      "Resource Directory with mental health support and educational materials",
      "Fully Responsive design optimized for mobile, tablet, and desktop",
      "Accessible with semantic HTML, ARIA labels, and keyboard navigation",
      "Smooth animations using Tailwind CSS transitions",
    ],
    screenshots: [
      { label: "Hero Banner", src: "/assets/projects/pride-month-2025/hero.png" },
      { label: "Main Experience", src: "/assets/projects/pride-month-2025/main.png" },
      { label: "Working Preview", src: "/assets/projects/pride-month-2025/working.png" },
      { label: "Footer & Resources", src: "/assets/projects/pride-month-2025/footer.png" },
    ],
  },
  {
    id: "qainchi",
    name: "Qainchi",
    status: "In Development",
    category: "Full Stack / Startup",
    purpose:
      "Real-time haircut and salon booking platform concept designed to help customers discover barbers, check slot availability, and book appointments across Karachi.",
    github: "https://github.com/Sunder-Kumar",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    facts: [
      "Barber and salon discovery across Karachi",
      "Real-time appointment booking concept",
      "Customer-facing web experience",
      "Modern full-stack architecture with Supabase & PostgreSQL",
      "Designed for zero-wait customer scheduling",
    ],
    limitations:
      "Qainchi is a developing product concept and MVP in development.",
    screenshots: [
      { label: "Hero Overview", src: "/assets/projects/qainchi-booking-platform/Hero.png" },
      { label: "Business View", src: "/assets/projects/qainchi-booking-platform/Business.png" },
      { label: "Workflow Diagram", src: "/assets/projects/qainchi-booking-platform/workflow.png" },
    ],
  },
  {
    id: "library-management-system",
    name: "Library Management System",
    status: "Completed",
    category: "Java / OOP",
    purpose:
      "Console-based library management application designed using object-oriented programming and layered architecture for managing books, users, borrowing and overdue tracking.",
    github: "https://github.com/Sunder-Kumar",
    stack: [
      "Java",
      "OOP",
      "Layered Architecture",
      "Collections",
      "JSON",
      "Custom Exceptions",
    ],
    facts: [
      "Book and user management",
      "14-day borrowing period",
      "Overdue tracking",
      "Book and user search",
      "Reports and summaries",
      "HashMap-based O(1) lookups",
      "Custom exception handling",
      "JSON persistence",
      "Extensible user hierarchy",
    ],
    screenshots: [],
  },
  {
    id: "storyblok-ai-chatbot",
    name: "Storyblok AI Chatbot",
    status: "Live",
    category: "AI / Full Stack",
    purpose:
      "AI chatbot application built with a modern web stack and LLM integration to provide conversational responses through a responsive web interface.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Storyblok",
      "OpenRouter",
      "AI",
    ],
    facts: [
      "AI-powered conversational interface",
      "LLM integration through OpenRouter",
      "Storyblok content integration",
      "Responsive frontend",
      "Modern component-based architecture",
    ],
    screenshots: [
      { label: "Hero Banner", src: "/assets/projects/StoryBlok-chatbot/hero.png" },
      { label: "Main Chatbot Interface", src: "/assets/projects/StoryBlok-chatbot/main.png" },
      { label: "Working Preview", src: "/assets/projects/StoryBlok-chatbot/working.png" },
    ],
  },
  {
    id: "speech-to-text-assemblyai",
    name: "Speech-to-Text with AssemblyAI",
    status: "Completed",
    category: "AI / Speech",
    purpose:
      "Speech-to-text application demonstrating integration with AssemblyAI for converting spoken audio into text.",
    github: "https://github.com/Sunder-Kumar/Speech-to-Text-AssemblyAI",
    stack: [
      "Python",
      "Flask",
      "AssemblyAI",
      "Speech-to-Text",
      "REST API",
    ],
    facts: [
      "Audio-to-text transcription",
      "AssemblyAI API integration",
      "Backend API workflow",
      "Practical Generative AI and speech technology exploration",
    ],
    screenshots: [],
  },
  {
    id: "retell-ai-voice-agent",
    name: "Retell.ai Voice Agent",
    status: "Completed",
    category: "AI / Voice Automation",
    purpose:
      "Voice-agent project exploring AI-powered conversational workflows and automated voice interactions using Retell.ai.",
    stack: [
      "Retell.ai",
      "AI Agents",
      "Voice AI",
      "Automation",
      "APIs",
    ],
    facts: [
      "AI voice-agent workflow",
      "Conversational automation",
      "Voice-based interaction",
      "API-based AI integration",
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming",
    icon: "code",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C", "SQL"],
  },
  {
    category: "Java & Backend",
    icon: "server",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "Node.js",
      "Express.js",
      "Layered Architecture",
      "OOP",
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    category: "AI & Automation",
    icon: "sparkles",
    items: [
      "Generative AI",
      "AI Chatbots",
      "AI Agents",
      "RAG",
      "OpenRouter",
      "AssemblyAI",
      "Retell.ai",
      "Prompt Engineering",
    ],
  },
  {
    category: "Database & Cloud",
    icon: "database",
    items: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "Firebase",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
  {
    category: "Tools & Development",
    icon: "wrench",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Prisma",
      "Drizzle",
      "Web Development",
    ],
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: "Campus Ambassador — Pakdigit Solutions",
    organization: "Pakdigit Solutions",
    type: "Ambassadorship",
  },
  {
    title: "Campus Ambassador — SuperComp'24",
    organization: "SuperComp'24",
    type: "Ambassadorship",
  },
  {
    title: "Completed Aspire Leaders Program",
    organization: "Aspire Leaders Program",
    type: "Leadership Program",
  },
  {
    title: "Participated in UBL National Innovation Hackathon",
    organization: "UBL",
    type: "Hackathon",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "Aspire Leaders Program",
    issuer: "Aspire Institute",
    issued: "Jul 2026",
    image: "/assets/certifications/aspire-leader-program-certificate.png",
  },
  {
    title: "Generative AI & Chatbots Certification",
    issuer: "GenAI Training",
    issued: "2025",
    image: "/assets/certifications/genai-chatbots-certificate.png",
  },
  {
    title: "n8n Chatbot Lab Certification",
    issuer: "n8n Automation",
    issued: "2025",
    image: "/assets/certifications/n8n-chatbot-lab-certificate.png",
  },
  {
    title: "Career Accelerator Certification",
    issuer: "Career Accelerator Program",
    issued: "2025",
    image: "/assets/certifications/career-accelerator-certificate.png",
  },
  {
    title: "SQL Advanced Certification",
    issuer: "Database Training",
    issued: "2025",
    image: "/assets/certifications/sql-advanced-certificate.png",
  },
  {
    title: "SQL Basic Certification",
    issuer: "Database Training",
    issued: "2025",
    image: "/assets/certifications/sql-basic-certificate.png",
  },
  {
    title: "Data Science with Power BI",
    issuer: "Data Analytics Training",
    issued: "2025",
    image: "/assets/certifications/participation-in-data-science-with-power-bi.png",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Data Science Institute",
    issued: "2025",
    image: "/assets/certifications/introduction-to-data-science-certificate.png",
  },
  {
    title: "CSS, Bootstrap & PHP Development",
    issuer: "Web Development Course",
    issued: "2024",
    image: "/assets/certifications/css-bootsrap-php-certificate.png",
  },
  {
    title: "Aptech Computer Education Certificate",
    issuer: "Aptech",
    issued: "2024",
    image: "/assets/certifications/aptech-certificate.png",
  },
  {
    title: "Programming in C Certification",
    issuer: "C Programming Training",
    issued: "2024",
    image: "/assets/certifications/c-certificate.jpg",
  },
];

// ─── COMMUNITY EVENTS ───────────────────────────────────────────────────────

export const events: CommunityEvent[] = [
  {
    name: "Techno Fest Karachi",
    location: "Karachi, Pakistan",
    themes: [
      "Technology",
      "Innovation",
      "Community",
      "Networking",
    ],
    image: "/assets/events/technofest.png",
  },
  {
    name: "Soul Fest",
    location: "Karachi, Pakistan",
    themes: [
      "Community",
      "Event Volunteering",
      "Networking",
    ],
    image: "/assets/events/soulfest.png",
  },
  {
    name: "+92Disrupt",
    location: "Karachi, Pakistan",
    themes: [
      "Technology",
      "Startups",
      "Innovation",
      "Networking",
    ],
    image: "/assets/events/92disrupt.png",
  },
];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────

export const galleryImages = [
  { src: "/assets/events/technofest.png", label: "Techno Fest Karachi" },
  { src: "/assets/events/soulfest.png", label: "Soul Fest" },
  { src: "/assets/events/92disrupt.png", label: "+92Disrupt" },
];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Sunder Kumar and his verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Sunder, so I only answer questions about Sunder and his work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  ...events.map((e) => ({
    title: e.name,
    category: "Event",
    appId: "community",
    keywords: [e.name, e.location, ...e.themes].map((k) => k.toLowerCase()),
  })),
  {
    title: "Sunder Kumar",
    category: "Profile",
    appId: "about",
    keywords: [
      "sunder",
      "kumar",
      "about",
      "profile",
      "education",
      "java",
      "spring boot",
      "full stack",
      "ai",
    ],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────
// Subagent-generated components import { portfolioData } and destructure
// properties from it. This maps our individual exports into the shape they expect.

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: [
    {
      institution: profile.education.institution,
      degree: profile.education.degree,
      affiliation: profile.education.affiliation,
      cgpa: profile.education.cgpa,
      duration: profile.education.graduation,
    },
    ...(profile.education.College
      ? [
          {
            institution: profile.education.College.name,
            degree: profile.education.College.Degree,
            affiliation: profile.education.College.location,
            percentage: profile.education.College.Percentage,
            duration: profile.education.College.Duration,
          },
        ]
      : []),
  ],
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  community: events,
  events,
  galleryImages,
};
