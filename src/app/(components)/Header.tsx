import Link from "next/link";
import LinkText from "./header/link-text";
import Logo from "./header/logo";
import { Circle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 flex items-center justify-between px-5 py-4  bg-none z-20 ">
      <Link href="/">
        <Logo />
      </Link>

      {/* About Us link */}
      <LinkText href="/about">
        <Circle className="h-2 w-2 inline-block mr-2 group-hover:fill-neutral-50" />
        About Us
      </LinkText>
    </header>
  );
}
