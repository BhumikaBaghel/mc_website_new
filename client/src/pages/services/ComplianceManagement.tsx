import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ComplianceManagement() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Compliance Management</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expert guidance for achieving and maintaining compliance with SOC 2, ISO 27001, HIPAA, PCI DSS, and other regulatory frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business compliance meeting with professionals reviewing cybersecurity documentation and frameworks" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Compliance Support</h2>
            <p className="text-lg text-slate-300 mb-6">
              Navigate complex regulatory landscapes with confidence. Our compliance experts guide you through every step of the certification process.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Gap Analysis</h4>
                  <p className="text-slate-300">Current state assessment against target compliance framework requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Implementation Planning</h4>
                  <p className="text-slate-300">Detailed roadmap with timelines and resource allocation for compliance achievement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Evidence Collection</h4>
                  <p className="text-slate-300">Automated and manual evidence gathering to support audit requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Audit Support</h4>
                  <p className="text-slate-300">Expert assistance during audits with documentation and remediation support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Frameworks */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-slate-300 text-sm">Service organization controls for security, availability, and confidentiality.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">ISO 27001</h3>
              <p className="text-slate-300 text-sm">International standard for information security management systems.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">HIPAA</h3>
              <p className="text-slate-300 text-sm">Healthcare industry privacy and security regulations compliance.</p>
            </div>
            <div className="service-card p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold mb-2">PCI DSS</h3>
              <p className="text-slate-300 text-sm">Payment card industry data security standards compliance.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Your Compliance Journey</h2>
            <p className="text-slate-300 mb-8">
              Let our experts guide you through the compliance process with minimal business disruption.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Get Compliance Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
