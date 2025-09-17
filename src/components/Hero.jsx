export default function Hero() {
  return (
    <section className="w-full bg-white text-black">
      <div className="container mx-auto flex flex-row md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center md:text-left text-black">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The yield-backed <br />
            stablecoin protocol <br />
            boosting DeFi liquidity
          </h1>
          <p className="mt-4 text-lg text-black ">
            Keep your yield working for you — we keep your liquidity accessible
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Join Whitelist
            </button>
            <button className="bg-gray-100 text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Read Docs
            </button>
          </div>
        </div>

        <div>
          <img src="/logo-2.svg" alt="hero logo" className="w-40 h-40" />
        </div>
      </div>
    </section>
  );
}
