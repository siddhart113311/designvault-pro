import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer & David Thompson",
      role: "Homeowners",
      location: "Manhattan Penthouse",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      projectImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      testimonial: `Sarah and her team transformed our cramped apartment into a sophisticated sanctuary that perfectly reflects our lifestyle. The attention to detail and ability to maximize every square foot while maintaining elegance is truly remarkable. We couldn't be happier with our new home.`,
      rating: 5,
      projectType: "Residential Renovation",
      completionDate: "September 2024"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CEO, TechFlow Solutions",
      location: "Corporate Headquarters",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      projectImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      testimonial: `The DesignVault Pro team created an office environment that not only looks stunning but has genuinely improved our team's productivity and morale. The space perfectly balances our need for collaboration areas with quiet focus zones. It's become a powerful tool for attracting top talent.`,
      rating: 5,
      projectType: "Commercial Office Design",
      completionDate: "November 2024"
    },
    {
      id: 3,
      name: "Elena & Robert Chen",
      role: "Art Collectors",
      location: "Brooklyn Townhouse",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      projectImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      testimonial: `Working with Sarah was like having a creative partner who truly understood our vision. She seamlessly integrated our art collection into the design while creating functional spaces for our family. The result is a home that's both a gallery and a warm, livable space.`,
      rating: 5,
      projectType: "Luxury Residential",
      completionDate: "October 2024"
    },
    {
      id: 4,
      name: "Amanda Foster",
      role: "Restaurant Owner",
      location: "Bistro Moderne",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      projectImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      testimonial: `The restaurant design exceeded all our expectations. The team created an atmosphere that perfectly captures our brand while ensuring optimal flow for both diners and staff. Since opening, we've received countless compliments on the ambiance, and it's definitely contributed to our success.`,
      rating: 5,
      projectType: "Hospitality Design",
      completionDate: "August 2024"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentData = testimonials?.[currentTestimonial];

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="space-y-4 mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-body font-medium">
              Client Stories
            </span>
            <h2 className="text-brand-heading text-text-primary">
              What Our Clients Say
            </h2>
          </div>
          <p className="text-brand-body text-text-secondary leading-relaxed">
            Every project is a partnership. Here's what our clients have to say about their experience 
            working with DesignVault Pro and the transformations we've created together.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-card rounded-2xl shadow-brand-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative aspect-brand-hero lg:aspect-auto">
              <Image
                src={currentData?.projectImage}
                alt={`${currentData?.projectType} project for ${currentData?.name}`}
                className="w-full h-full object-cover"
              />
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-headline font-semibold text-lg">
                      {currentData?.projectType}
                    </h4>
                    <p className="text-sm text-white/80">
                      {currentData?.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/80">Completed</p>
                    <p className="font-body font-medium">
                      {currentData?.completionDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentData?.rating)]?.map((_, index) => (
                  <Icon key={index} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg lg:text-xl font-accent italic text-text-primary leading-relaxed mb-8">
                "{currentData?.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentData?.image}
                    alt={currentData?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-headline font-semibold text-text-primary">
                    {currentData?.name}
                  </h4>
                  <p className="text-brand-caption text-text-secondary">
                    {currentData?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Logos/Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-xl font-headline font-semibold text-text-primary mb-2">
              Trusted by Leading Brands & Discerning Clients
            </h3>
            <p className="text-brand-caption text-text-secondary">
              From Fortune 500 companies to luxury residential clients
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-headline font-semibold text-accent">
                200+
              </div>
              <div className="text-sm text-text-secondary font-body">
                Projects Completed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-headline font-semibold text-accent">
                98%
              </div>
              <div className="text-sm text-text-secondary font-body">
                Client Satisfaction
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-headline font-semibold text-accent">
                15+
              </div>
              <div className="text-sm text-text-secondary font-body">
                Years Experience
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-headline font-semibold text-accent">
                50+
              </div>
              <div className="text-sm text-text-secondary font-body">
                Industry Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;