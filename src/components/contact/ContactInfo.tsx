import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Github } from 'lucide-react';

const ContactInfo = () => {
  const contactMethods = [/*
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['Delhi', 'India'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['+1 (555) 123-4567', 'Mon - Fri: 9AM - 6PM PST'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['hello@mannora.com', 'support@mannora.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: ['Monday - Friday: 9:00 AM - 6:00 PM PST', 'Weekend: Emergency support only'],
    },*/
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <Card key={index} className="card-gradient border-0 hover:glow-effect transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    {method.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Social Media */}
      {/*<Card className="card-gradient border-0 glow-effect">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      {/*<Card className="card-gradient border-0 border-l-4 border-l-accent">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2 gradient-text-accent">Emergency Support</h3>
          <p className="text-muted-foreground mb-3">
            If you're experiencing a mental health crisis, please contact emergency services or a crisis helpline immediately.
          </p>
          <div className="space-y-1 text-sm">
            <p><strong>US:</strong> 988 (Suicide & Crisis Lifeline)</p>
            <p><strong>UK:</strong> 116 123 (Samaritans)</p>
            <p><strong>Global:</strong> Visit findahelpline.com</p>
          </div>
        </CardContent>
      </Card>

      {/* Map Placeholder */}
      {/* <Card className="card-gradient border-0 overflow-hidden">
        <div className="h-48 bg-gradient-primary/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">Interactive map would be here</p> 
          </div>
        </div>
      </Card> */} 
    </div>
  );
};

export default ContactInfo;