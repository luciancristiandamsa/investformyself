import Link from "next/link";

export default function GrowingThinkersPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">

        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-4">
          <h1 className="text-3xl font-bold text-white">
            🧠 Growing Thinkers
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Challenges that build thinking and decision-making skills.
          </p>
        </div>

        {/* BREADCRUMBS */}
        <div className="mb-8 text-sm text-white/80">
          <Link href="/" className="hover:text-green-300">Home</Link>
          {" / "}
          <Link href="/children" className="hover:text-green-300">Children</Link>
          {" / "}
          <span className="text-white font-semibold">Growing Thinkers</span>
        </div>

        {/* INTRO */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-12">
          <p className="text-gray-700 leading-relaxed">
            This section is designed for children aged 9–12.
            The activities encourage logic, planning, and better
            understanding of everyday choices.
          </p>
        </div>

        {/* ACTIVITIES / CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* CARD 1 */}
          <Link
  href="#"
  className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
>

            <h2 className="text-2xl font-semibold mb-2">
              🧠 Smart Decisions
            </h2>
            <p className="text-gray-700">
              Practice thinking ahead and choosing wisely.
            </p>

            {/* GREEN HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* CARD 2 */}
          <Link
  href="#"
  className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
>

            <h2 className="text-2xl font-semibold mb-2">
              📊 Planning Ahead
            </h2>
            <p className="text-gray-700">
              Learn how small plans lead to big results.
            </p>

            {/* GREEN HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </Link>

        </div>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/children"
            className="text-white underline hover:text-green-300"
          >
            ← Back to Children Page
          </Link>
        </div>

      </div>
    </main>
  );
}
