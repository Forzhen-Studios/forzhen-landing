import Link from "next/link";


export default function Footer() {
  return (
    <footer className="flex flex-col text-neutral-950 sm:flex-row items-center bottom-0 left-0 right-0 justify-between py-4 px-5">
      <p>
        &copy; {new Date().getFullYear()} Forzhen Studios. All rights reserved.
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
  );
}
