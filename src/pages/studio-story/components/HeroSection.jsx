import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-surface">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-brand-hero text-text-primary">
                Where Vision Meets
                <span className="text-accent block">Craftsmanship</span>
              </h1>
              <p className="text-xl lg:text-2xl text-text-secondary font-body leading-relaxed">
                For over 15 years, I've believed that exceptional design isn't just about creating beautiful spaces—it's about understanding how people live, work, and dream.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-brand-body text-text-primary">
                My journey began in a small apartment in Brooklyn, where I learned that even the most modest spaces could be transformed into something extraordinary with the right vision and attention to detail. Today, that same philosophy drives every project we undertake at DesignVault Pro.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-headline font-semibold text-accent">150+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-semibold text-accent">15</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-semibold text-accent">25+</div>
                <div className="text-sm text-text-secondary">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-brand-golden overflow-hidden rounded-2xl shadow-brand-elevated">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Sarah Mitchell - Principal Designer at DesignVault Pro"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-brand-floating max-w-sm">
              <blockquote className="text-brand-body italic text-text-primary">
                "Design is not just what it looks like—design is how it works and how it makes you feel."
              </blockquote>
              <cite className="text-sm text-text-secondary mt-2 block">— Sarah Mitchell, Principal Designer</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;