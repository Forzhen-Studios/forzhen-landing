"use client";
import useLinesAnimation from "@/hooks/useLinesAnimation";

const AboutTitle = () => {
  const ref = useLinesAnimation({
    targets: ".s",
    type: "lines",
    y: 200,
    duration: 1.1,
    ease: "power4.Out",
    delay: 0.3,
  });
  return (
    <h1
      ref={ref}
      className="relative text-neutral-50 text-6xl md:text-8xl font-extrabold mb-8"
    >
      <span className="block s leading-[1]">WHO</span>
      <span className="block s leading-[1]">WE ARE</span>
    </h1>
  );
};

export default AboutTitle;
