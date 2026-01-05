import Link from "next/link";

const categories = [
  {
    slug: "children",
    title: "👶 Children",
    age: "5–12",
    description: "Learning through play, curiosity, and healthy habits.",
  },
  {
    slug: "teens",
    title: "🚀 Teens & Young Adults",
    age: "13–25",
    description: "Building skills, confidence, and smart choices.",
  },
  {
    slug: "adults",
    title: "🌿 Adults",
    age: "26–50",
    description: "Career growth, finances, health, and mindset.",
  },
  {
    slug: "seniors",
    title: "🌼 Seniors",
    age: "50+",
    description: "Well-being, wisdom, and lifelong learning.",
  },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Subtle global overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content layer */}
      <div className="relative z-10">
        <section className="max-w-5xl mx-auto pt-3">
          {/* HERO */}
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Invest now.
              <br />
              Harvest forever.
            </h1>

            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Invest for myself — because growth compounds over a lifetime.
            </p>
          </div>

          {/* GUIDING SENTENCE */}
          <div className="mt-16 mb-6 text-center">
            <p className="text-3xl font-semibold text-white leading-snug">
               👉 Choose your stage of life and start building your future.
            </p>
          </div>

          {/* CATEGORY CARDS SECTION */}
<div className="mt-6 bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {categories.map((cat) => (
      <Link
        key={cat.slug}
        href={`/${cat.slug}`}
        className="relative h-52 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-[1.03]"
      >
        <div className="absolute inset-0 p-6 flex flex-col justify-center">
          <span className="text-sm uppercase tracking-wide text-gray-500">
            Age {cat.age}
          </span>

          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            {cat.title}
          </h2>

          <p className="mt-4 text-gray-700 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {cat.description}
          </p>
        </div>

        {/* Accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </Link>
    ))}
  </div>
</div>

        </section>
      </div>
    </main>
  );
}
