'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import anime from 'animejs'
import { ExternalLink, Github, Chrome, Package, Smartphone, BookOpen, Pill, Stethoscope, ArrowUpRight } from 'lucide-react'

interface Product {
  name: string
  description: string
  longDescription: string
  icon: React.ReactNode
  gradient: string
  bgGradient: string
  siteLink: string
  featured?: boolean
  links: {
    github?: string
    chrome?: string
    npm?: string
    playstore?: string
  }
}

const products: Product[] = [
  {
    name: 'CSS Spider',
    description: 'Inspect & copy CSS instantly',
    longDescription: 'The fastest way to check, copy and edit CSS. A powerful Chrome extension loved by designers and developers worldwide.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none">
        <circle cx="24" cy="24" r="10" className="fill-white/20 stroke-white" strokeWidth="2" />
        <path d="M24 6v10M24 32v10M6 24h10M32 24h10" className="stroke-white/80" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 11l8 8M29 29l8 8M11 37l8-8M29 19l8-8" className="stroke-white/60" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    bgGradient: 'from-emerald-500/10 to-cyan-500/10',
    siteLink: 'https://cssspider.fresalabs.com',
    featured: true,
    links: {
      github: 'https://github.com/nicober1/CSSSpider---Chrome-Extension',
      chrome: 'https://chrome.google.com/webstore/detail/css-spider/eneakgbflmejjpkogbdmebjbfcdebjik',
    },
  },
  {
    name: 'Sleek Form',
    description: 'Typeform-style forms for React',
    longDescription: 'Create engaging, conversational forms with complete control over styling.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="4" className="fill-white/20 stroke-white" strokeWidth="2" />
        <rect x="14" y="20" width="14" height="3" rx="1.5" className="fill-white/80" />
        <rect x="14" y="26" width="20" height="3" rx="1.5" className="fill-white/50" />
      </svg>
    ),
    gradient: 'from-fresa-400 to-rose-500',
    bgGradient: 'from-fresa-500/10 to-rose-500/10',
    siteLink: 'https://sleekform.fresalabs.com',
    links: {
      github: 'https://github.com/fresalabs/sleekform',
      npm: 'https://www.npmjs.com/package/@fresalabs/sleekform',
    },
  },
  {
    name: 'ClipboardX',
    description: 'Mac clipboard manager',
    longDescription: 'Lives in your menu bar. Never lose copied content again.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
        <rect x="12" y="8" width="24" height="32" rx="3" className="fill-white/20 stroke-white" strokeWidth="2" />
        <rect x="18" y="4" width="12" height="8" rx="2" className="fill-white/30 stroke-white" strokeWidth="2" />
        <rect x="17" y="18" width="14" height="2" rx="1" className="fill-white/80" />
        <rect x="17" y="24" width="10" height="2" rx="1" className="fill-white/50" />
      </svg>
    ),
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    siteLink: 'https://clipboardx.fresalabs.com',
    links: {
      github: 'https://github.com/fresalabs',
    },
  },
  {
    name: 'LLB Notes',
    description: 'Law school companion',
    longDescription: 'Exam-ready notes and case briefs for law students.',
    icon: <BookOpen className="w-12 h-12" />,
    gradient: 'from-indigo-400 to-purple-500',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    siteLink: 'https://play.google.com/store/apps/details?id=com.fresalabs.llbnotes',
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.fresalabs.llbnotes',
    },
  },
  {
    name: 'PharmD Notes',
    description: 'Pharmacy study guide',
    longDescription: 'Complete curriculum coverage with drug interactions and dosing.',
    icon: <Pill className="w-12 h-12" />,
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    siteLink: 'https://play.google.com/store/apps/details?id=com.fresalabs.pharmdnotes',
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.fresalabs.pharmdnotes',
    },
  },
  {
    name: 'Clinical Vault',
    description: 'Medical reference app',
    longDescription: 'Essential clinical references for healthcare professionals.',
    icon: <Stethoscope className="w-12 h-12" />,
    gradient: 'from-rose-400 to-pink-500',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    siteLink: 'https://play.google.com/store/apps/details?id=com.fresalabs.clinicalvault',
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.fresalabs.clinicalvault',
    },
  },
]

function ProductCard({ product, index, featured = false }: { product: Product; index: number; featured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView && cardRef.current) {
      anime({
        targets: cardRef.current,
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: index * 100,
        easing: 'easeOutExpo',
      })
    }
  }, [isInView, index])

  if (featured) {
    return (
      <motion.div
        ref={cardRef}
        className="bento-card col-span-full lg:col-span-2 row-span-2 p-8 md:p-12 opacity-0 group"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-50`} />
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div className={`p-6 rounded-3xl bg-gradient-to-br ${product.gradient} shadow-2xl`}>
              {product.icon}
            </div>
            <motion.a
              href={product.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass hover:bg-white/50 transition-all group/link"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover/link:text-fresa-500 transition-colors" />
            </motion.a>
          </div>

          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full bg-white/50 text-xs font-medium text-gray-600 mb-4">
              Featured
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-cyan-500 transition-all duration-500">
              {product.name}
            </h3>
            <p className="text-xl text-fresa-500 font-medium mb-4">{product.description}</p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">{product.longDescription}</p>
          </div>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200/50">
            {product.links.github && (
              <motion.a
                href={product.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/80 transition-all text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>
            )}
            {product.links.chrome && (
              <motion.a
                href={product.links.chrome}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/80 transition-all text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
              >
                <Chrome size={18} />
                <span className="text-sm font-medium">Chrome</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      className="bento-card p-6 md:p-8 opacity-0 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-30`} />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient} shadow-lg text-white`}>
            {product.icon}
          </div>
          <motion.a
            href={product.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-fresa-500 transition-colors" />
          </motion.a>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-fresa-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-fresa-500 font-medium text-sm mb-3">{product.description}</p>
        <p className="text-gray-600 text-sm flex-1">{product.longDescription}</p>

        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
          {product.links.github && (
            <a href={product.links.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all">
              <Github size={16} />
            </a>
          )}
          {product.links.npm && (
            <a href={product.links.npm} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all">
              <Package size={16} />
            </a>
          )}
          {product.links.playstore && (
            <a href={product.links.playstore} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all">
              <Smartphone size={16} />
            </a>
          )}
          {product.links.chrome && (
            <a href={product.links.chrome} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all">
              <Chrome size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="products" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fresa-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-leaf-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full glass text-fresa-600 text-sm font-semibold mb-6"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Tools that make a{' '}
            <span className="gradient-text">difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each product is crafted with care, focusing on solving real problems
            while respecting your privacy.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Card (CSS Spider) */}
          <ProductCard product={products[0]} index={0} featured={true} />

          {/* Other Cards */}
          {products.slice(1).map((product, index) => (
            <ProductCard key={product.name} product={product} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
