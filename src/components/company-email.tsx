"use client";

import Link from "next/link";

type Props = {
  class?: string;
};

const CompanyEmail = ({ class: className }: Props) => {
  return (
    <Link
      href="#"
      className={` py-4 text-md font-medium group ${className}`}
      onClick={(e) => {
        e.preventDefault();

        // Construct the email dynamically
        const parts = ["hello", "forzhenstudios.com"];
        const email = parts.join("@");

        // Open the default mail client
        window.location.href = `mailto:${email}`;
      }}
    >
      Contact:{" "}
      <span className="group-hover:text-amber-500 underline-animate relative pb-1.5 transition-colors duration-300">
        hello@forzhenstudios.com
      </span>
    </Link>
  );
};

export default CompanyEmail;
