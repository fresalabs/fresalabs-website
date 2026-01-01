import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — FresaLabs',
  description: 'Terms of service for FresaLabs products and services.',
}

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            By using FresaLabs products and services, you agree to these terms.
            We&apos;ve tried to keep them as simple and fair as possible.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Using Our Services
          </h2>
          <p className="text-gray-600 mb-4">
            You may use our services as long as you:
          </p>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>Follow applicable laws and regulations</li>
            <li>Don&apos;t use our services to harm others</li>
            <li>Don&apos;t attempt to disrupt or compromise our systems</li>
            <li>Respect the intellectual property rights of others</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Open Source Software
          </h2>
          <p className="text-gray-600 mb-4">
            Many of our products are open source and available on GitHub. These
            projects are licensed under their respective open source licenses
            (typically MIT), which govern their use and redistribution.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Your Content
          </h2>
          <p className="text-gray-600 mb-4">
            Any content you create using our tools remains yours. We don&apos;t claim
            ownership over forms you create with Sleek Form, CSS you inspect with
            CSS Spider, or text you copy with ClipboardX.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Service Availability
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to keep our services available and reliable, but we can&apos;t
            guarantee 100% uptime. Our web services may occasionally be
            unavailable for maintenance or due to circumstances beyond our control.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            Our services are provided &quot;as is&quot; without warranties of any kind.
            To the fullest extent permitted by law, FresaLabs shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We may update these terms from time to time. We&apos;ll notify you of
            significant changes by posting the new terms on this page. Continued
            use of our services after changes constitutes acceptance of the new
            terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 mb-8">
            Questions about these terms? Contact us at{' '}
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
