import React from "react";
import strategic_planning_logo from "@/assets/strategic_planning/strategic_planning.svg";
import { motion } from "framer-motion";


const consultingFeatures = [
  {
    title: "Technology Roadmapping",
    subtitle: "Strategic IT Planning",
    description:
      "Align your technology investments with long-term business objectives through expert-driven roadmaps and prioritization.",
  },
  {
    title: "Compliance Advisory",
    subtitle: "Regulatory Alignment",
    description:
      "Navigate complex compliance landscapes with tailored consulting that ensures your tech stack aligns with evolving regulations.",
  },
  {
    title: "Cloud & Infrastructure Strategy",
    subtitle: "Cloud Transformation",
    description:
      "Design and optimize cloud and on-premises infrastructure for performance, scalability, and compliance.",
  },
  {
    title: "Security Architecture Consulting",
    subtitle: "Risk-Aware Design",
    description:
      "Embed security into the core of your technology stack with architecture guidance that prioritizes threat mitigation and regulatory demands.",
  },
  {
    title: "Digital Transformation Enablement",
    subtitle: "Innovation Acceleration",
    description:
      "Identify and implement the right technologies to drive innovation, improve agility, and support compliance at scale.",
  },
  {
    title: "Governance & Policy Development",
    subtitle: "Operational Discipline",
    description:
      "Establish clear governance frameworks and IT policies that promote accountability and reduce operational risk.",
  },
  {
    title: "Vendor & Solution Evaluation",
    subtitle: "Technology Selection",
    description:
      "Make informed technology choices with our guidance on selecting vendors, tools, and platforms aligned with your goals.",
  },
  {
    title: "Change Management Support",
    subtitle: "Smooth Transitions",
    description:
      "Minimize disruption and improve adoption with expert-led change management strategies tailored to your organization.",
  },
  {
    title: "Performance Optimization",
    subtitle: "Operational Excellence",
    description:
      "Enhance the performance and reliability of your systems with consulting that uncovers inefficiencies and delivers measurable results.",
  },
];

function CRM() {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={strategic_planning_logo}
              width={350}
              height={300}
              alt="Strategic Consulting"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Strategic Technology Consulting
            </h1>
            <p className="text-2xl font-semibold text-white">
              Expert guidance shaping tech initiatives for optimal outcomes.
            </p>
            <p className="text-base text-gray-300">
              Drive innovation, maintain compliance, and future-proof your
              operations with expert IT strategy and consulting services.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Consulting Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-md transition hover:scale-[1.03] hover:shadow-orange-500/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2 text-yellow-300 group-hover:text-white">
                  {feature.subtitle}
                </h3>
                <p className="text-sm text-white/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-yellow-400/20">
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Tech Vision into Strategy
            </h2>
            <p className="text-slate-300 mb-8">
              Partner with us to design forward-thinking IT solutions and
              execute with clarity.
            </p>
            {/* <Link to="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Schedule a Strategy Session
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRM;
