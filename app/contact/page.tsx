export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">Contact</h1>
          <p className="mt-4 text-white/90">
            Get in touch with us.
          </p>
        </div>

        <div className="bg-white/90 rounded-3xl p-8 shadow-md">
          <p className="text-gray-700 leading-relaxed">
            For questions, suggestions, or collaboration opportunities,
            you can reach us at:
          </p>

          <p className="mt-4 text-gray-800 font-semibold">
            contact@investformyself.com
          </p>
        </div>
      </div>
    </main>
  );
}
