import Link from "next/link";

export default function ChildrenPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">
            👶 Children
          </h1>
          <p className="mt-4 text-white/90">
            Helping children invest in themselves through play and learning.
          </p>
        </div>

        {/* AGE GROUPS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* LITTLE EXPLORERS */}
  <Link
  href="/children/little-explorers"
  className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition hover:shadow-lg hover:scale-[1.03]"
>
    <h2 className="text-3xl font-semibold mb-2">
      👶 Little Explorers
    </h2>
    <p className="text-gray-700 mb-1">
      Ages 5–8
    </p>
    <p className="text-gray-600">
      Games that build curiosity, focus, and confidence.
    </p>

    {/* GREEN HOVER LINE */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
</Link>

  {/* GROWING THINKERS */}
  <Link
    href="/children/growing-thinkers"
    className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition hover:shadow-lg hover:scale-[1.03]"
>
    <h2 className="text-3xl font-semibold mb-2">
      🧠 Growing Thinkers
    </h2>
    <p className="text-gray-700 mb-1">
      Ages 9–12
    </p>
    <p className="text-gray-600">
      Challenges that develop thinking and decision-making skills.
    </p>

    {/* GREEN HOVER LINE */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
</Link>

</div>

        {/* BACK */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-white underline hover:text-green-300"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
