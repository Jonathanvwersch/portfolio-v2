"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LinkedIn } from "@/assets/icons/linkedin";
import { Github } from "@/assets/icons/github";
import { Twitter } from "@/assets/icons/twitter";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col gap-5 w-full mx-auto mt-auto pt-5 pb-3">
      <div className="flex flex-row gap-4 mx-auto">
        <Link
          href="https://www.linkedin.com/in/jonathan-van-wersch"
          aria-label="Click here to visit my LinkedIn profile"
          target="_blank"
        >
          <LinkedIn />
        </Link>
        <Link
          href="https://github.com/Jonathanvwersch"
          target="_blank"
          aria-label="Click here to visit my Github profile"
        >
          <Github />
        </Link>
        <Link
          href="https://twitter.com/jonathanvwersch"
          target="_blank"
          aria-label="Click here to visit my Twitter profile"
        >
          <Twitter />
        </Link>
      </div>
      <p className="m-auto text-sm text-center text-gray-400">
        Built by Jonathan van Wersch. Copyright © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
