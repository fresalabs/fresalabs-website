import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Navagraha — Privacy Policy — FresaLabs',
  description:
    'Privacy policy for the Navagraha app. Navagraha collects no personal data, works fully offline, and requires no account.',
}

export default function NavagrahaPrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-fresa-500 hover:text-fresa-600 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Navagraha — Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">Effective 12 July 2026</p>

        <div className="prose prose-lg prose-gray max-w-none">
          <div className="bg-leaf-50 border border-leaf-200 rounded-2xl p-6 mb-8">
            <p className="text-leaf-700 font-medium m-0">
              TL;DR: Navagraha collects no personal data, has no account or login,
              works fully offline, shows no ads, and never sends your information
              anywhere. Everything stays on your device.
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Navagraha is an offline-first devotional app for reading Navagraha
            stotras and keeping daily practices. We designed it so that your
            devotion stays entirely private to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>None.</strong> Navagraha does not collect, transmit, or store
            any personal information on any server. There is no account, no sign-in,
            and no user profile.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Data Stored on Your Device
          </h2>
          <p className="text-gray-600 mb-4">
            The following are stored only in the app&apos;s local storage on your
            device, and never leave it:
          </p>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>Your chosen reading script, theme and reading preferences</li>
            <li>Your daily routines and sankalpa (vow) progress and streaks</li>
            <li>Reminder times you set for your practices</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Uninstalling the app removes this data. You can also clear it anytime
            from <em>You → Reset all data</em> inside the app.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Notifications
          </h2>
          <p className="text-gray-600 mb-4">
            If you enable reminders, they are scheduled as <strong>local
            notifications</strong> on your device by Android. No push server is
            involved and no notification data is sent to us or any third party.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Network Use
          </h2>
          <p className="text-gray-600 mb-4">
            All stotra texts ship inside the app and are read offline. The app does
            not require an internet connection to function. Tapping a temple&apos;s
            &ldquo;Open in Maps&rdquo; simply hands the temple name to your maps app;
            Navagraha itself makes no network requests with your data.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            What We Never Do
          </h2>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>No analytics or usage tracking</li>
            <li>No advertising or ad identifiers</li>
            <li>No selling or sharing of data — there is no data to sell</li>
            <li>No accounts, no cloud sync, no third-party SDKs that collect data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Content &amp; Attribution
          </h2>
          <p className="text-gray-600 mb-4">
            All stotra texts are traditional and in the public domain, sourced from
            open repositories (Wikisource and others) and transliterated into each
            script. Deity images are public-domain works (Raja Ravi Varma and Ravi
            Varma Press). Temple details were cross-checked against public sources.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 mb-4">
            Navagraha collects no data from anyone, including children.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            If we add features that change how data is handled (for example, optional
            audio downloads in a future update), we will update this policy and note
            the effective date.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 mb-8">
            Questions about this policy? Email{' '}
            <a
              href="mailto:admin@fresalabs.com"
              className="text-fresa-500 hover:text-fresa-600"
            >
              admin@fresalabs.com
            </a>
            .
          </p>

          <p className="text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </div>
  )
}
