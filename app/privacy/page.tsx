import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — FresaLabs',
  description: 'Privacy policy for FresaLabs products and services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-fresa-500 hover:text-fresa-600 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            At FresaLabs, we believe your privacy is a fundamental right. This
            policy explains how we handle your information across all our products.
          </p>

          <div className="bg-leaf-50 border border-leaf-200 rounded-2xl p-6 mb-8">
            <p className="text-leaf-700 font-medium m-0">
              TL;DR: We collect minimal data, never sell your information, and
              give you full control over your data.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We only collect information that is necessary to provide our services:
          </p>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>
              <strong>Analytics data:</strong> Anonymous usage statistics to help
              us improve our products (page views, feature usage)
            </li>
            <li>
              <strong>Contact information:</strong> If you reach out to us via
              email, we store your communication to respond effectively
            </li>
            <li>
              <strong>Error reports:</strong> Crash and error data to fix bugs
              (no personal information included)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            What We Don&apos;t Do
          </h2>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>We never sell your data to third parties</li>
            <li>We don&apos;t track you across websites</li>
            <li>We don&apos;t use invasive advertising technologies</li>
            <li>We don&apos;t share your information without your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Product-Specific Privacy
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
            Sleek Form
          </h3>
          <p className="text-gray-600 mb-4">
            Sleek Form is a React component library that runs entirely in your
            application. We do not receive or store any form data you collect.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
            CSS Spider
          </h3>
          <p className="text-gray-600 mb-4">
            CSS Spider operates locally within your browser. CSS values you inspect
            are never transmitted to our servers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
            ClipboardX
          </h3>
          <p className="text-gray-600 mb-4">
            ClipboardX stores all clipboard history locally on your device. Your
            clipboard content is never sent to our servers.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>Access any data we have about you</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics collection</li>
            <li>Export your data in a portable format</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            If you have questions about this privacy policy or want to exercise
            your rights, please contact us at{' '}
            <a
              href="mailto:admin@fresalabs.com"
              className="text-fresa-500 hover:text-fresa-600"
            >
              admin@fresalabs.com
            </a>
          </p>

          <p className="text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )
}
