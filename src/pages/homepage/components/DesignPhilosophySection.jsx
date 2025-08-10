import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DesignPhilosophySection = () => {
  const philosophyPrinciples = [
    {
      id: 1,
      icon: "Heart",
      title: "Human-Centered Design",
      description: "Every space should enhance the human experience, creating environments that nurture well-being and inspire daily life."
    },
    {
      id: 2,
      icon: "Leaf",
      title: "Sustainable Luxury",
      description: "Beautiful design doesn't compromise the future. We integrate eco-conscious materials and energy-efficient solutions."
    },
    {
      id: 3,
      icon: "Palette",
      title: "Timeless Elegance",
      description: "Trends fade, but thoughtful design endures. We create spaces that remain relevant and beautiful for decades."
    },
    {
      id: 4,
      icon: "Users",
      title: "Collaborative Process",
      description: "Great design emerges from partnership. We listen, understand, and translate your vision into reality."
    }
  ];

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body font-medium">
                  Our Philosophy
                </span>
                <h2 className="text-brand-heading text-text-primary">
                  Transforming Spaces, Enhancing Lives
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-brand-body text-text-primary leading-relaxed">
                  Design is more than aesthetics—it's about creating environments that tell your story, 
                  support your lifestyle, and inspire your daily experiences. Every project begins with 
                  understanding how you live, work, and dream.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-lg">
                  <p className="text-lg font-accent italic text-text-primary leading-relaxed">
                    "A well-designed space doesn't just look beautiful—it feels like home, 
                    functions effortlessly, and evolves with your life's journey."
                  </p>
                  <footer className="mt-4 text-sm text-text-secondary font-body">
                    — Sarah Mitchell, Principal Designer
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Philosophy Principles */}
            <div className="grid sm:grid-cols-2 gap-6">
              {philosophyPrinciples?.map((principle) => (
                <div key={principle?.id} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={principle?.icon} size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-headline font-semibold text-text-primary">
                      {principle?.title}
                    </h3>
                  </div>
                  <p className="text-brand-body text-text-secondary leading-relaxed pl-13">
                    {principle?.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="Sarah Mitchell - Principal Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-accent text-accent">
                    Sarah Mitchell
                  </div>
                  <p className="text-sm text-text-secondary font-body">
                    Principal Designer & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Lifestyle Photography */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 aspect-brand-golden rounded-xl overflow-hidden shadow-brand-moderate">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop"
                  alt="Beautifully designed living space showcasing our philosophy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-brand-slow"
                />
              </div>
              
              {/* Secondary Images */}
              <div className="aspect-brand-square rounded-lg overflow-hidden shadow-brand-subtle">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop"
                  alt="Detail shot of custom furniture design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-brand-slow"
                />
              </div>
              
              <div className="aspect-brand-square rounded-lg overflow-hidden shadow-brand-subtle">
                <Image
                  src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=400&fit=crop"
                  alt="Sustainable materials and natural lighting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-brand-slow"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card shadow-brand-floating rounded-xl p-6 border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-headline font-semibold text-accent">
                    15+
                  </div>
                  <div className="text-xs text-text-secondary font-body">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-headline font-semibold text-accent">
                    200+
                  </div>
                  <div className="text-xs text-text-secondary font-body">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-headline font-semibold text-accent">
                    98%
                  </div>
                  <div className="text-xs text-text-secondary font-body">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophySection;