export interface Project {
  id: string
  slug: string
  title: string
  client: string
  year: number
  category: 'web' | 'branding' | 'mobile' | 'ecommerce'
  services: string[]
  thumbnail: string
  hero: {
    image?: string
    video?: string
  }
  shortDescription: string
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  images: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  techStack: string[]
  liveUrl?: string
  featured: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features?: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface Testimonial {
  id: string
  text: string
  author: string
  role: string
  company: string
  image?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  publishedAt: string
  readingTime: number
  category: string
  tags: string[]
}
