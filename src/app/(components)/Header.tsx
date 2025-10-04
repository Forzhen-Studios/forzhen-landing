import Image from "next/image";
import Link from "next/link";
import { Circle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 flex items-center justify-between px-5 py-4  bg-none z-20 ">
      <Link href="/">
        <Image
          src="/studio_logo_white.png"
          alt="Forzhen Studios Logo"
          width={49}
          height={49}
          className="cursor-pointer"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>

      {/* About Us link */}
      <Link
        href="/about"
        className="flex group items-center px-4 py-2 rounded-full text-neutral-50 border border-neutral-50
         hover:bg-neutral-50 hover:text-neutral-950 transition-colors duration-300"
      >
        <Circle className="h-2 w-2 inline-block mr-2 duration-100 ease-in-out group-hover:fill-neutral-950" />
        About Us
      </Link>
    </header>
  );
}
