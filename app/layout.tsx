import "./globals.css";
import Navigation from "./components/Navigation";

/* =========================
   METADATA (TAB TITLE + ICON)
   ========================= */
export const metadata = {
  title: {
    default: "Invest for Myself",
    template: "%s | Invest for Myself",
  },
  description:
    "An educational platform focused on investing in yourself through learning, challenges, and intentional growth at every life stage.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0">
        <Navigation />

        {/* PAGE CONTENT */}
        <div className="pt-16">
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
                  <li><a href="/" className="hover:text-green-300">Home</a></li>
                  <li><a href="/children" className="hover:text-green-300">Children</a></li>
                  <li><a href="/teens" className="hover:text-green-300">Teens</a></li>
                  <li><a href="/adults" className="hover:text-green-300">Adults</a></li>
                  <li><a href="/seniors" className="hover:text-green-300">Seniors</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <ul className="space-y-1">
                  <li><a href="/about" className="hover:text-green-300">About</a></li>
                  <li><a href="/privacy" className="hover:text-green-300">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-green-300">Terms of Use</a></li>
                  <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
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
