"use client";
import { useEffect, useState, useRef } from "react";
import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/Header";
import { aboutCards } from "@/constants/aboutCards";
import { cardRotations } from "@/constants/aboutCards";
import AboutDescription from "./components/about-description";
import AboutTitle from "./components/about-title";

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
            <AboutTitle />

            <div className="text-neutral-200 text-left leading-relaxed">
              <AboutDescription />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <SpotlightCard className="flex-1 min-w-[250px] max-w-[400px] h-52">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/forzhenPromo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SpotlightCard>

            {aboutCards.map((card, index) => (
              <SpotlightCard
                key={index}
                className={`flex-1 min-w-[250px] max-w-[400px] h-52 ${
                  cardRotations[index % cardRotations.length]
                }`}
              >
                <h3 className="font-bold text-neutral-400 text-2xl md:text-4xl text-center">
                  {card.title}
                </h3>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

// Spotlight Card Component - Move to components
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative rounded-xl shadow-lg overflow-hidden border-2 border-neutral-700 flex flex-col items-center justify-center p-4 ${className}`}
    >
      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 169, 82, 0.09), transparent 40%)`,
            opacity: 1,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
