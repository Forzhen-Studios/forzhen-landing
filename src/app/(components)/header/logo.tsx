"use client";

import Image from "next/image";
import useFadeAnimation from "@/hooks/useFadeAnimation";

type LogoProps = {
  useDarkLogo?: boolean;
  isAboutPage: boolean;
};

const Logo = ({ useDarkLogo, isAboutPage }: LogoProps) => {
  const ref = useFadeAnimation(isAboutPage);
  return (
    <Image
      ref={ref}
      src={useDarkLogo ? "/studio_logo_dark.png" : "/studio_logo_white.png"}
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
