"use client";

import CompanyEmail from "@/components/company-email";
import TextHover from "@/components/text-hover";
import { socialLinks } from "@/constants/socialLinks";
import useLinesAnimation from "@/hooks/useLinesAnimation";
import { Fragment } from "react";

const Socials = () => {
  const { setRef: ref } = useLinesAnimation({
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
      className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 max-w-lg"
      ref={ref}
    >
      {socialLinks.map((link) => (
        <Fragment key={link.name}>
          <TextHover
            text={link.name}
            className={"s"}
            isLink={true}
            href={link.url}
            linkClass={"text-5xl font-semibold max-h-20"}
          />
        </Fragment>
      ))}
      <CompanyEmail class="s" />
    </aside>
  );
};

export default Socials;
