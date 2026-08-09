import type { Experience, Project, Skill, BlogPost, ExpertiseArea, SocialLink } from '../types'

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
  tagline: 'Building reliable backend and event-driven systems at scale',
  intro: 'I work primarily on backend systems with Node.js, TypeScript, and AWS, with additional Java experience. My production work spans payment platforms, logistics, serverless migrations, external integrations, and high-throughput event processing.',
  resumeUrl: 'https://drive.google.com/file/d/1T4TKJOtNiK1eKADOrSi2O3jZQQ8lGt1p/view',
  roles: [
    'Backend Engineer',
    'Software Development Engineer',
    'AWS & Event-Driven Systems',
    'Full-Stack Builder',
  ],
}

export const ABOUT_DATA = {
  intro: 'I\'m a software development engineer with 2+ years of experience building and operating scalable backend systems.',
  description: 'I currently contribute to deployment and release workflows for Amazon Payment Services through BCT Consulting. Previously at Cimpress, I helped migrate a shipment-processing service handling 1M+ events/day to AWS serverless, reducing infrastructure cost by 35% and latency by 50%. I enjoy competitive programming as a LeetCode Knight with a 1975 maximum rating, and I\'m turning AI and agentic-systems coursework into hands-on proof of work.',
  interests: [
    'Backend services and event-driven architecture',
    'AWS, deployment automation, and production reliability',
    'Distributed systems and scalable system design',
    'Applied AI agents and developer tools',
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
      'Contribute to deployment workflows for Amazon Payment Services (PayFort MENA) using AWS CodePipeline and CodeDeploy',
      'Support version upgrades and a manual approval workflow designed to reduce the risk of unreviewed production deployments',
      'Ramped up on platform components spanning the PayFort frontend, merchant-integration layer, and merchant back-office configuration console',
      'Resolved version-upgrade and workflow issues while onboarding to the platform',
    ],
    tech: ['AWS CodePipeline', 'AWS CodeDeploy', 'CI/CD', 'Deployment Workflows'],
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
    category: 'Backend',
    icon: 'Server',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Spring Boot (Developing)', icon: 'SiSpringboot' },
      { name: 'Microservices', icon: 'Boxes' },
      { name: 'REST APIs', icon: 'Braces' },
      { name: 'Webhooks & Async Workflows', icon: 'Webhook' },
      { name: 'Event-Driven Architecture', icon: 'RadioTower' },
    ],
  },
  {
    category: 'Frontend & Tools',
    icon: 'AppWindow',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Postman', icon: 'SiPostman' },
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
      { name: 'AWS CodeDeploy', icon: 'Rocket' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'CI/CD', icon: 'Repeat2' },
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
    category: 'AI & LLM Coursework',
    icon: 'BrainCircuit',
    items: [
      { name: 'LangChain & LangGraph', icon: 'Workflow' },
      { name: 'RAG & Agent Concepts', icon: 'BrainCircuit' },
      { name: 'Vector Databases & Search', icon: 'DatabaseZap' },
      { name: 'Model Context Protocol', icon: 'PlugZap' },
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

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: '1',
    title: 'Backend & Microservices',
    description: 'Building backend services and APIs primarily with Node.js, TypeScript, and NestJS, supported by additional Java backend experience.',
  },
  {
    id: '2',
    title: 'Event-Driven Systems',
    description: 'Building event-driven workflows with AWS Lambda, SQS, SNS, and webhooks for loose coupling, resilience, and high-throughput processing.',
  },
  {
    id: '3',
    title: 'Serverless & Cloud Infrastructure',
    description: 'Migrating and operating workloads across ECS/Fargate and AWS serverless, including a zero-downtime migration that reduced cost by 35% and latency by 50%.',
  },
  {
    id: '4',
    title: 'Production Reliability',
    description: 'Supporting on-call operations, external integrations, data-processing pipelines, and production services handling more than one million events per day.',
  },
  {
    id: '5',
    title: 'CI/CD & Deployment Workflows',
    description: 'Working with AWS CodePipeline and CodeDeploy, version upgrades, and approval workflows designed to reduce the risk of unreviewed releases.',
  },
  {
    id: '6',
    title: 'Competitive Programming',
    description: 'LeetCode Knight with a 1975 maximum rating and more than 1,500 problems solved across coding platforms.',
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
