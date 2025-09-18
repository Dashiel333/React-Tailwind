export default function Backyard() {
  const feature = {
    id: 1,
    title: "Yield Aggregator",
    subtitle: "One-click yield aggregation",
    description:
      "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    image: "/Yield-1.svg",
  };

  return (
    <section className="container mx-auto mt-14">
      <div className="flex justify-start mb-12">
        <h2 className="text-3xl font-bold">What is Backyard?</h2>
      </div>

      {/* Мобильная версия (картинка сверху, текст под ней) */}
      <div className="flex flex-col items-center text-center md:hidden">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-44 h-44 mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
        <p className="font-semibold">{feature.subtitle}</p>
        <p className="mt-2 text-gray-500">{feature.description}</p>
      </div>

      {/* Планшет и выше (2 колонки: текст слева, картинка справа) */}
      <div className="hidden md:grid md:grid-cols-2 md:items-center gap-8">
        <div className="text-left">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <span className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-gray-950 mr-2 text-sm">
              1
            </span>
            {feature.title}
          </h3>
          <p className="font-semibold">{feature.subtitle}</p>
          <p className="mt-2 text-gray-500">{feature.description}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-64 h-64"
          />
        </div>
      </div>
    </section>
  );
}
