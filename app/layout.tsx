"use client";

import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MGT8XGQHRF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MGT8XGQHRF', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>

      <body className="m-0">
        {/* TOP NAVIGATION */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="w-full px-6 py-5 flex items-center justify-between text-base">

            {/* Desktop menu */}
<div className="hidden md:flex items-center gap-6">
  {/* Brand */}
  <Link
    href="/"
    className="flex items-center gap-1 text-white font-semibold tracking-wide hover:text-green-200 transition"
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

  {/* Divider (optional but nice) */}
  <span className="h-6 w-px bg-white/20" />

  {/* Navigation links */}
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

        {/* PAGE CONTENT */}
        <div className="pt-13">
          {children}

          {/* FOOTER */}
          <footer className="bg-black/40 backdrop-blur-sm text-white">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Invest for Myself</h3>
                <p className="text-white/80">
                  A platform focused on lifelong growth, learning, and intentional living.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Pages</h4>
                <ul className="space-y-1">
                  <li><Link href="/" className="hover:text-green-300">Home</Link></li>
                  <li><Link href="/children" className="hover:text-green-300">Children</Link></li>
                  <li><Link href="/teens" className="hover:text-green-300">Teens</Link></li>
                  <li><Link href="/adults" className="hover:text-green-300">Adults</Link></li>
                  <li><Link href="/seniors" className="hover:text-green-300">Seniors</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li><Link href="/about" className="hover:text-green-300">About</Link></li>
                  <li><Link href="/privacy" className="hover:text-green-300">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-green-300">Terms of Use</Link></li>
                  <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-xs text-white/60 pb-6">
              © {new Date().getFullYear()} Invest for Myself. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
