import { useState } from "react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  imageUrl: string;
  description: string;
  details?: string[];
};

const steps: Step[] = [
  {
    id: 1,
    title: "Needs Identification & Discovery",
    subtitle: "Understanding Your Challenges",
    duration: "1-2 weeks",
    imageUrl: "/agriculture.png",
    description:
      "We begin by understanding your unique agribusiness challenges and identifying how our expertise aligns with your needs.",
    details: [
      "Initial needs assessment",
      "Service alignment overview",
      "Preliminary project scope",
    ],
  },
  {
    id: 2,
    title: "Comprehensive Assessment & Diagnostics",
    subtitle: "Deep Dive Analysis",
    duration: "2-4 weeks",
    imageUrl: "/examine.png",
    description:
      "Thorough diagnostic review and capacity assessment to identify specific opportunities and gaps across your value chain.",
  },
  {
    id: 3,
    title: "Solution Design & Proposal Development",
    subtitle: "Tailored Solution Creation",
    duration: "1-2 weeks",
    imageUrl: "/garden.png",
    description:
      "Design customized solutions and develop comprehensive proposals with clear methodologies, timelines, and expected outcomes.",
  },
  {
    id: 4,
    title: "Implementation & Service Delivery",
    subtitle: "Transforming Your Business",
    duration: "3-12 months",
    imageUrl: "/survey.png",
    description:
      "Active service delivery including consulting, training, and professional management to drive sustainable transformation.",
  },
  {
    id: 5,
    title: "Outcome Evaluation & Future Planning",
    subtitle: "Measuring Impact & Sustainability",
    duration: "2-4 weeks",
    imageUrl: "/veggies.png",
    description:
      "Evaluate results, measure impact, and develop plans for sustained improvement and potential future collaboration.",
  },
];

const ImplementationPhases = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900 mb-2">
            Challenge Assessment
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <p>Productivity analysis</p>
            <p>Market access evaluation</p>
            <p>Financial performance review</p>
            <p>Operational efficiency assessment</p>
          </div>
        </div>
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900 mb-2">
            Service Provider Research
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <p>Industry expertise validation</p>
            <p>Track record evaluation</p>
            <p>Service capability review</p>
            <p>Reference checks</p>
          </div>
        </div>
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900 mb-2">Initial Alignment</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <p>Value chain expertise mapping</p>
            <p>Service portfolio alignment</p>
            <p>Preliminary scope discussion</p>
            <p>Expectation setting</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900">Key Deliverables</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>Initial needs assessment</li>
            <li>Service alignment overview</li>
            <li>Preliminary project scope</li>
          </ul>
        </div>
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900">Stakeholders</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>Client leads and sponsors</li>
            <li>AgMa consulting team</li>
          </ul>
        </div>
        <div className="rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <p className="font-semibold text-gray-900">Timeline</p>
          <p className="text-sm text-gray-600 mt-2">1-2 weeks</p>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({
  step,
  defaultOpen = false,
}: {
  step: Step;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src={step.imageUrl}
            alt={step.title}
            className="h-52 md:h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-2 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">{step.subtitle}</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 text-brand hover:text-brand-2 text-sm font-medium"
            >
              {open ? "Less Details" : "More Details"}
              <svg
                className={`h-5 w-5 transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-600">
            <span className="rounded-full bg-gray-100 px-2 py-1">
              {step.duration}
            </span>
          </div>
          <p className="text-gray-700 mt-3 text-sm md:text-base">
            {step.description}
          </p>
          {open && step.id === 1 && (
            <div className="mt-6">
              <ImplementationPhases />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[42vh] min-h-[340px] w-full">
        <img
          src="/process.png"
          alt="Our Proven Process"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow">
            Our Proven Process
          </h1>
          <p className="text-white/90 mt-3 max-w-2xl">
            A comprehensive, structured approach that ensures successful
            outcomes from initial engagement to sustainable transformation
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
        {/* Step 1 expanded by default */}
        <StepCard step={steps[0]} defaultOpen />

        {/* Remaining steps */}
        {steps.slice(1).map((s) => (
          <StepCard key={s.id} step={s} />
        ))}
      </div>
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
              <button className="bg-white hover:bg-gray-100 text-brand px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl">
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

export default Process;
