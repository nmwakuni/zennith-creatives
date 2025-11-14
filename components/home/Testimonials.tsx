/*
'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { slideUp, staggerContainer } from '@/lib/animations'

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header *
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Client <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-text-gray leading-relaxed">
            Don't just take our word for it—hear what our clients have to say
            about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid *
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={slideUp}
              className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-blue/50 transition-all duration-500"
            >
              {/* Quote Icon *
              <div className="mb-6">
                <Quote size={48} className="text-primary-blue opacity-50" />
              </div>

              {/* Testimonial Text *
              <p className="text-lg text-text-gray mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author *
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                <div>
                  <div className="font-semibold text-text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
*/
'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

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
            Client <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-text-gray leading-relaxed">
            Don't just take our word for it—hear what our clients have to say
            about working with us.
          </p>
        </motion.div>

        {/* Scrolling Testimonials Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[320px] flex-shrink-0"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-blue/50 transition-all duration-500 h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote size={40} className="text-primary-blue opacity-50" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base text-text-gray mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary" />
                    <div>
                      <div className="font-semibold text-text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-text-muted">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
