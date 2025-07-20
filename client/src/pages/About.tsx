import { CheckCircle, Users, Settings, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">CyberGRC</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Founded by cybersecurity veterans, we're dedicated to making enterprise-grade GRC accessible to organizations of all sizes.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 mb-6">
              To democratize cybersecurity governance by providing intelligent, scalable GRC solutions that protect businesses from evolving threats while enabling sustainable growth.
            </p>
            <p className="text-lg text-slate-300">
              We believe that effective cybersecurity isn't just about technology—it's about creating a culture of security awareness that permeates every aspect of your organization.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business compliance meeting with professionals discussing cybersecurity strategies" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Team Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card p-8 rounded-xl text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="CEO headshot" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Rodriguez</h3>
              <p className="text-rose-400 mb-4">CEO & Founder</p>
              <p className="text-slate-300 text-sm">
                Former CISO with 15+ years experience leading security transformations at Fortune 500 companies.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b9dc5b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="CTO headshot" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
              <p className="text-rose-400 mb-4">CTO & Co-Founder</p>
              <p className="text-slate-300 text-sm">
                Security architect and product visionary with expertise in building scalable security platforms.
              </p>
            </div>
            <div className="service-card p-8 rounded-xl text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="VP headshot" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">David Thompson</h3>
              <p className="text-rose-400 mb-4">VP of Consulting</p>
              <p className="text-slate-300 text-sm">
                Compliance expert specializing in regulatory frameworks and risk management strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-slate-300 text-sm">Transparent, honest relationships built on trust.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-slate-300 text-sm">Continuous improvement in everything we do.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-slate-300 text-sm">Partnership approach to client success.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-slate-300 text-sm">Cutting-edge solutions for evolving threats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
