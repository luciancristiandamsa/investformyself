import Link from "next/link";

export default function ChildrenPage() {
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
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-white">
            🌱 Children
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Learning through play, curiosity, and gentle exploration.
          </p>
        </div>

        {/* VALUES NOTE (same style as hero, smaller) */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-6 py-5 shadow-md mb-16">
          <p className="text-white/90 text-center text-base md:text-lg leading-relaxed">
            We believe children learn best away from screens.
            <br className="hidden sm:block" />
            When screens are used, they should be{" "}
            <span className="font-semibold text-green-300">
              gentle, meaningful, and limited
            </span>.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* CARD 1 — LITTLE EXPLORERS */}
          <Link
            href="/children/little-explorers"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🧸 Little Explorers
            </h2>

            <p className="text-gray-700 mb-4">
              Ages 5–8 · Discover through play and simple interaction.
            </p>

            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>• Colors & shapes</li>
              <li>• Simple choices</li>
              <li>• Friendly feedback</li>
            </ul>

            {/* Green bottom line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 2 — GROWING THINKERS */}
          <Link
            href="/children/growing-thinkers"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🧠 Growing Thinkers
            </h2>

            <p className="text-gray-700 mb-4">
              Ages 9–12 · Build thinking, planning, and awareness.
            </p>

            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>• Smart decisions</li>
              <li>• Planning ahead</li>
              <li>• Thinking about consequences</li>
            </ul>

            {/* Green bottom line */}
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
