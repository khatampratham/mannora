import React from 'react';
import { PricingCards } from '@/components/pricing';

const Pricing = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core AI detection features.
          </p>
        </div>

        <PricingCards />
      </div>
    </div>
  );
};

export default Pricing;