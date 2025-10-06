"use client";
import useLinesAnimation from "@/hooks/useLinesAnimation";
import React from "react";

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
      className="text-6xl sm:text-8xl font-extrabold tracking-normal leading-20"
      ref={titleRef}
    >
      FORZHEN STUDIOS
      <span className="font-semibold text-[16px] "> ™</span>
    </h1>
  );
};

export default Title;
