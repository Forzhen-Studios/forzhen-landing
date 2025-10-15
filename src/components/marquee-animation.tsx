"use client";

import { motion } from "motion/react";
import React from "react";

type MarqueeAnimationProps = {
  children: React.ReactNode;
  reverse: boolean;
  speed: number;
};

const MarqueeAnimation = ({
  children,
  reverse,
  speed,
}: MarqueeAnimationProps) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex space-x-10 bg-transparent text-nowrap"
        initial={{ translateX: reverse ? "-100%" : "0%" }}
        animate={{ translateX: reverse ? "0%" : "-100%" }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default MarqueeAnimation;
