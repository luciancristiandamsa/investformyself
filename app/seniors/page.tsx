import Link from "next/link";

export default function SeniorsPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Gentle overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10">
        <section className="max-w-5xl mx-auto pt-16">
          {/* HERO */}
          <div className="inline-block bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              🌤 Living Well, Learning Always
            </h1>

            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Investing in yourself never stops. Every stage of life
              offers new opportunities to grow, connect, and enjoy life.
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Investing in yourself as a senior
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Later stages of life are not about rushing forward,
              but about maintaining balance, staying curious,
              and enjoying the results of years of experience.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Investing in yourself now means protecting your health,
              keeping your mind active, nurturing relationships,
              and finding meaning in everyday moments.
            </p>
          </div>

          {/* CORE AREAS */}
          <div className="bg-black/25 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Key Areas for a Fulfilling Life
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div className="bg-white/10 rounded-2xl p-6">
                ❤️ <h3 className="mt-2 font-semibold">Health & Vitality</h3>
                <p className="text-sm text-white/80 mt-2">
                  Movement, nutrition, rest, and regular checkups.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                🧠 <h3 className="mt-2 font-semibold">Mental Sharpness</h3>
                <p className="text-sm text-white/80 mt-2">
                  Reading, puzzles, learning, and curiosity.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                🤝 <h3 className="mt-2 font-semibold">Social Connection</h3>
                <p className="text-sm text-white/80 mt-2">
                  Family, friends, conversation, and community.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                🌱 <h3 className="mt-2 font-semibold">Purpose & Meaning</h3>
                <p className="text-sm text-white/80 mt-2">
                  Sharing wisdom, hobbies, volunteering, and joy.
                </p>
              </div>
            </div>
          </div>

          {/* SHARING WISDOM */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🌱 Investing in Others Through Your Experience
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              One of the most meaningful ways to invest in yourself later in life
              is by sharing what you’ve learned with others.
              Your experience can guide, inspire, and support younger generations.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Teaching, mentoring, and simply listening create connection,
              purpose, and fulfillment — for both you and those you help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-100 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">🤝 Mentoring</h3>
                <p className="text-sm text-gray-700">
                  Offer guidance, advice, and perspective based on real-life experience.
                </p>
              </div>

              <div className="bg-green-100 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">📖 Sharing Stories</h3>
                <p className="text-sm text-gray-700">
                  Stories carry wisdom. Sharing them helps others learn without
                  repeating the same mistakes.
                </p>
              </div>

              <div className="bg-green-100 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">🎓 Teaching & Volunteering</h3>
                <p className="text-sm text-gray-700">
                  Helping in schools, communities, or groups keeps your mind active
                  and builds meaningful relationships.
                </p>
              </div>

              <div className="bg-green-100 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">💬 Being a Listener</h3>
                <p className="text-sm text-gray-700">
                  Sometimes the greatest contribution is listening,
                  understanding, and offering calm perspective.
                </p>
              </div>
            </div>
          </div>

          {/* REFLECTION */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-md mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Gentle Self-Reflection
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>👉 Do I feel balanced in my daily life?</li>
              <li>👉 Am I staying active in body and mind?</li>
              <li>👉 Do I nurture meaningful relationships?</li>
              <li>👉 Do I make time for things I enjoy?</li>
            </ul>

            <p className="mt-6 text-sm text-gray-600">
              There are no right or wrong answers — only awareness.
            </p>
          </div>

          {/* WEEKLY HABITS */}
          <div className="bg-black/25 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              🌼 Weekly Well-Being Habits
            </h2>

            <ul className="space-y-3 text-white">
              <li>✅ Take a daily walk or light movement</li>
              <li>✅ Read, listen, or learn something new</li>
              <li>✅ Connect with someone you care about</li>
              <li>✅ Spend time on a hobby you enjoy</li>
            </ul>

            <p className="mt-6 text-white/80 text-sm">
              Small habits support long-lasting well-being.
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
