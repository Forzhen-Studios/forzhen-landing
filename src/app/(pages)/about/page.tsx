"use client";
import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
import useAnimationStore from "@/stores/useAnimationStore";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/footer";
import AboutTitle from "./components/about-title";
import AboutDescription from "./components/about-description";
import { aboutCards, cardRotations } from "@/constants/aboutCards";

export default function AboutUsPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const exit = useAnimationStore((state) => state.exit);
  // const router = useRouter();
  // const setExit = useAnimationStore((state) => state.setExit);

  // Entry animation
  useEffect(() => {
    const timeout = setTimeout(() => setPageLoaded(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 overflow-hidden">
      <Header />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-neutral-950 z-50 transition-opacity duration-700 ease-linear ${
          pageLoaded && !exit ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 py-24 md:py-38 px-8 md:px-20  items-center">
        <div className="gradient-glow">
          <AboutTitle />
          <div className="text-neutral-100 text-left leading-relaxed">
            <AboutDescription />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-[600px] mx-auto">
          {/* Other cards */}
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
  );
}

// SpotlightCard component - move to components
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
      className={`relative rounded-xl shadow-lg overflow-hidden border-2 border-neutral-700 flex flex-col items-center justify-center ${className}`}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 169, 82, 0.09), transparent 40%)`,
            opacity: 1,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
