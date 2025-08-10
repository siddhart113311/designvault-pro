import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedSection = ({ recentProjects, editorsPicks }) => {
  return (
    <div className="space-y-12">
      {/* Recently Added Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={16} className="text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-headline font-semibold text-text-primary">
                Recently Added
              </h2>
              <p className="text-sm text-text-secondary font-body">
                Our latest completed projects
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-accent text-accent hover:bg-accent hover:text-white"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            View All Recent
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentProjects?.slice(0, 4)?.map((project) => (
            <Link
              key={project?.id}
              to={`/individual-project-experience?id=${project?.id}`}
              className="group relative bg-card rounded-lg overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-normal hover-lift"
            >
              <div className="aspect-brand-portfolio overflow-hidden">
                <Image
                  src={project?.heroImage}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-accent/90 text-white text-xs font-body font-medium rounded-full backdrop-blur-sm">
                    New
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-brand-normal">
                  <h3 className="font-headline font-semibold text-sm line-clamp-1">
                    {project?.title}
                  </h3>
                  <p className="text-xs opacity-90 flex items-center space-x-1 mt-1">
                    <Icon name="MapPin" size={12} />
                    <span>{project?.location}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Editor's Picks Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-error/10 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={16} className="text-error" />
            </div>
            <div>
              <h2 className="text-xl font-headline font-semibold text-text-primary">
                Editor's Picks
              </h2>
              <p className="text-sm text-text-secondary font-body">
                Award-winning and innovative projects
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-error text-error hover:bg-error hover:text-white"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            View All Picks
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {editorsPicks?.slice(0, 2)?.map((project) => (
            <Link
              key={project?.id}
              to={`/individual-project-experience?id=${project?.id}`}
              className="group relative bg-card rounded-lg overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-normal hover-lift"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-brand-portfolio sm:aspect-square overflow-hidden">
                  <Image
                    src={project?.heroImage}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-brand-slow"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-headline font-semibold text-text-primary group-hover:text-accent transition-colors duration-brand-normal line-clamp-1">
                          {project?.title}
                        </h3>
                        <p className="text-sm text-text-secondary font-body flex items-center space-x-1 mt-1">
                          <Icon name="MapPin" size={14} />
                          <span>{project?.location}</span>
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-error/10 text-error text-xs font-body font-medium rounded-full flex-shrink-0">
                        Editor's Pick
                      </span>
                    </div>
                    
                    <p className="text-text-secondary font-body text-sm line-clamp-2 mb-4">
                      {project?.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.styles?.slice(0, 2)?.map((style, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-muted text-text-secondary text-xs font-body rounded-md"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-text-secondary font-body">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Icon name="Home" size={14} />
                        <span>{project?.squareFootage} sq ft</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{project?.completionYear}</span>
                      </span>
                    </div>
                    
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-brand-normal" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;