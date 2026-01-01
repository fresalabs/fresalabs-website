'use client'

import { motion } from 'framer-motion'

interface StrawberryLogoProps {
  className?: string
  animated?: boolean
}

export function StrawberryLogo({ className = 'w-12 h-12', animated = true }: StrawberryLogoProps) {
  const Wrapper = animated ? motion.svg : 'svg'
  const wrapperProps = animated
    ? {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, ease: 'easeOut' },
      }
    : {}

  return (
    <Wrapper
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...wrapperProps}
    >
      {/* Leaves */}
      <motion.g
        initial={animated ? { y: -10, opacity: 0 } : undefined}
        animate={animated ? { y: 0, opacity: 1 } : undefined}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {/* Center leaf */}
        <path
          d="M50 5 C50 5, 45 20, 50 30 C55 20, 50 5, 50 5"
          fill="#7ab87a"
          className="drop-shadow-sm"
        />
        {/* Left leaf */}
        <path
          d="M35 15 C30 10, 25 15, 30 25 C35 30, 45 28, 45 28 C40 20, 35 15, 35 15"
          fill="#5a9d5a"
          className="drop-shadow-sm"
        />
        {/* Right leaf */}
        <path
          d="M65 15 C70 10, 75 15, 70 25 C65 30, 55 28, 55 28 C60 20, 65 15, 65 15"
          fill="#7ab87a"
          className="drop-shadow-sm"
        />
        {/* Far left leaf */}
        <path
          d="M25 22 C18 18, 12 22, 18 32 C24 38, 38 32, 38 32 C30 26, 25 22, 25 22"
          fill="#a8d1a8"
          className="drop-shadow-sm"
        />
        {/* Far right leaf */}
        <path
          d="M75 22 C82 18, 88 22, 82 32 C76 38, 62 32, 62 32 C70 26, 75 22, 75 22"
          fill="#a8d1a8"
          className="drop-shadow-sm"
        />
      </motion.g>

      {/* Strawberry body */}
      <motion.path
        d="M50 30
           C20 35, 10 60, 15 80
           C20 100, 35 115, 50 115
           C65 115, 80 100, 85 80
           C90 60, 80 35, 50 30"
        fill="url(#strawberryGradient)"
        initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
        animate={animated ? { scale: 1, opacity: 1 } : undefined}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="drop-shadow-lg"
      />

      {/* Seeds */}
      <motion.g
        initial={animated ? { opacity: 0 } : undefined}
        animate={animated ? { opacity: 1 } : undefined}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {[
          { cx: 35, cy: 50 },
          { cx: 50, cy: 45 },
          { cx: 65, cy: 50 },
          { cx: 30, cy: 65 },
          { cx: 45, cy: 60 },
          { cx: 60, cy: 62 },
          { cx: 70, cy: 68 },
          { cx: 35, cy: 80 },
          { cx: 50, cy: 75 },
          { cx: 65, cy: 82 },
          { cx: 42, cy: 92 },
          { cx: 58, cy: 95 },
        ].map((seed, i) => (
          <ellipse
            key={i}
            cx={seed.cx}
            cy={seed.cy}
            rx="3"
            ry="4"
            fill="#f7e3a3"
            transform={`rotate(${(i * 15) % 30 - 15} ${seed.cx} ${seed.cy})`}
          />
        ))}
      </motion.g>

      {/* Gradient definition */}
      <defs>
        <linearGradient id="strawberryGradient" x1="50" y1="30" x2="50" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f28077" />
          <stop offset="50%" stopColor="#e85a4f" />
          <stop offset="100%" stopColor="#d43d32" />
        </linearGradient>
      </defs>
    </Wrapper>
  )
}
