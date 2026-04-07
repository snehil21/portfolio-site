import { Experience, Project, Skill, BlogPost, ExpertiseArea, SocialLink } from '@types/index'

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
  title: 'Software Engineer',
  tagline: 'Building event-driven systems that scale to millions',
  intro: 'I design and build robust backend systems with a focus on performance, reliability, and impact. Specialized in microservices, serverless architectures, and cloud infrastructure.',
  roles: ['Backend Engineer', 'System Designer', 'Full Stack Developer', 'Competitive Programmer'],
}

export const ABOUT_DATA = {
  intro: 'I\'m a software engineer with 2+ years of experience building scalable backend systems that handle 1M+ events/day.',
  description: 'I focus on creating systems that are not just functional, but also reliable, maintainable, and performant. I love solving complex problems around distributed systems, event-driven architectures, and infrastructure scaling. At Cimpress, I migrated high-throughput services to AWS serverless, reducing costs by 35% and latency by 50%. I also enjoy competitive programming (LeetCode Knight, 1975 rating) and building full-stack products.',
  interests: [
    'Building microservices and event-driven architectures',
    'Serverless migrations and cloud infrastructure',
    'System design and architecture patterns',
    'High-throughput data processing pipelines',
  ],
  hobbies: [
    'Competitive programming (LeetCode, CodeChef)',
    'Building side projects (ResumeCraft)',
    'Exploring new tech (GenAI, distributed systems)',
    'Open source contributions',
  ],
}

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Cimpress India',
    role: 'Software Engineer',
    duration: 'Aug 2024 - Present',
    impact: [
      'Migrated high-throughput shipment processing service (1M+ events/day) from ECS to AWS Serverless (Lambda, SQS, SNS), achieving zero-downtime deployment, 35% cost reduction, and 50% lower latency while handling 2x peak traffic',
      'Designed and built production-ready credit purchase & allocation system (GenAI Logomaker) integrated with checkout + payment webhooks, load-tested to 10K+ orders/day',
      'Built scalable parsing pipelines for CSV, EDI, XML, JSON, and fixed-width formats, processing 50K+ records/day and reducing parsing errors by 25%',
      'Integrated Canada Post & France Express via carrier-specific transformation layers, supporting 10K+ shipments/month across regions',
      'Served as on-call engineer for distributed systems handling 1M+ events/day, resolving incidents within SLA',
    ],
    tech: ['Node.js', 'TypeScript', 'AWS (Lambda, SQS, SNS, ECS)', 'NestJS', 'Microservices', 'MySQL', 'MongoDB'],
  },
  {
    id: '2',
    company: 'Oracle Financial Services Software',
    role: 'Software Engineer Intern (Backend)',
    duration: 'Jul 2023 - Sep 2023',
    impact: [
      'Collaborated in a 4-member team to build a multi-threaded metrics collection system using ScheduledExecutorService (4 threads), executing 4+ concurrent queries across 2 Oracle DB instances at 10-15s intervals',
      'Engineered XML/properties-based configuration with connection pooling, reducing overhead and enabling reusable database integrations',
      'Built reliable data ingestion and logging pipelines with Log4j, enabling metric tracking, anomaly detection, and graceful shutdown',
    ],
    tech: ['Java', 'Multithreading', 'Oracle DB', 'Log4j', 'JDBC'],
  },
  {
    id: '3',
    company: 'ENITIATE',
    role: 'Frontend Intern',
    duration: 'Oct 2023 - Dec 2023',
    impact: [
      'Led development of dynamic user profile page displaying candidate information to recruiters, improving user discoverability',
      'Contributed to building main company website with React.js and Next.js, ensuring responsive design and smooth navigation',
      'Implemented reusable components and optimized page load performance for recruiter-facing pages',
    ],
    tech: ['React.js', 'Next.js', 'Material-UI', 'JavaScript'],
  },
]

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C', icon: 'Code' },
      { name: 'C++', icon: 'Code' },
      { name: 'Java', icon: 'Code' },
      { name: 'JavaScript/TypeScript', icon: 'Code' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'Code' },
      { name: 'NestJS', icon: 'Code' },
      { name: 'Microservices', icon: 'GitBranch' },
      { name: 'REST APIs', icon: 'Zap' },
      { name: 'Event-Driven Architecture', icon: 'Workflow' },
      { name: 'Serverless', icon: 'Cloud' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'Smartphone' },
      { name: 'Next.js', icon: 'Smartphone' },
      {name: 'HTML/CSS', icon: 'Code' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (Lambda, SQS, SNS, ECS)', icon: 'Cloud' },
      { name: 'Docker', icon: 'Box' },
      { name: 'Terraform', icon: 'Settings' },
      { name: 'CI/CD (GitLab CI)', icon: 'GitBranch' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'Database' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git & GitHub', icon: 'GitBranch' },
      { name: 'VS Code', icon: 'Terminal' },
      { name: 'Postman', icon: 'Zap' },
      { name: 'Competitive Programming', icon: 'Activity' },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ResumeCraft - Professional Resume Builder',
    description: 'Modern web app for creating and managing professional resumes with real-time preview and PDF export',
    problem: 'Users needed an intuitive tool to build polished resumes without complex formatting',
    solution: 'Built a React-based application with drag-and-drop sections, real-time editing, and clean professional templates',
    tech: ['React', 'JavaScript', 'CSS Modules', 'Netlify', 'Git'],
    github: 'https://github.com/snehil21/ResumeCraft',
    live: 'https://resumecraft-demo.netlify.app', // replace with actual if available
    featured: true,
  },
]

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: '1',
    title: 'Microservices Architecture',
    description: 'Designing and implementing scalable microservices with Node.js, NestJS, and proper communication patterns (event-driven, REST).',
  },
  {
    id: '2',
    title: 'Event-Driven Systems',
    description: 'Building event-driven architectures using AWS SNS/SQS and webhooks for loose coupling and high throughput (1M+ events/day).',
  },
  {
    id: '3',
    title: 'Serverless & Cloud Infrastructure',
    description: 'Leveraging AWS serverless (Lambda, API Gateway) to reduce costs, improve scalability, and achieve zero-downtime deployments.',
  },
  {
    id: '4',
    title: 'System Design & Scalability',
    description: 'Designing systems that scale horizontally, ensuring reliability and performance under high load (10K+ orders/day).',
  },
  {
    id: '5',
    title: 'Database Optimization',
    description: 'Query optimization, indexing strategies, and data pipeline design for MySQL and MongoDB.',
  },
  {
    id: '6',
    title: 'Competitive Programming',
    description: 'LeetCode Knight (1975 rating, 1500+ problems) – applying algorithmic thinking to system design and problem-solving.',
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
    badge: '🏅 Knight (500+ problems)',
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