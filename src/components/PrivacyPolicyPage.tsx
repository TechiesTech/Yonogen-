import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Navbar } from "./Navbar";
import { CallbackModal } from "./Modals";

/**
 * Privacy Policy page – matches site brand (purple/violet, Plus Jakarta Sans).
 * LEGAL DISCLAIMER: This is a template for informational purposes.
 * Please have it reviewed by a qualified legal professional before publishing.
 */
export const PrivacyPolicyPage: React.FC = () => {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: "Privacy Policy | YOLOgen Consultant",
    description: "Read YOLOgen Consultant's Privacy Policy to understand how we collect, use, and protect your personal data in compliance with India's DPDPA.",
    canonical: "https://yologen.in/privacy-policy",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Constant Top Navbar */}
      <Navbar onOpenCounselling={() => setCallbackModalOpen(true)} />

      {/* Hero band */}
      <div className="bg-gradient-to-br from-[#8408FC] to-[#5e09aa] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-white/80 text-base sm:text-lg">
            How YOLOgen Consultant collects, uses, and protects your personal data.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Last updated: <time dateTime="2026-10-22">22 October 2026</time>
          </p>
        </div>
      </div>

      {/* Legal disclaimer banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 text-sm text-amber-800 max-w-3xl mx-auto mt-8 rounded-r-lg">
        <strong>⚠️ Template Notice:</strong> This Privacy Policy is a template and should be reviewed
        by a qualified legal professional before publishing. It may not cover all legal obligations
        applicable to your specific jurisdiction or business activities.
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-slate-700 leading-relaxed">

        <section aria-labelledby="pp-intro">
          <h2 id="pp-intro" className="text-2xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
          <p>
            YOLOgen Consultant is a visa and migration consultancy service operated by{" "}
            <strong>Squad Services Pvt Ltd</strong> (CIN: U82199TS2026PTC210311), a company
            incorporated in India, under the brand of Zenbeta Technologies Pvt. Ltd.
          </p>
          <p className="mt-3">
            <strong>Registered Address:</strong> India<br />
            <strong>General Enquiries:</strong>{" "}
            <a href="mailto:contact@yologen.in" className="text-[#8408FC] underline hover:text-[#5e09aa]">
              contact@yologen.in
            </a><br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+919703962596" className="text-[#8408FC] underline hover:text-[#5e09aa]">
              +91 97039 62596
            </a>
          </p>
        </section>

        <section aria-labelledby="pp-data">
          <h2 id="pp-data" className="text-2xl font-bold text-slate-900 mb-3">2. Data We Collect</h2>
          <p>When you interact with our website or contact us, we may collect:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Identity data:</strong> full name</li>
            <li><strong>Contact data:</strong> phone number, email address</li>
            <li><strong>Enquiry data:</strong> preferred visa category, preferred callback time, destination country of interest</li>
            <li><strong>Usage data:</strong> pages visited, time on site, referral URL, browser type, device type — collected automatically via server logs</li>
            <li><strong>Communications:</strong> records of WhatsApp, email, or phone contact you initiate</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect payment card details, government ID numbers, or passport
            details through this website. Such documents, if required, are collected only in person or
            via secure, encrypted channels.
          </p>
        </section>

        <section aria-labelledby="pp-how">
          <h2 id="pp-how" className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>To respond to your callback or counselling enquiry</li>
            <li>To provide visa and migration consultancy services</li>
            <li>To send service-related updates (e.g., visa deadlines, intake reminders) — only with your consent</li>
            <li>To improve our website and services through aggregated analytics</li>
            <li>To comply with applicable legal obligations</li>
          </ul>
          <p className="mt-3">
            We will not sell, rent, or trade your personal data to third parties for marketing purposes.
          </p>
        </section>

        <section aria-labelledby="pp-legal-basis">
          <h2 id="pp-legal-basis" className="text-2xl font-bold text-slate-900 mb-3">4. Legal Basis for Processing (DPDPA / GDPR)</h2>
          <p>We process your data on the following grounds:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Consent:</strong> when you submit our callback form or contact us voluntarily</li>
            <li><strong>Legitimate interest:</strong> to respond to your enquiries and improve our services</li>
            <li><strong>Legal obligation:</strong> when required by Indian law or regulatory authorities</li>
          </ul>
        </section>

        <section aria-labelledby="pp-cookies">
          <h2 id="pp-cookies" className="text-2xl font-bold text-slate-900 mb-3">5. Cookies &amp; Analytics</h2>
          <p>
            Our website currently does <strong>not</strong> use tracking cookies or third-party analytics
            tools (e.g., Google Analytics). We do use:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Google Fonts</strong> — loads font files from Google's CDN. Google may log the request; see <a href="https://policies.google.com/privacy" className="text-[#8408FC] underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</li>
            <li><strong>Cloudinary</strong> — serves images from Cloudinary's CDN. See <a href="https://cloudinary.com/privacy" className="text-[#8408FC] underline" target="_blank" rel="noopener noreferrer">Cloudinary's Privacy Policy</a>.</li>
            <li><strong>Google Apps Script</strong> — our callback form submissions are sent to a Google Apps Script endpoint and stored in Google Sheets. This data is protected under Google's data processing terms.</li>
          </ul>
          <p className="mt-3">
            If we add analytics or advertising cookies in the future, we will update this policy and
            show a cookie consent banner before setting any non-essential cookies.
          </p>
        </section>

        <section aria-labelledby="pp-third-party">
          <h2 id="pp-third-party" className="text-2xl font-bold text-slate-900 mb-3">6. Third-Party Services</h2>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>WhatsApp (Meta):</strong> clicking our WhatsApp link opens WhatsApp. Any data you share via WhatsApp is subject to Meta's privacy policy.</li>
            <li><strong>Social Media:</strong> links to LinkedIn, Instagram, Facebook, and YouTube are provided for information only. We are not responsible for those platforms' privacy practices.</li>
            <li><strong>Google Apps Script:</strong> form submission data (name, phone, email, visa preference) is stored in a Google Sheet accessible only to authorised YOLOgen staff.</li>
          </ul>
        </section>

        <section aria-labelledby="pp-retention">
          <h2 id="pp-retention" className="text-2xl font-bold text-slate-900 mb-3">7. Data Retention</h2>
          <p>
            We retain personal data submitted via our callback form for a maximum of{" "}
            <strong>3 years</strong> from the date of submission, or until you request deletion,
            whichever is earlier. Data is then securely deleted or anonymised.
          </p>
          <p className="mt-3">
            Aggregated, anonymised analytics data may be retained indefinitely as it cannot identify you.
          </p>
        </section>

        <section aria-labelledby="pp-rights">
          <h2 id="pp-rights" className="text-2xl font-bold text-slate-900 mb-3">8. Your Rights</h2>
          <p>Under applicable law (including India's Digital Personal Data Protection Act 2023), you have the right to:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> ask us to correct inaccurate or incomplete data</li>
            <li><strong>Erasure (Right to be Forgotten):</strong> request deletion of your data</li>
            <li><strong>Withdraw consent:</strong> at any time where processing is based on consent</li>
            <li><strong>Grievance redressal:</strong> lodge a complaint with our data protection officer or with the Data Protection Board of India</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:contact@yologen.in" className="text-[#8408FC] underline hover:text-[#5e09aa]">
              contact@yologen.in
            </a>{" "}
            with the subject line "Data Rights Request". We will respond within 30 days.
          </p>
        </section>

        <section aria-labelledby="pp-children">
          <h2 id="pp-children" className="text-2xl font-bold text-slate-900 mb-3">9. Children's Privacy</h2>
          <p>
            Our services are not directed at children under 18. We do not knowingly collect personal
            data from minors. If you believe we have inadvertently collected data from a child, please
            contact us immediately at{" "}
            <a href="mailto:contact@yologen.in" className="text-[#8408FC] underline hover:text-[#5e09aa]">
              contact@yologen.in
            </a>.
          </p>
        </section>

        <section aria-labelledby="pp-security">
          <h2 id="pp-security" className="text-2xl font-bold text-slate-900 mb-3">10. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal data
            against unauthorised access, loss, or destruction. Our website is served over HTTPS, and
            form data is transmitted to Google's infrastructure over encrypted connections.
          </p>
          <p className="mt-3">
            However, no internet transmission is 100% secure. We encourage you not to share sensitive
            documents (passport, ID) via our website contact form.
          </p>
        </section>

        <section aria-labelledby="pp-changes">
          <h2 id="pp-changes" className="text-2xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            "Last updated" date at the top of this page. We encourage you to review this page periodically.
            Continued use of the website after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section aria-labelledby="pp-contact">
          <h2 id="pp-contact" className="text-2xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact:</p>
          <address className="mt-3 not-italic space-y-1 text-slate-700">
            <p><strong>YOLOgen Consultant</strong></p>
            <p>Squad Services Pvt Ltd / Zenbeta Technologies Pvt. Ltd.</p>
            <p>Email: <a href="mailto:contact@yologen.in" className="text-[#8408FC] underline">contact@yologen.in</a></p>
            <p>Phone: <a href="tel:+919703962596" className="text-[#8408FC] underline">+91 97039 62596</a></p>
          </address>
        </section>
      </main>

      {/* Footer mini */}
      <div className="border-t border-violet-200 bg-[#f3e8ff] py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Zenbeta Technologies Pvt. Ltd. All rights reserved. ·{" "}
          <Link to="/privacy-policy" className="hover:text-[#8408FC] underline">Privacy Policy</Link> ·{" "}
          <Link to="/terms-and-conditions" className="hover:text-[#8408FC] underline">Terms &amp; Conditions</Link>
        </p>
      </div>

      {callbackModalOpen && (
        <CallbackModal
          isOpen={callbackModalOpen}
          onClose={() => setCallbackModalOpen(false)}
        />
      )}
    </div>
  );
};
