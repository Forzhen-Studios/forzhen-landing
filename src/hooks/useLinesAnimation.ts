import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FragmentInstance, useRef } from "react";
import { SplitText } from "gsap/SplitText";

type Options = {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  type?: "lines" | "words" | "chars";
  opacity?: number;
  y?: number;
  targets?: string;
};

const useLinesAnimation = ({
  duration = 1,
  delay = 0,
  ease = "power3.out",
  stagger = 0.1,
  type = "lines",
  opacity = 1,
  y = 100,
  targets,
}: Options) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const target = targets
        ? ref.current.querySelectorAll(targets)
        : ref.current;
      const split = new SplitText(target, {
        type,
        mask: type,
      });

      gsap.from(split.lines, {
        yPercent: y,
        stagger,
        duration,
        ease,
        delay,
        opacity,
      });
      gsap.from(split.words, {
        yPercent: y,
        stagger,
        duration,
        ease,
        delay,
        opacity,
      });
    },
    { scope: ref }
  );
  return ref;
};

export default useLinesAnimation;
