"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  
  // Define which routes should use dark text (for white/light backgrounds)
  const whiteBackgroundRoutes = ['/terms', '/privacy'];
  const isDarkText = whiteBackgroundRoutes.includes(pathname);
  
  // Define colors based on background
  const textColor = isDarkText ? 'text-neutral-950' : 'text-neutral-200';
  const hoverColor = isDarkText ? 'hover:text-neutral-600' : 'hover:text-neutral-500';
  
  const ref = useLinesAnimation({
    type: "lines",
    duration: 1,
    stagger: 0,
    opacity: 0,
    ease: "power3.out",
    y: 100,
    targets: ".footer-target",
    delay: 1.5,
  });

  return (
    <footer
      ref={ref}
      className={`lg:fixed flex flex-col sm:flex-row text-xs items-center bottom-0 left-0 right-0 justify-between py-2 px-5 ${textColor}`}
    >
      <p className="footer-target">
        &copy; {new Date().getFullYear()} Forzhen Studios. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <Link
          href="/privacy"
          className={`footer-target transition-colors ${hoverColor}`}
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className={`footer-target transition-colors ${hoverColor}`}
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;