import Link from "next/link";

export default function TeensPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10">
        <section className="max-w-5xl mx-auto pt-16">
          {/* HERO */}
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              🚀 Build Your Future, One Choice at a Time
            </h1>

            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Skills, habits, and decisions you make now shape the life you’ll live later.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Investing in yourself as a teen
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This stage of life is about discovering who you are, learning how to
              think for yourself, and building skills that give you freedom later.
              Small choices, made consistently, create powerful results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-blue-100 p-6">
                <h3 className="font-semibold mb-2">🧠 Ages 13–17</h3>
                <p className="text-gray-700 text-sm">
                  Confidence, emotions, curiosity, learning habits, and self-control.
                </p>
              </div>

              <div className="rounded-xl bg-indigo-100 p-6">
                <h3 className="font-semibold mb-2">🧭 Ages 18–25</h3>
                <p className="text-gray-700 text-sm">
                  Independence, skills, money basics, careers, and direction.
                </p>
              </div>
            </div>
          </div>

          {/* QUICK SELF-ASSESSMENT (GAME) */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              🧩 Quick Self-Check
            </h2>

            <p className="text-white/90 mb-6">
              Answer honestly — there’s no right or wrong.
            </p>

            <ul className="space-y-4 text-white">
              <li>👉 Do I finish what I start?</li>
              <li>👉 Can I focus for 30 minutes without distraction?</li>
              <li>👉 Do I save money when I get it?</li>
              <li>👉 Can I say “no” when something isn’t good for me?</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Awareness is the first step to growth.
            </p>
          </div>

          {/* SKILL BUILDERS */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              🛠 Skill Builders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-gray-100 p-6 text-center">
                📚
                <h3 className="mt-3 font-semibold">Learning to Learn</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Focus, repetition, and curiosity.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6 text-center">
                💬
                <h3 className="mt-3 font-semibold">Communication</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Express ideas clearly and confidently.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-100 p-6 text-center">
                💻
                <h3 className="mt-3 font-semibold">Digital Skills</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Tech literacy for modern life.
                </p>
              </div>
            </div>
          </div>

          {/* MINI CHALLENGES */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              🔥 7-Day Personal Challenge
            </h2>

            <ul className="space-y-3 text-white">
              <li>✅ Wake up at the same time every day</li>
              <li>✅ Read or learn for 20 minutes daily</li>
              <li>✅ Move your body every day</li>
              <li>✅ Avoid one bad habit for a week</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Discipline builds freedom.
            </p>
          </div>

          {/* BACK LINK */}
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-block text-white underline underline-offset-4 hover:text-green-300 transition"
            >
              ← Back to homepage
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
