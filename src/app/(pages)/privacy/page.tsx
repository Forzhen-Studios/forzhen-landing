"use client";

import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/Header";
import { useEffect, useRef, useState } from "react";

export default function PrivacyPolicyPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const progress = scrollTop / (documentHeight - windowHeight);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-28 bg-neutral-50 text-neutral-950 relative overflow-hidden">
      <Header />
      {/* Fixed progress indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-neutral-200 z-50">
        <div
          className="h-full bg-neutral-950 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Animated subtle background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-transparent to-neutral-100"
          style={{
            transform: `translateY(${scrollProgress * 100}px) scale(${
              1 + scrollProgress * 0.1
            })`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20"
      >
        <div
          className="mb-16 opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h1 className="text-3xl font-bold mb-4 text-neutral-950">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-600">Last Updated: Oct. 5, 2025</p>
        </div>

        <div className="space-y-12">
          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <p className="text-neutral-950 leading-relaxed text-lg">
              This Privacy Policy (&quot;Policy&quot;) describes how Forzhen
              Studios (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              collects, uses, discloses, and protects your personal information
              when you visit our pre-launch landing page (the &quot;Site&quot;)
              and submit your information to receive notifications about our
              upcoming official website launch. We are committed to protecting
              your privacy and ensuring the security of your personal
              information.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              1. Information We Collect
            </h2>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              1.1 Personal Information You Provide
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              When you submit the notification form on our Site, we collect the
              following personal information:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg mb-6">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Full name
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Email address
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              When you visit our Site, we may automatically collect certain
              technical information, including:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg mb-6">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                IP address
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Browser type and version
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Device type and operating system
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Date and time of access
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Pages viewed and links clicked
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Referring website or source
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              1.3 Cookies and Tracking Technologies
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg">
              We may use cookies, web beacons, and similar tracking technologies
              to collect information about your browsing activities. You can
              control cookies through your browser settings, though disabling
              cookies may affect Site functionality.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              2. How We Use Your Information
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To send you email notifications about the official launch of our
                website
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To provide you with updates, announcements, and information
                related to our services
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To improve and optimize our Site and user experience
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To analyze Site traffic and usage patterns
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To detect, prevent, and address technical issues or security
                threats
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To comply with legal obligations and enforce our Terms and
                Conditions
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                To respond to your inquiries and provide customer support
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              3. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              If you are located in the European Economic Area (EEA), our legal
              basis for collecting and using your personal information depends
              on the specific context:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Consent:</strong> You have given explicit consent for us
                to process your personal information for the specific purpose of
                receiving launch notifications.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Legitimate Interests:</strong> Processing is necessary
                for our legitimate interests in operating and improving our
                Site, provided these interests do not override your rights.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Legal Obligation:</strong> Processing is necessary to
                comply with applicable laws and regulations.
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              4. How We Share Your Information
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              We do not sell, rent, or trade your personal information. We may
              share your information only in the following limited
              circumstances:
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              4.1 Service Providers
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-6">
              We may share your information with trusted third-party service
              providers who assist us in operating our Site, conducting our
              business, or servicing you, including email service providers,
              analytics providers, and hosting services. These parties are
              contractually obligated to keep your information confidential and
              use it only for the purposes we specify.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              4.2 Legal Requirements
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-6">
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities (e.g., court
              orders, subpoenas, or government agencies).
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              4.3 Business Transfers
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-6">
              In the event of a merger, acquisition, reorganization, bankruptcy,
              or sale of assets, your information may be transferred as part of
              that transaction. We will notify you via email and/or a prominent
              notice on our Site of any change in ownership or use of your
              personal information.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              4.4 Protection of Rights
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg">
              We may disclose your information when we believe it is necessary
              to protect our rights, property, or safety, or the rights,
              property, or safety of others, including to enforce our Terms and
              Conditions.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              5. Data Security
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg mb-4">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Encryption of data in transit using SSL/TLS protocols
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Secure data storage with encryption at rest
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Regular security assessments and updates
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Limited access to personal information to authorized personnel
                only
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Regular backups to prevent data loss
              </li>
            </ul>
            <p className="text-neutral-950 leading-relaxed text-lg">
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              6. Data Retention
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required or permitted by law.
              Specifically, we will retain your email address and name until you
              unsubscribe from our notification list or request deletion, or
              until we have completed the launch notification process and a
              reasonable period thereafter. After this period, we will securely
              delete or anonymize your information.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              7. Your Privacy Rights
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              7.1 General Rights
            </h3>
            <ul className="space-y-3 text-neutral-950 text-lg mb-6">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Access:</strong> Request access to the personal
                information we hold about you
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Opt-Out:</strong> Unsubscribe from marketing
                communications at any time
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              7.2 GDPR Rights (EEA Residents)
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              If you are located in the EEA, you have additional rights under
              the General Data Protection Regulation (GDPR):
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg mb-6">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Data Portability:</strong> Request a copy of your data
                in a structured, machine-readable format
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Restriction of Processing:</strong> Request restriction
                of processing under certain circumstances
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Object to Processing:</strong> Object to processing
                based on legitimate interests
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Withdraw Consent:</strong> Withdraw consent at any time
                without affecting prior processing
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Lodge a Complaint:</strong> File a complaint with your
                local data protection authority
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-neutral-950">
              7.3 CCPA Rights (California Residents)
            </h3>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              If you are a California resident, you have rights under the
              California Consumer Privacy Act (CCPA):
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg mb-6">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Right to Know:</strong> Request information about the
                categories and specific pieces of personal information we
                collect
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Right to Delete:</strong> Request deletion of personal
                information
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Right to Opt-Out:</strong> Opt-out of the sale of
                personal information (we do not sell personal information)
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Non-Discrimination:</strong> Not be discriminated
                against for exercising your CCPA rights
              </li>
            </ul>

            <p className="text-neutral-950 leading-relaxed text-lg">
              To exercise any of these rights, please contact us at [EMAIL
              ADDRESS]. We will respond to your request within the timeframe
              required by applicable law (generally 30 days for GDPR requests
              and 45 days for CCPA requests).
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              8. International Data Transfers
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              data protection laws that are different from the laws of your
              country. When we transfer personal information from the EEA to
              other countries, we ensure appropriate safeguards are in place,
              such as Standard Contractual Clauses approved by the European
              Commission or other legally approved transfer mechanisms.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              Our Site is not intended for children under the age of 13 (or 16
              in the EEA). We do not knowingly collect personal information from
              children under these ages. If you are a parent or guardian and
              believe your child has provided us with personal information,
              please contact us immediately. If we become aware that we have
              collected personal information from a child under the applicable
              age without parental consent, we will take steps to delete that
              information.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              10. Third-Party Links
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              Our Site may contain links to third-party websites or services
              that are not owned or controlled by us. This Privacy Policy
              applies only to our Site. We are not responsible for the privacy
              practices of third-party websites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              11. Do Not Track Signals
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              Some web browsers incorporate a &quot;Do Not Track&quot; (DNT)
              feature that signals to websites you visit that you do not want to
              have your online activity tracked. Our Site does not currently
              respond to DNT signals or similar mechanisms.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will notify you by
              updating the &quot;Last Updated&quot; date at the top of this
              Policy and, where appropriate, provide additional notice (such as
              via email or a prominent notice on our Site). Your continued use
              of the Site after any changes constitutes your acceptance of the
              updated Policy. We encourage you to review this Policy
              periodically.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.7s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              13. Contact Us
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <p className="text-neutral-950 text-lg mb-2">
                <strong>Forzhen Studios</strong>
              </p>
              <p className="text-neutral-950 text-lg mb-2">
                Email: support@forzhenstudios.com
              </p>
              <p className="text-neutral-950 text-lg">
                {/* Add phone number when applicable */}
                {/* Phone: [PHONE NUMBER] (optional) */}
              </p>
            </div>
          </section>

          <section
            className="opacity-0 animate-fadeInUp mb-20"
            style={{ animationDelay: "1.9s", animationFillMode: "forwards" }}
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-950">
              15. Consent
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              By submitting your personal information through our Site, you
              consent to the collection, use, and disclosure of your information
              as described in this Privacy Policy. If you do not agree with this
              Policy, please do not use our Site or provide us with your
              personal information.
            </p>
          </section>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
