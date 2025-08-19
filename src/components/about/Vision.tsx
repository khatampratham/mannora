import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, Users } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Vision</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A world where mental health crises are prevented, not just treated
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="card-gradient border-0 glow-effect">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 gradient-text">AI-Powered Future</h3>
                <p className="text-muted-foreground">
                  Leading the next generation of mental health technology through advanced artificial intelligence.
                </p>
              </div>
              
              <div>
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 gradient-text">Privacy-First</h3>
                <p className="text-muted-foreground">
                  Building trust through transparent, secure, and ethical AI practices that respect user privacy.
                </p>
              </div>
              
              <div>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 gradient-text">Community-Driven</h3>
                <p className="text-muted-foreground">
                  Creating a supportive ecosystem where individuals, professionals, and organizations collaborate.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Vision;