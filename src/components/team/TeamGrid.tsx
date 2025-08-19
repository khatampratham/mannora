import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
  expertise: string[];
}

const TeamGrid = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Diwanshu Gupta',
      role: 'CEO & Co-Founder',
      bio: 'Former Stanford AI researcher with 10+ years in machine learning and mental health applications. PhD in Computer Science with focus on neural networks.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://www.linkedin.com/in/diwanshu-gupta',
      email: 'guptadiwanshu2007@gmail.com',
      expertise: ['AI Research', 'Machine Learning', 'Neural Networks', 'Mental Health Tech'],
    },
    {
      id: 3,
      name: 'Pratham Sharma',
      role: 'CTO & Co-Founder',
      bio: 'Former Google engineer specializing in real-time AI systems. Expert in voice analysis, computer vision, and scalable AI infrastructure.',
      image: '/api/placeholder/300/300',
      linkedin: 'https://www.linkedin.com/in/mailspratham/',
      email: 'mails.pratham@gmail.com',
      expertise: ['AI Infrastructure', 'Computer Vision', 'Voice Analysis', 'System Architecture'],
    },
  ];

  const handleCardFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative h-96 perspective-1000">
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                flippedCard === member.id ? 'rotate-y-180' : ''
              }`}
              onClick={() => handleCardFlip(member.id)}
            >
              {/* Front of Card */}
              <Card className="absolute inset-0 card-gradient border-0 hover:glow-effect transition-all duration-300 backface-hidden">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Click to learn more
                  </div>
                </CardContent>
              </Card>

              {/* Back of Card */}
              <Card className="absolute inset-0 card-gradient border-0 glow-effect backface-hidden rotate-y-180">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 gradient-text">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Buttons with Tooltips */}
                  <div className="flex justify-center space-x-3">
                    {/* LinkedIn Button */}
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>

                    {/* Mail Button */}
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <a href={`mailto:${member.email}`} title={`Email ${member.name}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
