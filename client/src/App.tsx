import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import RiskAssessment from "./pages/services/RiskAssessment";
import ComplianceManagement from "./pages/services/ComplianceManagement";
import IncidentResponse from "./pages/services/IncidentResponse";
import SecurityAudits from "./pages/services/SecurityAudits";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/services" component={Services} />
        <Route path="/services/risk-assessment" component={RiskAssessment} />
        <Route path="/services/compliance-management" component={ComplianceManagement} />
        <Route path="/services/incident-response" component={IncidentResponse} />
        <Route path="/services/security-audits" component={SecurityAudits} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="gradient-bg min-h-screen">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
