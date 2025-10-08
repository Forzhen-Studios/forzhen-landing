"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";

const Title = () => {
  const titleRef = useLinesAnimation({
    stagger: 0.1,
    duration: 1,
    ease: "power4.Out",
    type: "words",
    delay: 0.1,
    y: 200,
  });
  return (
    <h1
      className="text-6xl font-['inter'] sm:text-8xl font-black text-left tracking-tight md:leading-20 lg:leading-20 sm:leading-14"
      ref={titleRef}
    >
      FORZHEN STUDIOS
      <span className="font-semibold text-[.2em]"> ™</span>
    </h1>
  );
};

export default Title;
