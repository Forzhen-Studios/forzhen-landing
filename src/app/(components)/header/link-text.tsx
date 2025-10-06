"use client";

import useFadeAnimation from "@/hooks/useFadeAnimation";
import useAnimationStore from "@/stores/useAnimationStore";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

const LinkText = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useFadeAnimation();
  const router = useTransitionRouter();
  const setExit = useAnimationStore((state) => state.setExit);
  return (
    <Link
      ref={ref}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setExit(true);
        router.push(href);
      }}
      className={className}
    >
      {children}
    </Link>
  );
};

export default LinkText;
