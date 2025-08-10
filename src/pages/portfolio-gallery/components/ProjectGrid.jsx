import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects, viewType, onFavoriteToggle }) => {
  if (projects?.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-headline font-semibold text-text-primary mb-2">
          No Projects Found
        </h3>
        <p className="text-text-secondary font-body max-w-md">
          We couldn't find any projects matching your current filters. Try adjusting your search criteria or clearing some filters.
        </p>
      </div>
    );
  }

  const getGridClasses = () => {
    switch (viewType) {
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
      case 'list':
        return 'grid grid-cols-1 gap-6';
      default: // grid
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  if (viewType === 'masonry') {
    return (
      <div className={getGridClasses()}>
        {projects?.map((project) => (
          <div key={project?.id} className="break-inside-avoid">
            <ProjectCard 
              project={project} 
              onFavoriteToggle={onFavoriteToggle}
            />
          </div>
        ))}
      </div>
    );
  }

  if (viewType === 'list') {
    return (
      <div className={getGridClasses()}>
        {projects?.map((project) => (
          <div key={project?.id} className="bg-card rounded-lg overflow-hidden shadow-brand-subtle hover:shadow-brand-elevated transition-all duration-brand-normal">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 aspect-brand-portfolio sm:aspect-square">
                <img
                  src={project?.heroImage}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-text-primary mb-1">
                        {project?.title}
                      </h3>
                      <p className="text-text-secondary font-body flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project?.location}</span>
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${
                      project?.type === 'residential' ? 'bg-accent/10 text-accent' :
                      project?.type === 'commercial'? 'bg-trust-builder/10 text-trust-builder' : 'bg-cta-primary/10 text-cta-primary'
                    }`}>
                      {project?.type?.charAt(0)?.toUpperCase() + project?.type?.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary font-body text-sm line-clamp-2 mb-4">
                    {project?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.styles?.slice(0, 3)?.map((style, index) => (
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
                    <span>{project?.squareFootage} sq ft</span>
                    <span>{project?.completionYear}</span>
                    <span>{project?.duration}</span>
                  </div>
                  
                  <button
                    onClick={() => onFavoriteToggle(project?.id)}
                    className="p-2 hover:bg-muted rounded-full transition-colors duration-brand-fast"
                  >
                    <svg 
                      className={`w-5 h-5 ${project?.isFavorite ? 'text-error fill-current' : 'text-text-secondary'}`}
                      fill={project?.isFavorite ? 'currentColor' : 'none'}
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={getGridClasses()}>
      {projects?.map((project) => (
        <ProjectCard 
          key={project?.id}
          project={project} 
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;