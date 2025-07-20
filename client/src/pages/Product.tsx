import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Calendar, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Zap 
} from "lucide-react";

export default function Product() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            CyberGRC <span className="gradient-text">Platform</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive, cloud-native GRC platform that unifies governance, risk management, and compliance in one intelligent solution.
          </p>
        </div>

        {/* Product Hero */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
            alt="Digital security platform dashboard showing cybersecurity analytics and monitoring" 
            className="rounded-xl shadow-2xl w-full"
          />
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Assessment Engine</h3>
              <p className="text-slate-300">Automated risk identification and scoring with customizable frameworks and real-time updates.</p>
            </div>
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance Management</h3>
              <p className="text-slate-300">Multi-framework support with automated evidence collection and audit trail management.</p>
            </div>
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Policy Management</h3>
              <p className="text-slate-300">Centralized policy creation, distribution, and acknowledgment tracking with version control.</p>
            </div>
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-slate-300">Streamlined incident management with automated workflows and stakeholder notifications.</p>
            </div>
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-slate-300">Executive dashboards and custom reports with real-time metrics and trend analysis.</p>
            </div>
            <div className="service-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API Integration</h3>
              <p className="text-slate-300">Seamless integration with existing security tools and enterprise systems via REST APIs.</p>
            </div>
          </div>
        </div>

        {/* Customer Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Benefits</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office technology setup with cybersecurity monitoring systems" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduce Risk Exposure</h3>
                  <p className="text-slate-300">Identify and mitigate risks before they impact your business with our intelligent risk scoring engine.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Streamline Compliance</h3>
                  <p className="text-slate-300">Achieve and maintain compliance with multiple frameworks through automated evidence collection and reporting.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improve Efficiency</h3>
                  <p className="text-slate-300">Reduce manual processes by up to 70% with intelligent automation and workflow orchestration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Executive Visibility</h3>
                  <p className="text-slate-300">Provide leadership with clear, actionable insights through comprehensive dashboards and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="service-card p-8 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your GRC?</h2>
            <p className="text-slate-300 mb-8">
              Schedule a personalized demo and see how CyberGRC Platform can strengthen your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary px-8 py-3 font-semibold">
                  Request Demo
                </Button>
              </Link>
              <Button variant="outline" className="glass px-8 py-3 font-semibold hover:bg-white hover:bg-opacity-20 transition-all">
                Download Datasheet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
