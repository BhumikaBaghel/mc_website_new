import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";

export default function IncidentResponse() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Incident Response</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            24/7 rapid response capabilities to minimize damage, preserve evidence, and restore operations during cybersecurity incidents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Digital security emergency response center with threat monitoring and incident analysis systems" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Rapid Response Protocol</h2>
            <p className="text-lg text-slate-300 mb-6">
              When seconds count, our certified incident response team is ready to contain threats, preserve evidence, and minimize business impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Immediate Containment</h4>
                  <p className="text-slate-300">Rapid threat isolation to prevent further system compromise and data loss.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Forensic Investigation</h4>
                  <p className="text-slate-300">Digital forensics to determine attack vectors, scope, and evidence preservation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Recovery Planning</h4>
                  <p className="text-slate-300">Systematic restoration of services with enhanced security measures.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Post-Incident Analysis</h4>
                  <p className="text-slate-300">Comprehensive review and recommendations to prevent future incidents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Response Service Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">Emergency Response</h3>
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-rose-400 mr-2" />
                  <span className="text-3xl font-bold text-rose-400">24/7</span>
                </div>
                <p className="text-slate-300">Immediate Response</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Threat containment</li>
                <li>• Evidence preservation</li>
                <li>• Initial assessment</li>
                <li>• Stakeholder notification</li>
              </ul>
            </div>
            <div className="service-card p-6 rounded-xl border-2 border-violet-500">
              <h3 className="text-xl font-semibold mb-4 text-center">Full Investigation</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-violet-400">Complete</span>
                <p className="text-slate-300">Forensic Analysis</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Complete forensic investigation</li>
                <li>• Root cause analysis</li>
                <li>• Detailed incident report</li>
                <li>• Recovery recommendations</li>
              </ul>
            </div>
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">Recovery Support</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-rose-400">Ongoing</span>
                <p className="text-slate-300">Remediation Help</p>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• System restoration</li>
                <li>• Security enhancement</li>
                <li>• Staff training</li>
                <li>• Process improvement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-slate-300 mb-8">
              Our incident response team is standing by 24/7 to help you through any cybersecurity emergency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-3 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Hotline: 1-800-CYBER-911
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="glass px-8 py-3 font-semibold hover:bg-white hover:bg-opacity-20 transition-all">
                  Setup Retainer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
