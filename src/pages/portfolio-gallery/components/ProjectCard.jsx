import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project, onFavoriteToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onFavoriteToggle(project?.id);
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-normal hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/individual-project-experience?id=${project?.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-brand-portfolio">
          <Image
            src={project?.heroImage}
            alt={project?.title}
            className={`w-full h-full object-cover transition-all duration-brand-slow group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-brand-normal ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-brand-normal ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } hover:bg-white hover:scale-110`}
          >
            <Icon 
              name={project?.isFavorite ? "Heart" : "Heart"} 
              size={18} 
              className={project?.isFavorite ? 'text-error fill-current' : 'text-text-secondary'} 
            />
          </button>
          
          {/* Project Type Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-body font-medium backdrop-blur-sm ${
              project?.type === 'residential' ? 'bg-accent/90 text-white' :
              project?.type === 'commercial'? 'bg-trust-builder/90 text-white' : 'bg-cta-primary/90 text-cta-primary-foreground'
            }`}>
              {project?.type?.charAt(0)?.toUpperCase() + project?.type?.slice(1)}
            </span>
          </div>
          
          {/* Editor's Pick Badge */}
          {project?.isEditorsPick && (
            <div className="absolute top-3 left-3 mt-8">
              <span className="px-2 py-1 bg-error/90 text-white text-xs font-body font-medium rounded-full backdrop-blur-sm">
                Editor's Pick
              </span>
            </div>
          )}
          
          {/* Hover Details */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-brand-normal ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-between text-sm font-body">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project?.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Palette" size={14} />
                  <span>{project?.keyMaterial}</span>
                </span>
              </div>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-brand-normal" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-lg font-headline font-semibold text-text-primary group-hover:text-accent transition-colors duration-brand-normal line-clamp-1">
              {project?.title}
            </h3>
            <p className="text-sm text-text-secondary font-body flex items-center space-x-1 mt-1">
              <Icon name="MapPin" size={14} />
              <span>{project?.location}</span>
            </p>
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
            
            {project?.isRecent && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                New
              </span>
            )}
          </div>
          
          {/* Style Tags */}
          <div className="flex flex-wrap gap-2">
            {project?.styles?.slice(0, 2)?.map((style, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-muted text-text-secondary text-xs font-body rounded-md"
              >
                {style}
              </span>
            ))}
            {project?.styles?.length > 2 && (
              <span className="px-2 py-1 bg-muted text-text-secondary text-xs font-body rounded-md">
                +{project?.styles?.length - 2} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;