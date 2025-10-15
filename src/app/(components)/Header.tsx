"use client";

import Link from "next/link";
import LinkText from "./header/link-text";
import Logo from "./header/logo";
import { Circle } from "lucide-react";
import { usePathname } from "next/navigation";
import useAnimationStore from "@/stores/useAnimationStore";
import { useTransitionRouter } from "next-view-transitions";

export default function Header() {
  const pathname = usePathname();
  const { exit, setExit } = useAnimationStore((state) => state);
  const router = useTransitionRouter();

  // Define which routes should use dark logo (for white/light backgrounds)
  const darkLogoRoutes = ["/terms", "/privacy"];
  const useDarkLogo = darkLogoRoutes.includes(pathname);
  const isAboutPage = pathname === "/about";

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

  console.log("Current pathname:", isAboutPage);

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (!href) return;
    if (href === pathname) return; // No transition if clicking the same page link
    if (exit) return; // Prevent multiple clicks

    setExit(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    router.push(href);
    setExit(false);
  };

  return (
    <header className="w-full fixed top-0 flex items-center justify-between px-5 py-4 bg-none z-20">
      <Link href="/" onClick={(e) => handleClick(e, "/")}>
        <Logo useDarkLogo={useDarkLogo} isAboutPage={isAboutPage} />
      </Link>

      {/* About Us link */}
      <LinkText
        href="/about"
        handleClick={handleClick}
        isAboutPage={isAboutPage}
        className={`flex group items-center px-4 py-2 rounded-full border transition-colors will-change-auto duration-300 ${textColor} ${borderColor} ${hoverBg} ${hoverText}`}
      >
        <Circle
          className={`h-2 w-2 inline-block mr-2 duration-100 ease-in-out ${circleFill}`}
        />
        About Us
      </LinkText>
    </header>
  );
}
