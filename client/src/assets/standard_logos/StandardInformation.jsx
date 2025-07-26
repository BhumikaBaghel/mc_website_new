import React from "react";
import iso_27001 from "../assets/logo/iso27002white.png";
import iso_27701 from "../assets/logo/iso27701white.png";
import soc2 from "../assets/logo/soc.png";
import mpa_tpn from "../assets/logo/mpn.png";
import gdpr from "../assets/logo/gdpr-main.png";
import integration from "../assets/logo/integration.png";
import csa_star from "../assets/logo/4-1.png";
import { Link } from "react-router-dom";
import nist_csf from "../assets/logo/nist_csf.webp";
import nist_800_53 from "../assets/logo/nist-800-53.png";
import iso_27017 from "../assets/logo/iso_27017.png";
import iso_27018 from "../assets/logo/iso_27018.png";
import custom_frameworks from "../assets/logo/custom_framewroks.avif";
import iso_22301 from "../assets/logo/iso_22301.png";
const StandardInformationData = {
  iso_27001: {
    heading: "ISO 27001:2022",
    text: `
ISO 27001 is the standard for information security management system including clauses to have an effective ISMS in place. The standard has a list of 93 controls in its Annexure section to support the implementation of specific clauses.<br/>
These controls are divided into four groups as follows:<br/>
<ol>
  <li>1) Organisation controls</li>
  <li>2) Physical Security Controls</li>
  <li>3) People</li>
  <li>4) Technology related controls</li>
</ol><br/>
The implementation guidance of all these 93 controls is provided in the ISO 27002:2022.<br/>
Max Conformance modules constitute to support all the applicable clauses and also support implementation of all your controls. This enables you to keep the track of support clauses, controls and all the risks for which controls are applicable for treatment.<br/>
This enables organisation to easily keep track of all the compliance parameters at one place with automated tracking and alerting — reducing the compliance effort by almost 80%.<br/>
`,
    logo: iso_27001,
  },

  iso_27701: {
    heading: "ISO 27701:2019",
    text: `
ISO 27701 is standard for privacy information management system including privacy management clauses to have effective PIMS in place. The standard has been documented in a way that it serves as an additional layer over the ISMS (check our ISO 27001:2022 for more information).<br/>
In order to attain compliance with the PIMS standard the organisation needs to implement ISMS in the first place or they can even implement both standards collectively.<br/>
PIMS has documented their controls set with respect to ISO 27002:2013 controls (114 controls) where it mentions whether additional implementation of the control ISO 27002:2013 is required or not.<br/>
The standard also provides additional controls for complying with the privacy principles. These additional controls are related to data controller and data processor.<br/>
Max Conformance implementation of ISO 27701:2019 will facilitate you to know which controls to implement and what to implement in both the cases where ISO 27001:2022 is implemented and where it is not implemented.<br/>
Hence, organisation has liberty to achieve their ISO 27701:2019 objective with initialization of one activity for all controls in this standard.<br/>
`,
    logo: iso_27701,
  },

  soc2: {
    heading: "SOC2 Type-I & Type-II",
    text: `
The SOC 2 framework is based on five Trust Services Criteria (TSC): Security, Confidentiality, Process Integrity, Availability, and Privacy. Security is a mandatory criterion, while the others are optional based on the organization's needs.<br/>
SOC 2 has 302 points of focus that guide organizations in forming control statements aligned with their operations.<br/>
Max Conformance facilitates easy transition to SOC 2 if ISO 27001:2022 is already implemented, or a fresh start implementation can be carried out based on selected TSCs.<br/>
Depending on whether Type I or II is chosen, organizations can monitor controls, associated evidence, and schedule compliance checks accordingly.<br/>
This streamlines compliance, helping maintain control documentation, risk assessments, and more — ensuring a gap-free audit and a smooth SOC 2 implementation process.<br/>
`,
    logo: soc2,
  },

  "mpa-tpn": {
    heading: "MPA - TPN",
    text: `
This framework is largely adopted by media and entertainment industry organizations to prevent content security breaches and ensure secure content handling.<br/>
Max Conformance supports full implementation of MPA-TPN controls through its powerful modules and customizable compliance tracking parameters.<br/>
This allows organizations to manage controls, risk assessments, and documents effectively, in alignment with MPA-TPN framework requirements.<br/>
`,
    logo: mpa_tpn,
  },

  gdpr: {
    heading: "GDPR",
    text: `
The General Data Protection Regulation (GDPR) is a landmark EU law enacted in 2018 to safeguard the personal data and privacy of EU citizens.<br/>
GDPR applies globally to any organization processing EU citizen data, making it one of the most comprehensive data protection regulations.<br/>
Automated solutions like Max Conformance streamline GDPR compliance by reducing administrative burden and enhancing operational efficiency.<br/>
By implementing Max Conformance, organizations can minimize the risk of non-compliance penalties while building trust with stakeholders and customers.<br/>
This proactive approach to privacy management supports long-term business success and accountability.<br/>
`,
    logo: gdpr,
  },

  integration: {
    heading: "Integration",
    text: `
The Max Conformance Solution for Security Compliance Automation represents a cutting-edge approach to achieving robust security compliance across a diverse range of environments. It is designed to seamlessly integrate with third-party applications such as AWS, Google Workspace, Microsoft Azure, JumpCloud, and more, offering a comprehensive and centralized solution for enhancing and monitoring compliance. In today's complex digital landscape, maintaining security compliance has become a paramount concern. Organizations must navigate an intricate web of regulations, frameworks, and best practices, making it increasingly challenging to ensure that data and systems are adequately protected.<br/>
The Max Conformance Solution simplifies this process by serving as a unified hub for compliance management. By integrating with third-party applications, the system gathers real-time data and insights from various platforms, enabling organizations to maintain compliance standards more efficiently. The solution can automatically assess, monitor, and report on compliance status, streamlining the compliance lifecycle.<br/>
Key features of the Max Conformance Solution include:<br/>
<ul>
  <li><strong>Unified Dashboard:</strong> A single interface that provides a holistic view of compliance status across integrated platforms.</li>
  <li><strong>Automated Auditing:</strong> Regularly scheduled compliance audits and assessments, reducing the manual effort involved.</li>
  <li><strong>Real-time Monitoring:</strong> Constantly tracks changes and alerts administrators to non-compliance issues for prompt remediation.</li>
  <li><strong>Customizable Rules:</strong> Adaptable compliance rules and policies, ensuring alignment with specific regulatory requirements.</li>
  <li><strong>Intelligent Reporting:</strong> Generates detailed compliance reports and documentation for audits and executive reporting.</li>
</ul><br/>
This integration of third-party applications like AWS, Google Workspace, Microsoft Azure, and JumpCloud brings forth a dynamic and adaptable solution that can be tailored to the specific needs of any organization. In an era where data breaches and cyber threats are on the rise, the Max Conformance Solution empowers businesses to stay ahead of compliance challenges, protect their data, and maintain a secure digital environment.<br/>
`,
    logo: integration,
  },

  "csa-star": {
    heading: "CSA STAR v4.0",
    text: `
CSA STAR (Security, Trust, Assurance, and Risk) is a globally recognized framework for cloud security assurance and compliance. The latest version, CSA STAR v4.0, has significantly evolved to meet the dynamic needs of the cloud computing landscape. One of its most notable components is the Cloud Control Matrix (CCM), which offers a comprehensive set of security and compliance controls. What sets CSA STAR v4.0 apart is its seamless integration with automated solutions like the Max Conformance solution, which enhances compliance and saves both time and money.<br/>
The CSA STAR v4.0, when implemented with the Max Conformance solution, provides organizations with a powerful toolset for managing their cloud security and compliance needs. Max Conformance leverages automation and machine learning to ensure that an organization's cloud infrastructure aligns with the CSA CCM and other industry standards. This integration not only improves the effectiveness of compliance efforts but also significantly reduces the manual workload required for assessments and audits.<br/>
By automating the compliance process, Max Conformance identifies potential vulnerabilities and non-compliance issues in real-time, allowing organizations to proactively address security risks. This dynamic approach not only saves valuable time but also reduces the costs associated with remediation efforts and potential fines.<br/>
In summary, CSA STAR v4.0, combined with the Max Conformance solution, is a game-changer for cloud security and compliance. It streamlines the implementation of cloud security best practices, enhances compliance effectiveness, and ultimately helps organizations save time and money in their journey to secure their cloud environments.<br/>
`,
    logo: csa_star,
  },
  iso_27017: {
    heading: "ISO 27017:2015",
    text: `
ISO 27017 provides guidelines for information security controls applicable to the provision and use of cloud services. It builds upon ISO 27002 by offering specific implementation guidance for both cloud service providers and customers.<br/>
The standard includes additional controls that address cloud-specific risks such as shared responsibilities, virtual machine configurations, and customer data segregation.<br/>
Max Conformance supports ISO 27017 by helping organizations track shared control responsibilities, monitor cloud-specific risks, and ensure cloud service agreements meet security best practices.<br/>
By integrating these controls with your ISMS, organizations can enhance their cloud security posture while simplifying evidence management and compliance tracking through automation.<br/>
`,
    logo: iso_27017,
  },

  iso_27018: {
    heading: "ISO 27018:2019",
    text: `
ISO 27018 focuses on the protection of personal data in the cloud and is based on the ISO 27002 control framework with additional privacy-specific guidance.<br/>
It provides a set of controls and implementation guidance to help public cloud service providers acting as PII processors comply with applicable privacy principles.<br/>
Max Conformance automates the implementation of ISO 27018 controls by aligning them with data handling, access management, consent, and incident response policies.<br/>
This enables providers to demonstrate strong privacy commitments and ensures transparent and secure processing of personal information in cloud environments.<br/>
`,
    logo: iso_27018,
  },

  iso_22301: {
    heading: "ISO 22301:2019",
    text: `
ISO 22301 is the international standard for Business Continuity Management Systems (BCMS), focusing on preparing for, responding to, and recovering from disruptive incidents.<br/>
It enables organizations to identify threats, assess impact, and implement recovery plans to maintain critical business operations during and after crises.<br/>
Max Conformance helps organizations align their continuity strategies with ISO 22301 by mapping controls to risk scenarios, impact assessments, and recovery timelines.<br/>
Automated workflows guide the setup and monitoring of business continuity plans, ensuring readiness, compliance, and minimal disruption to operations.<br/>
`,
    logo: iso_22301,
  },

  nist_csf: {
    heading: "NIST Cybersecurity Framework (CSF)",
    text: `
The NIST CSF is a voluntary framework consisting of standards, guidelines, and best practices to manage and reduce cybersecurity risks.<br/>
It is organized into five core functions: Identify, Protect, Detect, Respond, and Recover, making it highly adaptable for any sector or organization size.<br/>
Max Conformance leverages the CSF to map security controls, track cybersecurity maturity, and automate evidence collection aligned with each function.<br/>
This helps organizations measure risk posture, close gaps efficiently, and report compliance to stakeholders with clarity and confidence.<br/>
`,
    logo: nist_csf,
  },

  nist_800_53: {
    heading: "NIST SP 800-53 Rev. 5",
    text: `
NIST 800-53 provides a comprehensive catalog of security and privacy controls for federal information systems and organizations.<br/>
It supports risk management programs and is widely adopted beyond government to create secure and resilient systems.<br/>
With Max Conformance, organizations can automate the selection, tailoring, and implementation tracking of 800-53 controls across 20 control families.<br/>
The solution simplifies control inheritance, cross-mapping with other standards, and continuous monitoring for robust compliance and audit readiness.<br/>
`,
    logo: nist_800_53,
  },

  custom_frameworks: {
    heading: "Custom Regulatory Frameworks",
    text: `
Organizations often need to implement custom regulatory frameworks due to specific industry, regional, or internal governance requirements.<br/>
Max Conformance allows for flexible creation and management of custom control frameworks tailored to your organization's unique needs.<br/>
Users can define custom controls, link them to risks, assign ownership, and track implementation across business units — all in one centralized system.<br/>
Automated reporting, compliance scoring, and real-time alerts help ensure governance standards are consistently enforced and auditable.<br/>
`,
    logo: custom_frameworks,
  },
};



export default function StandardInformation({ StdKey }) {
  const obj = StandardInformationData[StdKey] || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20 mb-20 px-4 md:px-10">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-white font-times mb-5">
          {obj.heading}
        </h1>
        <div className="text-sm md:text-base font-normal text-white font-times leading-relaxed" dangerouslySetInnerHTML={{ __html: obj.text }}>
        </div>
        <Link to='/contact_form' className="w-fit text-sm font-semibold bg-gradient-to-r from-pink-700 to-red-600 mt-4 text-white py-3 px-6 rounded shadow-lg hover:scale-105 transition">
          Get Started
        </Link>
      </div>
      <div className="flex justify-center">
        <img
          src={obj.logo}
          alt={obj.heading}
          className="max-w-full md:max-w-xs"
        />
      </div>
    </div>
  );
}