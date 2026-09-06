import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Header currentUnderline="" />
      <div className="container mx-auto px-6 md:px-0 md:w-4/6 mt-12 mb-20 text-secondary">
        <h1 className="text-3xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: July 6, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-sm text-black leading-relaxed">
            This Privacy Policy describes how Alan Wu (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;my&rdquo;) collects, uses, and shares
            information when you use this website (alan-w25.github.io) and any associated applications
            or integrations, including those built with third-party APIs such as the WHOOP API.
            By using this site or any connected application, you agree to the practices described here.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Information I Collect</h2>
          <p className="text-sm text-black leading-relaxed mb-3">
            <strong>Usage Data:</strong> This website uses Google Analytics to collect anonymized usage
            data including pages visited, time on site, browser type, and general geographic location
            (country/city level). This data is used solely to understand how visitors interact with the
            site and to improve its content.
          </p>
          <p className="text-sm text-black leading-relaxed mb-3">
            <strong>Third-Party API Data:</strong> If you connect a third-party account (such as WHOOP)
            to any application I develop, I may access data made available through that API solely as
            authorized by you and as described by that application. I will only request the minimum
            permissions necessary to provide the application&apos;s functionality.
          </p>
          <p className="text-sm text-black leading-relaxed">
            <strong>Contact Information:</strong> If you contact me via email, I receive your email
            address and message content. This information is used only to respond to your inquiry.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How I Use Your Information</h2>
          <ul className="text-sm text-black leading-relaxed list-disc list-inside space-y-2">
            <li>To operate and improve this website and any associated applications</li>
            <li>To understand how users interact with my projects</li>
            <li>To respond to inquiries or support requests</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
          <p className="text-sm text-black leading-relaxed">
            I do not sell, trade, or rent your personal information to third parties. I do not share
            your data with any external parties except as required by law or as necessary to operate
            services (e.g., Google Analytics for site analytics). Any third-party service providers
            I use are bound by their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Third-Party API Usage (WHOOP)</h2>
          <p className="text-sm text-black leading-relaxed mb-3">
            Any application I build using the WHOOP API accesses your WHOOP data only with your
            explicit authorization via OAuth. Data retrieved through the WHOOP API is:
          </p>
          <ul className="text-sm text-black leading-relaxed list-disc list-inside space-y-2">
            <li>Used solely for the purpose described within the application</li>
            <li>Not stored beyond what is required for the application to function</li>
            <li>Not shared with any third parties</li>
            <li>Accessible for revocation at any time through your WHOOP account settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Cookies</h2>
          <p className="text-sm text-black leading-relaxed">
            This website uses cookies placed by Google Analytics for the purpose of analyzing site
            traffic. These cookies do not collect personally identifiable information. You may disable
            cookies in your browser settings; however, some features of the site may not function
            correctly as a result.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
          <p className="text-sm text-black leading-relaxed">
            Analytics data is retained according to Google Analytics&apos; default retention policies.
            If you contact me via email, I retain that correspondence only as long as necessary to
            resolve your inquiry. I do not retain any third-party API data beyond what is necessary
            for real-time application functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-sm text-black leading-relaxed">
            You have the right to access, correct, or request deletion of any personal data I may
            hold about you. To exercise these rights, please contact me at the email address below.
            If you have connected a third-party account, you can revoke access at any time through
            that platform&apos;s settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Security</h2>
          <p className="text-sm text-black leading-relaxed">
            I take reasonable measures to protect information transmitted to or collected by this
            site. However, no internet transmission is completely secure, and I cannot guarantee
            the absolute security of any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p className="text-sm text-black leading-relaxed">
            I may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated &ldquo;Last updated&rdquo; date. Continued use of this site after changes
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-sm text-black leading-relaxed">
            If you have any questions about this Privacy Policy, please contact me at{' '}
            <a href="mailto:alan.lw25@gmail.com" className="underline text-secondary">
              alan.lw25@gmail.com
            </a>.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
