'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
            activeCategory === category
              ? 'bg-gradient-primary text-white shadow-lg shadow-primary-blue/30'
              : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-white'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
