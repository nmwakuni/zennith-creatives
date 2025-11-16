'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Magnetic } from './Magnetic'

interface CTAProps {
  title?: string
  description?: string
  primaryText?: string
  primaryLink?: string
  secondaryText?: string
  secondaryLink?: string
}

export function CTA({
  title = "Ready to Create Something Amazing?",
  description = "Let's collaborate to bring your vision to life. Get in touch and let's start building your next big project.",
  primaryText = "Start a Project",
  primaryLink = "/contact",
  secondaryText = "View Our Work",
  secondaryLink = "/work",
}: CTAProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative p-12 md:p-16 lg:p-20 bg-gradient-to-br from-primary-blue/10 via-primary-violet/10 to-accent-pink/10 rounded-3xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-violet/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-blue mb-6"
            >
              <Sparkles size={16} />
              <span>Let's Work Together</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-text-gray leading-relaxed mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Magnetic strength={0.2}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={primaryLink}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 transition-shadow"
                  >
                    {primaryText}
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
                    href={secondaryLink}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:border-primary-blue/50 transition-all"
                  >
                    {secondaryText}
                  </Link>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
