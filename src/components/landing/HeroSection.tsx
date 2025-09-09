const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/landing 1.png"
          alt="Agricultural landscape with tractor"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt- pb-32">
        <div className="flex items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="max-w-2xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-700 text-sm font-medium">
                🌱 Sustainable Agribusiness Solutions
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Grow Your <span className="text-green-400">Agribusiness</span>
                <br />
                with Expert Support
              </h1>

              <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                Get hands-on consulting, training, and market access solutions
                tailored to your agricultural enterprise. From deep-dive
                diagnostics to full-scale implementation—we help you build,
                scale, and thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>START ASSESSMENT</span>
                <svg
                  className="w-5 h-5"
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

              <button className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>VIEW PROCESS</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="absolute bottom-8 right-8 hidden lg:flex  gap-4 z-20">
        {/* Projects Completed Card */}
        <div className="bg-[#164000] backdrop-blur-sm rounded-2xl mb-8 p-6 shadow-lg min-w-[200px]">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">150+</div>
          <div className="text-sm text-gray-600">Projects Completed</div>
        </div>

        {/* Success Rate Card */}
        <div className="bg-[#164000] backdrop-blur-sm rounded-2xl p-6 mt-8 shadow-lg min-w-[200px]">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">95%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
