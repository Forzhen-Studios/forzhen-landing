import MarqueeAnimation from "@/components/marquee-animation";
import { messages } from "@/constants/marquee";
import { Fragment } from "react";

const Banner = () => {
  return (
    <div
      className="absolute w-full overflow-hidden flex items-center justify-center space-x-10 bg-orange-500/30
       border-b border-orange-600/60 backdrop-blur-3xl text-white text-center py-2 text-sm z-50"
    >
      <MarqueeAnimation reverse={false} speed={20}>
        {messages.map((message, idx) => (
          <span key={idx} className="">
            {message}
          </span>
        ))}
      </MarqueeAnimation>
    </div>
  );
};

export default Banner;
