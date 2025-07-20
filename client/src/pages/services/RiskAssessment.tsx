import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, Search, TrendingUp, Target } from "lucide-react";

export default function RiskAssessment() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Risk Assessment</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity risk assessments that identify vulnerabilities, quantify business impact, and provide actionable remediation strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Digital security concepts with risk analysis visualization and threat modeling" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-slate-300 mb-6">
              We conduct thorough risk assessments using industry-standard frameworks including NIST, ISO 27001, and FAIR to provide you with a complete understanding of your cybersecurity posture.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Asset Discovery & Classification</h4>
                  <p className="text-slate-300">Comprehensive inventory of digital assets with business impact classification.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Threat Modeling</h4>
                  <p className="text-slate-300">Industry-specific threat landscape analysis and attack vector identification.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Vulnerability Assessment</h4>
                  <p className="text-slate-300">Technical and procedural vulnerability identification with CVSS scoring.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Risk Quantification</h4>
                  <p className="text-slate-300">Business impact analysis with financial risk modeling and prioritization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Receive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Executive Summary</h3>
              <p className="text-slate-300">High-level risk overview with business impact and strategic recommendations for leadership.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Report</h3>
              <p className="text-slate-300">Detailed technical findings with vulnerability details, exploitation scenarios, and remediation steps.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Remediation Roadmap</h3>
              <p className="text-slate-300">Prioritized action plan with timelines, resource requirements, and implementation guidance.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Assess Your Risk?</h2>
            <p className="text-slate-300 mb-8">
              Get a comprehensive understanding of your cybersecurity posture with our expert risk assessment services.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Schedule Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
