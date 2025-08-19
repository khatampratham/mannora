import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Globe } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Mission</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Empowering early mental health detection through cutting-edge AI technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="card-gradient border-0 hover:glow-effect transition-all duration-300">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Compassionate Care</h3>
            <p className="text-muted-foreground">
              We believe mental health care should be accessible, stigma-free, and deeply human-centered.
            </p>
          </CardContent>
        </Card>

        <Card className="card-gradient border-0 hover:glow-effect transition-all duration-300">
          <CardContent className="p-8 text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Early Intervention</h3>
            <p className="text-muted-foreground">
              Detecting mental health issues before they escalate saves lives and reduces suffering.
            </p>
          </CardContent>
        </Card>

        <Card className="card-gradient border-0 hover:glow-effect transition-all duration-300">
          <CardContent className="p-8 text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-muted-foreground">
              Making mental health support available to everyone, everywhere, regardless of location or resources.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mission;