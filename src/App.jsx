import React from 'react';
import AboutSection from './sections/AboutSection';
import StrategySection from './sections/StrategySection';
import DifferentialsSection from './sections/DifferentialsSection';
import WorkflowSection from './sections/WorkFlowSection';
import PricingSection from './sections/PricingSection';
import CTASection from './sections/CTASection';

export default function App() {
  return (
    <div className="bg-brand-cream min-h-screen font-sans text-brand-dark overflow-hidden">
      <AboutSection />
      <StrategySection />
      <DifferentialsSection />
      <WorkflowSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}