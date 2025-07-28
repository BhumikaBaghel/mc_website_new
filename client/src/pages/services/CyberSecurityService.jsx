import React from "react";
import { motion } from "framer-motion";
import cybersecurity_logo from "@/assets/cybersecurity/cybersecuity.svg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const cybersecurityFeatures = [
  {
    title: "Threat Detection & Monitoring",
    subtitle: "Continuous Threat Monitoring",
    description:
      "Proactive, real-time monitoring to identify and respond to threats before they escalate, ensuring uninterrupted security and compliance.",
  },
  {
    title: "Risk & Vulnerability Assessment",
    subtitle: "Risk Identification",
    description:
      "Identify and assess vulnerabilities across your digital infrastructure to minimize exposure and strengthen security posture.",
  },
  {
    title: "Compliance-Aligned Security",
    subtitle: "Regulatory Compliance",
    description:
      "Ensure security measures align with frameworks such as HIPAA, GDPR, PCI-DSS, and more for seamless regulatory compliance.",
  },
  {
    title: "Security Policy Management",
    subtitle: "Policy Enforcement",
    description:
      "Develop and enforce security policies that are tailored to your compliance goals and operational needs.",
  },
  {
    title: "Incident Response Planning",
    subtitle: "Incident Response",
    description:
      "Be ready for cyber incidents with structured response plans that minimize damage and support rapid recovery.",
  },
  {
    title: "Analytics & Reporting",
    subtitle: "Insightful Analytics",
    description:
      "Leverage actionable insights and clear reporting to identify gaps, drive improvements, and support audit readiness.",
  },
  {
    title: "Centralized Security Management",
    subtitle: "Unified Control",
    description:
      "Manage your security infrastructure through a centralized platform, simplifying operations and enhancing visibility.",
  },
  {
    title: "Cost & Time Efficiency",
    subtitle: "Operational Efficiency",
    description:
      "Reduce manual effort and operational overhead by automating cybersecurity processes and compliance tasks.",
  },
  {
    title: "Best Practice Guidance",
    subtitle: "Security Recommendations",
    description:
      "Access expert-driven best practices to strengthen your cybersecurity defenses and maintain continuous compliance.",
  },
];

export default function CRM() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Cybersecurity & Compliance</span>{" "}
            Platform
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Protection against digital threats through robust defense measures.
            Secure your infrastructure, mitigate risks, and meet regulatory
            demands with confidence.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={cybersecurity_logo}
              width={350}
              height={300}
              alt="Cybersecurity"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Enterprise-Grade Digital Security
            </h2>
            <p className="text-lg text-slate-300">
              Our platform provides real-time threat detection, continuous
              monitoring, and proactive protection tailored to your business
              environment.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Real-Time Threat Detection
                  </h4>
                  <p className="text-slate-300">
                    Stay ahead of evolving threats with AI-driven analytics.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                  <p className="text-slate-300">
                    Built-in support for frameworks like NIST, ISO, and HIPAA.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Proactive Risk Management
                  </h4>
                  <p className="text-slate-300">
                    Prevent incidents with automated response and patching.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Feature Grid Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Cybersecurity Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cybersecurityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6 bg-white/5 shadow-md border border-white/10 hover:shadow-blue-500/30 hover:scale-105 transition transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.subtitle}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-blue-600/20">
            <h2 className="text-3xl font-bold mb-4">
              Fortify Your Digital Infrastructure
            </h2>
            <p className="text-slate-300 mb-8">
              Let us help you build a resilient cybersecurity program tailored
              to your risk profile.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Talk to a Security Advisor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
