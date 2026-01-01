'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine'

export function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    loadSlim(window.tsParticles as Engine).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded
  }, [])

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 200,
          links: {
            opacity: 0.3,
            color: '#f87171',
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#f87171', '#22c55e', '#fecaca', '#bbf7d0'],
      },
      links: {
        color: '#f87171',
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.5,
        straight: false,
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 60,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle'],
      },
      size: {
        value: { min: 2, max: 6 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  )
}

// Seed-like particles specifically for strawberry theme
export function SeedParticles() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    loadSlim(window.tsParticles as Engine).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#fef3c7',
      },
      move: {
        direction: 'bottom',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: false,
        speed: 1,
        straight: false,
        gravity: {
          enable: true,
          acceleration: 0.5,
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 30,
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 4 },
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
    },
    detectRetina: true,
  }

  if (!init) {
    return null
  }

  return (
    <Particles
      id="seed-particles"
      options={options}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  )
}
