import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SecurityAudits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Security Audits</span> Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive security assessments including penetration testing, vulnerability assessments, and architecture reviews to identify and remediate security weaknesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Digital security audit environment with penetration testing tools and vulnerability assessment systems" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Security Testing</h2>
            <p className="text-lg text-slate-300 mb-6">
              Our security audits combine automated scanning with manual testing techniques to provide thorough coverage of your attack surface.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Penetration Testing</h4>
                  <p className="text-slate-300">Simulated attacks to identify exploitable vulnerabilities in systems and applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Vulnerability Scanning</h4>
                  <p className="text-slate-300">Automated discovery and assessment of security weaknesses across your infrastructure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Architecture Review</h4>
                  <p className="text-slate-300">Evaluation of system design and security controls for optimal protection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold mb-1">Code Review</h4>
                  <p className="text-slate-300">Static and dynamic analysis of application source code for security flaws.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Audit Types</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">External Security Audit</h3>
              <p className="text-slate-300 mb-4">Assessment of internet-facing systems and applications from an external attacker's perspective.</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>• Network penetration testing</li>
                <li>• Web application security testing</li>
                <li>• Social engineering assessment</li>
                <li>• OSINT reconnaissance</li>
              </ul>
            </div>
            <div className="service-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Internal Security Audit</h3>
              <p className="text-slate-300 mb-4">Evaluation of internal network security and potential privilege escalation paths.</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>• Internal network penetration</li>
                <li>• Active Directory assessment</li>
                <li>• Privilege escalation testing</li>
                <li>• Lateral movement analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Strengthen Your Defenses</h2>
            <p className="text-slate-300 mb-8">
              Identify vulnerabilities before attackers do with our comprehensive security audit services.
            </p>
            <Link href="/contact">
              <Button className="btn-primary px-8 py-3 font-semibold">
                Schedule Security Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
