import { Bell } from "lucide-react";
import React from "react";

const NotifyButton = () => {
  return (
    <button
      className="relative mt-8 flex items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-50 px-6 py-3 overflow-hidden group
           hover:bg-neutral-950 hover:text-white  duration-500  transition-colors"
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span>Official Site Coming Soon —</span>
        <span>Notify Me</span>
        <Bell className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
      </span>
      {/* Background animation */}
      <span className="absolute inset-0 bg-neutral-950 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-full"></span>
    </button>
  );
};

export default NotifyButton;
