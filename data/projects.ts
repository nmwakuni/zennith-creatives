import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nexus-ai-platform',
    title: 'Nexus AI Platform',
    client: 'TechVision Inc.',
    year: 2024,
    category: 'web',
    services: ['Web Design', 'UI/UX', 'Development', 'Branding'],
    thumbnail: '/projects/nexus-ai/thumbnail.jpg',
    hero: {
      image: '/projects/nexus-ai/hero.jpg',
    },
    shortDescription: 'An AI-powered analytics platform that revolutionizes data visualization',
    challenge:
      'TechVision needed a cutting-edge platform to showcase their AI capabilities while maintaining exceptional performance and user experience.',
    solution:
      'We created an immersive 3D interface with real-time data visualization, powered by WebGL and optimized for lightning-fast performance.',
    results: [
      {
        metric: 'User Engagement',
        value: '+245%',
        description: 'Increase in daily active users',
      },
      {
        metric: 'Load Time',
        value: '0.8s',
        description: 'Average page load time',
      },
      {
        metric: 'Conversion',
        value: '+180%',
        description: 'Boost in trial signups',
      },
    ],
    images: [
      '/projects/nexus-ai/1.jpg',
      '/projects/nexus-ai/2.jpg',
      '/projects/nexus-ai/3.jpg',
    ],
    testimonial: {
      text: 'Zennith Creatives transformed our vision into reality. The platform is absolutely stunning and our users love it.',
      author: 'Sarah Chen',
      role: 'CEO, TechVision Inc.',
    },
    techStack: ['Next.js', 'Three.js', 'TypeScript', 'WebGL', 'TailwindCSS'],
    liveUrl: 'https://nexus-ai-demo.com',
    featured: true,
  },
  {
    id: '2',
    slug: 'lumina-fashion',
    title: 'Lumina Fashion',
    client: 'Lumina',
    year: 2024,
    category: 'ecommerce',
    services: ['E-commerce', 'Web Design', 'Development'],
    thumbnail: '/projects/lumina/thumbnail.jpg',
    hero: {
      image: '/projects/lumina/hero.jpg',
    },
    shortDescription: 'A luxury fashion e-commerce experience with AR try-on',
    challenge:
      'Lumina wanted to stand out in the crowded luxury fashion market with innovative shopping experiences.',
    solution:
      'We developed an AR-powered e-commerce platform with virtual try-on, smooth animations, and seamless checkout.',
    results: [
      {
        metric: 'Sales',
        value: '+320%',
        description: 'Increase in online sales',
      },
      {
        metric: 'Cart Abandonment',
        value: '-65%',
        description: 'Reduction in abandoned carts',
      },
      {
        metric: 'Mobile Traffic',
        value: '+210%',
        description: 'Growth in mobile purchases',
      },
    ],
    images: ['/projects/lumina/1.jpg', '/projects/lumina/2.jpg'],
    testimonial: {
      text: 'The AR try-on feature is a game-changer. Our customers are more confident in their purchases.',
      author: 'Marcus Thompson',
      role: 'Founder, Lumina',
    },
    techStack: ['Next.js', 'Shopify', 'AR.js', 'Framer Motion'],
    liveUrl: 'https://lumina-fashion.com',
    featured: true,
  },
  {
    id: '3',
    slug: 'verde-sustainability',
    title: 'Verde Sustainability',
    client: 'Verde',
    year: 2024,
    category: 'web',
    services: ['Web Design', 'Development', 'Content Strategy'],
    thumbnail: '/projects/verde/thumbnail.jpg',
    hero: {
      image: '/projects/verde/hero.jpg',
    },
    shortDescription: 'Interactive sustainability platform with real-time environmental impact tracking',
    challenge:
      'Verde needed to communicate complex environmental data in an engaging, accessible way.',
    solution:
      'We created an interactive platform with data visualizations, scroll-driven storytelling, and gamification.',
    results: [
      {
        metric: 'Engagement',
        value: '+400%',
        description: 'Time spent on site',
      },
      {
        metric: 'Awareness',
        value: '2M+',
        description: 'People reached',
      },
      {
        metric: 'Actions',
        value: '50K+',
        description: 'Pledges made',
      },
    ],
    images: ['/projects/verde/1.jpg', '/projects/verde/2.jpg'],
    techStack: ['Next.js', 'D3.js', 'GSAP', 'Sanity CMS'],
    liveUrl: 'https://verde-sustainability.org',
    featured: true,
  },
  {
    id: '4',
    slug: 'pulse-fitness-app',
    title: 'Pulse Fitness',
    client: 'Pulse',
    year: 2024,
    category: 'mobile',
    services: ['Mobile App', 'UI/UX', 'Branding'],
    thumbnail: '/projects/pulse/thumbnail.jpg',
    hero: {
      image: '/projects/pulse/hero.jpg',
    },
    shortDescription: 'Next-generation fitness app with AI-powered workout recommendations',
    challenge:
      'Pulse wanted to create a fitness app that stands out with personalized experiences and stunning design.',
    solution:
      'We designed and developed a mobile app with AI recommendations, social features, and beautiful animations.',
    results: [
      {
        metric: 'Downloads',
        value: '500K+',
        description: 'In first 3 months',
      },
      {
        metric: 'Rating',
        value: '4.9/5',
        description: 'App Store rating',
      },
      {
        metric: 'Retention',
        value: '85%',
        description: '30-day retention rate',
      },
    ],
    images: ['/projects/pulse/1.jpg', '/projects/pulse/2.jpg'],
    testimonial: {
      text: 'The app exceeded all our expectations. Users love the design and the AI features are incredibly accurate.',
      author: 'Alex Rivera',
      role: 'Product Lead, Pulse',
    },
    techStack: ['React Native', 'TypeScript', 'TensorFlow', 'Firebase'],
    featured: false,
  },
]
