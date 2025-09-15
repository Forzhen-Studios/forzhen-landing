"use client";

import CompanyEmail from "@/components/company-email";
import TextHover from "@/components/text-hover";
import { socialLinks } from "@/constants/socialLinks";
import useLinesAnimation from "@/hooks/useLinesAnimation";
import Link from "next/link";

const Socials = () => {
  const ref = useLinesAnimation({
    type: "lines",
    duration: 1.2,
    stagger: 0.06,
    ease: "power3.out",
    delay: 0.8,
    y: 170,
    targets: ".s",
  });

  return (
    <aside
      className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-lg"
      ref={ref}
    >
      {socialLinks.map((link) => (
        <Link
          href={link.url}
          className="text-4xl font-semibold"
          key={link.name}
          target="_blank"
        >
          <TextHover text={link.name} className={"s"} />
        </Link>
      ))}
      <CompanyEmail class="s" />
    </aside>
  );
};

export default Socials;
