import privacy_logo from "../assets/logo/solution_logos/privacy.svg"; 
import folderIcon from "../assets/logo/privacy_logos/folder.png";
import safetyIcon from "../assets/logo/privacy_logos/safety.png";
import thirdPartyIcon from "../assets/logo/privacy_logos/third-party.png";
import lineageIcon from "../assets/logo/privacy_logos/lineage.png";
import analysisIcon from "../assets/logo/privacy_logos/analysis.png";
import mappingIcon from "../assets/logo/privacy_logos/mapping.png";


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
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-20">
        <div className="flex justify-center col-span-1 pt-10 md:pt-0">
          <img
            src={privacy_logo}
            width={350}
            height={300}
            alt="Privacy Manager"
          />
        </div>
        <div className="flex flex-col col-span-1 space-y-5 pt-20 md:pt-0">
          <h2 className="text-4xl font-bold '-r from-green-700 to-blue-400 bg-clip-text text-transparent">
            Privacy Manager Solutions
          </h2>
          <p className="text-2xl font-bold text-white">
            Automate compliance, reduce risk, and build trust through privacy
            intelligence.
          </p>
          <span className="text-normal text-white">
            A centralized platform for managing data privacy, governance, and
            regulatory requirements effectively.
          </span>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col rounded-lg bg-white justify-center items-center p-10 space-y-2 transition hover:scale-y-110 duration:300 '-r from-blue-200 to-green-200"
            >
              <div className="'-r from-red-200 to-green-200 rounded-full p-2 hover:scale-110 duration-300">
                <img
                  src={feature.logo}
                  alt={feature.title}
                  className="w-10 h-10 mb-1"
                />
              </div>
              <h1 className="text-2xl text-black font-bold">{feature.title}</h1>
              <h4 className="text-black font-semibold">
                <i>{feature.subtitle}</i>
              </h4>
              <p className="text-normal text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
