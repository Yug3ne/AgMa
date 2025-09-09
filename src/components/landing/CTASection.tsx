const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Agribusiness?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Let's start with a comprehensive assessment of your current
            situation and identify opportunities for growth.
          </p>

          {/* CTA Button */}
          <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl">
            <span>START ASSESSMENT</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
