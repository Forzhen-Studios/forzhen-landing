"use client";

import Link from "next/link";
import LinkText from "./header/link-text";
import Logo from "./header/logo";
import { Circle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Define which routes should use dark logo (for white/light backgrounds)
  const darkLogoRoutes = ["/terms", "/privacy"];
  const useDarkLogo = darkLogoRoutes.includes(pathname);

  // Define text and border colors based on background
  const textColor = useDarkLogo ? "text-neutral-950" : "text-neutral-50";
  const borderColor = useDarkLogo ? "border-neutral-950" : "border-neutral-50";
  const hoverBg = useDarkLogo ? "hover:bg-neutral-950" : "hover:bg-neutral-50";
  const hoverText = useDarkLogo
    ? "hover:text-neutral-50"
    : "hover:text-neutral-950";
  const circleFill = useDarkLogo
    ? "group-hover:fill-neutral-50"
    : "group-hover:fill-neutral-950";

  return (
    <header className="w-full fixed top-0 flex items-center justify-between px-5 py-4 bg-none z-20">
      <Link href="/">
        <Logo />
      </Link>

      {/* About Us link */}
      <LinkText
        href="/about"
        className={`flex group items-center px-4 py-2 rounded-full border transition-colors duration-300 ${textColor} ${borderColor} ${hoverBg} ${hoverText}`}
      >
        <Circle
          className={`h-2 w-2 inline-block mr-2 duration-100 ease-in-out ${circleFill}`}
        />
        About Us
      </LinkText>
    </header>
  );
}
