import Link from "next/link";

export default function BuildingYourselfPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-6 text-white">
          <h1 className="text-4xl font-extrabold mb-4">
            🧭 Building Yourself
          </h1>
          <p className="text-white/90">
            Strengthening your foundation — skills, habits, direction, and
            confidence.
          </p>
        </div>

        {/* BREADCRUMBS */}
        <nav className="text-sm text-white/80 mb-10">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          →{" "}
          <Link href="/adults" className="hover:underline">
            Adults
          </Link>{" "}
          → <span className="text-white">Building Yourself</span>
        </nav>

        {/* CONTENT */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-4">Focus Areas</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Career foundation & skill acquisition</li>
            <li>• Choosing skills with leverage</li>
            <li>• Avoiding lifestyle inflation</li>
            <li>• Mental resilience & focus</li>
            <li>• Saying “no” strategically</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
