import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, Settings, CheckCircle } from "lucide-react";
import bg_image from "../assets/banner_image_6.png";
import StandardInfo from "./Standards";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={bg_image}
            alt="Cybersecurity hero banner with digital security visualization"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h3 className="font-bold mb-6">
            <span className="">
              A 'Compliance-as-a-Service' solution designed to simplify
              compliance.
            </span>
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Automate security and privacy compliance
          </h1>
          <p className="text-xl md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Revolutionize your compliance management with our cutting-edge
            automation solution. Streamline processes, reduce manual effort, and
            ensure continuous compliance with industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/governance_risk_and_compliance">
              <Button className="btn-primary px-8 py-4 text-lg font-semibold">
                Explore Our Platform
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="glass px-8 py-4 text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Max Conformance?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine deep cybersecurity expertise with cutting-edge
              technology to deliver comprehensive GRC solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Expert Guidance
              </h3>
              <p className="text-slate-300 text-center">
                Industry-leading cybersecurity professionals with decades of
                combined experience in GRC frameworks.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Integrated Platform
              </h3>
              <p className="text-slate-300 text-center">
                Unified GRC platform that streamlines governance, risk
                management, and compliance processes.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Proven Results
              </h3>
              <p className="text-slate-300 text-center">
                Track record of helping organizations achieve and maintain
                compliance while reducing cyber risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRC Approach Section */}
      <section className="py-20">
        <StandardInfo/>
      </section>
    </div>
  );
}
