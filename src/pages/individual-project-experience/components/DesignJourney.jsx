import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DesignJourney = ({ project }) => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="section-brand bg-secondary">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-brand-heading text-text-primary mb-4">
            Design Journey
          </h2>
          <p className="text-brand-body text-text-secondary max-w-2xl mx-auto">
            Follow the creative process from initial concept to final execution, 
            exploring the decisions and collaborations that shaped this space.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {project?.designJourney?.phases?.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-6 py-3 rounded-full font-body font-medium transition-brand-fast ${
                activePhase === index
                  ? 'bg-accent text-white shadow-brand-moderate'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {phase?.title}
            </button>
          ))}
        </div>

        {/* Active Phase Content */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-brand-moderate">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phase Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden aspect-brand-golden">
                <Image
                  src={project?.designJourney?.phases?.[activePhase]?.image}
                  alt={project?.designJourney?.phases?.[activePhase]?.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Phase Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon 
                    name={project?.designJourney?.phases?.[activePhase]?.icon} 
                    size={24} 
                    className="text-accent" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-semibold text-text-primary">
                    {project?.designJourney?.phases?.[activePhase]?.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Phase {activePhase + 1} of {project?.designJourney?.phases?.length}
                  </p>
                </div>
              </div>

              <p className="text-brand-body text-text-primary leading-relaxed">
                {project?.designJourney?.phases?.[activePhase]?.description}
              </p>

              {/* Key Decisions */}
              {project?.designJourney?.phases?.[activePhase]?.keyDecisions && (
                <div>
                  <h4 className="text-lg font-headline font-semibold text-text-primary mb-3">
                    Key Decisions
                  </h4>
                  <ul className="space-y-2">
                    {project?.designJourney?.phases?.[activePhase]?.keyDecisions?.map((decision, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-brand-body text-text-primary">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Collaborators */}
              {project?.designJourney?.phases?.[activePhase]?.collaborators && (
                <div>
                  <h4 className="text-lg font-headline font-semibold text-text-primary mb-3">
                    Collaborators
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project?.designJourney?.phases?.[activePhase]?.collaborators?.map((collaborator, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg">
                        <Icon name="User" size={16} className="text-accent" />
                        <span className="text-sm font-body text-text-primary">{collaborator}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-headline font-semibold text-text-primary text-center mb-12">
            Project Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block" />
            
            <div className="space-y-12">
              {project?.designJourney?.timeline?.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-brand-subtle">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="Calendar" size={16} className="text-accent" />
                        <span className="text-sm font-body font-medium text-accent">
                          {milestone?.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-headline font-semibold text-text-primary mb-2">
                        {milestone?.title}
                      </h4>
                      <p className="text-brand-body text-text-secondary">
                        {milestone?.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand-subtle" />
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignJourney;