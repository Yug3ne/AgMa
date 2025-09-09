const Service = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/aboutmaize.png"
            alt="Agricultural landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="h-[60vh] relative z-10 flex items-center justify-center flex-col text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold">
            Transform Your Agribusiness
          </h1>
          <p className="text-white/90 mt-4 max-w-3xl text-sm md:text-base font-medium">
            Comprehensive solutions designed to drive sustainable growth across
            the entire agricultural value chain.
          </p>
        </div>
      </section>

      {/* Service: Strategic Consulting */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/discuss.png"
                alt="Strategic consulting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Strategic Consulting
              </h2>
              <p className="mt-3 text-slate-600">
                Comprehensive consulting services to optimize your agribusiness
                operations and drive sustainable growth through data-driven
                strategies.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Timeline
                  </div>
                  <p className="mt-2 text-slate-600">4–12 weeks</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Key Deliverables
                  </div>
                  <ul className="mt-2 text-slate-600 list-disc list-inside space-y-1">
                    <li>Strategic roadmap</li>
                    <li>Business plans</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  Service Features
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-slate-700">
                  {[
                    "Agri-business Due Diligence",
                    "Value Chain Analysis",
                    "Strategic Planning",
                    "Business Planning",
                    "Investment Readiness",
                    "Market Access Strategy",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
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
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center">
                  GET STARTED
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
          </div>
        </div>
      </section>

      {/* Service: Training & Capacity Building */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/womenfarming.png"
                alt="Training and development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Training &amp; Capacity Building
              </h2>
              <p className="mt-3 text-slate-600">
                Tailored training programs designed to enhance organizational
                capabilities and build sustainable capacity across your value
                chain.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Timeline
                  </div>
                  <p className="mt-2 text-slate-600">2–8 weeks</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Key Deliverables
                  </div>
                  <ul className="mt-2 text-slate-600 list-disc list-inside space-y-1">
                    <li>Training materials</li>
                    <li>Skill assessments</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  Service Features
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-slate-700">
                  {[
                    "Market Systems Development",
                    "Technical Training",
                    "Certification Processes",
                    "Governance & Leadership",
                    "Environmental Management",
                    "Social Management Systems",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
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
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center">
                  GET STARTED
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
          </div>
        </div>
      </section>

      {/* Service: Professional Management */}
      <section className="py-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src="/discuss.png"
                alt="Professional management"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Professional Management
              </h2>
              <p className="mt-3 text-slate-600">
                Professional management services to optimize operations,
                implement systems, and ensure sustainable business practices.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Timeline
                  </div>
                  <p className="mt-2 text-slate-600">2–8 weeks</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />{" "}
                    Key Deliverables
                  </div>
                  <ul className="mt-2 text-slate-600 list-disc list-inside space-y-1">
                    <li>System documentation</li>
                    <li>Process manuals</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  Service Features
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-slate-700">
                  {[
                    "Operational System Design",
                    "Process Optimization",
                    "Quality Management Systems",
                    "Supply Chain Management",
                    "Farmer Coordination Models",
                    "Technology Implementation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
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
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center">
                  GET STARTED
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
          </div>
        </div>
      </section>

      {/* Additional Specialized Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Additional Specialized Services
            </h2>
            <p className="mt-3 text-slate-600">
              Complementary services to support your complete transformation
              journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Market Linkage & B2B Facilitation */}
            <div>
              <img
                src="/market.png"
                alt="Market Linkage"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Market Linkage &amp; B2B Facilitation
              </h3>
              <p className="mt-2 text-slate-600">
                Connect farmers and businesses to profitable markets
              </p>
            </div>

            {/* Access to Finance Advisory */}
            <div>
              <img
                src="/finance.png"
                alt="Access to Finance"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Access to Finance Advisory
              </h3>
              <p className="mt-2 text-slate-600">
                Support in securing funding and investment
              </p>
            </div>

            {/* Certification Support */}
            <div>
              <img
                src="/certificate.png"
                alt="Certification Support"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Certification Support
              </h3>
              <p className="mt-2 text-slate-600">
                Guidance through certification processes
              </p>
            </div>

            {/* Monitoring & Evaluation */}
            <div>
              <img
                src="/evaluation.png"
                alt="Monitoring and Evaluation"
                className="w-full h-56 md:h-64 object-cover rounded-lg"
              />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Monitoring &amp; Evaluation
              </h3>
              <p className="mt-2 text-slate-600">
                Track progress and measure impact
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-gray-50">
        <div className="">
          <div className="relative overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">
            <img
              src="/cta.png"
              alt="Call to action background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 " />
            <div className="relative z-10">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Agribusiness?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white mb-8 font-bold max-w-4xl mx-auto leading-relaxed">
                Let's start with a comprehensive assessment of your current
                situation and identify opportunities for growth.
              </p>

              {/* CTA Button */}
              <button className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl">
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
        </div>
      </section>
    </main>
  );
};

export default Service;
