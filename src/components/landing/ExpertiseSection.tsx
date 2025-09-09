const ExpertiseSection = () => {
  const valueChains = [
    "Coffee",
    "Banana",
    "Avocado",
    "Mango",
    "Sweet Potato",
    "Dairy",
    "Feed & Fodder",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Value Chain Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep domain knowledge across multiple agricultural value chains
          </p>
        </div>

        {/* Value Chain Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {valueChains.map((chain, index) => (
            <div
              key={index}
              className="bg-green-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer"
            >
              {chain}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
