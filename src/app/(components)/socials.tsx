"use client";

import CompanyEmail from "@/components/company-email";
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
          className="text-4xl font-semibold s"
          key={link.name}
          target="_blank"
        >
          <span className="flip-container s">
            {link.name}
            {/* <span className="flip-old">{link.name}</span>
            <span className="flip-new">{link.name}</span> */}
          </span>
        </Link>
      ))}
      <CompanyEmail class="s" />
    </aside>
  );
};

export default Socials;
