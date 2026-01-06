import Link from "next/link";

export default function Teens18to25Page() {
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
              🧭 Ages 18–25
            </h1>
            <p className="mt-3 text-white/90 max-w-xl">
              Your choices compound. Direction matters more than speed.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <p className="text-gray-700 leading-relaxed">
              This phase is about independence. Time, energy, and money become
              tools. How you invest them shapes your future options.
            </p>
          </div>

          {/* LIFE PATH SIMULATION */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🧠 Life Path Reflection
            </h2>

            <p className="text-white/90 mb-4">
              Imagine your next 2 years. Which path feels closest?
            </p>

            <ul className="space-y-3 text-white">
              <li>👉 Working + learning a skill</li>
              <li>👉 Full-time studies</li>
              <li>👉 Working without skill growth</li>
              <li>👉 No clear plan</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Each path has tradeoffs. Awareness beats drifting.
            </p>
          </div>

          {/* SKILL INVESTMENT */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              🛠 Skill Investment Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-100 rounded-2xl p-6">
                💻
                <h3 className="mt-3 font-semibold">Digital Skills</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Tech, tools, leverage.
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                💬
                <h3 className="mt-3 font-semibold">Communication</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Influence and clarity.
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                📊
                <h3 className="mt-3 font-semibold">Money Basics</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Saving, spending, investing.
                </p>
              </div>
            </div>
          </div>

          {/* CHALLENGE */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🔥 7-Day Discipline Experiment
            </h2>

            <ul className="space-y-3 text-white">
              <li>✅ Wake up at the same time</li>
              <li>✅ Learn one useful skill daily</li>
              <li>✅ Track money spending</li>
              <li>✅ Reduce one bad habit</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Discipline creates options.
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
