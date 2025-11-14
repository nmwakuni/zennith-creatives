'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Heart } from 'lucide-react'
import { slideUp, staggerContainer } from '@/lib/animations'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We pursue excellence in every project, never settling for anything less than extraordinary.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Our passion for design and technology drives us to create remarkable digital experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in the power of collaboration, working closely with our clients as true partners.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description:
      'We constantly push boundaries, exploring new technologies and creative approaches.',
  },
]

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '15+', label: 'Industry Awards' },
  { value: '8+', label: 'Years Experience' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            About <span className="gradient-text">Zennith</span>
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            We're a team of passionate designers, developers, and strategists
            dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-text-gray leading-relaxed">
            <p>
              Founded in 2016, Zennith Creatives emerged from a simple belief:
              that exceptional design and cutting-edge technology can transform
              businesses and create meaningful connections with audiences.
            </p>
            <p>
              What started as a small team of three has grown into a full-service
              digital agency, but our core values remain unchanged. We're still
              driven by the same passion for innovation, the same commitment to
              excellence, and the same dedication to our clients' success.
            </p>
            <p>
              Today, we've had the privilege of working with startups and Fortune
              500 companies alike, helping them navigate the digital landscape
              and achieve their goals through strategic design and development.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={slideUp} className="text-center">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  variants={slideUp}
                  className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-blue/50 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-text-gray leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Meet the Team</h2>
          <p className="text-lg text-text-gray mb-12">
            Our diverse team of talented individuals brings together expertise in
            design, development, strategy, and innovation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-2xl"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
