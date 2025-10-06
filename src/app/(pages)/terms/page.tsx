"use client";

import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/Header";
import { useEffect, useRef, useState } from "react";

export default function TermsPage() {
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
    <div className="min-h-screen pt-28 bg-white text-neutral-950 relative overflow-hidden">
      <Header />
      <div className="fixed top-0 left-0 w-full h-0.5 bg-neutral-200 z-50">
        <div
          className="h-full bg-neutral-950 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

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

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20"
      >
        <div
          className="mb-16 opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-neutral-950">
            Terms and Conditions
          </h1>
          <p className="text-xl text-neutral-600">Pre-Launch Notification</p>
          <p className="text-sm text-neutral-500 mt-2">
            Last Updated: Oct. 5, 2025
          </p>
        </div>

        <div className="space-y-12">
          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <p className="text-neutral-950 leading-relaxed text-lg">
              These Terms and Conditions constitute a legally binding agreement
              between you and Forzhen Studios governing your use of the
              pre-launch landing page and the submission of your personal
              information for the purpose of receiving notifications about the
              official release of our associated website, application, or
              service. By accessing, browsing, or using the Landing Page, or by
              submitting your personal information through any form on the Site,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms in their entirety.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              1. Definitions
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              For the purposes of these Terms, the following definitions apply:
            </p>
            <ul className="space-y-4 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Site Owner or Company</strong> refers to Forzhen
                Studios, organized under the laws of North Carolina.
                {/* Add address when aplicable */}
                {/* with its principal place of business at [ADDRESS]. */}
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>User</strong> refers to any individual who accesses,
                browses, or uses the Landing Page.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Personal Information</strong> refers to any information
                that identifies or can be used to identify an individual,
                including but not limited to name and email address.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                <strong>Official Site or Service</strong> refers to the website,
                application, platform, or service that will be officially
                launched.
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              2. Acceptance of Terms
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              By accessing or using the Landing Page you agree that:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                You have read and agree to be bound by these Terms and our
                Privacy Policy.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                You are at least 18 years of age or have parental consent.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                All information you provide is accurate and complete.
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                You will comply with all applicable laws and regulations.
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              3. Information Collected
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              We collect the following Personal Information:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Your full name
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Your email address
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              4. Purpose of Information Use
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              Your information will be used for:
            </p>
            <ul className="space-y-3 text-neutral-950 text-lg">
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Notifying you about the official launch
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Sending updates and announcements
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Responding to inquiries
              </li>
              <li className="pl-6 border-l-2 border-neutral-200 hover:border-neutral-950 transition-colors">
                Improving our services
              </li>
            </ul>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              5. No Guarantees
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg mb-4">
              Submission of your information does not guarantee any benefits,
              early access, or privileges. We make no guarantees regarding
              launch dates, features, or availability of the Official Site.
            </p>
            <p className="text-neutral-950 leading-relaxed text-lg">
              THE SITE IS PROVIDED AS IS WITHOUT WARRANTIES OF ANY KIND.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              6. Data Rights
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              You may withdraw consent and request removal from our notification
              list at any time by contacting us at support@forzhenstudios.com or using
              unsubscribe links in our emails.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              7. Limitation of Liability
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES
              ARISING FROM YOUR USE OF THE SITE. OUR TOTAL LIABILITY SHALL NOT
              EXCEED $100 USD.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              8. Changes to Terms
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting. Your continued use
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1.3s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              9. Governing Law
            </h2>
            <p className="text-neutral-950 leading-relaxed text-lg">
              These Terms shall be governed by the laws of North Carolina, United
              States. Any disputes shall be resolved in the courts of Wake County,
              North Carolina.
            </p>
          </section>

          <section
            className="opacity-0 animate-fadeInUp mb-20"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-950">
              10. Contact Information
            </h2>
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <p className="text-neutral-950 text-lg mb-2">
                <strong>Forzhen Studios</strong>
              </p>
              <p className="text-neutral-950 text-lg mb-2">
                Email: hello@forzhenstudios.com
              </p>
              <p className="text-neutral-950 text-lg">
                {/* Address: [PHYSICAL ADDRESS] */}
              </p>
            </div>

            <div className="bg-neutral-950 text-white p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
              <p className="text-lg leading-relaxed">
                BY SUBMITTING YOUR INFORMATION, YOU ACKNOWLEDGE THAT YOU HAVE
                READ AND AGREE TO THESE TERMS.
              </p>
            </div>
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
