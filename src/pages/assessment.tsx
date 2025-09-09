import { useMemo, useState } from "react";

type MultiSelectOption = { id: string; label: string };

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl bg-white ring-1 ring-gray-100 p-6 md:p-8">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <div className="text-sm text-gray-600 mb-6">
      Tell us about your agribusiness
    </div>
    {children}
  </section>
);

const ProgressBar = ({ step, total }: { step: number; total: number }) => {
  const percent = Math.min(
    100,
    Math.max(0, Math.round(((step - 1) / (total - 1)) * 100))
  );
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>
          {step} of {total}
        </span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full bg-green-600" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

const SelectCard = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left w-full rounded-lg border ${
      selected ? "bg-green-50 border-green-200" : "border-gray-200"
    } px-4 py-3 hover:bg-gray-50`}
  >
    {label}
  </button>
);

const CheckboxRow = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-green-600"
    />
    <span>{label}</span>
  </label>
);

const Assessment = () => {
  const totalSteps = 4; // 3 steps + completion
  const [step, setStep] = useState(1);

  // Step 1
  const businessTypes: MultiSelectOption[] = useMemo(
    () => [
      { id: "primary", label: "Primary Production (Farming)" },
      { id: "processing", label: "Processing & Value Addition" },
      { id: "distribution", label: "Distribution & Marketing" },
      { id: "input", label: "Input Supply" },
      { id: "finance", label: "Financial Services" },
      { id: "consult1", label: "Consulting Services" },
      { id: "consult2", label: "Advisory Services" },
    ],
    []
  );
  const valueChains: MultiSelectOption[] = useMemo(
    () => [
      { id: "coffee", label: "Coffee" },
      { id: "banana", label: "Banana" },
      { id: "avocado", label: "Avocado" },
      { id: "mango", label: "Mango" },
      { id: "sweet", label: "Sweet Potato" },
      { id: "dairy", label: "Dairy" },
      { id: "feed", label: "Feed & Fodder" },
      { id: "other", label: "Other" },
    ],
    []
  );
  const stages: MultiSelectOption[] = useMemo(
    () => [
      { id: "startup", label: "Startup (0-2 years)" },
      { id: "growth", label: "Growth (2-5 years)" },
      { id: "established", label: "Established (5+ years)" },
      { id: "scale", label: "Expansion/Scale-up" },
      { id: "restructuring", label: "Restructuring" },
    ],
    []
  );

  const [selectedBusinessType, setSelectedBusinessType] = useState<
    string | null
  >("primary");
  const [selectedValueChain, setSelectedValueChain] = useState<string | null>(
    "banana"
  );
  const [selectedStage, setSelectedStage] = useState<string | null>("startup");

  // Step 2
  const challenges = useMemo(
    () => [
      "Low productivity",
      "Poor market access",
      "Limited financing",
      "Quality issues",
      "Certification requirements",
      "Technology gaps",
      "Skills & capacity",
      "Supply chain inefficiencies",
      "Regulatory compliance",
      "Risk management",
    ],
    []
  );
  const [selectedChallenges, setSelectedChallenges] = useState<
    Record<string, boolean>
  >({});
  const priorities = [
    "Increasing productivity",
    "Accessing new markets",
    "Securing financing",
    "Improving quality",
    "Building capacity",
    "Managing risks",
  ];
  const [selectedPriority, setSelectedPriority] = useState<string | null>(
    "Accessing new markets"
  );

  // Step 3
  const objectives = [
    "Increase revenue by 25%+",
    "Enter new markets",
    "Achieve certification",
    "Improve operational efficiency",
    "Scale operations",
    "Secure investment",
  ];
  const timelines = [
    "3-6 months",
    "6-12 months",
    "1-2 years",
    "2+ years",
    "Flexible",
  ];
  const readiness = [
    "Ready to start immediately",
    "Ready within 30 days",
    "Ready within 3 months",
    "Still evaluating options",
    "Need to secure funding first",
  ];
  const [selectedObjective, setSelectedObjective] = useState<string | null>(
    objectives[0]
  );
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(
    "6-12 months"
  );
  const [selectedReadiness, setSelectedReadiness] = useState<string | null>(
    "Ready within 30 days"
  );

  const goNext = () => setStep((s) => Math.min(totalSteps, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const Completed = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="mx-auto h-14 w-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          Assessment Complete!
        </h2>
        <p className="text-gray-600 mt-2">
          Based on your responses, here are our recommendations for your
          agribusiness.
        </p>
      </div>

      <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-6 space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900">
          Recommended Services
        </h3>
        <div className="rounded-xl bg-gray-50 px-4 py-3">
          <p className="font-medium text-gray-900">
            Market Linkage & B2B Facilitation
          </p>
          <p className="text-sm text-gray-600">
            Connect with buyers and develop market access strategies
          </p>
          <span className="inline-block mt-2 rounded-full bg-red-100 text-red-700 text-xs px-2 py-1">
            High Priority
          </span>
        </div>
        <div className="rounded-xl bg-gray-50 px-4 py-3">
          <p className="font-medium text-gray-900">
            Value Chain Analysis & Optimization
          </p>
          <p className="text-sm text-gray-600">
            Identify bottlenecks and optimize operations for higher productivity
          </p>
          <span className="inline-block mt-2 rounded-full bg-yellow-100 text-yellow-800 text-xs px-2 py-1">
            Medium Priority
          </span>
        </div>
      </div>

      <div className="rounded-2xl bg-white ring-1 ring-gray-100 p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
        <ol className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
              1
            </span>{" "}
            Schedule a consultation with our experts
          </li>
          <li className="flex items-start gap-3">
            <span className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
              2
            </span>{" "}
            Receive a detailed proposal tailored to your needs
          </li>
          <li className="flex items-start gap-3">
            <span className="h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
              3
            </span>{" "}
            Begin your transformation journey
          </li>
        </ol>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-medium"
          >
            Schedule Consultation
          </a>
          <a
            href="/service"
            className="inline-flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-200 text-green-700 px-5 py-3 font-semibold"
          >
            Explore Service
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Agribusiness Assessment
        </h1>
        <p className="text-gray-600 mb-6">
          Help us understand your needs so we can provide the best
          recommendations
        </p>

        <ProgressBar step={step} total={totalSteps} />

        {step === 1 && (
          <Section title="Business Information">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  What type of agribusiness are you involved in?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {businessTypes.map((b) => (
                    <SelectCard
                      key={b.id}
                      label={b.label}
                      selected={selectedBusinessType === b.id}
                      onClick={() => setSelectedBusinessType(b.id)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Which value chain best describes your focus?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {valueChains.map((v) => (
                    <SelectCard
                      key={v.id}
                      label={v.label}
                      selected={selectedValueChain === v.id}
                      onClick={() => setSelectedValueChain(v.id)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  What stage is your business in?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {stages.map((s) => (
                    <SelectCard
                      key={s.id}
                      label={s.label}
                      selected={selectedStage === s.id}
                      onClick={() => setSelectedStage(s.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {step === 2 && (
          <Section title="Current Challenges">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  What are your main challenges? (Select all that apply)
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {challenges.map((c) => (
                    <CheckboxRow
                      key={c}
                      label={c}
                      checked={!!selectedChallenges[c]}
                      onChange={() =>
                        setSelectedChallenges((prev) => ({
                          ...prev,
                          [c]: !prev[c],
                        }))
                      }
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Which challenge is your highest priority?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {priorities.map((p) => (
                    <SelectCard
                      key={p}
                      label={p}
                      selected={selectedPriority === p}
                      onClick={() => setSelectedPriority(p)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {step === 3 && (
          <Section title="Objectives & Goals">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  What is your primary objective?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {objectives.map((o) => (
                    <SelectCard
                      key={o}
                      label={o}
                      selected={selectedObjective === o}
                      onClick={() => setSelectedObjective(o)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  What is your preferred timeline for achieving results?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {timelines.map((t) => (
                    <SelectCard
                      key={t}
                      label={t}
                      selected={selectedTimeline === t}
                      onClick={() => setSelectedTimeline(t)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  How ready are you to invest in professional services?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-3">
                  {readiness.map((r) => (
                    <SelectCard
                      key={r}
                      label={r}
                      selected={selectedReadiness === r}
                      onClick={() => setSelectedReadiness(r)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        )}

        {step === 4 && <Completed />}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 text-gray-700 px-4 py-2 hover:bg-gray-200 disabled:opacity-50"
            disabled={step === 1}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          {step < 4 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 font-medium"
            >
              Next
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 font-semibold"
            >
              Complete Assessment
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default Assessment;
