import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DesignPhilosophy = () => {
  const principles = [
    {
      icon: "Heart",
      title: "Human-Centered Design",
      description: "Every space should enhance the way people live, work, and connect with one another."
    },
    {
      icon: "Leaf",
      title: "Sustainable Practices",
      description: "We prioritize eco-friendly materials and timeless designs that reduce environmental impact."
    },
    {
      icon: "Lightbulb",
      title: "Functional Beauty",
      description: "True luxury lies in the perfect marriage of aesthetic appeal and practical functionality."
    },
    {
      icon: "Users",
      title: "Collaborative Process",
      description: "The best designs emerge from deep collaboration between designer, client, and craftspeople."
    }
  ];

  return (
    <section className="section-brand bg-secondary">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-6">
            Our Design Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            At the heart of every project lies a simple belief: great design should improve lives while respecting the environment and celebrating craftsmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {principles?.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={principle?.icon} size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-semibold text-text-primary mb-2">
                    {principle?.title}
                  </h3>
                  <p className="text-brand-body text-text-secondary">
                    {principle?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-brand-portfolio overflow-hidden rounded-2xl shadow-brand-elevated">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop"
                alt="Sustainable design materials and natural elements"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-brand-moderate">
              <div className="text-2xl font-headline font-semibold">15+</div>
              <div className="text-sm">Sustainability Awards</div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-subtle">
          <h3 className="text-2xl font-headline font-semibold text-text-primary mb-8 text-center">
            Our Design Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, lifestyle, and functional needs" },
              { step: "02", title: "Concept", desc: "Developing initial design concepts and spatial planning" },
              { step: "03", title: "Development", desc: "Refining details, selecting materials, and finalizing plans" },
              { step: "04", title: "Implementation", desc: "Managing construction and installation to perfection" }
            ]?.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-headline font-semibold text-accent">{phase?.step}</span>
                </div>
                <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                  {phase?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {phase?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;