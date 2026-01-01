'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs'
import {
  Mail,
  MessageSquare,
  Github,
  Sparkles,
  ArrowRight,
  Zap,
  Heart,
  Code2,
  Coffee,
  ExternalLink,
} from 'lucide-react'
import { StrawberryLogo } from '@/components/StrawberryLogo'

const contactReasons = [
  { id: 'general', label: 'General Inquiry', subject: 'General Inquiry' },
  { id: 'feedback', label: 'Product Feedback', subject: 'Product Feedback' },
  { id: 'bug', label: 'Report a Bug', subject: 'Bug Report' },
  { id: 'partnership', label: 'Partnership', subject: 'Partnership Inquiry' },
  { id: 'other', label: 'Something Else', subject: 'Hello from Website' },
]

const reasonIcons: Record<string, React.ElementType> = {
  general: MessageSquare,
  feedback: Heart,
  bug: Code2,
  partnership: Zap,
  other: Coffee,
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    reason: 'general',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

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

  const getMailtoLink = () => {
    const selectedReason = contactReasons.find(r => r.id === formState.reason)
    const subject = encodeURIComponent(selectedReason?.subject || 'Hello from Website')

    const bodyParts = []
    if (formState.name) {
      bodyParts.push(`Hi FresaLabs team,`)
      bodyParts.push('')
    }
    if (formState.message) {
      bodyParts.push(formState.message)
      bodyParts.push('')
    }
    if (formState.name) {
      bodyParts.push(`Best regards,`)
      bodyParts.push(formState.name)
    }

    const body = encodeURIComponent(bodyParts.join('\n'))

    return `mailto:admin@fresalabs.com?subject=${subject}&body=${body}`
  }

  const isFormValid = formState.message.trim().length > 0

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-fresa-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-leaf-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="animate-in inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-fresa-600 text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            Get in Touch
          </motion.div>

          <h1 className="animate-in text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Let&apos;s{' '}
            <span className="text-fresa-500">connect</span>
          </h1>

          <p className="animate-in text-xl text-gray-600 max-w-xl mx-auto">
            Have a question, feedback, or just want to say hi?
            We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Logo card */}
            <div className="glass rounded-3xl p-8 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <StrawberryLogo className="w-24 h-24 mx-auto mb-4 glow" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">
                <span className="text-fresa-500">Fresa</span>
                <span className="text-leaf-500">Labs</span>
              </h3>
              <p className="text-gray-600 mt-2">Software for Everyone</p>
            </div>

            {/* Direct contact */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-gray-900 mb-4">Reach Us Directly</h4>

              <a
                href="mailto:admin@fresalabs.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-fresa-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-fresa-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-500">admin@fresalabs.com</div>
                </div>
              </a>

              <a
                href="https://github.com/fresalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">GitHub</div>
                  <div className="text-sm text-gray-500">@fresalabs</div>
                </div>
              </a>
            </div>

            {/* Quick links */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'View Products', href: '/products' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Privacy Policy', href: '/privacy' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-gray-700">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fresa-500 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-gray-400">(optional)</span>
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-white/50 transition-all ${
                        focusedField === 'name'
                          ? 'border-fresa-400 ring-4 ring-fresa-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                {/* Reason selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What brings you here?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {contactReasons.map((reason) => {
                      const Icon = reasonIcons[reason.id]
                      const isSelected = formState.reason === reason.id
                      return (
                        <motion.button
                          key={reason.id}
                          type="button"
                          onClick={() =>
                            setFormState((prev) => ({ ...prev, reason: reason.id }))
                          }
                          className={`p-3 rounded-xl border-2 text-left transition-all ${
                            isSelected
                              ? 'border-fresa-400 bg-fresa-50 text-fresa-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className={`w-5 h-5 mb-1 ${isSelected ? 'text-fresa-500' : ''}`} />
                          <span className="text-sm font-medium">{reason.label}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-5 py-4 rounded-xl border-2 bg-white/50 transition-all resize-none ${
                        focusedField === 'message'
                          ? 'border-fresa-400 ring-4 ring-fresa-100'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us what's on your mind..."
                    />
                  </motion.div>
                </div>

                {/* Open Email Client button */}
                <motion.a
                  href={isFormValid ? getMailtoLink() : undefined}
                  onClick={(e) => {
                    if (!isFormValid) {
                      e.preventDefault()
                    }
                  }}
                  className={`w-full btn-primary py-4 text-lg justify-center flex items-center gap-2 ${
                    !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                >
                  <Mail size={20} />
                  Open Email Client
                  <ExternalLink size={16} className="ml-1 opacity-60" />
                </motion.a>

                {/* Help text */}
                <p className="text-center text-sm text-gray-500">
                  Clicking the button will open your email app with your message pre-filled.
                  {!isFormValid && (
                    <span className="block text-fresa-500 mt-1">
                      Please write a message first.
                    </span>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
