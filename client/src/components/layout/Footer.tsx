import { Link } from "wouter";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png"; // Adjust the path as necessary


export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              <img src={logo} alt="Company Logo" className="h-10 inline-block mr-2" />
            </div>
            <p className="text-slate-300 mb-4">
              Leading cybersecurity GRC solutions that protect your business,
              ensure compliance, and drive growth through intelligent risk
              management.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-violet-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/governance_risk_and_compliance">
                  <span className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer">
                    Governance Risk and Compliance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity_service">
                  <span className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer">
                    Cybersecurity
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/strategic_planning_service">
                  <span className="text-slate-300 hover:text-violet-400 transition-colors cursor-pointer">
                    Strategic Technology Consulting
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-slate-300">
              <p>Mumbai, India</p>
              <p>Phone: +91 7977121851 / +91 9789862971</p>
              <p>Email: enquiry@maxconformance.com</p>
              {/* <div className="pt-2">
                <p className="text-red-400 font-semibold">
                  Emergency: 1-800-CYBER-911
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Max Conformance Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
