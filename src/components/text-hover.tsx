"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

type TextHoverProps = {
  text: string;
  className: string;
  duration?: number;
  stagger?: number;
  ease?: string;
};

const TextHover = ({
  text,
  className,
  duration = 0.5,
  stagger = 0.03,
  ease = "power2.out",
}: TextHoverProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const target = ref.current.querySelector(".letter-old");
      const target1 = ref.current.querySelector(".letter-new");

      if (!target || !target1) return;

      const split = new SplitText(target, {
        type: "chars",
        charsClass: "char",
      });
      const split1 = new SplitText(target1, {
        type: "chars",
        charsClass: "char",
      });

      gsap.set([split.chars, split1.chars], { display: "inline-block" });
      // Start the new layer below the clip
      gsap.set(split1.chars, { yPercent: 100 });

      tl.current = gsap
        .timeline({ paused: true, defaults: { duration, ease } })
        .to(split.chars, { yPercent: -100, stagger }, 0)
        .to(split1.chars, { yPercent: 0, stagger }, 0.05);

      return () => {
        split.revert();
        split1.revert();
      };
    },
    { scope: ref }
  );

  const enter = () => tl.current?.play();
  const leave = () => tl.current?.reverse();

  return (
    <span
      className="flip-container"
      ref={ref}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      aria-label={text}
    >
      <span className={`${className} letter-old `}>{text}</span>
      <span className={` letter-new`}>{text}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
};

export default TextHover;
