import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ClientTestimonials = ({ project }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Client Experience
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Hear directly from our clients about their journey and the impact 
            of thoughtful design on their daily lives.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-elevated mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Client Photo & Info */}
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto lg:mx-0 mb-6 shadow-brand-moderate">
                <Image
                  src={project?.testimonials?.[activeTestimonial]?.clientPhoto}
                  alt={project?.testimonials?.[activeTestimonial]?.clientName}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-2">
                {project?.testimonials?.[activeTestimonial]?.clientName}
              </h3>
              <p className="text-brand-body text-text-secondary mb-4">
                {project?.testimonials?.[activeTestimonial]?.clientTitle}
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                {[...Array(5)]?.map((_, index) => (
                  <Icon
                    key={index}
                    name="Star"
                    size={20}
                    className={`${
                      index < project?.testimonials?.[activeTestimonial]?.rating
                        ? 'text-yellow-400 fill-current' :'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Video Testimonial Button */}
              {project?.testimonials?.[activeTestimonial]?.videoUrl && (
                <button className="flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-brand-fast mx-auto lg:mx-0">
                  <Icon name="Play" size={20} />
                  <span className="font-body font-medium">Watch Video</span>
                </button>
              )}
            </div>

            {/* Testimonial Content */}
            <div>
              <div className="mb-6">
                <Icon name="Quote" size={48} className="text-accent/20 mb-4" />
                <blockquote className="text-xl lg:text-2xl font-accent text-text-primary leading-relaxed mb-6">
                  {project?.testimonials?.[activeTestimonial]?.quote}
                </blockquote>
              </div>
              
              {/* Detailed Review */}
              <div className="space-y-4">
                <h4 className="text-lg font-headline font-semibold text-text-primary">
                  What they loved most:
                </h4>
                <ul className="space-y-2">
                  {project?.testimonials?.[activeTestimonial]?.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="Heart" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-brand-body text-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        {project?.testimonials?.length > 1 && (
          <div className="flex justify-center space-x-4 mb-16">
            {project?.testimonials?.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-brand-fast ${
                  activeTestimonial === index
                    ? 'border-accent shadow-brand-moderate'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <Image
                  src={testimonial?.clientPhoto}
                  alt={testimonial?.clientName}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Impact Metrics */}
        <div className="bg-accent/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-8">
            Project Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {project?.impact?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={32} className="text-accent" />
                </div>
                <div className="text-3xl font-headline font-bold text-accent mb-2">
                  {metric?.value}
                </div>
                <div className="text-brand-body text-text-primary font-medium mb-2">
                  {metric?.label}
                </div>
                <div className="text-sm text-text-secondary">
                  {metric?.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Journey Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
            Client Journey
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {project?.clientJourney?.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name={step?.icon} size={24} className="text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-headline font-semibold text-text-primary">
                        {step?.title}
                      </h4>
                      <span className="text-sm text-text-muted">
                        {step?.timeframe}
                      </span>
                    </div>
                    <p className="text-brand-body text-text-secondary mb-3">
                      {step?.description}
                    </p>
                    {step?.clientFeedback && (
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Icon name="MessageCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-text-primary italic">
                              "{step?.clientFeedback}"
                            </p>
                            <p className="text-xs text-text-muted mt-1">
                              - {project?.testimonials?.[0]?.clientName}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;