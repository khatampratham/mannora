import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Zap, Building, GraduationCap } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

const PricingCards = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'individual',
      name: 'Individual',
      icon: Star,
      description: 'Perfect for personal mental health monitoring',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Real-time voice analysis',
        'Facial expression detection',
        'Text sentiment analysis',
        'Personal insights dashboard',
        'Weekly wellness reports',
        'Mobile app access',
        'Email support',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Building,
      description: 'Comprehensive solution for organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      popular: true,
      features: [
        'Everything in Individual',
        'Team analytics dashboard',
        'Advanced reporting',
        'API access',
        'Custom integrations',
        'Priority support',
        'On-premise deployment option',
        'Compliance tools (HIPAA, GDPR)',
        'Dedicated account manager',
      ],
      ctaText: 'Contact Sales',
    },
    {
      id: 'education',
      name: 'Education/NGO',
      icon: GraduationCap,
      description: 'Special pricing for educational institutions and NGOs',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Everything in Individual',
        'Student/patient monitoring',
        'Institutional dashboard',
        'Bulk user management',
        'Educational resources',
        'Training materials',
        'Priority support',
        'Custom reporting',
      ],
      ctaText: 'Apply for Discount',
    },
  ];

  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const savings = ((monthlyCost - annual) / monthlyCost) * 100;
    return Math.round(savings);
  };

  return (
    <section className="py-8">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-muted rounded-lg p-1 flex">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              !isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              isAnnual ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground'
            }`}
          >
            Annual <span className="text-sm ml-1">(Save up to 20%)</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          const savings = isAnnual ? calculateSavings(plan.monthlyPrice, plan.annualPrice) : 0;

          return (
            <Card
              key={plan.id}
              className={`relative card-gradient border-0 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'scale-105 glow-effect border-2 border-primary'
                  : 'hover:glow-effect'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold gradient-text">${price}</span>
                    <span className="text-muted-foreground ml-1">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  {isAnnual && savings > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {savings}% with annual billing
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary hover:glow-effect'
                      : 'bg-gradient-accent hover:glow-effect'
                  }`}
                  size="lg"
                >
                  {plan.ctaText}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12 space-y-4">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
          <span>✓ HIPAA Compliant</span>
          <span>✓ 99.9% Uptime SLA</span>
          <span>✓ 24/7 Support</span>
          <span>✓ Cancel Anytime</span>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;