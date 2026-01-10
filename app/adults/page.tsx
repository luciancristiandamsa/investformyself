import Link from "next/link";

export default function AdultsPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* OVERLAY — must NOT block clicks */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-16">
          <h1 className="text-3xl font-bold text-white">
            🌿 Adults
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Choose what to strengthen in your life right now.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* CARD 1 */}
          <Link
            href="/adults/building-yourself"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🧭 Building Yourself
            </h2>
            <p className="text-gray-700">
              Strengthen skills, habits, direction, and confidence.
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 2 */}
          <Link
            href="/adults/building-with-others"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🤝 Building a Life With Others
            </h2>
            <p className="text-gray-700">
              Navigate partnership, communication, and shared responsibility.
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 3 */}
          <Link
            href="/adults/raising-children"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              👨‍👩‍👧 Raising & Investing in Children
            </h2>
            <p className="text-gray-700">
              Lead by example and support long-term family growth.
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 4 */}
          <Link
            href="/adults/securing-the-long-term"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🌱 Securing the Long Term
            </h2>
            <p className="text-gray-700">
              Build financial stability, health, and future clarity.
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/"
            className="text-white underline hover:text-green-300"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
