import StandardInformation from "./StandardInformation";
import React, { useState } from "react";

const StandardInfo = () => {
  const [stdKey, setstdKey] = useState("iso_27001");

  const standards = [
    { id: "iso_27001", label: "ISO 27001:2022" },
    { id: "iso_27701", label: "ISO 27701:2019" },
    { id: "soc2", label: "SOC2 Type-I & Type-II" },
    { id: "mpa-tpn", label: "MPA - TPN" },
    { id: "gdpr", label: "GDPR" },
    { id: "integration", label: "Integration" },
    { id: "csa-star", label: "CSA STAR v4.0" },
    { id: "iso_27017", label: "ISO 27017:2015" },
    { id: "iso_27018", label: "ISO 27018:2019" },
    { id: "iso_22301", label: "ISO 22301:2019" },
    { id: "nist_csf", label: "NIST Cybersecurity Framework (CSF)" },
    { id: "nist_800_53", label: "NIST 800-53" },
    { id: "custom_frameworks", label: "Custom Regulatory Frameworks" },
  ];

  return (
    <div className="px-4 mt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white font-times text-center mb-10">
        Max Conformance Security Compliance Solution
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {standards.map((std) => (
          <button
            key={std.id}
            id={std.id}
            className={`std-btn py-2 px-4 rounded font-semibold transition duration-200 ${
              stdKey === std.id
                ? "bg-gradient-to-r from-pink-700 to-red-600 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => setstdKey(std.id)}
          >
            {std.label}
          </button>
        ))}
      </div>
      <StandardInformation StdKey={stdKey} />
    </div>
  );
};

export default StandardInfo;
