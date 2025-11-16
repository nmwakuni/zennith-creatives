'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { MeshGradient } from '@/components/3d/MeshGradient'
import { Magnetic } from '@/components/common/Magnetic'
import { staggerContainer, textReveal } from '@/lib/animations'

export function Hero() {
  const heading = 'We Create Digital Excellence'
  const words = heading.split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <MeshGradient />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-black/50 to-bg-black -z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Headline */}
          <div className="mb-8 overflow-hidden">
            <motion.h1 className="text-hero font-black leading-[0.9] tracking-tighter mb-4">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textReveal}
                  className="inline-block mr-4"
                >
                  {i === words.length - 1 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={textReveal}
            className="text-xl md:text-2xl text-text-gray max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Award-winning web design and development agency creating breathtaking
            digital experiences that push boundaries and drive results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textReveal}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic strength={0.2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 transition-shadow"
                >
                  View Our Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </Magnetic>

            <Magnetic strength={0.2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Start a Project
                </Link>
              </motion.div>
            </Magnetic>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={textReveal}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '15+', label: 'Awards Won' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="text-text-muted" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
