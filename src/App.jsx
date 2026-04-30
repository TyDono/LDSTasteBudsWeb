import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import SafetyTips from "./pages/SafetyTips";
import RefundPolicy from "./pages/RefundPolicy";
import NoAffiliation from "./pages/NoAffiliation";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function Home() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/community-guidelines" element={<CommunityGuidelines />} />
      <Route path="/safety-tips" element={<SafetyTips />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/no-affiliation" element={<NoAffiliation />} />
    </Routes>
  );
}

export default App;