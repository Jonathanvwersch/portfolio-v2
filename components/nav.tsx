"use client";

import { Logo } from "@/assets/icons/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  {
    target: "_blank",
    href: "https://drive.google.com/file/d/1NPVZ-V0QfFBjnu-RT58xl97xXVcmkiHw/view",
    label: "Resume",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto sm:mx-0">
        <Logo />
      </div>
      <nav className="mb-8 font-robotoSlab mx-auto">
        <ul className="flex flex-row sm:flex-col align-center gap-3 flex-wrap mx-auto sm:mx-0">
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
