import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2025-26',
      title: 'The Beginning',
      description: 'Build the MVP by detecting key disease markers, ensuring compliance, and running a closed beta with early users.',
    },
    {
      year: '2026-27',
      title: 'Research & Development',
      description: 'Refine AI accuracy, add multi-disease detection and dashboards, form partnerships with hospitals and insurers, and raise seed funding.',
    },
    {
      year: '2027-28',
      title: 'Platform Launch',
      description: ' Launch commercially in India and select global markets with a freemium model, integrate telemedicine and chatbots, secure approvals, and scale to 100k+ users.',
    },
    {
      year: '2028-29',
      title: 'Diversification',
      description: 'Expand into mental health signals, predictive analytics, and wearables, while offering enterprise health solutions.',
    },
    {
      year: '2029 onwards',
      title: 'Global Expansion',
      description: 'Establish मनORA as a global leader in preventive healthcare, partner with governments, measure large-scale health impact, and prepare for IPO or acquisition.',
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text"> Projected Timeline</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {/* From concept to global impact - the story of Mannora */ }
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}>
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <Card className="card-gradient border-0 hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;