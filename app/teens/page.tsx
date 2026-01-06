import Link from "next/link";

export default function TeensPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10">
        <section className="max-w-5xl mx-auto pt-16">
          {/* HERO */}
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              🚀 Build Your Future
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Choose the path that matches where you are right now.
            </p>
          </div>

          {/* AGE SELECTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Ages 13–17 */}
            <Link href="/teens/13-17" className="group">
              <div className="relative h-full cursor-pointer overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm p-10 shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                {/* Bottom green accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  🧠 Ages 13–17
                </h3>

                <p className="text-gray-700 mb-6">
                  Build focus, habits, confidence, and emotional control.
                </p>

                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Decision awareness</li>
                  <li>• Focus & self-control</li>
                  <li>• Healthy routines</li>
                </ul>
              </div>
            </Link>

            {/* Ages 18–25 */}
            <Link href="/teens/18-25" className="group">
              <div className="relative h-full cursor-pointer overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm p-10 shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                {/* Bottom green accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  🧭 Ages 18–25
                </h3>

                <p className="text-gray-700 mb-6">
                  Choose direction, build skills, and create independence.
                </p>

                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Life simulations</li>
                  <li>• Skill investment</li>
                  <li>• Money & career basics</li>
                </ul>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
