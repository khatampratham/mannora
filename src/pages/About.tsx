import React from 'react';
import { Timeline, Mission, Vision } from '@/components/about';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Mannora</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing mental health care through AI-powered early detection and intervention
          </p>
        </div>

        <Mission />
        <Vision />
        <Timeline />
      </div>
    </div>
  );
};

export default About;