import Link from "next/link";

export default function LittleExplorersPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center p-8"
      style={{
        backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-5xl mx-auto pt-16">
        {/* HERO */}
        <div className="bg-black/25 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-6">
          <h1 className="text-4xl font-extrabold text-white">
            👶 Little Explorers
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg">
            Fun games and activities for ages 5–8
          </p>
        </div>

        {/* BREADCRUMBS */}
        <div className="mb-8 text-sm text-white/80">
          <Link href="/" className="hover:text-green-300">Home</Link>
          {" / "}
          <Link href="/children" className="hover:text-green-300">Children</Link>
          {" / "}
          <span className="text-white font-semibold">Little Explorers</span>
        </div>

        {/* INTRO */}
        <div className="bg-white/90 rounded-3xl p-8 shadow-md mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            Little Explorers is a space for young children to learn
            through play, simple choices, and fun challenges.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Parents can choose activities that help children
            build curiosity, focus, and confidence.
          </p>
        </div>

        {/* GAMES */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

  {/* COLORS & SHAPES */}
  <Link
    href="/children/little-explorers/colors-shapes"
    className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
  >
    <h2 className="text-2xl font-semibold mb-2">
      🎨 Colors & Shapes
    </h2>
    <p className="text-gray-700">
      Learn colors, shapes, and patterns through play.
    </p>

    {/* GREEN HOVER LINE */}
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
  </Link>

  {/* SIMPLE CHOICES */}
  <Link
    href="/children/little-explorers/simple-choices"
    className="group relative overflow-hidden bg-white/90 rounded-3xl p-8 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
  >
    <h2 className="text-2xl font-semibold mb-2">
      🧩 Simple Choices
    </h2>
    <p className="text-gray-700">
      Practice picking options in simple situations.
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
