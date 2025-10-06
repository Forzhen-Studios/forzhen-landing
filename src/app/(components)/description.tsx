"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";

const Description = () => {
  const descriptionRef = useLinesAnimation({ delay: 1 });

  return (
    <p
      className="text-neutral-200  text-left leading-relaxed"
      ref={descriptionRef}
    >
      At our core, we build software that drives results — from sleek web
      platforms to tools that empower teams and creators. We’re dedicated to
      delivering solutions that are simple, impactful, and built to last. And as
      we grow, we’re preparing to expand into interactive entertainment and game
      technology, scaling our studio into a hub for both innovation and
      creativity.
    </p>
  );
};
export default Description;
