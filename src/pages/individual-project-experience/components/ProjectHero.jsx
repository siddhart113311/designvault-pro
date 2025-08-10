import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectHero = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.heroImages?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.heroImages?.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Hero Image Carousel */}
      <div className="relative h-full w-full">
        <Image
          src={project?.heroImages?.[currentImageIndex]?.url}
          alt={project?.heroImages?.[currentImageIndex]?.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Navigation Arrows */}
        {project?.heroImages?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-brand-fast"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-brand-fast"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </>
        )}
        
        {/* Image Indicators */}
        {project?.heroImages?.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {project?.heroImages?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-brand-fast ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Project Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
        <div className="container-brand">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-sm font-body font-medium rounded-full">
                {project?.category}
              </span>
              <span className="text-white/80 text-sm font-body">
                {project?.location}
              </span>
            </div>
            <h1 className="text-brand-hero text-white font-headline font-bold mb-4">
              {project?.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 font-body font-light leading-relaxed max-w-3xl">
              {project?.subtitle}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Calendar" size={16} />
                <span className="text-sm font-body">{project?.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Home" size={16} />
                <span className="text-sm font-body">{project?.sqft} sq ft</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Users" size={16} />
                <span className="text-sm font-body">{project?.teamSize} team members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;