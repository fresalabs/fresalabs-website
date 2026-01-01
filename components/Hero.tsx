'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import anime from 'animejs'
import { Sparkles, Star, Code, Terminal } from 'lucide-react'
import { Strawberry3D } from './Strawberry3D'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotate3D = useTransform(scrollYProgress, [0, 1], [0, 10])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Animate the title words
    if (titleRef.current) {
      anime({
        targets: titleRef.current.querySelectorAll('.word'),
        translateY: [100, 0],
        opacity: [0, 1],
        rotateX: [90, 0],
        duration: 1400,
        delay: anime.stagger(120, { start: 500 }),
        easing: 'easeOutExpo',
      })
    }

    // Animate floating elements
    anime({
      targets: '.float-element',
      translateY: [-30, 30],
      rotate: [-5, 5],
      duration: 4000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(300),
    })

    // Terminal typing effect
    if (terminalRef.current) {
      const lines = terminalRef.current.querySelectorAll('.terminal-line')
      anime({
        targets: lines,
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: anime.stagger(200, { start: 2000 }),
        easing: 'easeOutExpo',
      })
    }
  }, [mounted])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb w-[600px] h-[600px] bg-fresa-300/40 -top-40 -left-40"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb w-[500px] h-[500px] bg-leaf-300/30 top-1/2 -right-40"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="orb w-[400px] h-[400px] bg-cream-300/50 -bottom-20 left-1/3"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-element absolute top-[15%] left-[10%]">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fresa-400 to-fresa-500 opacity-20 rotate-12" />
        </div>
        <div className="float-element absolute top-[25%] right-[15%]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-500 opacity-25" />
        </div>
        <div className="float-element absolute bottom-[30%] left-[8%]">
          <Star className="w-12 h-12 text-cream-400 opacity-40" fill="currentColor" />
        </div>
        <div className="float-element absolute top-[40%] right-[8%]">
          <Sparkles className="w-10 h-10 text-fresa-400 opacity-30" />
        </div>
        <div className="float-element absolute bottom-[20%] right-[20%]">
          <Code className="w-14 h-14 text-leaf-400 opacity-20" />
        </div>
        <div className="float-element absolute top-[60%] left-[20%]">
          <Terminal className="w-10 h-10 text-gray-400 opacity-25" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title */}
            <div ref={titleRef} className="mb-8 overflow-hidden" style={{ perspective: '1000px' }}>
              <div className="space-y-2">
                <div className="overflow-hidden">
                  <h1
                    className="word text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight opacity-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    Software
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <span
                    className="word inline-block text-3xl md:text-5xl lg:text-6xl font-light text-gray-400 tracking-wide opacity-0"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    for
                  </span>
                </div>
                <div className="overflow-hidden">
                  <h1
                    className="word text-5xl md:text-7xl lg:text-8xl font-black tracking-tight opacity-0 text-glow"
                    style={{
                      transformStyle: 'preserve-3d',
                      background: 'linear-gradient(135deg, #e85a4f 0%, #f28077 50%, #7ab87a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Everyone
                  </h1>
                </div>
              </div>
            </div>

            {/* Subtitle with glass effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-10"
            >
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We craft{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-fresa-500">beautiful</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-fresa-200/50 -z-10 rounded" />
                </span>
                ,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-leaf-500">privacy-first</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-leaf-200/50 -z-10 rounded" />
                </span>{' '}
                apps that solve real problems.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a href="#products" className="btn-primary magnetic group">
                <span className="flex items-center gap-2">
                  Explore Products
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
              <a
                href="https://github.com/fresalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary magnetic"
              >
                View on GitHub
              </a>
            </motion.div>

            {/* Terminal-style info */}
            <motion.div
              ref={terminalRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-10 glass rounded-xl p-4 max-w-md mx-auto lg:mx-0 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200/50">
                <div className="w-3 h-3 rounded-full bg-fresa-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-leaf-400" />
                <span className="text-gray-400 text-xs ml-2">fresalabs.sh</span>
              </div>
              <div className="space-y-1 text-gray-600">
                <div className="terminal-line opacity-0 flex items-center gap-2">
                  <span className="text-leaf-500">$</span>
                  <span>products.count()</span>
                  <span className="text-fresa-500">→ 6+</span>
                </div>
                <div className="terminal-line opacity-0 flex items-center gap-2">
                  <span className="text-leaf-500">$</span>
                  <span>users.total()</span>
                  <span className="text-fresa-500">→ 50K+</span>
                </div>
                <div className="terminal-line opacity-0 flex items-center gap-2">
                  <span className="text-leaf-500">$</span>
                  <span>privacy.level()</span>
                  <span className="text-fresa-500">→ 100%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Strawberry */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, type: 'spring' }}
            style={{ rotateY: rotate3D }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Glow effect behind strawberry */}
              <div className="absolute inset-0 bg-gradient-to-br from-fresa-300/40 via-transparent to-leaf-300/30 blur-3xl rounded-full scale-75" />

              {/* 3D Strawberry */}
              <Strawberry3D />

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-medium">
                  <span className="text-fresa-500">Fresa</span>
                  <span className="text-leaf-500">Labs</span>
                  <span className="text-gray-400 ml-2">• Fresh ideas, fresh software</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#products"
          className="flex flex-col items-center text-gray-400 hover:text-fresa-500 transition-colors magnetic"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs uppercase tracking-widest mb-3">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}
