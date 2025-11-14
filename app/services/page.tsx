'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Smartphone,
  Palette,
  ShoppingCart,
  TrendingUp,
  Check,
} from 'lucide-react'
import Link from 'next/link'
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

const serviceDetails = [
  {
    ...SERVICES[0],
    features: [
      'Responsive Web Design',
      'Custom Development',
      'Performance Optimization',
      'SEO Best Practices',
      'Progressive Web Apps',
    ],
  },
  {
    ...SERVICES[1],
    features: [
      'Brand Strategy',
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Marketing Collateral',
    ],
  },
  {
    ...SERVICES[2],
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'App Store Optimization',
      'Push Notifications',
      'In-app Analytics',
    ],
  },
  {
    ...SERVICES[3],
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'User Testing',
      'Design Systems',
      'Interaction Design',
    ],
  },
  {
    ...SERVICES[4],
    features: [
      'Custom E-commerce Platforms',
      'Payment Integration',
      'Inventory Management',
      'Shopping Cart Optimization',
      'Conversion Rate Optimization',
    ],
  },
  {
    ...SERVICES[5],
    features: [
      'Digital Strategy',
      'Social Media Marketing',
      'Content Marketing',
      'Email Campaigns',
      'Analytics & Reporting',
    ],
  },
]

export default function ServicesPage() {
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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Comprehensive digital solutions designed to elevate your brand and
            drive measurable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {serviceDetails.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                variants={slideUp}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-blue/50 transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm text-text-gray"
                      >
                        <Check
                          size={16}
                          className="text-secondary-green flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-primary-blue/10 to-primary-violet/10 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-text-gray mb-8">
            Let's collaborate to create something extraordinary together.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 transition-shadow"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
