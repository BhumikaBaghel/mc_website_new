import React from "react";
import Risk from "@/assets/grc/risk.png";
import benefits from "@/assets/grc/benefits.png";

const featuresList = [
  {
    title: "Automated Audit",
    description:
      "Max Conformance takes the hassle out of compliance audits by automating the process. It conducts real-time checks and generates reports, freeing your team from tedious manual assessments.",
  },
  {
    title: "Logical Cross-Mapping",
    description:
      "Max Conformance excels in cross-mapping various compliance frameworks. It intelligently identifies commonalities and differences, simplifying the management of multiple standards simultaneously.",
  },
  {
    title: "Document Library",
    description:
      "A robust document library is at your disposal to house information security policies and procedures. Easily accessible, organized, and secure, it keeps your documentation in perfect order.",
  },
  {
    title: "Document Approval Workflow",
    description:
      "Collaborate seamlessly on policy updates and approvals with a built-in workflow, ensuring that your documentation is always up-to-date and compliant.",
  },
  {
    title: "Configurable Risk Assessment Methodology",
    description:
      "Max Conformance allows you to adapt its risk assessment methodology to match the unique needs of your organization, delivering a personalized approach to information security.",
  },
  {
    title: "Powerful Analytics",
    description:
      "Visualize key risk indicators (KRIs) and key performance indicators (KPIs) with ease. Max Conformance offers powerful analytics to represent compliance data to management, helping you make informed decisions.",
  },
];

const keyBenefits = [
  {
    title: "Centralized Compliance Management",
    description:
      "Max Conformance provides a centralized dashboard that streamlines all compliance activities. This simplifies audits, reporting, and ensures that your organization remains on the path to compliance at all times.",
    icon: "📊",
  },
  {
    title: "Customizable for Your Needs",
    description:
      "Our platform is highly adaptable and can be tailored to meet your organization's specific compliance requirements. This personalization ensures that your information security approach is aligned with your unique needs.",
    icon: "⚙️",
  },
  {
    title: "Savings on Time, Resources & Security Budget",
    description:
      "Max Conformance's automation capabilities reduce time and resource dependencies by up to 80-90%. This not only accelerates compliance efforts but also significantly trims down your security budget.",
    icon: "⏱️",
  },
  {
    title: "Reduction of Human Error",
    description:
      "With centralized monitoring and automated alerts, Max Conformance helps your organization swiftly identify non-compliance and take corrective actions, reducing the potential for human error and strengthening your security posture.",
    icon: "🛡️",
  },
];

export default function Services() {
return (
  <section className="py-20 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="gradient-text">GRC</span> Solution
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Streamline Security Compliance with Precision. Max Conformance
          automates diverse compliance frameworks while delivering insights,
          oversight, and efficiency at scale.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img
            src={Risk}
            alt="Risk Management"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Smarter, Scalable Compliance
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            Manage risk, reduce manual tasks, and ensure compliance with a
            scalable platform that adapts to your business.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold mb-1">Centralized Control</h4>
                <p className="text-slate-300">
                  Unify frameworks and audits in a single dashboard.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold mb-1">Automated Workflows</h4>
                <p className="text-slate-300">
                  Trigger evidence collection and task routing automatically.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold mb-1">Real-Time Reporting</h4>
                <p className="text-slate-300">
                  Visualize control performance and gaps instantly.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tailored GRC Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresList.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-pink-700/30 group hover:bg-opacity-20 hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-3 group-hover:text-white transition">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img
            src={benefits}
            alt="Benefits"
            className="rounded-xl shadow-2xl border border-white/10"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Key Benefits for Your Organisation
          </h2>
          <div className="flex flex-col gap-6">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-indigo-900/60 to-purple-800/30 p-6 rounded-xl border border-violet-500/20 shadow-md hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-pink-700/20">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your GRC Program?
          </h2>
          <p className="text-slate-300 mb-8">
            Let our experts tailor a solution that aligns with your goals and
            accelerates compliance.
          </p>
          {/* <Link href="/contact">
            <Button className="btn-primary px-8 py-3 font-semibold">
              Request a GRC Demo
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  </section>
);
}
