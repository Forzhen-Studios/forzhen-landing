import Image from "next/image";
import Link from "next/link";
import { Circle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 flex items-center justify-between px-5 py-4  bg-neutral-100 z-20 ">
      <Link href="/">
        <Image
          src="/studio_logo_white.png"
          alt="Forzhen Studios Logo"
          width={49}
          height={49}
          className="dark:invert cursor-pointer"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>

      {/* About Us link */}
      <Link
        href="/about"
        className="flex group items-center px-4 py-2 rounded-full text-neutral-950 border border-neutral-950
         hover:bg-neutral-950 hover:text-neutral-50 transition-colors duration-300"
      >
        <Circle className="h-2 w-2 inline-block mr-2 group-hover:fill-neutral-50" />
        About Us
      </Link>
    </header>
  );
}
