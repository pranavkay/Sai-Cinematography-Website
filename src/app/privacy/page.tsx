import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for saivaibhav.com — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cinema-950 text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-xs text-cinema-accent tracking-widest uppercase hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-white mt-8 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-white mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy describes how Sai Vaibhav (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
              protects information when you visit <strong>saivaibhav.com</strong> (the &ldquo;Site&rdquo;). By using the Site, you agree to
              the collection and use of information as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg text-white mt-6 mb-2">Analytics Data</h3>
            <p>
              We use Google Analytics to understand how visitors interact with the Site. Google Analytics collects
              information such as your IP address (anonymised), browser type, operating system, referring URLs,
              pages viewed, and time spent on the Site. This data is collected through cookies and is processed
              by Google. For more information, see{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cinema-accent hover:text-white">
                Google&apos;s Privacy Policy
              </a>.
            </p>

            <h3 className="text-lg text-white mt-6 mb-2">Contact Information</h3>
            <p>
              When you contact us through WhatsApp, phone, or email using the links provided on the Site,
              any information you share is governed by the respective platform&apos;s privacy policy
              (WhatsApp/Meta, Google, or your phone carrier). We do not collect or store contact form submissions
              on this Site as we do not have contact forms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">3. Cookies</h2>
            <p>
              The Site uses cookies for the following purposes:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>Google Analytics cookies</strong> — to measure site traffic and usage patterns.</li>
              <li><strong>Session cookies</strong> — used only for the administrative area of the Site and not set for regular visitors.</li>
            </ul>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling cookies will not affect your ability to view the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">4. Third-Party Services</h2>
            <p>The Site embeds or links to the following third-party services:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li><strong>YouTube</strong> — video embeds are loaded when you click to play a project video.</li>
              <li><strong>Google Calendar</strong> — the &ldquo;Book a Call&rdquo; button links to a Google Calendar scheduling page.</li>
              <li><strong>WhatsApp (Meta)</strong> — the WhatsApp button opens a chat with a pre-filled message.</li>
              <li><strong>Google Analytics</strong> — for anonymous usage statistics.</li>
            </ul>
            <p className="mt-3">
              Each of these services has its own privacy policy governing their data collection practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">5. Data Retention</h2>
            <p>
              Analytics data is retained according to Google Analytics&apos; default retention settings (14 months).
              We do not store any personal data on our servers. Uploaded content (images, videos) for the
              portfolio is stored on Cloudflare R2 and is used solely for displaying content on the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Opt out of Google Analytics tracking by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cinema-accent hover:text-white">
                  Google Analytics Opt-out Browser Add-on
                </a>.</li>
              <li>Disable cookies in your browser settings.</li>
              <li>Request information about any data we may hold about you.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">7. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
              <a href="mailto:saivaibhav49@gmail.com" className="text-cinema-accent hover:text-white">
                saivaibhav49@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
