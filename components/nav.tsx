"use client";

import { Logo } from "@/assets/icons/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RESUME_LINK } from "@/constants/resume";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  {
    target: "_blank",
    href: RESUME_LINK,
    label: "Resume",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto sm:mx-0 flex items-center justify-center">
        <Logo />
      </div>
      <nav className="mb-8 font-robotoSlab mx-auto">
        <ul className="flex flex-row sm:flex-col align-center gap-3 flex-wrap mx-auto sm:mx-0 justify-center max-w-80">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                target={item.target}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-white font-bold transition-colors
                  ${
                    pathname === item.href ? "bg-gray-800" : "hover:bg-gray-800"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
