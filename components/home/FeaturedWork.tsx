'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { slideUp, staggerContainer } from '@/lib/animations'

export function FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-text-gray leading-relaxed">
            Explore our latest projects that showcase our commitment to
            excellence and innovation in digital design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={slideUp}>
              <Link
                href={`/work/${project.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary-blue/50 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-black via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full bg-gradient-to-br from-primary-blue/20 to-primary-violet/20" />
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Placeholder for project image */}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-text-muted">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-gray mb-3 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="text-xs px-3 py-1 bg-white/5 rounded-full text-text-muted"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-blue">
                    View Case Study
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:border-primary-blue/50 transition-all"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
