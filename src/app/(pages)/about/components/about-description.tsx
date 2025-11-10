"use client";

import useLinesAnimation from "@/hooks/useLinesAnimation";

const AboutDescription = () => {
  const ref = useLinesAnimation({ delay: 0.7 });
  return (
    <p ref={ref}>
      At Forzhen Studios, we&apos;re committed to building premium digital
      experiences that help businesses and creators thrive. From beautifully
      crafted websites to innovative tools, we bring together design,
      functionality, and engineering excellence. Founded by Tevin Campbell
      (Troy). Our team is driven by creativity,
      ambition, and a shared vision of what technology can achieve. While our
      current focus is on delivering impactful software solutions, we are also
      laying the groundwork for future advancements in gaming and interactive
      technology. Forzhen Studios is more than a company, it&apos;s a team
      dedicated to shaping the future of digital innovation.
    </p>
  );
};

export default AboutDescription;
