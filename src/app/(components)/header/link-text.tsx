"use client";

import useFadeAnimation from "@/hooks/useFadeAnimation";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

const LinkText = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const ref = useFadeAnimation();
  const router = useTransitionRouter();
  return (
    <Link
      ref={ref}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      className="flex group items-center px-4 py-2 rounded-full text-neutral-950 border border-neutral-950
         hover:bg-neutral-950 hover:text-neutral-50 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default LinkText;
