import type {
  BlogPost,
  Experience,
  ExpertiseArea,
  Project,
  Recommendation,
  Skill,
  SocialLink,
} from '../types'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/snehil21',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/snehilkumarr/',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/snehilthaakur',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:snehil.kumar09@gmail.com',
    icon: 'mail',
  },
]

export const HERO_DATA = {
  name: 'Snehil Kumar',
  title: 'Software Development Engineer I',
  tagline: 'Building reliable backend, distributed, and AI-assisted systems at scale',
  intro: 'I build backend and distributed systems with Java, Spring Boot, Node.js and AWS. My production work spans payments, logistics, serverless migrations, and event-driven processing, while my applied-AI projects use LangGraph, RAG, and local LLMs with deterministic safeguards and human review.',
  resumeUrl: 'https://drive.google.com/file/d/1m59ZsSEWFs-5PpNkuTQ7nWNUPTKiFprc/view',
  roles: [
    'Backend Engineer',
    'Software Developer',
    'AWS & Event-Driven Systems',
    'Applied AI Builder',
  ],
}

export const ABOUT_DATA = {
  intro: 'I\'m a backend-focused software development engineer with 2+ years of experience building and operating scalable systems with Java, Spring Boot, Node.js, TypeScript, and AWS.',
  description: 'I currently work with Amazon Payment Services through BCT Consulting, strengthening security controls and AWS CDK deployment pipelines. Previously at Cimpress, I migrated a shipment-processing service handling 1M+ events/day to AWS serverless, cutting infrastructure cost by 35% and latency by 50%. Alongside production work, I build applied-AI tools with LangGraph, RAG, and local LLMs, keeping deterministic checks and human approval around risky actions.',
  interests: [
    'Java, Spring Boot, and Node.js backend services',
    'AWS, deployment automation, and production reliability',
    'Distributed systems and scalable system design',
    'Applied AI systems with verifiable, human-controlled workflows',
  ],
  hobbies: [
    'Competitive programming and structured DSA practice',
    'Building side projects and developer tools',
    'Exploring applied AI and distributed systems',
  ],
}

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Amazon (via BCT Consulting)',
    role: 'Software Development Engineer I',
    duration: 'May 2026 - Present',
    impact: [
      'Co-designed and implemented a shared Redis caching layer for Java payment services using Spring Cache and Redisson, with 3 custom key-generation strategies, per-region expiry, and database fallback after runtime cache-read failures.',
      'Coordinated remediation for 3 high-severity findings spanning S3 transport security, Java XML parser hardening, and endpoint authentication; secured approved delivery timelines and authored AWS CDK remediations across 3 services',
      'Shipped automated security scanning and manual approval gates across 2 AWS CDK pipelines, closing a Beta-to-Production deployment path that previously lacked release controls',
    ],
    tech: ['Java', 'Spring Boot', 'AWS CDK', 'AWS CodePipeline', 'CI/CD', 'Security Remediation'],
  },
  {
    id: '2',
    company: 'Cimpress India',
    role: 'Software Development Engineer I',
    duration: 'Aug 2024 - Apr 2026',
    impact: [
      'Migrated a shipment-processing service handling 1M+ events/day from ECS/Fargate to AWS Lambda, SQS, and SNS with zero downtime, reducing infrastructure cost by 35% and latency by 50% while supporting 2x traffic spikes',
      'Contributed to credit purchase and allocation workflows for a GenAI Logomaker, integrating checkout and payment webhooks and validating capacity through load tests above 10K orders/day',
      'Worked on parsing pipelines for CSV, EDI, XML, JSON, and fixed-width formats, processing 50K+ records/day and reducing parsing errors by 25%',
      'Integrated Canada Post and France Express through carrier-specific transformation layers, supporting 10K+ shipments/month',
      'Participated in on-call support for distributed, event-driven production services',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'Java',
      'Spring Boot',
      'AWS Lambda',
      'SQS',
      'SNS',
      'ECS/Fargate',
      'NestJS',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    id: '3',
    company: 'Oracle Financial Services Software',
    role: 'Project Intern (Java Backend)',
    duration: 'Jul 2023 - Sep 2023',
    impact: [
      'Worked on a Java metrics and application-monitoring system involving multithreading and scheduled database queries',
      'Contributed to configuration-driven connectivity and connection pooling for Oracle Database integrations',
      'Worked on ingestion, logging, and graceful-shutdown behavior for reliable metric collection',
    ],
    tech: ['Java', 'Multithreading', 'Oracle Database', 'JDBC', 'Connection Pooling'],
  },
  {
    id: '4',
    company: 'Enitiate Esports',
    role: 'Frontend Intern',
    duration: 'Oct 2023 - Dec 2023',
    impact: [
      'Worked on a user-profile feature that presented candidate information to recruiters',
      'Implemented the feature using React, Next.js, TypeScript, and Material UI',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Material UI'],
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Backend',
    icon: 'Server',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Spring Boot', icon: 'SiSpringboot' },
      { name: 'Microservices', icon: 'Boxes' },
      { name: 'REST APIs', icon: 'Braces' },
      { name: 'Webhooks & Async Workflows', icon: 'Webhook' },
      { name: 'Event-Driven Architecture', icon: 'RadioTower' },
    ],
  },
  {
    category: 'Applied AI & LLMs',
    icon: 'BrainCircuit',
    items: [
      { name: 'Generative AI & LLMs', icon: 'BrainCircuit' },
      { name: 'LangChain & LangGraph', icon: 'Workflow' },
      { name: 'RAG & Vector Databases', icon: 'DatabaseZap' },
      { name: 'Ollama & Local LLMs', icon: 'Server' },
      { name: 'Prompt Engineering', icon: 'Braces' },
      { name: 'LLM Evaluation & Safety', icon: 'Workflow' },
      { name: 'Model Context Protocol (MCP)', icon: 'PlugZap' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'CloudCog',
    items: [
      { name: 'AWS Lambda', icon: 'SiAwslambda' },
      { name: 'Amazon SQS', icon: 'SiAmazonsqs' },
      { name: 'Amazon SNS', icon: 'RadioTower' },
      { name: 'AWS ECS/Fargate', icon: 'SiAwsfargate' },
      { name: 'AWS CodePipeline', icon: 'GitBranch' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'CI/CD', icon: 'Repeat2' },
    ],
  },
    {
    category: 'Languages',
    icon: 'Code2',
    items: [
      { name: 'C++', icon: 'SiCplusplus' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    items: [
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'Oracle Database', icon: 'SiOracle' },
      { name: 'Amazon DynamoDB', icon: 'SiAmazondynamodb' },
      { name: 'Elasticsearch', icon: 'SiElasticsearch' },
    ],
  },
  {
    category: 'Frontend & Tools',
    icon: 'AppWindow',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Postman', icon: 'SiPostman' },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DLQ Triage Assistant - AI-Assisted Payment Failure Analysis',
    description: 'A local payment-failure triage system that produces safe, human-reviewed recovery recommendations',
    problem: 'Failed payment messages can contain incomplete or ambiguous evidence, making automatic retries risky and manual DLQ investigation slow',
    solution: 'Built a Spring Boot payment worker with Floci-hosted SQS queues and Terraform, plus a Python LangGraph workflow that combines deterministic rules with local Ollama analysis and safety checks',
    tech: [
      'Java 21',
      'Spring Boot',
      'Python',
      'Amazon SQS',
      'Terraform',
      'Floci',
      'LangChain',
      'LangGraph',
      'Ollama',
      'FastAPI',
    ],
    github: 'https://github.com/snehil21/dlq-triage-assistant',
    featured: true,
  },
  {
    id: '2',
    title: 'TaskFlow - Team Task Management',
    description: 'A full-stack project and task management system with secure authentication, team assignments, filtering, statistics, and optimistic updates',
    problem: 'Teams need a secure shared workspace to organize projects, assign work, and track task status and priority',
    solution: 'Built a Java 21 and Spring Boot API with stateless JWT authentication, Flyway migrations, PostgreSQL, and a React and TypeScript frontend',
    tech: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'Flyway',
      'React',
      'TypeScript',
      'Docker',
    ],
    github: 'https://github.com/snehil21/TaskFlow',
    featured: true,
  },
  {
    id: '3',
    title: 'Performance Review System',
    description: 'A role-based full-stack platform for managing employees, assigning performance reviews, collecting feedback, and tracking status and due dates',
    problem: 'Manual review workflows make reviewer assignments, deadlines, feedback, and progress difficult to manage consistently',
    solution: 'Built a JWT-authenticated app where admins manage employees and review assignments while reviewers submit feedback and track progress',
    tech: [
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'JWT',
      'React',
      'TypeScript',
      'Material UI',
      'Docker',
    ],
    github: 'https://github.com/snehil21/Performance-Review-System',
    featured: true,
  },
]

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'lakshmi-chandrakala',
    initials: 'LC',
    name: 'Lakshmi Chandrakala',
    role: 'Engineering Manager, Cimpress India',
    excerpt: 'When the ‘why’ is clear, he demonstrates strong analytical thinking and consistently arrives at effective, well-thought-out solutions. Snehil is a strong full-stack engineer with a high ownership mindset.',
    linkedInUrl: 'https://www.linkedin.com/in/lakshmichandrakala/',
  },
  {
    id: 'andreia-kumpera',
    initials: 'AK',
    name: 'Andreia Kumpera',
    role: 'Director of Engineering - Logo & Brand',
    excerpt: 'What stood out most was his ownership. During a team transition, Snehil stepped up to take responsibility for the front-end of the purchasing credits project.',
    linkedInUrl: 'https://www.linkedin.com/in/akumpera/',
  },
  {
    id: 'saurabh-rawat',
    initials: 'SR',
    name: 'Saurabh Rawat',
    role: 'Lead Software Engineer, Cimpress India',
    excerpt: 'He consistently approaches tasks with dedication and delivers high-quality results in a timely manner. His ability to understand requirements quickly and execute them efficiently makes him a valuable team member.',
    linkedInUrl: 'https://www.linkedin.com/in/saurabh-rawat-76668296/',
  },
  {
    id: 'nitin-magdum',
    initials: 'NM',
    name: 'Nitin Magdum',
    role: 'Lead Software Engineer, Cimpress India',
    excerpt: 'He approaches challenges with a structured mindset and delivers effective, scalable solutions. I’ve seen him take ownership of features end-to-end from design to deployment while maintaining high code quality and best practices.',
    linkedInUrl: 'https://www.linkedin.com/in/nitin-magdum/',
  },
]

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: '1',
    title: 'Backend & Microservices',
    description: 'Building backend services and microservices with Java, Spring Boot, Node.js, TypeScript, NestJS, and REST APIs.',
  },
  {
    id: '2',
    title: 'Applied AI & Agentic Systems',
    description: 'Building AI-assisted backend workflows with LangChain, LangGraph, local LLMs, structured outputs, deterministic safeguards, and human review.',
  },
  {
    id: '3',
    title: 'Event-Driven Systems',
    description: 'Building event-driven workflows with AWS Lambda, SQS, SNS, and webhooks for loose coupling, resilience, and high-throughput processing.',
  },
  {
    id: '4',
    title: 'Serverless & Cloud Infrastructure',
    description: 'Migrating and operating workloads across ECS/Fargate and AWS serverless, including a zero-downtime migration that reduced cost by 35% and latency by 50%.',
  },
  {
    id: '5',
    title: 'Production Reliability',
    description: 'Supporting on-call operations, external integrations, data-processing pipelines, and production services handling more than one million events per day.',
  },
  {
    id: '6',
    title: 'CI/CD & Deployment Workflows',
    description: 'Working with AWS CodePipeline and CodeDeploy, version upgrades, and approval workflows designed to reduce the risk of unreviewed releases.',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // No blog posts yet – you can add later
]

export const COMPETITIVE_PROGRAMMING_STATS = [
  {
    platform: 'LeetCode',
    handle: 'snehilthakur21',
    rating: '1975 (max)',
    badge: '🏅 Knight',
    url: 'https://leetcode.com/u/snehilthakur21/',
    icon: 'https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png',
  },
  {
    platform: 'CodeChef',
    handle: 'snehil21',
    rating: '1630 (max)',
    badge: '⭐⭐⭐ 3-star',
    url: 'https://www.codechef.com/users/snehil21',
    icon: 'https://img.icons8.com/?size=100&id=LnZMjt9rZC3d&format=png',
  },
  {
    platform: 'GeeksforGeeks',
    handle: 'snehilthakur',
    rating: '–',
    badge: 'Top 100 (1200+ problems)',
    url: 'https://www.geeksforgeeks.org/profile/snehilthakur',
    icon: 'https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png',
  },
]
