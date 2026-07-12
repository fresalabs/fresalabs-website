'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import anime from 'animejs'
import {
  Chrome,
  Smartphone,
  Code2,
  Sparkles,
  ExternalLink,
  Github,
  Filter,
  Grid3X3,
  LayoutList,
  Star,
  Download,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

type ProductCategory = 'all' | 'browser' | 'android' | 'developer'

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  category: ProductCategory
  icon: React.ElementType
  gradient: string
  url: string
  github?: string
  featured?: boolean
  stats?: {
    users?: string
    rating?: string
    downloads?: string
  }
  tags: string[]
}

const products: Product[] = [
  {
    id: 'navagraha',
    name: 'Navagraha',
    tagline: 'Read the nine-graha stotras every day — in your own script',
    description:
      'An offline-first devotional app to read Navagraha stotras in your own script (Telugu, Devanagari, Tamil, Kannada, IAST), keep daily practices and sankalpa vows with reminders, and explore each graha’s remedies and temples. All texts are public-domain; everything works offline.',
    category: 'android',
    icon: Smartphone,
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    url: 'https://play.google.com/store/apps/details?id=com.fresalabs.navagraha',
    featured: true,
    stats: { rating: 'New' },
    tags: ['Devotional', 'Offline', 'Multi-script'],
  },
  {
    id: 'css-spider',
    name: 'CSS Spider',
    tagline: 'Inspect any website\'s CSS with a click',
    description: 'A powerful Chrome extension that lets you visualize and copy CSS from any element on any webpage. Perfect for designers and developers who need quick style references.',
    category: 'browser',
    icon: Chrome,
    gradient: 'from-fresa-400 via-rose-500 to-pink-500',
    url: 'https://chrome.google.com/webstore/detail/css-spider',
    github: 'https://github.com/nicholasadamou/css-spider',
    featured: true,
    stats: { users: '10K+', rating: '4.8' },
    tags: ['CSS', 'DevTools', 'Productivity'],
  },
  {
    id: 'sleek-form',
    name: 'Sleek Form',
    tagline: 'Beautiful form styling, zero effort',
    description: 'Automatically beautifies HTML forms with modern, accessible styles. No configuration needed - just install and watch your forms transform.',
    category: 'browser',
    icon: Code2,
    gradient: 'from-leaf-400 via-emerald-500 to-teal-500',
    url: 'https://chrome.google.com/webstore/detail/sleek-form',
    stats: { users: '5K+', rating: '4.6' },
    tags: ['Forms', 'Styling', 'Accessibility'],
  },
  {
    id: 'clipboardx',
    name: 'ClipboardX',
    tagline: 'Clipboard history, reimagined',
    description: 'Never lose copied content again. ClipboardX keeps track of everything you copy with smart search, favorites, and cross-device sync.',
    category: 'browser',
    icon: Sparkles,
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    url: 'https://chrome.google.com/webstore/detail/clipboardx',
    stats: { users: '8K+', rating: '4.7' },
    tags: ['Productivity', 'Clipboard', 'Sync'],
  },
  {
    id: 'llb-notes',
    name: 'LLB Notes',
    tagline: 'Law study companion',
    description: 'Comprehensive study materials and notes for LLB law students. Organized by subject with quick search and offline access.',
    category: 'android',
    icon: Smartphone,
    gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    url: 'https://play.google.com/store/apps/details?id=com.fresalabs.llbnotes',
    stats: { downloads: '10K+', rating: '4.5' },
    tags: ['Education', 'Law', 'Study'],
  },
  {
    id: 'pharmd-notes',
    name: 'PharmD Notes',
    tagline: 'Pharmacy education simplified',
    description: 'Complete study resource for pharmacy students. Features detailed notes, drug references, and exam preparation materials.',
    category: 'android',
    icon: Smartphone,
    gradient: 'from-cyan-400 via-sky-500 to-blue-500',
    url: 'https://play.google.com/store/apps/details?id=com.fresalabs.pharmdnotes',
    stats: { downloads: '15K+', rating: '4.6' },
    tags: ['Education', 'Pharmacy', 'Medical'],
  },
  {
    id: 'clinical-vault',
    name: 'Clinical Vault',
    tagline: 'Medical reference at your fingertips',
    description: 'A comprehensive clinical reference app for healthcare professionals. Quick access to drug interactions, dosages, and clinical guidelines.',
    category: 'android',
    icon: Smartphone,
    gradient: 'from-rose-400 via-pink-500 to-fuchsia-500',
    url: 'https://play.google.com/store/apps/details?id=com.fresalabs.clinicalvault',
    stats: { downloads: '20K+', rating: '4.7' },
    tags: ['Medical', 'Reference', 'Healthcare'],
  },
]

