"use client";
import { Bell } from "lucide-react";
import Link from "next/link";
import Header from "./(components)/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-neutral-950 bg-neutral-50">
      <Header />
      {/* Main Section */}
      <main className="flex flex-wrap lg:gap-52 gap-32 min-h-screen px-10 py-5 items-center justify-center">
        {/* Left Column */}
        <div className="flex-1 flex flex-col py-10 justify-center lg:justify-start max-w-lg space-y-6 text-center lg:text-left mt-20 lg:mt-0">
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight leading-20">
            FORZHEN STUDIOS<span className="font-semibold text-[16px] "> ™</span>
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
        <aside className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-lg">
          <Link href="#" className="text-4xl font-semibold">
            <span className="flip-container">
              <span className="flip-old">LINKEDIN</span>
              <span className="flip-new">LINKEDIN</span>
            </span>
          </Link>

          <Link
            href="https://instagram.com/forzhenstudios"
            target="_blank"
            className="text-4xl font-semibold"
          >
            <span className="flip-container">
              <span className="flip-old">INSTAGRAM</span>
              <span className="flip-new">INSTAGRAM</span>
            </span>
          </Link>

          <Link
            href="https://youtube.com/@forzhenstudios"
            target="_blank"
            className="text-4xl font-semibold"
          >
            <span className="flip-container">
              <span className="flip-old">YOUTUBE</span>
              <span className="flip-new">YOUTUBE</span>
            </span>
          </Link>

          <Link
            href="#"
            className="relative py-4 text-md font-medium hover:text-neutral-400 underline-animate"
            onClick={(e) => {
              e.preventDefault();

              // Construct the email dynamically
              const parts = ["hello", "forzhenstudios.com"];
              const email = parts.join("@");

              // Open the default mail client
              window.location.href = `mailto:${email}`;
            }}
          >
            Contact: hello@forzhenstudios.com
          </Link>
        </aside>
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center bottom-0 left-0 right-0 justify-between py-4 px-5 bg-neutral-50">
        <p>
          &copy; {new Date().getFullYear()} Forzhen Studios. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link
            href="/privacy"
            className="text-sm hover:text-neutral-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm hover:text-neutral-700 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
