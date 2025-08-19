import React from 'react';
import { Shield, Lock, Eye, FileCheck, Globe, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SecurityPrivacy = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using AES-256 encryption standards, ensuring your information remains secure at all times.',
      highlight: false
    },
    {
      icon: Shield,
      title: 'Right to Delete Data',
      description: 'You can request deletion of your data anytime, ensuring you have full control over your digital footprint on Mannora.',
      highlight: false
    },
    {
      icon: FileCheck,
      title: 'Transparent Data Practices',
      description: 'We clearly inform you about what data we collect, why it’s needed, and how it’s used for improving mental health insights.',
      highlight: false
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'We collect only what\'s necessary and never share personal information without explicit consent.',
      highlight: false
    },
    {
      icon: Globe,
      title: 'Anonymous Usage Option',
      description: 'You can use Mannora’s services without revealing personal identifiers, keeping your mental health insights private.',
      highlight: false
    },
    {
      icon: Users,
      title: 'Consent First',
      description: 'You maintain full control over your data with granular consent management and easy opt-out options.',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-trigger">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Mannora Privacy Promise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your mental health data is sacred. We've built the strongest security measures to protect your privacy and earn your trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={`card-gradient border-0 card-hover-lift scroll-trigger group ${
                feature.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                  feature.highlight 
                    ? 'bg-gradient-primary glow-effect' 
                    : 'bg-muted group-hover:bg-gradient-primary'
                }`}>
                  <feature.icon className={`h-8 w-8 transition-colors duration-300 ${
                    feature.highlight 
                      ? 'text-white' 
                      : 'text-primary group-hover:text-white'
                  }`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        
      </div>
    </section>
  );
};

export default SecurityPrivacy;