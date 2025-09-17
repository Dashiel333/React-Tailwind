export default function Backyard() {
  const features = [
    {
      id: 1,
      title: "Yield Aggregator",
      subtitle: "One-click yield aggregation",
      description:
        "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
      image: "/Yield-1.svg",
    },
    {
      id: 2,
      title: "Yield-backed Stablecoin",
      subtitle: "Unlock liquidity with BYD",
      description:
        "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
      image: "/Yield-2.svg",
    },
    {
      id: 3,
      title: "Boost DeFi Liquidity",
      subtitle: "Boost protocols, earn more",
      description:
        "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards",
      image: "/Boost.svg",
    },
  ];

  return (
    <section className="container mx-auto ">
      <div className="flex justify-start mb-12">
        <h2 className="text-3xl font-bold">
          What is Backyard?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={feature.id} className="bg-white rounded-2xl shadow p-6 text-center">
            <img src={feature.image} alt={feature.title} className="mx-auto mb-4 w-20 h-20" />
            <h3 className="flex justify-center text-xl font-bold">
              <span className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-gray-950 mr-2 text-sm">{index + 1}</span>
              {feature.title}
            </h3>
            <p className="mt-2 font-semibold">{feature.subtitle}</p>
            <p className="mt-2 text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}