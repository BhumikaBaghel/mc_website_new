import { Link } from "wouter";
import { BarChart3, Calendar, AlertTriangle, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "risk-assessment",
      title: "Risk Assessment",
      description: "Comprehensive evaluation of your organization's cybersecurity risks with detailed remediation roadmaps.",
      icon: BarChart3,
      href: "/services/risk-assessment"
    },
    {
      id: "compliance-management", 
      title: "Compliance Management",
      description: "Navigate complex regulatory requirements with expert guidance for SOC 2, ISO 27001, HIPAA, and more.",
      icon: Calendar,
      href: "/services/compliance-management"
    },
    {
      id: "incident-response",
      title: "Incident Response", 
      description: "24/7 rapid response services to contain, investigate, and recover from cybersecurity incidents.",
      icon: AlertTriangle,
      href: "/services/incident-response"
    },
    {
      id: "security-audits",
      title: "Security Audits",
      description: "In-depth security assessments including penetration testing, vulnerability scans, and architecture reviews.",
      icon: Shield,
      href: "/services/security-audits"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity consulting services designed to protect, monitor, and strengthen your organization's security posture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} href={service.href}>
                <div className="service-card p-8 rounded-xl card-hover cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-rose-400 font-semibold">Learn More →</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Choose Our Services */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Cybersecurity professional working on advanced security systems" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-slate-300">Certified professionals with real-world experience across industries and threat landscapes.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Modern technology setup for cybersecurity operations center" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Proven Methodology</h3>
              <p className="text-slate-300">Battle-tested frameworks and processes refined through hundreds of successful engagements.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Cybersecurity professionals collaborating on threat analysis and incident response" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-slate-300">Continuous partnership beyond project completion with monitoring and advisory services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
