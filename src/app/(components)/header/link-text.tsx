"use client";

import useFadeAnimation from "@/hooks/useFadeAnimation";
import Link from "next/link";

const LinkText = ({
  href,
  children,
  className,
  isAboutPage,
  handleClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  isAboutPage: boolean;
  handleClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => void;
}) => {
  const ref = useFadeAnimation(isAboutPage);
  return (
    <Link
      ref={ref}
      href={href}
      onClick={(e) => handleClick(e, href)}
      className={className}
    >
      {children}
    </Link>
  );
};

export default LinkText;
