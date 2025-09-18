export default function Hero() {
  return (
    <section className="w-full bg-white text-black px-4 py-8 sm:px-6 md:px-12 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mt-8 md:mt-24">
        {/* Левая часть */}
        <div className="max-w-xl text-center md:text-left text-black">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
            The yield-backed <br />
            stablecoin protocol <br />
            boosting DeFi liquidity
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-grey">
            Keep your yield working for you — we keep your liquidity accessible
          </p>

          <div className="mt-8 md:mt-[72px] flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            {/* Тёмная кнопка */}
            <button className="bg-black text-white px-4 py-3 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-72 md:w-80 h-12 md:h-14">
              Join Whitelist
            </button>

            {/* Светлая кнопка */}
            <button
              style={{ backgroundColor: "#E6E8EC" }}
              className="text-black px-4 py-3 rounded-full transition-colors hover:bg-gray-300 w-full sm:w-44 md:w-52 h-12 md:h-14"
            >
              Read Docs
            </button>
          </div>
        </div>

        {/* Правая часть (картинка) */}
        <div className="mt-8 md:mt-0">
          <img
            src="/logo-2.svg"
            alt="hero logo"
            className="hidden md:block w-40 h-40 sm:w-52 sm:h-52"
          />
        </div>
      </div>
    </section>
  );
}
