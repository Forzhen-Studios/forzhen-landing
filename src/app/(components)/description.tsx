"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";

const Description = () => {
  const descriptionRef = useLinesAnimation({ delay: 1 });

  return (
    <p className="text-neutral-700 leading-6" ref={descriptionRef}>
      We build high‑velocity brand sites where craft meets code—clean
      aesthetics, cinematic interaction, and performance you can feel. The full
      site launches soon; hit Notify to join the first wave when we open
      bookings.
    </p>
  );
};
export default Description;
