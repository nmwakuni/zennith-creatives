'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Smartphone,
  Palette,
  ShoppingCart,
  TrendingUp,
} from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { slideUp, staggerContainer } from '@/lib/animations'

const iconMap = {
  Code2,
  Sparkles,
  Smartphone,
  Palette,
  ShoppingCart,
  TrendingUp,
}

export function Services() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-gray leading-relaxed">
            We offer comprehensive digital solutions tailored to elevate your
            brand and drive growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                variants={slideUp}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-blue/50 transition-all duration-500 hover:bg-white/10 h-full">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-text-gray leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
