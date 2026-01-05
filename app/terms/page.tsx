export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/InvestForMySelf_Background_Homepage.png')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg mb-12">
          <h1 className="text-4xl font-extrabold text-white">Terms of Use</h1>
        </div>

        <div className="bg-white/90 rounded-3xl p-8 shadow-md text-gray-700 leading-relaxed space-y-4">
          <p>
            This website is provided for educational and informational purposes only.
          </p>

          <p>
            By using this website, you agree to use the content responsibly.
          </p>

          <p>
            The content may change over time as the platform evolves.
          </p>
        </div>
      </div>
    </main>
  );
}
