import React, { useState, useEffect } from 'react';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      id: 1,
      type: "Residential",
      title: "Modern Minimalist Haven",
      subtitle: "Transforming a cramped apartment into an airy sanctuary",
      description: "A complete transformation that maximizes natural light and creates seamless flow between living spaces.",
      beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      category: "Residential Sanctuaries",
      location: "Manhattan, NY",
      year: "2024"
    },
    {
      id: 2,
      type: "Commercial",
      title: "Executive Innovation Hub",
      subtitle: "Redefining corporate workspace for the modern era",
      description: "A dynamic office environment that fosters creativity while maintaining professional sophistication.",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      category: "Commercial Environments",
      location: "San Francisco, CA",
      year: "2024"
    },
    {
      id: 3,
      type: "Landscape",
      title: "Urban Oasis Retreat",
      subtitle: "Creating tranquil outdoor sanctuaries in the city",
      description: "A rooftop transformation that brings nature into urban living with sustainable design principles.",
      beforeImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      category: "Outdoor Escapes",
      location: "Brooklyn, NY",
      year: "2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides?.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentProject = heroSlides?.[currentSlide];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={currentProject?.afterImage}
            alt={currentProject?.title}
            className="w-full h-full object-cover transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 container-brand h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-accent text-sm font-body font-medium">
                  {currentProject?.type} Design
                </span>
                <span className="text-white/70 text-sm font-body">
                  {currentProject?.location} • {currentProject?.year}
                </span>
              </div>
              
              <h1 className="text-brand-hero text-white font-headline">
                {currentProject?.title}
              </h1>
              
              <h2 className="text-brand-subheading text-white/90 font-headline font-normal">
                {currentProject?.subtitle}
              </h2>
              
              <p className="text-brand-body text-white/80 max-w-lg leading-relaxed">
                {currentProject?.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta-primary text-cta-primary-foreground hover:bg-accent"
                iconName="ArrowRight"
                iconPosition="right"
              >
                View Full Project
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>
            </div>

            {/* Project Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-headline font-semibold text-white">
                  6 months
                </div>
                <div className="text-sm text-white/70 font-body">
                  Timeline
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline font-semibold text-white">
                  2,400 sq ft
                </div>
                <div className="text-sm text-white/70 font-body">
                  Space
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline font-semibold text-white">
                  Complete
                </div>
                <div className="text-sm text-white/70 font-body">
                  Renovation
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Before/After Preview */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-white/70 text-sm font-body">Before</span>
                  <div className="aspect-brand-portfolio rounded-lg overflow-hidden shadow-brand-elevated">
                    <Image
                      src={currentProject?.beforeImage}
                      alt={`${currentProject?.title} - Before`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-white/70 text-sm font-body">After</span>
                  <div className="aspect-brand-portfolio rounded-lg overflow-hidden shadow-brand-elevated">
                    <Image
                      src={currentProject?.afterImage}
                      alt={`${currentProject?.title} - After`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-accent scale-125' :'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center space-y-2 text-white/70">
        <span className="text-sm font-body rotate-90 origin-center whitespace-nowrap">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-white/30"></div>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;