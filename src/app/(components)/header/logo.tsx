"use client";

import Image from "next/image";
import useFadeAnimation from "@/hooks/useFadeAnimation";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  // Define which routes should use dark logo (for white/light backgrounds)
  const darkLogoRoutes = ["/terms", "/privacy"];
  const useDarkLogo = darkLogoRoutes.includes(pathname);
  const ref = useFadeAnimation();
  return (
    <Image
      ref={ref}
      src="/studio_logo_white.png"
      alt="Forzhen Studios Logo"
      width={49}
      height={49}
      className="cursor-pointer"
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
};

export default Logo;
