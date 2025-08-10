import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectOverview = ({ project }) => {
  return (
    <section className="section-brand bg-background">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Project Story */}
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-heading text-text-primary mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-brand-body text-text-primary leading-relaxed mb-6">
                  {project?.overview?.description}
                </p>
                <p className="text-brand-body text-text-secondary leading-relaxed">
                  {project?.overview?.challenge}
                </p>
              </div>
            </div>

            {/* Client Goals */}
            <div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-4">
                Client Goals
              </h3>
              <ul className="space-y-3">
                {project?.overview?.clientGoals?.map((goal, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-brand-body text-text-primary">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Vision */}
            <div>
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-4">
                Design Vision
              </h3>
              <p className="text-brand-body text-text-primary leading-relaxed">
                {project?.overview?.designVision}
              </p>
            </div>
          </div>

          {/* Project Details Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-xl p-8 shadow-brand-moderate">
              <h3 className="text-xl font-headline font-semibold text-text-primary mb-6">
                Project Details
              </h3>
              
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MapPin" size={16} className="text-accent" />
                      <span className="text-sm font-body font-medium text-text-secondary">Location</span>
                    </div>
                    <p className="text-brand-body text-text-primary">{project?.details?.location}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      <span className="text-sm font-body font-medium text-text-secondary">Completed</span>
                    </div>
                    <p className="text-brand-body text-text-primary">{project?.details?.completionDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Home" size={16} className="text-accent" />
                      <span className="text-sm font-body font-medium text-text-secondary">Square Footage</span>
                    </div>
                    <p className="text-brand-body text-text-primary">{project?.details?.sqft}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span className="text-sm font-body font-medium text-text-secondary">Duration</span>
                    </div>
                    <p className="text-brand-body text-text-primary">{project?.details?.duration}</p>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Tag" size={16} className="text-accent" />
                    <span className="text-sm font-body font-medium text-text-secondary">Project Type</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project?.details?.projectTypes?.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm font-body font-medium rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Users" size={16} className="text-accent" />
                    <span className="text-sm font-body font-medium text-text-secondary">Team</span>
                  </div>
                  <div className="space-y-2">
                    {project?.details?.team?.map((member, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-brand-body text-text-primary">{member?.name}</span>
                        <span className="text-sm text-text-secondary">{member?.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sustainability Features */}
                {project?.details?.sustainability && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Leaf" size={16} className="text-accent" />
                      <span className="text-sm font-body font-medium text-text-secondary">Sustainability</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project?.details?.sustainability?.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-700 text-xs font-body rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;