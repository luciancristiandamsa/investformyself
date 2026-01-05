import Link from "next/link";

export default function AdultsPage() {
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
              🌿 Strengthen What Sustains Your Life
            </h1>

            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Your skills, habits, health, and finances shape your freedom
              today — and your future tomorrow.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Investing in yourself as an adult
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Adult life often feels busy and demanding. Investing in yourself
              means making intentional choices that improve your stability,
              health, and confidence — even when time is limited.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Small, consistent improvements in key areas can dramatically
              improve quality of life over time.
            </p>
          </div>

          {/* CORE AREAS */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Key Areas to Focus On
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div className="bg-white/10 rounded-2xl p-6">
                💼 <h3 className="mt-2 font-semibold">Career & Skills</h3>
                <p className="text-sm text-white/80 mt-2">
                  Learning, adaptability, and professional growth.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                💰 <h3 className="mt-2 font-semibold">Money Management</h3>
                <p className="text-sm text-white/80 mt-2">
                  Budgeting, saving, and long-term financial clarity.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                🧠 <h3 className="mt-2 font-semibold">Mental Strength</h3>
                <p className="text-sm text-white/80 mt-2">
                  Focus, resilience, and emotional balance.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                ❤️ <h3 className="mt-2 font-semibold">Health & Energy</h3>
                <p className="text-sm text-white/80 mt-2">
                  Movement, sleep, and sustainable habits.
                </p>
              </div>
            </div>
          </div>

          {/* SELF-REFLECTION */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Quick Self-Reflection
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>👉 Do I have a clear direction for the next 3–5 years?</li>
              <li>👉 Am I actively improving my skills?</li>
              <li>👉 Do I manage my money with intention?</li>
              <li>👉 Is my health supporting my daily life?</li>
            </ul>

            <p className="mt-6 text-sm text-gray-600">
              Honest reflection is the foundation of meaningful growth.
            </p>
          </div>

          {/* PRACTICAL CHALLENGES */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              🔧 Practical Weekly Challenges
            </h2>

            <ul className="space-y-3 text-white">
              <li>✅ Learn or practice one professional skill</li>
              <li>✅ Review your finances for 15 minutes</li>
              <li>✅ Move your body at least 3 times this week</li>
              <li>✅ Reduce one unnecessary expense</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Progress comes from action, not perfection.
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
