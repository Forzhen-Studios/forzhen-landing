"use client";
import { useEffect, useState } from "react";
import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/Header";



export default function AboutUsPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPageLoaded(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-neutral-950 overflow-hidden">
        <Header />
        {/* Page transition overlay */}
        <div
          className={`absolute inset-0 bg-neutral-950 z-50 transition-all duration-700 ease-in-out ${
            pageLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />

        <div className="relative mt-14 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-20 py-20 items-center">
          <div className="gradient-glow">
            <h1 className="relative text-neutral-50 text-6xl md:text-8xl font-extrabold mb-8">
              <span className="block leading-[1]">WHO</span>
              <span className="block leading-[1]">WE ARE</span>
            </h1>

            <div className="text-neutral-200 leading-relaxed">
              <p>
                At Forzhen Studios, we&apos;re committed to building premium digital
                experiences that help businesses and creators thrive. From
                beautifully crafted websites to innovative tools, we bring
                together design, functionality, and engineering excellence.
                Founded by Tevin Campbell (Troy), and Yashwanth Venkatesan (Yash).
                Our team is driven by creativity, ambition, and a shared vision of
                what technology can achieve. While our current focus is on
                delivering impactful software solutions, we are also laying the
                groundwork for future advancements in gaming and interactive
                technology. Forzhen Studios is more than a company — it&apos;s a team
                dedicated to shaping the future of digital innovation.
              </p>
            </div>
          </div>

          {/* Scrapbook Image Section with Gradient Borders */}
          <div
            className={`grid grid-cols-2 gap-5 transition-all duration-700 ease-in-out delay-200 ${
              pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="card-1 w-80 h-52 rounded-xl shadow-lg overflow-hidden border-2 border-neutral-700">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-fill"
              >
                <source src="/forzhenPromo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="card-2 w-80 h-52 border-2 border-neutral-700 rounded-xl shadow-lg flex items-center justify-center">
              <h3 className="font-bold text-neutral-500 text-4xl">VISION</h3>
            </div>

            <div className="card-3 w-80 h-52 border-2 border-neutral-700 rounded-xl shadow-lg flex items-center justify-center">
              <h3 className="font-bold text-neutral-500 text-4xl">CREATIVITY</h3>
            </div>

            <div className="card-4 w-80 h-52 border-2 border-neutral-700 rounded-xl shadow-lg flex items-center justify-center">
              <h3 className="font-bold text-neutral-500 text-4xl">PERFORMANCE</h3>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}