const categories = [
  { id: 'all', label: 'All Products', icon: Grid3X3 },
  { id: 'browser', label: 'Browser Extensions', icon: Chrome },
  { id: 'android', label: 'Android Apps', icon: Smartphone },
  { id: 'developer', label: 'Developer Tools', icon: Code2 },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const filteredProducts = products.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  )

  useEffect(() => {
    if (headerRef.current) {
      anime({
        targets: headerRef.current.querySelectorAll('.animate-in'),
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
      })
    }
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fresa-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-leaf-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="animate-in inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-fresa-600 text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            Our Products
          </motion.div>

          <h1 className="animate-in text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Built with{' '}
            <span className="text-fresa-500">love</span>
            <br />
            for{' '}
            <span className="text-leaf-500">everyone</span>
          </h1>

          <p className="animate-in text-xl text-gray-600 max-w-2xl mx-auto">
            Privacy-respecting tools and apps that solve real problems.
            From browser extensions to mobile apps.
          </p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as ProductCategory)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'glass text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{cat.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-2 glass rounded-full p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-500'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-gray-900 text-white' : 'text-gray-500'
              }`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                viewMode={viewMode}
                isHovered={hoveredProduct === product.id}
                onHover={setHoveredProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full glass flex items-center justify-center">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fresa-100/50 to-leaf-100/50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Have an idea for a product?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                We&apos;re always looking for new problems to solve. Let us know what you need!
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Zap size={20} />
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  index: number
  viewMode: 'grid' | 'list'
  isHovered: boolean
  onHover: (id: string | null) => void
}

function ProductCard({ product, index, viewMode, isHovered, onHover }: ProductCardProps) {
  const Icon = product.icon

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="glass rounded-2xl p-6 flex items-center gap-6 hover:shadow-xl transition-shadow"
        onMouseEnter={() => onHover(product.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
            {product.featured && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                <Star size={10} fill="currentColor" /> Featured
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-2">{product.tagline}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {product.stats?.users && (
              <span className="flex items-center gap-1">
                <Download size={14} /> {product.stats.users}
              </span>
            )}
            {product.stats?.downloads && (
              <span className="flex items-center gap-1">
                <Download size={14} /> {product.stats.downloads}
              </span>
            )}
            {product.stats?.rating && (
              <span className="flex items-center gap-1">
                <Star size={14} fill="currentColor" className="text-amber-500" /> {product.stats.rating}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-4 text-sm"
          >
            <ExternalLink size={16} />
          </a>
          {product.github && (
            <a
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2 px-4 text-sm"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bento-card p-6 group ${product.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {product.featured && (
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
            <Star size={12} fill="currentColor" /> Featured
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-fresa-500 transition-colors">
        {product.name}
      </h3>
      <p className="text-fresa-500 font-medium text-sm mb-3">{product.tagline}</p>
      <p className="text-gray-600 text-sm mb-5 line-clamp-2">{product.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      {product.stats && (
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 pt-4 border-t border-gray-100">
          {product.stats.users && (
            <span className="flex items-center gap-1">
              <Download size={14} /> {product.stats.users}
            </span>
          )}
          {product.stats.downloads && (
            <span className="flex items-center gap-1">
              <Download size={14} /> {product.stats.downloads}
            </span>
          )}
          {product.stats.rating && (
            <span className="flex items-center gap-1">
              <Star size={14} fill="currentColor" className="text-amber-500" /> {product.stats.rating}
            </span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 py-2.5 text-sm justify-center"
        >
          <span className="flex items-center gap-2">
            View Product
            <ExternalLink size={14} />
          </span>
        </a>
        {product.github && (
          <a
            href={product.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2.5 px-4"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
