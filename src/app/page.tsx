// import Image from "next/image";
// import { Bell, Circle } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="flex min-w-full min-h-screen flex-col text-neutral-950 bg-neutral-50">
//       {/* Header */}
//       <header className="w-full flex items-center justify-between px-5 py-4 fixed z-10 bg-neutral-50">
//         <Image
//           className="dark:invert"
//           src="/studio_logo_white.png"
//           alt="Forzhen Studios Logo"
//           width={65}
//           height={37}
//           priority
//         />

//         {/* About Us link with circle + underline */}
//         <a
//           href="#"
//           className="relative flex items-center space-x-2 text-neutral-950 group"
//         >
//           {/* Circle icon effect */}
//           <Circle className="h-2 w-2 transition-colors duration-300 group-hover:fill-neutral-950" />
//           <span>About Us</span>

//           {/* Underline grows left → right, exits right */}
//           <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-neutral-950 transition-transform duration-300 group-hover:scale-x-100" />
//         </a>
//       </header>

//       {/* Hero */}
//       <main className="flex flex-col h-screen p-5 items-center justify-center text-center sm:text-left">
//         <div id="hero" className="max-w-3xl space-y-6">
//           <h3 className="tracking-wide">WEBSITE COMING SOON</h3>
//           <h1 className="text-6xl sm:text-8xl font-bold leading-15">
//             Forzhen Studios
//           </h1>

//           <p className="text-neutral-700 leading-6">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
//             quos dolorum, perferendis saepe, qui vel <br />
//             illo consectetur eum similique ab nam! Laboriosam ut cum libero eum
//             quis harum sunt officia?
//           </p>

//           <button className="relative mt-8 mx-auto flex items-center rounded-full hover:bg-neutral-50 hover:border-neutral-950 bg-neutral-950 px-6 py-3 overflow-hidden group">
//             {/* Liquid fill layer */}
//             <span className="absolute inset-0 z-0">
//               <span className="absolute inset-0 bg-neutral-950 hover:bg-neutral-50 rounded-full group-hover:[animation:liquidFill_.3s_ease-out_forwards]"></span>
//             </span>

//             {/* Foreground text */}
//             <span className="relative z-10 flex text-neutral-50 items-center transition-colors duration-500 group-hover:text-neutral-50">
//               <Bell className="h-5 w-5 mr-2 transition-transform duration-500 group-hover:rotate-12" />
//               Notify Me
//             </span>
//           </button>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="flex items-center justify-between py-2 px-5 bottom-0 left-0 w-full fixed bg-neutral-50">
//         <p>
//           &copy; {new Date().getFullYear()} Forzhen Studios. All rights
//           reserved.
//         </p>
//         <div className="flex space-x-4">
//           <a href="#" className="text-sm">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-sm">
//             Terms of Service
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

import Image from "next/image";
import { Bell, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-neutral-950 bg-neutral-50">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-5 py-4 fixed z-10 bg-neutral-50">
        <Image
          src="/studio_logo_white.png"
          alt="Forzhen Studios Logo"
          className="dark:invert cursor-pointer"
          width={65}
          height={37}
          priority
        />

        {/* About Us Button */}
        <button className="flex group items-center px-4 py-2 rounded-full border border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-300">
          <Circle className="h-2 w-2 inline-block mr-2 group-hover:fill-neutral-50" />
          About Us
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-wrap lg:gap-52 gap-32 min-h-screen px-10 py-5 items-center justify-center">
        {/* Left Column */}
        <div className="flex-1 flex flex-col py-10 justify-center lg:justify-start max-w-lg space-y-6 text-center lg:text-left mt-20 lg:mt-0">
          <h1 className="text-6xl sm:text-8xl font-bold leading-20">
            Forzhen Studios
          </h1>

          <p className="text-neutral-700 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            quos dolorum, perferendis saepe, qui vel illo consectetur eum
            similique ab nam! Laboriosam ut cum libero eum quis harum sunt
            officia?
          </p>

          {/* Notify Me Button */}
          <button className="relative mt-8 flex items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-50 px-6 py-3 overflow-hidden group hover:bg-neutral-950 hover:text-white transition-colors duration-500">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Notify Me</span>
              <Bell className="h-5 w-5 transition-transform duration-500 group-hover:rotate-12" />
            </span>
            {/* Background animation */}
            <span className="absolute inset-0 bg-neutral-950 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 rounded-full"></span>
          </button>
        </div>

        {/* Right Column - Socials / Info */}
        <aside className="flex-1 flex flex-col items-center lg:items-start text-center border lg:text-left space-y-4 max-w-lg">
          <a href="#" className="text-4xl font-semibold">
            <span className="flip-container">
              <span className="flip-old">LINKEDIN</span>
              <span className="flip-new">LINKEDIN</span>
            </span>
          </a>

          <a
            href="https://instagram.com/forzhenstudios"
            target="_blank"
            className="text-4xl font-semibold"
          >
            <span className="flip-container">
              <span className="flip-old">INSTAGRAM</span>
              <span className="flip-new">INSTAGRAM</span>
            </span>
          </a>

          <a
            href="https://youtube.com/@forzhenstudios"
            target="_blank"
            className="text-4xl font-semibold"
          >
            <span className="flip-container">
              <span className="flip-old">YOUTUBE</span>
              <span className="flip-new">YOUTUBE</span>
            </span>
          </a>

          <a
            href="mailto:hello@forzhenstudios.com"
            className="py-4 text-md font-medium hover:text-neutral-400"
          >
            Contact: hello@forzhenstudios.com
          </a>
        </aside>
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center bottom-0 left-0 right-0 justify-between py-4 px-5 bg-neutral-50">
        <p>
          &copy; {new Date().getFullYear()} Forzhen Studios. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="#"
            className="text-sm hover:text-neutral-700 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-neutral-700 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
