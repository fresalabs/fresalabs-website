'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import anime from 'animejs'
import { Shield, Heart, Zap, Users, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data belongs to you. Our apps are built with privacy as a core principle, not an afterthought.',
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
    description: 'Great software should be intuitive and performant. No bloat, no complexity, just solutions.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'For Everyone',
    description: 'Accessibility and inclusivity are built into our DNA. Software that works for all.',
    gradient: 'from-leaf-400 to-emerald-500',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView && cardsRef.current) {
      anime({
        targets: cardsRef.current.querySelectorAll('.value-card'),
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
        easing: 'easeOutExpo',
      })
    }
  }, [isInView])

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-leaf-200/30 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fresa-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-leaf-600 text-sm font-semibold mb-6"
            >
              <Sparkles size={16} />
              About Us
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Building software
              <br />
              <span className="text-leaf-500">with purpose</span>
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              FresaLabs was born from a simple idea: software should solve real
              problems without compromising your privacy or cluttering your life.
            </p>

            <p className="text-gray-500 mb-10 leading-relaxed">
              Like a fresh strawberry — simple, natural, and delightful — our
              products are designed to be useful without being intrusive. We focus
              on creating tools that developers and everyday users actually need.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '6+', label: 'Products', color: 'fresa' },
                { value: '50K+', label: 'Users', color: 'leaf' },
                { value: '100%', label: 'Privacy', color: 'amber' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl glass"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-3xl md:text-4xl font-black text-${stat.color}-500`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Value Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="value-card bento-card p-6 opacity-0"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
