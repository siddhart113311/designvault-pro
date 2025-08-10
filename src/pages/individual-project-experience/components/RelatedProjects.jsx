import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProjects = ({ relatedProjects }) => {
  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Related Projects
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Discover more inspiring transformations that showcase similar design approaches, 
            styles, or spatial challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {relatedProjects?.map((project, index) => (
            <Link
              key={index}
              to={`/individual-project-experience?project=${project?.slug}`}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-brand-moderate hover-lift">
                {/* Project Image */}
                <div className="relative aspect-brand-portfolio overflow-hidden">
                  <Image
                    src={project?.featuredImage}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-brand-slow"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-brand-fast" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-sm font-body font-medium rounded-full">
                      {project?.category}
                    </span>
                  </div>
                  
                  {/* View Project Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-brand-fast">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name="ArrowRight" size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="text-sm text-text-secondary font-body">
                      {project?.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-headline font-semibold text-text-primary mb-2 group-hover:text-accent transition-brand-fast">
                    {project?.title}
                  </h3>
                  
                  <p className="text-brand-body text-text-secondary mb-4 line-clamp-2">
                    {project?.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Home" size={14} />
                        <span>{project?.sqft}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{project?.duration}</span>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                      <span>{project?.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-white"
          >
            <Link to="/portfolio-gallery" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;