"use client";

import Image from "next/image";
import useFadeAnimation from "@/hooks/useFadeAnimation";

const Logo = () => {
  const ref = useFadeAnimation();
  return (
    <Image
      ref={ref}
      src="/studio_logo_dark.png"
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
