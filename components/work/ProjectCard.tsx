'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary-blue/50 transition-all duration-500"
      >
        {/* Project Image */}
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-black via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-full h-full bg-gradient-to-br from-primary-blue/20 to-primary-violet/20" />
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Placeholder for project image */}
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-bg-black/80 backdrop-blur-sm text-xs font-semibold text-primary-blue uppercase tracking-wider rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-semibold text-text-white">
              {project.client}
            </span>
            <span className="text-sm text-text-muted">{project.year}</span>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-primary-blue transition-colors">
            {project.title}
          </h3>

          <p className="text-text-gray text-sm mb-3 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="text-xs px-2 py-1 bg-white/5 rounded-full text-text-muted"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-primary-blue mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            View Case Study
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
