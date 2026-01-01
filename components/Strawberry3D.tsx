'use client'

import { motion } from 'framer-motion'
import { StrawberryLogo } from './StrawberryLogo'

// Animated 2D strawberry with 3D-like effects
// Note: Full 3D version requires additional TypeScript configuration for React Three Fiber
export function Strawberry3D() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
      {/* Glow layers */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-fresa-300/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-leaf-300/20 blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main strawberry with animations */}
      <motion.div
        className="relative z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Shadow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/10 rounded-full blur-lg"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* The strawberry */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <StrawberryLogo className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl" animated={false} />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: i % 3 === 0 ? '#fecaca' : i % 3 === 1 ? '#bbf7d0' : '#fef3c7',
            left: `${20 + (i * 5)}%`,
            top: `${30 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}
