'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'
import { ProjectFilter } from '@/components/work/ProjectFilter'

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category))).map(
      (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
    ),
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        )

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            A showcase of our finest projects, each crafted with passion,
            precision, and purpose.
          </p>
        </motion.div>

        {/* Filter */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-text-muted">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
