"use client";
import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/Header";

import { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPageLoaded(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-50 overflow-hidden">
      <Header />
      {/* Page transition overlay */}
      <div
        className={`absolute inset-0 bg-neutral-950  z-52 transition-all duration-700 ease-in-out ${
          pageLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <div className="relative mt-14 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-20 py-20 items-center">
        <div>
          <h1 className="relative text-neutral-950 text-6xl md:text-8xl font-extrabold mb-8">
            {/* Top slice */}
            <span className="block overflow-hidden leading-[1] relative">
              <span
                className={`block transform transition-transform duration-700 ease-in-out ${
                  pageLoaded ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                WHO
              </span>
            </span>
            {/* Bottom slice */}
            <span className="block overflow-hidden leading-[1] relative">
              <span
                className={`block transform transition-transform duration-700 ease-in-out delay-100 ${
                  pageLoaded ? "translate-y-0" : "translate-y-full"
                }`}
              >
                WE ARE
              </span>
            </span>
          </h1>

          <div
            className={`max-w-xl text-lg text-neutral-950 leading-relaxed transition-all duration-700 ease-in-out ${
              pageLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p>
              At Forzhen Studios, we’re committed to building premium digital
              experiences that help businesses and creators thrive. From
              beautifully crafted websites to innovative tools, we bring
              together design, functionality, and engineering excellence.
              Founded by Tevin Campbell (Troy), and Yashwanth Venkatesan (Yash).
              Our team is driven by creativity, ambition, and a shared vision of
              what technology can achieve. While our current focus is on
              delivering impactful software solutions, we are also laying the
              groundwork for future advancements in gaming and interactive
              technology. Forzhen Studios is more than a company — it’s a team
              dedicated to shaping the future of digital innovation.
            </p>
          </div>
        </div>
        {/* Scrapbook Image Section */}
        {/* Vision (top-right) → the future We are building
        Creativity (bottom-right) → how we craft it
        Performance (bottom-left) → the engineering power that delivers it */}
        <div
          className={`grid grid-cols-2 gap-5 transition-all duration-700 ease-in-out delay-200 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="w-80 h-52 rounded-xl shadow-lg transform rotate-[-1deg]"
            style={{
              background:
                "linear-gradient(220.55deg, #565656 0%, #181818 100%)",
            }}
          />
          <div
            className="w-80 h-52 rounded-xl shadow-lg transform rotate-[-2deg]"
            style={{
              background:
                "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)",
            }}
          />
          <div
            className="w-80 h-52 rounded-xl shadow-lg transform rotate-[3deg]"
            style={{
              background:
                "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)",
            }}
          />
          <div
            className="w-80 h-52 rounded-xl shadow-lg transform rotate-[1deg]"
            style={{
              background:
                "linear-gradient(220.55deg, #FFD439 0%, #FF7A00 100%)",
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
