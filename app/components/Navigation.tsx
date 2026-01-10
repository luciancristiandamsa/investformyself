"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition block ${
        isActive
          ? "text-green-300 font-semibold"
          : "text-white hover:text-green-200"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="w-full px-6 py-5 flex items-center justify-between text-base">

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-semibold tracking-wide hover:text-green-200 transition"
          >
            <Image
              src="/logo.png"
              alt="Invest for Myself"
              width={32}
              height={32}
              className="object-contain"
            />
            <span>Invest for Myself</span>
          </Link>

          <span className="h-6 w-px bg-white/20" />

          <NavLink href="/" label="Home" />
          <NavLink href="/children" label="Children" />
          <NavLink href="/teens" label="Teens" />
          <NavLink href="/adults" label="Adults" />
          <NavLink href="/seniors" label="Seniors" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Mobile header */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-white font-semibold tracking-wide"
          >
            Invest for Myself
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4 space-y-4">
          <NavLink href="/" label="Home" onClick={closeMobileMenu} />
          <NavLink href="/children" label="Children" onClick={closeMobileMenu} />
          <NavLink href="/teens" label="Teens" onClick={closeMobileMenu} />
          <NavLink href="/adults" label="Adults" onClick={closeMobileMenu} />
          <NavLink href="/seniors" label="Seniors" onClick={closeMobileMenu} />
          <NavLink href="/contact" label="Contact" onClick={closeMobileMenu} />
        </div>
      )}
    </nav>
  );
}
