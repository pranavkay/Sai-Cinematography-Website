import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for saivaibhav.com — rules governing the use of this website.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-cinema-950 text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-xs text-cinema-accent tracking-widest uppercase hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="font-serif text-4xl md:text-5xl text-white mt-8 mb-4">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>saivaibhav.com</strong> (the &ldquo;Site&rdquo;), you accept and agree to be bound
              by these Terms and Conditions. If you do not agree with any part of these terms, please do not
              use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">2. Intellectual Property</h2>
            <p>
              All content on this Site — including but not limited to videos, photographs, graphics, text, logos,
              and design elements — is the property of Sai Vaibhav or has been used with the permission of the
              respective rights holders. This content is protected by copyright and intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, display, perform, or otherwise use any content from
              this Site without prior written permission from Sai Vaibhav, except for personal, non-commercial
              viewing of the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">3. Portfolio Content</h2>
            <p>
              The videos and projects showcased on this Site are samples of professional work produced by or
              with the involvement of Sai Vaibhav. Some projects may have been produced for clients and are
              displayed with their permission. The inclusion of any brand name, logo, or trademark in portfolio
              content does not imply endorsement by those brands.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">4. Third-Party Links</h2>
            <p>
              The Site contains links to third-party websites and services, including YouTube, Instagram,
              Google Calendar, WhatsApp, and social media platforms. We are not responsible for the content,
              privacy practices, or terms of service of these external sites. Accessing third-party links is
              at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">5. Use of the Site</h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Use the Site for any unlawful purpose.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its systems.</li>
              <li>Download, copy, or re-distribute portfolio content without permission.</li>
              <li>Use automated tools (scrapers, bots) to extract content from the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">6. Disclaimer</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind, either express or
              implied. Sai Vaibhav does not warrant that the Site will be uninterrupted, error-free, or free
              of harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sai Vaibhav shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of or inability
              to use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">8. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date. Continued use of the Site after changes constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising from the use of this Site shall be subject to the exclusive
              jurisdiction of the courts in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white mb-4">10. Contact</h2>
            <p>
              For questions about these Terms, contact us at:{" "}
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
