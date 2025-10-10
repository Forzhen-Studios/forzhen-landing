"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";

const Description = () => {
  const descriptionRef = useLinesAnimation({ delay: 1 });

  return (
    <p
      className="text-neutral-100 text-center text-sm lg:text-left leading-relaxed"
      ref={descriptionRef}
    >
      We build software for businesses, teams, and creators, delivering simple,
      reliable solutions across web, tools, and digital products.
    </p>
  );
};
export default Description;
