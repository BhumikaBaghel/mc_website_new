import React from "react";
import crm_logo from "@/assets/tprm/risk-management.png";
import audit from "@/assets/tprm/audit.png";
import breach from "@/assets/tprm/breach.png";
import checklist from "@/assets/tprm/checklist.png";
import doc from "@/assets/tprm/doc.png";
import documents1 from "@/assets/tprm/documents-1 (1).png";
import group from "@/assets/tprm/group.png";
import lowPrice from "@/assets/tprm/low-price (1).png";
import operator from "@/assets/tprm/operator.png";
import report from "@/assets/tprm/report.png";
import risk1 from "@/assets/tprm/risk-1.png";
import shield from "@/assets/tprm/shield.png";
import timeToMarket from "@/assets/tprm/time-to-market (1).png";
import warning from "@/assets/tprm/warning.png";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const vendorRiskFeatures = [
  {
    logo: shield,
    subtitle: "Simplicity",
    description:
      "Simplifies the entire vendor risk management process, eliminating the complexities of traditional methods that rely on spreadsheets and email exchanges.",
  },
  {
    logo: documents1,
    subtitle: "Customizable Questionnaires",
    description:
      "Streamlines communication with vendors, providing a single platform for all interactions, queries, and document submissions.",
  },
  {
    logo: group,
    subtitle: "Real-Time Collaboration",
    description:
      "Encourages real-time collaboration with vendors, enabling quick responses to queries and sharing supporting evidence.",
  },
  {
    logo: checklist,
    subtitle: "Enhanced Data Security",
    description:
      "Ensures the safety of sensitive data by securing it on a digital platform, avoiding email risks.",
  },
  {
    logo: report,
    subtitle: "Scalability",
    description:
      "Adapts to organizations of all sizes—whether they manage a few vendors or hundreds.",
  },
  {
    logo: audit,
    subtitle: "Centralized Documentation",
    description:
      "Stores all risk-related documents in one place for easy tracking and integrity.",
  },
  {
    logo: breach,
    subtitle: "Reporting and Analytics",
    description:
      "Provides actionable insights into vendor performance and risk exposure.",
  },
  {
    logo: lowPrice,
    subtitle: "Compliance and Regulatory Alignment",
    description:
      "Supports industry regulations with built-in compliance tracking features.",
  },
  {
    logo: operator,
    subtitle: "Time and Cost Savings",
    description: "Reduces assessment time and effort, boosting productivity.",
  },
  {
    logo: timeToMarket,
    subtitle: "Audit Trail",
    description:
      "Maintains a full audit trail of all activity for transparency and accountability.",
  },
  {
    logo: warning,
    subtitle: "Notification System",
    description:
      "Sends automated updates for tasks, deadlines, and assessments.",
  },
  {
    logo: risk1,
    subtitle: "Data Backup and Recovery",
    description:
      "Protects against data loss with reliable backup and recovery features.",
  },
  {
    logo: doc,
    subtitle: "User Training and Support",
    description:
      "Includes training resources and support to ensure effective onboarding.",
  },
];

export default function TPRM() {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold gradient-text">
              Third Party Risk Management Solution
            </h1>
            <p className="text-2xl font-semibold text-white">
              Streamlining Vendor Risk Assessment
            </p>
            <p className="text-base text-gray-300">
              Efficient tool transforms vendor risk assessment, enhancing
              security and compliance.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={crm_logo}
              alt="Risk Management"
              className="w-[350px] rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendorRiskFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.03] bg-gradient-to-br from-blue-800 to-purple-600/40 hover:from-pink-600 hover:to-yellow-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <img src={feature.logo} alt="logo" className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-yellow-200 group-hover:text-white mb-2">
                  {feature.subtitle}
                </h3>
                <p className="text-sm text-white/90 group-hover:text-white">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-4">
              Mitigate Third-Party Risks Now
            </h2>
            <p className="text-slate-300 mb-8">
              Discover how our platform helps streamline vendor assessments and
              elevate trust.
            </p>
            <Link to="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
