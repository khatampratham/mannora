import React from 'react';
import { ContactForm  } from '@/components/contact';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform mental health care? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 justify-items-center items-center">
          <ContactForm />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;