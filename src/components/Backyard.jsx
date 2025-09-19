export default function Backyard() {
  const features = [
    {
      id: 1,
      title: "Yield Aggregator",
      subtitle: "One-click yield aggregation",
      description:
        "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
      image: "./Yield-1.svg",
    },
    {
      id: 2,
      title: "Yield-backed Stablecoin",
      subtitle: "Unlock liquidity with BYD",
      description:
        "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
      image: "./Yield-2.svg",
    },
    {
      id: 3,
      title: "Boost DeFi Liquidity",
      subtitle: "Boost protocols, earn more",
      description:
        "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards",
      image: "./Boost.svg",
    },
  ];

  return (
    <section className="container mx-auto mt-24">
      <div className="flex justify-start mb-12 w-full px-6 md:px-0">
        <h2 className="text-3xl font-bold">What is Backyard?</h2>
      </div>

      {/* Мобильная версия: первый блок */}
      <div className="flex flex-col items-center text-center md:hidden">
        <img
          src={features[0].image}
          alt={features[0].title}
          className="w-44 h-44 mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{features[0].title}</h3>
        <p className="font-semibold">{features[0].subtitle}</p>
        <p className="mt-2 text-gray-500">{features[0].description}</p>
      </div>

      {/* Планшет и выше: один блок */}
      <div className="hidden md:grid md:grid-cols-2 md:items-center gap-8 lg:hidden">
        <div className="text-left">
          <h3 className="flex items-center text-xl font-bold mb-2">
            <span className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-gray-950 mr-2 text-sm">
              1
            </span>
            {features[0].title}
          </h3>
          <p className="font-semibold">{features[0].subtitle}</p>
          <p className="mt-2 text-gray-500">{features[0].description}</p>
        </div>
        <div className="flex justify-center">
          <img
            src={features[0].image}
            alt={features[0].title}
            className="w-64 h-64"
          />
        </div>
      </div>

      {/* Десктоп: все три блока в ряд */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl shadow p-6 text-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="mx-auto mb-4 w-44 h-44"
            />
            <h3 className="flex justify-center text-xl font-bold mb-2">
              <span className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-gray-950 mr-2 text-sm">
                {index + 1}
              </span>
              {feature.title}
            </h3>
            <p className="font-semibold">{feature.subtitle}</p>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
