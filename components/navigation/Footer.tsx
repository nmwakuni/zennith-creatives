'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  ArrowUpRight,
} from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

const socialLinks = [
  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
  { icon: Github, href: SITE_CONFIG.social.github, label: 'GitHub' },
  { icon: Dribbble, href: SITE_CONFIG.social.dribbble, label: 'Dribbble' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/10 mt-32">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Zennith
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Creating breathtaking digital experiences that push the
                boundaries of web design.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary-blue transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-text-white transition-colors text-sm"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-text-white transition-colors text-sm"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-text-white transition-colors text-sm"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-text-white transition-colors text-sm"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-text-white mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-text-muted hover:text-primary-blue transition-colors text-sm block"
              >
                {SITE_CONFIG.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-muted text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
