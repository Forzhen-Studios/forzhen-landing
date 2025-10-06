import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

const useFadeAnimation = (page: boolean) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;
    if (page) return;

    gsap.from(ref.current, {
      opacity: 0,
      duration: 1,
      delay: 1.23,
      ease: "power3.inOut",
    });
  });
  return ref;
};

export default useFadeAnimation;
