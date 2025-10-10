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
    <div>
      <h1
        ref={titleRef}
        className="text-6xl sm:text-8xl text-center lg:text-left font-black tracking-[-2px] leading-[1]"
      >
        FORZHEN STUDIOS
        <span className="text-[0.3em] translate-y-[0.40em] inline-block pr-[0.08em] tracking-tight ml-[0.15em] font-semibold">
          ™
        </span>
      </h1>
    </div>
  );
};

export default Title;
