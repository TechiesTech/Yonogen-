import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { Navbar } from "./Navbar";
import { CallbackModal } from "./Modals";

/**
 * Terms & Conditions page – matches site brand (purple/violet, Plus Jakarta Sans).
 * LEGAL DISCLAIMER: This is a template for informational purposes.
 * Please have it reviewed by a qualified legal professional before publishing.
 */
export const TermsAndConditionsPage: React.FC = () => {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMeta({
    title: "Terms & Conditions | YOLOgen Consultant",
    description: "Review the Terms and Conditions governing your use of YOLOgen Consultant's visa and migration consultancy services.",
    canonical: "https://yologen.in/terms-and-conditions",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Constant Top Navbar */}
      <Navbar onOpenCounselling={() => setCallbackModalOpen(true)} />

      {/* Hero band */}
      <div className="bg-gradient-to-br from-[#8408FC] to-[#5e09aa] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">Terms &amp; Conditions</h1>
          <p className="text-white/80 text-base sm:text-lg">
            Please read these terms carefully before using YOLOgen Consultant's services.
          </p>
          <p className="mt-3 text-sm text-white/60">
            Last updated: <time dateTime="2026-10-22">22 October 2026</time>
          </p>
        </div>
      </div>

      {/* Legal disclaimer banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 text-sm text-amber-800 max-w-3xl mx-auto mt-8 rounded-r-lg">
        <strong>⚠️ Template Notice:</strong> These Terms &amp; Conditions are a template and should
        be reviewed by a qualified legal professional before publishing. They may not cover all legal
        obligations applicable to your specific jurisdiction or business activities.
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-slate-700 leading-relaxed">

        <section aria-labelledby="tc-intro">
          <h2 id="tc-intro" className="text-2xl font-bold text-slate-900 mb-3">1. Introduction &amp; Acceptance</h2>
          <p>
            Welcome to <strong>YOLOgen Consultant</strong>, operated by Squad Services Pvt Ltd
            (CIN: U82199TS2026PTC210311) under the brand of Zenbeta Technologies Pvt. Ltd.
            ("YOLOgen", "we", "us", or "our").
          </p>
          <p className="mt-3">
            By accessing or using our website at{" "}
            <a href="https://yologen.in" className="text-[#8408FC] underline">yologen.in</a> or
            engaging our consultancy services, you ("User", "you") agree to be bound by these Terms
            &amp; Conditions. If you do not agree, please do not use our website or services.
          </p>
        </section>

        <section aria-labelledby="tc-acceptable-use">
          <h2 id="tc-acceptable-use" className="text-2xl font-bold text-slate-900 mb-3">2. Acceptable Use</h2>
          <p>You agree to use our website and services only for lawful purposes and in a manner that does not:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Violate any applicable local, national, or international law or regulation</li>
            <li>Transmit unsolicited commercial communications (spam)</li>
            <li>Attempt to gain unauthorised access to any part of the website or our systems</li>
            <li>Upload or transmit malicious code, viruses, or harmful software</li>
            <li>Misrepresent your identity or affiliation with any person or organisation</li>
            <li>Engage in any conduct that restricts or inhibits other users' enjoyment of the website</li>
            <li>Provide false or misleading information in any enquiry form or consultation</li>
          </ul>
        </section>

        <section aria-labelledby="tc-services">
          <h2 id="tc-services" className="text-2xl font-bold text-slate-900 mb-3">3. Nature of Services</h2>
          <p>
            YOLOgen Consultant provides visa guidance, consultancy, and documentation support services
            for study visas, work visas, visitor visas, business visas, and migration pathways.
          </p>
          <p className="mt-3">
            <strong>Important:</strong> YOLOgen Consultant is a consultancy service only. We do not
            guarantee visa approval, as all visa decisions rest solely with the relevant government
            authorities and immigration bodies of the destination country. Our services consist of
            guidance, application preparation, and support — not legal representation unless explicitly
            stated in a separate engagement agreement.
          </p>
        </section>

        <section aria-labelledby="tc-ip">
          <h2 id="tc-ip" className="text-2xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
          <p>
            All content on this website — including but not limited to text, graphics, logos, images,
            icons, and software — is the property of Squad Services Pvt Ltd / Zenbeta Technologies Pvt.
            Ltd. or its content suppliers and is protected by applicable Indian and international
            copyright and intellectual property laws.
          </p>
          <p className="mt-3">
            You may not reproduce, distribute, modify, transmit, display, publish, or otherwise use
            any content from this website without our prior written permission, except for personal,
            non-commercial use.
          </p>
        </section>

        <section aria-labelledby="tc-user-content">
          <h2 id="tc-user-content" className="text-2xl font-bold text-slate-900 mb-3">5. User-Submitted Content</h2>
          <p>
            When you submit information through our callback or enquiry forms, you confirm that:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>All information provided is accurate, complete, and not misleading</li>
            <li>You have the right to share such information with us</li>
            <li>You grant us permission to use that information to provide our services to you</li>
          </ul>
          <p className="mt-3">
            You retain ownership of any personal documents you provide. We will not use your
            documents for any purpose other than delivering the agreed service.
          </p>
        </section>

        <section aria-labelledby="tc-disclaimers">
          <h2 id="tc-disclaimers" className="text-2xl font-bold text-slate-900 mb-3">6. Disclaimers</h2>
          <p>
            Our website and services are provided on an "as is" and "as available" basis without
            any warranties, express or implied, including but not limited to warranties of merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
          <p className="mt-3">We do not warrant that:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>The website will be uninterrupted, error-free, or free of viruses</li>
            <li>Information on the website is always current, accurate, or complete</li>
            <li>Any visa application will be successful as a result of our guidance</li>
          </ul>
          <p className="mt-3">
            Immigration laws and visa requirements change frequently. Always verify the latest
            requirements with the official embassy or immigration authority of the destination country.
          </p>
        </section>

        <section aria-labelledby="tc-liability">
          <h2 id="tc-liability" className="text-2xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, YOLOgen Consultant, its directors,
            employees, agents, and partners shall not be liable for any:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, revenue, data, or goodwill</li>
            <li>Visa rejection or immigration authority decisions</li>
            <li>Losses arising from reliance on information on this website</li>
            <li>Service interruptions or data loss</li>
          </ul>
          <p className="mt-3">
            Our total aggregate liability to you for any cause shall not exceed the fees, if any,
            paid by you to YOLOgen Consultant in the three months immediately preceding the event
            giving rise to the claim.
          </p>
        </section>

        <section aria-labelledby="tc-links">
          <h2 id="tc-links" className="text-2xl font-bold text-slate-900 mb-3">8. Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites (WhatsApp, LinkedIn, Instagram,
            Facebook, YouTube, university portals, etc.). These links are provided for convenience
            only. We do not endorse, control, or take responsibility for the content, privacy
            practices, or terms of those external sites. Accessing them is entirely at your own risk.
          </p>
        </section>

        <section aria-labelledby="tc-termination">
          <h2 id="tc-termination" className="text-2xl font-bold text-slate-900 mb-3">9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our website and services, without
            notice, if we reasonably believe you have violated these Terms &amp; Conditions or
            applicable law. Upon termination, obligations that by their nature should survive will
            remain in effect, including sections on Intellectual Property, Disclaimers, and
            Limitation of Liability.
          </p>
        </section>

        <section aria-labelledby="tc-governing-law">
          <h2 id="tc-governing-law" className="text-2xl font-bold text-slate-900 mb-3">10. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws
            of <strong>India</strong>. Any disputes arising from or relating to these terms or
            your use of our services shall be subject to the exclusive jurisdiction of the courts
            located in <strong>Telangana, India</strong>.
          </p>
        </section>

        <section aria-labelledby="tc-changes">
          <h2 id="tc-changes" className="text-2xl font-bold text-slate-900 mb-3">11. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be
            effective immediately upon posting to this page with a revised "Last updated" date. Your
            continued use of the website after any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        <section aria-labelledby="tc-contact">
          <h2 id="tc-contact" className="text-2xl font-bold text-slate-900 mb-3">12. Contact Information</h2>
          <p>If you have any questions about these Terms &amp; Conditions, please contact:</p>
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
