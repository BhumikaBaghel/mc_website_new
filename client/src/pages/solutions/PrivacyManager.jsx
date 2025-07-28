import privacy_logo from "@/assets/privacy_manager/privacy.svg";
import folderIcon from "@/assets/privacy_manager/folder.png";
import safetyIcon from "@/assets/privacy_manager/safety.png";
import thirdPartyIcon from "@/assets/privacy_manager/third-party.png";
import lineageIcon from "@/assets/privacy_manager/lineage.png";
import analysisIcon from "@/assets/privacy_manager/analysis.png";
import mappingIcon from "@/assets/privacy_manager/mapping.png";
import { Link } from "react-router-dom";
import {motion } from "framer-motion";

const privacyFeatures = [
  {
    title: "ROPA",
    subtitle: "Records of Processing Activities",
    description:
      "Maintain dynamic and compliant records of your data processing activities, automatically generating audit-ready documentation.",
    logo: folderIcon,
  },
  {
    title: "Data Mapping",
    subtitle: "Visualize Data Flow",
    description:
      "Map personal data across your systems to identify sources, storage, processing, and sharing patterns for better transparency and compliance.",
    logo: mappingIcon,
  },
  {
    title: "DPIA",
    subtitle: "Data Protection Impact Assessment",
    description:
      "Conduct structured DPIAs to assess, track, and mitigate risks associated with high-risk data processing operations.",
    logo: analysisIcon,
  },
  {
    title: "Data Lineage",
    subtitle: "Track Data Lifecycle",
    description:
      "Understand how personal data flows through your ecosystem with clear diagrams and lifecycle tracking to support investigations and audits.",
    logo: lineageIcon,
  },
  {
    title: "Third-Party Risk Assesment",
    subtitle: "Vendor Privacy Assessment",
    description:
      "Evaluate and manage data privacy risks from third-party vendors with automated risk scoring and compliance tracking.",
    logo: thirdPartyIcon,
  },
  {
    title: "Consent Management",
    subtitle: "User Consent Control",
    description:
      "Capture, manage, and honor user consent preferences across channels while maintaining real-time logs for audit and regulatory reporting.",
    logo: safetyIcon,
  },
];

export default function PrivacyManager() {
  return (
    <section className=" text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={privacy_logo}
              width={350}
              height={300}
              alt="Privacy Manager"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-blue-400 bg-clip-text text-transparent">
              Privacy Manager Solutions
            </h2>
            <p className="text-2xl font-semibold text-white">
              Automate compliance, reduce risk, and build trust through privacy
              intelligence.
            </p>
            <p className="text-base text-gray-300">
              A centralized platform for managing data privacy, governance, and
              regulatory requirements effectively.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyFeatures.map((feature, index) => (
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
          <div className="bg-white/5 p-8 rounded-xl max-w-2xl mx-auto shadow-lg border border-green-500/20">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead of Privacy Regulations
            </h2>
            <p className="text-slate-300 mb-8">
              See how our Privacy Manager can help your organization streamline
              governance and data protection.
            </p>
            {/* <Link to="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Request a Demo
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
