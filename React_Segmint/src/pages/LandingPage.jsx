import React from "react";
import Header from "../components/landing/Header";
import HeroSection from "../components/landing/HeroSection";
import SocialProofSection from "../components/landing/SocialProofSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import WorkflowSection from "../components/landing/WorkflowSection";
import ShowcaseSection from "../components/landing/ShowcaseSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CtaSection from "../components/landing/CtaSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="bg-surface font-body-base text-body-base text-on-surface antialiased min-h-screen flex flex-col">
      <Header />
      <main className="w-full pt-16 bg-surface flex-1">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <WorkflowSection />
        <ShowcaseSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
