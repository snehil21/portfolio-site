export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  impact: string[]
  tech?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  tech: string[]
  github?: string
  live?: string
  image?: string
  featured?: boolean
}

export interface Skill {
  category: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  icon: string  // Icon from lucide-react (e.g., 'Code', 'Database', 'Cpu', etc.)
}

export interface BlogPost {
  id: string
  title: string
  preview: string
  date: string
  readTime: string
  link: string
  tags?: string[]
}

export interface ExpertiseArea {
  id: string
  title: string
  description: string
  icon?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface CompetitiveProgrammingStat {
  platform: string
  handle: string
  rating: string
  badge: string
  url: string
  icon: string
}
