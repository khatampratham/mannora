import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Shield, Users, Zap, Play, TrendingUp, Heart, Award, Skull, CircleDollarSignIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScrollTriggeredCounter from '@/components/ui/ScrollTriggeredCounter';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import SecurityPrivacy from '@/components/sections/SecurityPrivacy';
import useScrollTrigger from '@/hooks/useScrollTrigger';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Detect Mental Health Issues Before They Escalate';

  useScrollTrigger();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Vanta.js Waves Integration
  useEffect(() => {
    let vantaEffect: any;

    const initVanta = async () => {
      const THREE = (await import('three')).default;
      const VANTA = (await import('vanta/dist/vanta.waves.min')).default;

      vantaEffect = VANTA.WAVES({
        el: '#vanta-bg',
        THREE: THREE,
        mouseControls: true, // enable cursor interaction
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e3a8a,
        shininess: 60.0,
        waveHeight: 30.0, // higher waves
        waveSpeed: 1.2,   // faster animation
        zoom: 1.0,
      });
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const features = [
    { icon: Brain, title: 'AI-Powered Analysis', description: 'Advanced neural networks analyze voice patterns, facial expressions, and text sentiment in real-time.' },
    { icon: Shield, title: 'Privacy First', description: 'End-to-end encryption ensures your mental health data remains completely secure and private.' },
    { icon: Users, title: 'Professional Network', description: 'Connect with licensed mental health professionals when you need additional support.' },
    { icon: Zap, title: 'Real-time Insights', description: 'Get instant feedback and personalized recommendations based on your emotional patterns.' },
  ];

  const steps = [
    { step: '01', title: 'Voice Analysis', description: 'Our AI analyzes subtle changes in your voice patterns and speech.' },
    { step: '02', title: 'Expression Detection', description: 'Facial micro-expression analysis provides deeper emotional insights.' },
    { step: '03', title: 'Sentiment Processing', description: 'Text and communication sentiment analysis completes the picture.' },
    { step: '04', title: 'Personalized Insights', description: 'Receive tailored recommendations and early intervention strategies.' },
  ];

  const testimonials = [
    { id: 1, name: 'Diwanshu Gupta', role: 'Founder', company: 'Mannora', content: 'Mannora has revolutionized how we approach early mental health detection. The accuracy and insights are remarkable.', rating: 5 },
    { id: 3, name: 'Pratham Sharma', role: 'Founder', company: 'Mannora', content: 'The early detection capabilities have helped us support students before crises develop. A game-changer for campus mental health.', rating: 5 },
  ];

  const stats = [
    { number: 95, suffix: '%', label: '1 in 4 people experiences mental health issues', icon: TrendingUp },
    { number: 50000, suffix: '+', label: 'Suicide is the 2nd leading cause of death among 15–29-year-olds', icon: Skull },
    { number: 200, suffix: '+', label: 'Untreated mental disorders cost the global economy $1 trillion/year in productivity losses', icon: CircleDollarSignIcon },
    { number: 15, suffix: '', label: 'Theres also a severe shortage of trained psychologists and psychiatrists, especially in developing regions.', icon: Award },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Vanta.js Background */}
      <div
        id="vanta-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'auto', // required for cursor interaction
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center text-white">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins">
            <span className="gradient-text">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
            Voice analysis, Text sentiment evaluation, Photo based health screening Your emotional wellness companion powered by advanced AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg px-8 py-6 ripple-effect interactive">
              Join Early Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground hover:bg-primary/90 h-11 bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg px-8 py-6 ripple-effect interactive">
              <Play className="mr-2 h-5 w-5" /> Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 neural-bg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text"> Need of Mannora</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">Real impact, real results, real change in mental healthcare</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <ScrollTriggeredCounter end={stat.number} suffix={stat.suffix} className="inline-block" />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Why Choose Mannora?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Advanced AI technology meets compassionate mental health care</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient border-0 card-hover-lift interactive">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">How Mannora Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our four-step process provides comprehensive mental health insights</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white glow-effect">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Trusted by Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See what mental health professionals and organizations say about Mannora</p>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Security & Privacy Section */}
      <SecurityPrivacy />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Mental Health Care?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals using Mannora to detect and prevent mental health issues before they escalate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:glow-effect ripple-effect interactive">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 interactive">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
