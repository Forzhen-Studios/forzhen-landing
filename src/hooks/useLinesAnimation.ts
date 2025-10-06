import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import useAnimationStore from "@/stores/useAnimationStore";

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
  const { exit, setExit } = useAnimationStore();
  // Internal array to hold all DOM nodes
  const refs = useRef<HTMLElement[]>([]);

  // Callback ref that React will call for each element
  const setRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
    // Optional: remove nodes if they unmount
    if (!el) {
      refs.current = refs.current.filter((node) => node !== el);
    }
  };

  useGSAP(() => {
    refs.current.forEach((el) => {
      const target = targets ? el.querySelectorAll(targets) : el;
      if (!target) return;

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
      if (exit) {
        gsap.to(split.lines, {
          yPercent: y * 2,
          stagger,
          duration,
          ease,
          delay: 0,
          opacity,
          onComplete: () => {
            setExit(false);
          },
        });
      }
    });
  }, [exit]);

  return setRef; // use titleRef instead
};

export default useLinesAnimation;
