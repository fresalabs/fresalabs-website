'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Mail, Heart, ArrowUpRight, Sparkles } from 'lucide-react'
import { StrawberryLogo } from './StrawberryLogo'

const footerLinks = {
  products: [
    { name: 'CSS Spider', href: 'https://cssspider.fresalabs.com' },
    { name: 'Sleek Form', href: 'https://sleekform.fresalabs.com' },
    { name: 'ClipboardX', href: 'https://clipboardx.fresalabs.com' },
    { name: 'LLB Notes', href: 'https://play.google.com/store/apps/details?id=com.fresalabs.llbnotes' },
    { name: 'PharmD Notes', href: 'https://play.google.com/store/apps/details?id=com.fresalabs.pharmdnotes' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-gray-100" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fresa-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-leaf-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Newsletter/CTA Section */}
        <div className="py-16 border-b border-gray-200/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fresa-100 text-fresa-600 text-sm font-medium mb-4">
                <Sparkles size={14} />
                Stay Updated
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Building something new?
              </h3>
              <p className="text-gray-600">
                Check out our GitHub for the latest projects and updates.
              </p>
            </div>
            <motion.a
              href="https://github.com/fresalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Follow on GitHub
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: 'spring' }}>
                <StrawberryLogo className="w-12 h-12" animated={false} />
              </motion.div>
              <span className="text-2xl font-bold">
                <span className="text-fresa-500">Fresa</span>
                <span className="text-leaf-500">Labs</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fresh ideas, fresh software. We build privacy-first tools that solve real problems.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/fresalabs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="mailto:admin@fresalabs.com"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-fresa-500 transition-all"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-fresa-500 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-fresa-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-fresa-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun Stats */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Stats</h4>
            <div className="space-y-3">
              <div className="glass rounded-xl p-3">
                <div className="text-xl font-bold text-fresa-500">6+</div>
                <div className="text-xs text-gray-500">Products</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-xl font-bold text-leaf-500">50K+</div>
                <div className="text-xs text-gray-500">Happy Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} FresaLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-fresa-500 fill-fresa-500" />
              </motion.span>{' '}
              for everyone
            </p>
            <div className="hidden md:flex items-center gap-1 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
