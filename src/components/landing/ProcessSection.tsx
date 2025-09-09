import { useState } from "react";

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Needs Identification",
      subtitle: "Discovery & Initial Assessment",
      description:
        "Identify specific challenges, search for service providers, learn about AgMa's capabilities, and match expertise to needs.",
      duration: "1-2 Weeks",
      deliverables: ["Initial consultation", "Needs overview"],
      tasks: [
        "Identify specific challenges",
        "Search for service providers",
        "Learn about AgMa's capabilities",
        "Match expertise to needs",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Assessment & Diagnostics",
      subtitle: "Deep dive Analysis",
      description:
        "Comprehensive analysis of current state, challenges, and opportunities within your agricultural operations.",
      duration: "2-3 Weeks",
      deliverables: [
        "Diagnostic report",
        "Gap analysis",
        "Recommendations matrix",
      ],
      tasks: [
        "Current state analysis",
        "Market assessment",
        "Operational review",
        "Risk evaluation",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Proposal Development",
      subtitle: "Solution Design",
      description:
        "Develop customized solutions and strategic recommendations based on assessment findings.",
      duration: "1-2 Weeks",
      deliverables: [
        "Detailed proposal",
        "Implementation roadmap",
        "Budget estimates",
      ],
      tasks: [
        "Solution architecture",
        "Resource planning",
        "Timeline development",
        "Cost estimation",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Implementation",
      subtitle: "Service Delivery",
      description:
        "Execute the agreed-upon solutions with continuous monitoring and adjustment as needed.",
      duration: "Variable",
      deliverables: [
        "Implementation plan",
        "Progress reports",
        "Quality assurance",
      ],
      tasks: [
        "Project execution",
        "Progress monitoring",
        "Quality control",
        "Stakeholder communication",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Outcome & Review",
      subtitle: "Impact Assessment",
      description:
        "Evaluate results, measure impact, and provide ongoing support for sustained success.",
      duration: "2-4 Weeks",
      deliverables: [
        "Impact report",
        "Success metrics",
        "Future recommendations",
      ],
      tasks: [
        "Results evaluation",
        "Impact measurement",
        "Success documentation",
        "Continuous improvement",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  const [selectedStep, setSelectedStep] = useState(processSteps[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            A structured approach that ensures successful outcomes from initial
            contact to project completion and beyond.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {processSteps.map((step) => (
            <div
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedStep.id === step.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  selectedStep.id === step.id ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600">{step.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Selected Step Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Step Details */}
          <div>
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mr-4">
                {selectedStep.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedStep.title}
                </h3>
                <p className="text-lg text-gray-600">{selectedStep.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {selectedStep.description}
            </p>

            {/* Tasks */}
            <div className="space-y-4">
              {selectedStep.tasks.map((task, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Duration and Deliverables */}
          <div className="space-y-6">
            {/* Duration */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-lg font-semibold text-gray-800">
                  Duration
                </h4>
              </div>
              <p className="text-gray-700 font-medium">
                {selectedStep.duration}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-gray-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h4 className="text-lg font-semibold text-gray-800">
                  Key Deliverables
                </h4>
              </div>
              <div className="space-y-3">
                {selectedStep.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 flex items-center justify-center">
              <span>Start this Process</span>
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
  );
};

export default ProcessSection;
