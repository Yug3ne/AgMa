import React, { useState } from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const services: string[] = [
  "Agribusiness Consulting",
  "Market Analysis",
  "Farm Management",
  "Financing & Grants",
  "Training & Capacity Building",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim())
      nextErrors.fullName = "Full name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      nextErrors.email = "Enter a valid email";
    if (formData.phone && !/^\+?[0-9\s-]{7,}$/.test(formData.phone))
      nextErrors.phone = "Enter a valid phone";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to transform your agribusiness? Let's start a conversation
            about how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-11 w-11 rounded-xl bg-brand/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h8M8 14h5m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <h2 className="text-2xl font-semibold text-gray-900">
                Send us a Message
              </h2>
            </div>

            {submitted && (
              <div className="mb-6 rounded-lg bg-brand/10 text-brand px-4 py-3 text-sm">
                Thank you! Your message has been sent. We'll get back to you
                within 24–48 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.fullName ? "border-red-300" : "border-gray-300"
                    } focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 placeholder-gray-400`}
                    placeholder="Your Full Name"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={
                      errors.fullName ? "error-fullName" : undefined
                    }
                  />
                  {errors.fullName && (
                    <p
                      id="error-fullName"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 placeholder-gray-400`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 placeholder-gray-400"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border ${
                      errors.phone ? "border-red-300" : "border-gray-300"
                    } focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 placeholder-gray-400`}
                    placeholder="+254764444444"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "error-phone" : undefined}
                  />
                  {errors.phone && (
                    <p id="error-phone" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 bg-white"
                    >
                      <option value="">Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand px-3 py-2.5 text-gray-900 placeholder-gray-400"
                    placeholder="Tell us about your project, challenges or questions"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand hover:bg-brand-2 disabled:opacity-60 text-white px-5 py-3 text-sm font-medium transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8"
                          strokeWidth="4"
                        ></path>
                      </svg>
                      Sending
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-gray-100 p-4">
                <span className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14v7m0-7a7 7 0 100-14 7 7 0 000 14z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Email Us</p>
                  <p className="text-sm text-gray-600">
                    info@agmainitiative.com
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Send us an email anytime
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-gray-100 p-4">
                <span className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.45l.62 2.48a2 2 0 01-.45 1.88L8.1 10.9a16 16 0 006 6l1.59-1.29a2 2 0 011.88-.45l2.48.62A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-600">+254764444444</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Mon–Fri 9AM–6PM EAT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-gray-100 p-4">
                <span className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1111.314-11.314l-4.243 4.243z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Our Locations</p>
                  <p className="text-sm text-gray-600">154 Greenville, Kenya</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Local expertise, global reach
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white ring-1 ring-gray-100 p-4">
                <span className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Response Time</p>
                  <p className="text-sm text-gray-600">24–48 Hours</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We'll get back to you quickly
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand text-white p-6 md:p-8">
              <div className="flex items-start gap-3">
                <span className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    Schedule a Consultation
                  </h3>
                  <p className="text-white/90 text-sm mt-1">
                    Prefer to speak directly? Schedule a free 30-minute
                    consultation to discuss your agribusiness challenges and
                    goals.
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg bg-white text-brand px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
                    >
                      Book A Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl ring-1 ring-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="h-7 w-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-gray-800 font-medium">
                      We'll review your message within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-7 w-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-gray-800 font-medium">
                      Initial consultation to understand your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-7 w-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-gray-800 font-medium">
                      Tailored proposal with recommended solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
