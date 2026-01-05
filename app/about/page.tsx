export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">About</h1>
          <p className="mt-4 text-white/90">
            Invest for Myself is an educational project focused on
            self-development at every stage of life.
          </p>
        </div>

        <div className="bg-white/90 rounded-3xl p-8 shadow-md">
          <p className="text-gray-700 leading-relaxed mb-4">
            The goal of this platform is to encourage learning, reflection,
            and smart personal growth from childhood to adulthood.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This project is continuously evolving and aims to provide
            meaningful content that supports long-term development.
          </p>
        </div>
      </div>
    </main>
  );
}
