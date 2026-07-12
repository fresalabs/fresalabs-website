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
              TL;DR: Navagraha has no account or login and your practices stay on
              your device. We collect no personal data ourselves. The app does show
              ads (Google AdMob) on its browse screens — never while you are reading
              a stotra or doing japa — and the ad provider uses a device advertising
              identifier to serve them.
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Navagraha is an offline-first devotional app for reading Navagraha
            stotras and keeping daily practices. We designed it so that your
            devotion stays private to you, and the app is supported by ads shown
            outside of the reading experience.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>FresaLabs collects nothing.</strong> We do not operate any
            server, account or profile for Navagraha, and none of your practices,
            preferences or activity are sent to us.
          </p>
          <p className="text-gray-600 mb-4">
            The one exception is advertising: to keep the app free, Navagraha shows
            ads through Google AdMob. To serve and measure those ads, Google
            collects a device <strong>advertising identifier</strong> and standard
            technical data (such as device model, coarse region, and IP address).
            This is handled by Google, not by us — see the &ldquo;Advertising&rdquo;
            section below.
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
            Advertising
          </h2>
          <p className="text-gray-600 mb-4">
            Navagraha is free and supported by ads served through{' '}
            <strong>Google AdMob</strong>. To respect the reading experience, ads
            appear only on the browse screens (Today, Grahas, You) and occasionally
            at app open — <strong>never</strong> on a stotra reader screen or the
            japa counter.
          </p>
          <p className="text-gray-600 mb-4">
            To serve ads, Google may collect and process a device advertising ID and
            technical/usage data as described in{' '}
            <a href="https://policies.google.com/technologies/ads" className="text-fresa-500 hover:text-fresa-600" target="_blank" rel="noreferrer">
              Google&apos;s advertising policy
            </a>
            . We request non-personalised ads where possible. You can reset or delete
            your advertising ID, and limit ad personalisation, in your Android
            settings under <em>Settings → Privacy → Ads</em>.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            Network Use
          </h2>
          <p className="text-gray-600 mb-4">
            All stotra texts ship inside the app and are read offline; the reading
            experience needs no internet connection. The app connects to the network
            only to fetch ads. Tapping a temple&apos;s &ldquo;Open in Maps&rdquo;
            simply hands the temple name to your maps app.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">
            What We Never Do
          </h2>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>No accounts, no login, no cloud sync of your practices</li>
            <li>No first-party analytics or profiling by FresaLabs</li>
            <li>We never sell your data</li>
            <li>No ads or tracking on the reader or japa screens</li>
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
            Navagraha is a general-audience app and is not directed at children. We
            do not knowingly collect personal information from children, and request
            non-personalised ads where possible.
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
