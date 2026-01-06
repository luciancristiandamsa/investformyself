import Link from "next/link";

export default function Teens13to17Page() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10">
        <section className="max-w-5xl mx-auto pt-16">
          {/* HERO */}
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
            <h1 className="text-4xl font-extrabold text-white">
              🧠 Ages 13–17
            </h1>
            <p className="mt-3 text-white/90 max-w-xl">
              Learn how your habits, focus, and decisions shape who you become.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <p className="text-gray-700 leading-relaxed">
              This stage is about building the base. You’re learning how to focus,
              manage emotions, and make better choices — one small step at a time.
            </p>
          </div>

          {/* SELF-CHECK */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🧩 Quick Self-Check
            </h2>

            <ul className="space-y-4 text-white">
              <li>👉 Can I focus for 20 minutes without my phone?</li>
              <li>👉 Do I finish what I start?</li>
              <li>👉 Can I pause before reacting?</li>
              <li>👉 Do I keep simple promises to myself?</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              No judgment. Awareness is the first skill.
            </p>
          </div>

          {/* MINI SCENARIOS */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              🎯 Decision Scenarios
            </h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <p className="font-medium">
                  You planned to study, but your phone keeps buzzing.
                </p>
                <p className="text-sm mt-1 text-gray-600">
                  Think: what happens if you give in vs. ignore it?
                </p>
              </div>

              <div>
                <p className="font-medium">
                  You feel angry during an argument.
                </p>
                <p className="text-sm mt-1 text-gray-600">
                  Pausing is a skill. Reacting is a habit.
                </p>
              </div>
            </div>
          </div>

          {/* CHALLENGE */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🔥 5-Day Focus Challenge
            </h2>

            <ul className="space-y-3 text-white">
              <li>✅ Focus 20 minutes a day</li>
              <li>✅ Put phone away during study</li>
              <li>✅ Go to bed at the same time</li>
              <li>✅ Move your body daily</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Small discipline builds big freedom.
            </p>
          </div>

          {/* BACK */}
          <div className="text-center mb-16">
            <Link
              href="/teens"
              className="text-white underline underline-offset-4 hover:text-green-300 transition"
            >
              ← Back to Teens
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
