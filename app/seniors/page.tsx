import Link from "next/link";

export default function SeniorsPage() {
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
            🌤 Seniors
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Invest in balance, wisdom, and meaningful living.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* CARD 1 — WELL-BEING */}
          <Link
            href="/seniors/well-being"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              ❤️ Well-Being & Balance
            </h2>
            <p className="text-gray-700">
              Support your health, energy, and daily calm.
            </p>

            {/* GREEN HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 2 — WISDOM */}
          <Link
            href="/seniors/wisdom"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🌱 Wisdom & Legacy
            </h2>
            <p className="text-gray-700">
              Share experience and guide others.
            </p>

            {/* GREEN HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 3 — RELATIONSHIPS */}
          <Link
            href="/seniors/relationships"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🤝 Relationships & Community
            </h2>
            <p className="text-gray-700">
              Strengthen connections with people around you.
            </p>

            {/* GREEN HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 4 — MEANING */}
          <Link
            href="/seniors/meaning"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🌼 Meaningful Living
            </h2>
            <p className="text-gray-700">
              Focus on joy, purpose, and presence.
            </p>

            {/* GREEN HOVER LINE */}
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
