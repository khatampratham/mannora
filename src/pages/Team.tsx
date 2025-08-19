import React from 'react';
import { TeamGrid } from '@/components/team';

const Team = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate experts in AI, mental health, and technology working together to make a difference
          </p>
        </div>

        <TeamGrid />
      </div>
    </div>
  );
};

export default Team;