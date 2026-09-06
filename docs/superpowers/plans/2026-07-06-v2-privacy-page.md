# Privacy Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/privacy` page to the v2 Next.js site that serves as a professional privacy policy page suitable for a WHOOP developer account application.

**Architecture:** Create a single new Next.js page at `v2/app/privacy/page.tsx` using the existing Header and Footer components. Add a "Privacy Policy" link to the Footer for discoverability. No new dependencies needed.

**Tech Stack:** Next.js 14 App Router, React, Tailwind CSS, Poppins font (via root layout)

---

### Task 1: Create the privacy page

**Files:**
- Create: `v2/app/privacy/page.tsx`

- [ ] **Step 1: Create `v2/app/privacy/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify the file was created correctly**

```bash
ls v2/app/privacy/page.tsx
```

Expected: file exists

---

### Task 2: Add Privacy Policy link to Footer

**Files:**
- Modify: `v2/components/Footer.tsx`

- [ ] **Step 1: Read current Footer**

Current content of `v2/components/Footer.tsx`:

```tsx
import React from 'react'
import Link from 'next/link';

export default function Footer() {
  const lastUpdatedDate = process.env.NEXT_PUBLIC_LAST_COMMIT_DATE || "Date Not Available";

  return (
    <footer className = "bg-white w-full flex flex-col container mb-10 p-4 mt-20 mx-auto">
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <p> &copy; Alan Wu {new Date().getFullYear()}</p>
          <p className="mt-2 md:mt-0">Feel free to contact me at <Link className="underline text-secondary" href="mailto:alan.lw25@gmail.com">alan.lw25@gmail.com</Link> or connect with me on <Link className="underline text-secondary" href="https://www.linkedin.com/in/alanlwu">Linkedin</Link></p>
        </div>
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <a target="_blank" className="mt-1 font-extralight underline" rel="noopener noreferrer" href="https://alan-w25-github-io.vercel.app/">Previous Version</a>
          <p className="mt-1 font-extralight">Last Updated: {lastUpdatedDate}</p>
        </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add Privacy Policy link to Footer**

Replace the second `<div>` block in the footer so the privacy link sits alongside the previous version link:

```tsx
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-row gap-4 mt-1">
            <a target="_blank" className="font-extralight underline" rel="noopener noreferrer" href="https://alan-w25-github-io.vercel.app/">Previous Version</a>
            <Link className="font-extralight underline" href="/privacy">Privacy Policy</Link>
          </div>
          <p className="mt-1 font-extralight">Last Updated: {lastUpdatedDate}</p>
        </div>
```

- [ ] **Step 3: Verify the full updated Footer looks correct**

Full updated `v2/components/Footer.tsx`:

```tsx
import React from 'react'
import Link from 'next/link';

export default function Footer() {
  const lastUpdatedDate = process.env.NEXT_PUBLIC_LAST_COMMIT_DATE || "Date Not Available";

  return (
    <footer className = "bg-white w-full flex flex-col container mb-10 p-4 mt-20 mx-auto">
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <p> &copy; Alan Wu {new Date().getFullYear()}</p>
          <p className="mt-2 md:mt-0">Feel free to contact me at <Link className="underline text-secondary" href="mailto:alan.lw25@gmail.com">alan.lw25@gmail.com</Link> or connect with me on <Link className="underline text-secondary" href="https://www.linkedin.com/in/alanlwu">Linkedin</Link></p>
        </div>
        <div className="container w-full flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-row gap-4 mt-1">
            <a target="_blank" className="font-extralight underline" rel="noopener noreferrer" href="https://alan-w25-github-io.vercel.app/">Previous Version</a>
            <Link className="font-extralight underline" href="/privacy">Privacy Policy</Link>
          </div>
          <p className="mt-1 font-extralight">Last Updated: {lastUpdatedDate}</p>
        </div>
    </footer>
  )
}
```

---

### Task 3: Verify build passes

**Files:** none

- [ ] **Step 1: Run Next.js build from v2 directory**

```bash
cd v2 && npm run build
```

Expected: Build completes with no errors. You should see `/privacy` listed in the route output.

- [ ] **Step 2: Confirm `/privacy` route appears in build output**

Look for a line like:
```
○ /privacy
```
in the build output. This confirms the page is statically generated and will be publicly accessible.
