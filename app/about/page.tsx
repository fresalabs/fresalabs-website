'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import anime from 'animejs'
import {
  Heart,
  Shield,
  Zap,
  Users,
  Sparkles,
  Code2,
  Globe,
  Star,
  Coffee,
  Rocket,
  Target,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { StrawberryLogo } from '@/components/StrawberryLogo'

const timeline = [
  {
    year: '2021',
    title: 'The Seed',
    description: 'FresaLabs was born from a simple idea: software should solve real problems without compromising privacy.',
    icon: Lightbulb,
    color: 'fresa',
  },
  {
    year: '2022',
    title: 'First Sprout',
    description: 'Launched CSS Spider, our first browser extension that quickly gained traction among developers.',
    icon: Rocket,
    color: 'leaf',
  },
  {
    year: '2023',
    title: 'Growing Strong',
    description: 'Expanded to Android apps, reaching over 50,000 users across all platforms.',
    icon: Target,
    color: 'amber',
  },
  {
    year: '2024',
    title: 'Full Bloom',
    description: 'Launched Clinical Vault and expanded our medical education app suite to help healthcare professionals.',
    icon: Heart,
    color: 'rose',
  },
  {
    year: '2025',
    title: 'New Horizons',
    description: 'Redesigned our entire web presence and continued innovating with new developer tools and productivity apps.',
    icon: Globe,
    color: 'blue',
  },
  {
    year: '2026',
    title: 'The Future',
    description: 'Pushing boundaries with fresh ideas and building the next generation of privacy-first software for everyone.',
    icon: Star,
    color: 'purple',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data belongs to you. We never collect, sell, or share personal information.',
    gradient: 'from-fresa-400 to-rose-500',
  },
  {
    icon: Heart,
    title: 'User Focused',
    description: 'Every feature starts with understanding real problems. We build what people actually need.',
    gradient: 'from-rose-400 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Fast & Simple',
    description: 'Great software should be intuitive and performant. No bloat, no complexity.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'For Everyone',
    description: 'Accessibility and inclusivity are built into our DNA. Software that works for all.',
    gradient: 'from-leaf-400 to-emerald-500',
  },
]

const stats = [
  { value: '6+', label: 'Products', icon: Code2 },
  { value: '50K+', label: 'Happy Users', icon: Users },
  { value: '100%', label: 'Privacy', icon: Shield },
  { value: '∞', label: 'Passion', icon: Heart },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200])

  useEffect(() => {
    if (heroRef.current) {
      anime({
        targets: heroRef.current.querySelectorAll('.animate-in'),
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(150),
        easing: 'easeOutExpo',
      })
    }
  }, [])

  useEffect(() => {
    if (isTimelineInView && timelineRef.current) {
      anime({
        targets: timelineRef.current.querySelectorAll('.timeline-item'),
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
      })
    }
  }, [isTimelineInView])

  useEffect(() => {
    if (isValuesInView && valuesRef.current) {
      anime({
        targets: valuesRef.current.querySelectorAll('.value-card'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
      })
    }
  }, [isValuesInView])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-fresa-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-leaf-200/30 rounded-full blur-3xl" />
        </motion.div>

        <div ref={heroRef} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Story */}
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="animate-in inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-fresa-600 text-sm font-semibold mb-6"
              >
                <Sparkles size={16} />
                Our Story
              </motion.span>

              <h1 className="animate-in text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Fresh ideas,
                <br />
                <span className="text-fresa-500">fresh</span>{' '}
                <span className="text-leaf-500">software</span>
              </h1>

              <div className="animate-in space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  <span className="font-semibold text-gray-900">&quot;Fresa&quot;</span> means
                  strawberry in Spanish — and just like a strawberry, our software
                  is{' '}
                  <span className="text-fresa-500 font-medium">simple</span>,{' '}
                  <span className="text-leaf-500 font-medium">natural</span>, and{' '}
                  <span className="text-amber-500 font-medium">delightful</span>.
                </p>
                <p>
                  We started FresaLabs with a mission: to build software that
                  respects your privacy and solves real problems. No tracking, no
                  bloat, no unnecessary complexity.
                </p>
              </div>

              <div className="animate-in flex items-center gap-4">
                <Link href="/products" className="btn-primary">
                  View Our Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="relative"
              >
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-fresa-200 rounded-2xl rotate-12 opacity-50" />
                <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-leaf-200 rounded-full opacity-50" />

                {/* Main card */}
                <div className="glass rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fresa-100/50 to-leaf-100/50" />
                  <div className="relative z-10 text-center">
                    <StrawberryLogo className="w-32 h-32 mx-auto mb-6 glow" animated={false} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      <span className="text-fresa-500">Fresa</span>
                      <span className="text-leaf-500">Labs</span>
                    </h3>
                    <p className="text-gray-600">Software for Everyone</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {stats.map((stat) => {
                        const Icon = stat.icon
                        return (
                          <motion.div
                            key={stat.label}
                            className="p-4 bg-white/50 rounded-2xl"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon className="w-6 h-6 text-fresa-500 mx-auto mb-2" />
                            <div className="text-2xl font-black text-gray-900">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50/50">
        <div ref={timelineRef} className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-leaf-600 text-sm font-semibold mb-6">
              <Coffee size={16} />
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Growing with{' '}
              <span className="text-leaf-500">purpose</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fresa-300 via-leaf-300 to-amber-300" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={item.year}
                    className={`timeline-item relative flex items-center opacity-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`ml-20 md:ml-0 md:w-1/2 ${
                        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow">
                        <span className={`text-${item.color}-500 font-bold text-sm`}>
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <motion.div
                        className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center border-4 border-white shadow-lg`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Icon className={`w-5 h-5 text-${item.color}-500`} />
                      </motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div ref={valuesRef} className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-amber-600 text-sm font-semibold mb-6">
              <Heart size={16} />
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our{' '}
              <span className="text-fresa-500">core</span>{' '}
              <span className="text-leaf-500">values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="value-card bento-card p-6 opacity-0"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-fresa-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Building for a{' '}
              <span className="text-fresa-400">better</span>{' '}
              <span className="text-leaf-400">web</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              In a world of data harvesting and bloated software, we choose a
              different path. Every product we build is a statement: great software
              can be private, simple, and delightful.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-fresa-50 transition-colors"
            >
              Join Our Mission
              <Rocket size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fresa-100/50 via-transparent to-leaf-100/50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Want to work with us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;re always looking for talented people who share our values
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <a
                  href="https://github.com/fresalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
