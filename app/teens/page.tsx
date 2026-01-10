import Link from "next/link";

export default function TeensPage() {
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
            🚀 Teens
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Build habits, skills, and direction — step by step.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* CARD 1 */}
          <Link
            href="/teens/13-17"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🧠 Ages 13–17
            </h2>

            <p className="text-gray-700 mb-4">
              Build focus, habits, confidence, and emotional control.
            </p>

            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>• Decision awareness</li>
              <li>• Focus & self-control</li>
              <li>• Healthy routines</li>
            </ul>

            {/* Green bottom line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 2 */}
          <Link
            href="/teens/18-25"
            className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
          >
            <h2 className="text-2xl font-semibold mb-2">
              🧭 Ages 18–25
            </h2>

            <p className="text-gray-700 mb-4">
              Choose direction, build skills, and create independence.
            </p>

            <ul className="text-sm text-gray-600 space-y-1 mb-6">
              <li>• Life simulations</li>
              <li>• Skill investment</li>
              <li>• Money & career basics</li>
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
