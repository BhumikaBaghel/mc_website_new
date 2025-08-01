import React from "react";
import { motion } from "framer-motion";
import crm_logo from "@/assets/crm/cloud-risk-1.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const cloudComplianceFeatures = [
  {
    title: "Automated Compliance",
    subtitle: "Automated Compliance",
    description:
      "Max Conformance scans your organization's cloud infrastructure, automatically checking it against a wide range of compliance frameworks. This significantly reduces the manual effort required for compliance checks.",
  },
  {
    title: "Multi-Framework Support",
    subtitle: "Multi-Framework Support",
    description:
      "It supports multiple compliance standards, making it a one-stop solution for organizations adhering to different regulatory requirements.",
  },
  {
    title: "Insightful Analytics",
    subtitle: "Insightful Analytics",
    description:
      "The platform provides powerful analytics that offer in-depth insights into your cloud environment, helping you identify potential compliance gaps and areas for improvement.",
  },
  {
    title: "Best Practice Recommendations",
    subtitle: "Best Practice Recommendations",
    description:
      "Max Conformance not only detects non-compliance but also offers best practices and recommendations to bring your cloud infrastructure up to standard.",
  },
  {
    title: "Security Health Check",
    subtitle: "Security Health Check",
    description:
      "The solution performs a comprehensive security health check of your organization's cloud environment, pinpointing vulnerabilities and security risks.",
  },
  {
    title: "Time and Cost Savings",
    subtitle: "Time and Cost Savings",
    description:
      "By automating compliance checks and offering recommendations, Max Conformance reduces the time and resources needed to maintain compliance.",
  },
  {
    title: "Risk Mitigation",
    subtitle: "Risk Mitigation",
    description:
      "The platform helps identify and mitigate security risks, reducing the chances of data breaches and compliance violations.",
  },
  {
    title: "Centralized Management",
    subtitle: "Centralized Management",
    description:
      "Max Conformance provides a centralized platform to manage compliance across all your cloud services and providers.",
  },
  {
    title: "Scalability",
    subtitle: "Scalability",
    description:
      "Whether your organization is small or large, Max Conformance is scalable to accommodate your needs as you grow.",
  },
  {
    title: "Ease of Reporting",
    subtitle: "Ease of Reporting",
    description:
      "The solution simplifies reporting for audits and regulatory reviews, ensuring your organization can quickly generate the necessary documentation.",
  },
  {
    title: "Customizable Alerts",
    subtitle: "Customizable Alerts",
    description:
      "Tailor the platform to your specific needs with customizable alerts and notifications.",
  },
];

export default function CRM() {
  return (
    <section className=" text-white py-20">
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
              src={crm_logo}
              alt="Risk Management"
              className="w-full max-w-md rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-blue-500 gradient-text">
              Cloud Risk Management Solution
            </h1>
            <p className="text-2xl font-semibold text-white">
              Your ultimate tool for effortless cloud compliance and security
              management
            </p>
            <p className="text-base text-gray-300">
              Revolutionary platform ensures cloud compliance and security with
              industry standards
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudComplianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-green-100 text-black rounded-2xl p-8 
             shadow-[0_10px_20px_rgba(0,255,255,0.1)] 
             hover:shadow-[0_12px_24px_rgba(0,255,180,0.2)] 
             transition hover:scale-[1.03] duration-300 ease-in-out 
             flex flex-col items-center text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="bg-gradient-to-tr from-red-200 to-green-200 rounded-full p-3">
                  <img
                    src={feature.logo}
                    alt={feature.title}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <h4 className="font-semibold italic">{feature.subtitle}</h4>
                <p className="text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Secure the Cloud?
            </h2>
            <p className="text-slate-300 mb-8">
              Discover how our platform helps you manage risk and maintain
              compliance effortlessly.
            </p>
            <Link to="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
