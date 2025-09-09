const About = () => {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/aboutmaize.png"
            alt="Agricultural landscape with tractor"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className=" h-[80vh] relative flex items-center justify-center flex-col">
          <h1 className="text-white text-8xl font-bold">
            About AgMa Initiative
          </h1>
          <p className="text-white text-lg md:text-xl font-medium text-center max-w-3xl mt-4">
            Transforming agribusiness through expert consulting, comprehensive
            training, and sustainable market systems development worldwide.
          </p>
        </div>
      </section>
      {/* Stats cards - overlap hero bottom */}
      <section className="relative bottom-16 z-20 -mt-24 md:-mt-28 lg:-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Projects Completed */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-black/5">
              <img
                src="/farm.png"
                alt="Projects completed placeholder"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  150+
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  Projects Completed
                </div>
                <div className="text-sm text-slate-600">
                  Successful agribusiness transformations across multiple value
                  chains
                </div>
              </div>
            </div>

            {/* Clients Served */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-black/5">
              <img
                src="/shake.png"
                alt="Clients served placeholder"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  500+
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  Clients Served
                </div>
                <div className="text-sm text-slate-600">
                  From smallholder farmers to large agribusiness enterprises
                </div>
              </div>
            </div>

            {/* Countries */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-black/5">
              <img
                src="/world.png"
                alt="Countries placeholder"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  15+
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  Countries
                </div>
                <div className="text-sm text-slate-600">
                  International experience across diverse agricultural markets
                </div>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden ring-1 ring-black/5">
              <img
                src="/til.png"
                alt="Success rate placeholder"
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-slate-800 mb-2">
                  95%
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  Success Rate
                </div>
                <div className="text-sm text-slate-600">
                  Client satisfaction and project success metrics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="space-y-6">
              <img
                src="/mission.png"
                alt="Mission placeholder"
                className="h-64 w-full object-cover rounded-lg"
              />
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To transform agribusiness operations through expert
                  consulting, comprehensive training, and sustainable market
                  systems development, creating lasting impact that drives
                  inclusive growth and prosperity across agricultural value
                  chains.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="space-y-6">
              <img
                src="/teamwork.png"
                alt="Vision placeholder"
                className="h-64 w-full object-cover rounded-lg"
              />
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the leading catalyst for sustainable agribusiness
                  transformation, empowering organizations with the knowledge,
                  systems, and capabilities needed to thrive in competitive
                  markets while contributing to food security and rural
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Core Capabilities
            </h2>
            <p className="mt-3 text-slate-600">
              Our expertise spans the entire agribusiness value chain, from
              strategic planning to implementation and sustainable growth.
            </p>
          </div>

          {/* Row 1 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/consulting.png"
                alt="Strategic Consulting"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-700/40"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold">
                Expert guidance in agribusiness strategy, market analysis, and
                business planning.
              </h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Due Diligence
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Value Chain Analysis
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Strategic Planning
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Investment Readiness
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-slate-900 font-semibold">
                Comprehensive capacity building programs for sustainable growth.
              </h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  MSD Training
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Technical Skills
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Certification Support
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Leadership Development
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden order-first md:order-none">
              <img
                src="/training.png"
                alt="Training & Development"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-700/40"></div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/management.png"
                alt="Professional Management"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-700/40"></div>
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div>
            <div>
              <h3 className="text-slate-900 font-semibold">
                Operational excellence through systematic management and
                optimization.
              </h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  System Implementation
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Process Optimization
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Quality Management
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Performance Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Value Chain Expertise */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Value Chain Expertise
            </h2>
            <p className="mt-3 text-emerald-100 max-w-3xl mx-auto">
              Deep domain knowledge and proven experience across multiple
              agricultural value chains.
            </p>
          </div>

          {/* Row 1: 4 items */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center text-white">
              <img
                src="/Hot Beverage.png"
                alt="Coffee"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Coffee</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  10+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  45+
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <img
                src="/Banana.png"
                alt="Banana"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Banana</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  8+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  32+
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <img
                src="/Avocado.png"
                alt="Avocado"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Avocado</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  6+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  28+
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <img src="/Mango.png" alt="Mango" className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-extrabold">Mango</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  7+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  25+
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 3 items centered */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center text-white">
              <img
                src="/Sweet Potato.png"
                alt="Sweet Potato"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Sweet Potato</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  5+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  18+
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <img
                src="/Milk Bottle.png"
                alt="Dairy"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Dairy</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  6+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  28+
                </p>
              </div>
            </div>
            <div className="text-center text-white">
              <img
                src="/Activity Feed.png"
                alt="Feed & Fodder"
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-2xl font-extrabold">Feed &amp; Fodder</h3>
              <div className="mt-2 space-y-1 text-emerald-100">
                <p>
                  <span className="font-semibold text-white">Experience:</span>{" "}
                  4+ years
                </p>
                <p>
                  <span className="font-semibold text-white">Projects:</span>{" "}
                  15+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our Approach
            </h2>
            <p className="mt-3 text-slate-600">
              Principles that guide our work and ensure sustainable, impactful
              outcomes for our clients.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Market Systems Development */}
            <div>
              <img
                src="/approach-1.png"
                alt="Market systems development"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Market Systems Development
              </h3>
              <p className="mt-2 text-slate-600">
                We believe in sustainable market-focused approaches that create
                lasting impact and drive inclusive growth.
              </p>
            </div>
            {/* Capacity Building */}
            <div>
              <img
                src="/approach-2.png"
                alt="Capacity building"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Capacity Building
              </h3>
              <p className="mt-2 text-slate-600">
                Our training programs are designed to build internal
                capabilities that ensure long-term sustainability and
                independence.
              </p>
            </div>

            {/* Evidence-Based Solutions */}
            <div>
              <img
                src="/approach-3.png"
                alt="Evidence-based solutions"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Evidence-Based Solutions
              </h3>
              <p className="mt-2 text-slate-600">
                Every recommendation is backed by thorough analysis, data-driven
                insights, and proven methodologies.
              </p>
            </div>
            {/* Collaborative Partnership */}
            <div>
              <img
                src="/approach-4.png"
                alt="Collaborative partnership"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Collaborative Partnership
              </h3>
              <p className="mt-2 text-slate-600">
                We work as partners, not just consultants, ensuring knowledge
                transfer and sustainable implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
      <div className="">
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
    </main>
  );
};

export default About;
