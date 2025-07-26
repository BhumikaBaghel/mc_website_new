import { CheckCircle, Users, Settings, Award } from "lucide-react";
import Banner_2 from "@/assets/about_and_mission/banner1-1024x814.png";
import mission_logo from "@/assets/about_and_mission/mission-1024x814.png";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-times mb-5">
              About Us
            </h1>
            <p className="text-sm md:text-base text-white font-times">
              At Max Conformance, we understand the challenges faced by modern
              businesses in managing and ensuring compliance with information
              security regulations. Our innovative SaaS solution streamlines the
              compliance process, automating repetitive tasks, and providing
              comprehensive insights into your organization’s adherence to
              various security standards, such as ISO 27001, GDPR, HIPAA, and
              more.
            </p>
          </div>
          <img
            src={Banner_2}
            alt="About Us Banner"
            className="w-full rounded-lg"
          />
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20 mb-10 px-4">
          <img
            src={mission_logo}
            alt="Mission Logo"
            className="w-full rounded-lg hidden md:block"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-times mb-5">
              Mission & Vision
            </h1>
            <p className="text-sm md:text-base text-white font-times">
              Max Conformance is committed to revolutionizing information
              security compliance. Our mission is to empower organizations with
              a cutting-edge SaaS solution that streamlines processes, saving
              time, budget, and resources. We strive to reduce the risk of
              errors, ensuring data protection and compliance, while enabling
              our clients to focus on their core objectives.
              <br />
              <br />
              Max Conformance envisions a world where information security
              compliance is effortless and foolproof. We aim to be the leading
              innovators in this space, setting the gold standard for SaaS
              solutions. Our vision is to continually refine and expand our
              offerings, empowering businesses worldwide to thrive securely in
              an ever-evolving digital landscape.
            </p>
          </div>
          <img
            src={mission_logo}
            alt="Mission Logo"
            className="w-full rounded-lg md:hidden"
          />
        </div>

        {/* Team Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leadership Team
          </h2>
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
                Former CISO with 15+ years experience leading security
                transformations at Fortune 500 companies.
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
                Security architect and product visionary with expertise in
                building scalable security platforms.
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
                Compliance expert specializing in regulatory frameworks and risk
                management strategies.
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
              <p className="text-slate-300 text-sm">
                Transparent, honest relationships built on trust.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-slate-300 text-sm">
                Continuous improvement in everything we do.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-slate-300 text-sm">
                Partnership approach to client success.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-slate-300 text-sm">
                Cutting-edge solutions for evolving threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
