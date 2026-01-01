'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
  onComplete?: () => void
}

export function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursor = true,
  onComplete,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let timeoutId: NodeJS.Timeout
    let index = 0

    const startTyping = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeoutId = setTimeout(startTyping, speed)
      } else {
        setIsComplete(true)
        onComplete?.()
      }
    }

    const delayTimeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(delayTimeout)
    }
  }, [text, speed, delay, isInView, onComplete])

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </span>
  )
}

// Terminal-style command display
interface TerminalCommandProps {
  command: string
  output?: string
  delay?: number
  className?: string
}

export function TerminalCommand({ command, output, delay = 0, className = '' }: TerminalCommandProps) {
  const [showOutput, setShowOutput] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-leaf-500">$</span>
        {isInView && (
          <TypingEffect
            text={command}
            speed={40}
            delay={delay}
            cursor={!showOutput}
            onComplete={() => setShowOutput(true)}
          />
        )}
      </div>
      {output && showOutput && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500 ml-4 mt-1"
        >
          {output}
        </motion.div>
      )}
    </div>
  )
}

// Simple code block with line-by-line animation (no syntax highlighting to keep it simple)
interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = 'javascript', className = '' }: CodeBlockProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const lines = code.split('\n')
  const ref = useRef<HTMLPreElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let lineIndex = 0
    const intervalId = setInterval(() => {
      if (lineIndex < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[lineIndex]])
        lineIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 150)

    return () => clearInterval(intervalId)
  }, [isInView, lines])

  return (
    <pre
      ref={ref}
      className={`glass rounded-xl p-6 overflow-x-auto font-mono text-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200/50">
        <div className="w-3 h-3 rounded-full bg-fresa-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-leaf-400" />
        <span className="text-gray-400 text-xs ml-2">{language}</span>
      </div>
      <code>
        {displayedLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex"
          >
            <span className="text-gray-400 w-8 shrink-0 select-none">{i + 1}</span>
            <span className="text-gray-700">{line || ' '}</span>
          </motion.div>
        ))}
        {displayedLines.length < lines.length && (
          <motion.span
            className="inline-block w-2 h-4 bg-fresa-400 ml-8"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        )}
      </code>
    </pre>
  )
}

// Terminal window component for displaying multiple commands
interface TerminalWindowProps {
  commands: Array<{ cmd: string; output?: string }>
  title?: string
  className?: string
}

export function TerminalWindow({ commands, title = 'terminal', className = '' }: TerminalWindowProps) {
  return (
    <div className={`glass rounded-xl overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/50 border-b border-gray-200/50">
        <div className="w-3 h-3 rounded-full bg-fresa-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-leaf-400" />
        <span className="text-gray-400 text-xs ml-2">{title}</span>
      </div>
      <div className="p-4 space-y-3">
        {commands.map((item, i) => (
          <TerminalCommand
            key={i}
            command={item.cmd}
            output={item.output}
            delay={i * 800}
          />
        ))}
      </div>
    </div>
  )
}
